#! /usr/bin/env python3

import os.path
import hashlib
import tarfile
import subprocess
import re

import requests
import sqlalchemy as sa

import pytest
from pytest_nginx import factories
from pytest_postgresql.factories import postgresql

from .postgresql import postgresql_proc

from ws.client.api import API

_mw_ver = "1.29"
_mw_rel = _mw_ver + ".0"
_mw_url = "https://releases.wikimedia.org/mediawiki/" + _mw_ver + "/mediawiki-" + _mw_rel + ".tar.gz"
_mw_sha256 = "285075ae9d8b2698af4e2922644a02c16ef5869e9e9eb86f0bd3a54640f559c0"
_mw_db_name = "mediawiki"
_mw_db_user = "mediawiki"
_mw_db_password = "very-secret-password"
_mw_api_user = "wiki-scripts"
_mw_api_password = "super-secret-password"


def get_sha256sum(filename, blocksize=4096):
    m = hashlib.sha256()
    with open(filename, "rb") as f:
        while True:
            buf = f.read(blocksize)
            if not buf:
                break
            m.update(buf)
    return m.hexdigest()

@pytest.fixture(scope="session")
def mw_server_root(request):
    cache_dir = request.config.cache.makedir("wiki-scripts mediawiki")
    tarball = os.path.join(cache_dir, "mediawiki-" + _mw_rel + ".tar.gz")
    server_root = os.path.join(cache_dir, "mediawiki-" + _mw_rel)

    if not os.path.isdir(server_root):
        # check if the tarball was downloaded correctly
        if os.path.isfile(tarball):
            _sha256 = get_sha256sum(tarball)
            if _sha256 != _mw_sha256:
                os.remove(tarball)

        # (re-)download MediaWiki sources only if the extracted dir does not exist
        if not os.path.isfile(tarball):
            r = requests.get(_mw_url, stream=True)
            with open(tarball, "wb") as f:
                for chunk in r.iter_content(chunk_size=4096):
                    f.write(chunk)
        # extract the tarball
        t = tarfile.open(tarball, "r")
        t.extractall(path=cache_dir)
        # server_root should be created by extraction
        assert os.path.isdir(server_root)

    return server_root

_php_ini = os.path.join(os.path.dirname(__file__), "../../misc/php.ini")
mw_nginx_proc = factories.nginx_php_proc("mw_server_root",
                                         php_fpm_params="--php-ini {}".format(_php_ini))

# direct connection to MediaWiki's database
mwpg_conn = postgresql("postgresql_proc", db=_mw_db_name)

class MediaWikiFixtureInstance:
    def __init__(self, **kwargs):
        self._data = kwargs

    def __getattr__(self, attr):
        if attr in self._data:
            return self._data[attr]
        raise AttributeError("Invalid attribute: {}".format(attr))

def _init_local_settings(mw_nginx_proc, postgresql_proc):
    local_settings_php = os.path.join(os.path.dirname(__file__), "../../misc/LocalSettings.php")
    assert os.path.isfile(local_settings_php)
    config = open(local_settings_php).read()

    def replace_php_variable(config, name, value):
        c = re.sub(r"^(\${} *= *\").*(\";)$".format(name),
                   r"\g<1>{}\g<2>".format(value),
                   config,
                   flags=re.MULTILINE)
        _expected = "${} = \"{}\";".format(name, value)
        assert _expected in c, "String '{}' was not found after replacement.".format(_expected)
        return c

    config = replace_php_variable(config, "wgDBname", _mw_db_name)
    config = replace_php_variable(config, "wgDBuser", _mw_db_user)
    config = replace_php_variable(config, "wgDBpassword", _mw_db_password)
    config = replace_php_variable(config, "wgDBhost", postgresql_proc.host)
    config = replace_php_variable(config, "wgDBport", postgresql_proc.port)

    output_settings = open(os.path.join(mw_nginx_proc.server_root, "LocalSettings.php"), "w")
    output_settings.write(config)
    output_settings.close()

def _init_mw_database(mw_nginx_proc, postgresql_proc):
    # create database and mediawiki user
    master_url = sa.engine.url.URL("postgresql+psycopg2",
                                   username=postgresql_proc.user,
                                   host=postgresql_proc.host,
                                   port=postgresql_proc.port)
    master_engine = sa.create_engine(master_url, isolation_level="AUTOCOMMIT")
    conn = master_engine.connect()
    conn.execute("CREATE DATABASE {}".format(_mw_db_name))
    r = conn.execute("SELECT count(*) FROM pg_user WHERE usename = '{}'".format(_mw_db_user))
    if r.fetchone()[0] == 0:
        conn.execute("CREATE USER {} WITH PASSWORD '{}'".format(_mw_db_user, _mw_db_password))
        conn.execute("GRANT ALL PRIVILEGES ON DATABASE {} TO {}".format(_mw_db_name, _mw_db_user))
    conn.close()

    # execute MediaWiki's tables.sql
    mw_url = sa.engine.url.URL("postgresql+psycopg2",
                               database=_mw_db_name,
                               username=_mw_db_user,
                               password=_mw_db_password,
                               host=postgresql_proc.host,
                               port=postgresql_proc.port)
    mw_engine = sa.create_engine(mw_url)
    tables = open(os.path.join(mw_nginx_proc.server_root, "maintenance/postgres/tables.sql"))
    with mw_engine.begin() as conn:
        conn.execute(tables.read())

    # create a wiki-scripts user in MediaWiki
    cmd = [
        "php",
        "--php-ini",
        _php_ini,
        "maintenance/createAndPromote.php",
        "--sysop",
        _mw_api_user,
        _mw_api_password,
    ]
    subprocess.run(cmd, cwd=mw_nginx_proc.server_root, check=True)

    return mw_engine

def _drop_mw_database(postgresql_proc):
    master_url = sa.engine.url.URL("postgresql+psycopg2",
                                   username=postgresql_proc.user,
                                   host=postgresql_proc.host,
                                   port=postgresql_proc.port)
    master_engine = sa.create_engine(master_url, isolation_level="AUTOCOMMIT")
    with master_engine.begin() as conn:
        # We cannot drop the database while there are connections to it, so we
        # first disallow new connections and terminate all connections to it.
        conn.execute("UPDATE pg_database SET datallowconn=false WHERE datname = '{}'".format(_mw_db_name))
        conn.execute("SELECT pg_terminate_backend(pg_stat_activity.pid) "
                     "FROM pg_stat_activity WHERE pg_stat_activity.datname = '{}'"
                     .format(_mw_db_name))
        conn.execute("DROP DATABASE IF EXISTS {}".format(_mw_db_name))

@pytest.fixture(scope="session")
def mediawiki(mw_nginx_proc, postgresql_proc):
    # always write the config to reflect its possible updates
    _init_local_settings(mw_nginx_proc, postgresql_proc)

    # init the database and users
    mw_engine = _init_mw_database(mw_nginx_proc, postgresql_proc)

    # construct the API and Database objects that will be used in the tests
    api_url = "http://{host}:{port}/api.php".format(host=mw_nginx_proc.host, port=mw_nginx_proc.port)
    index_url = "http://{host}:{port}/index.php".format(host=mw_nginx_proc.host, port=mw_nginx_proc.port)
    api = API(api_url, index_url, API.make_session())
    api.login(_mw_api_user, _mw_api_password)
    yield MediaWikiFixtureInstance(
            api=api,
            db_engine=mw_engine,
            hostname=mw_nginx_proc.host,
        )

    # drop the database
    _drop_mw_database(postgresql_proc)

@pytest.fixture(scope="function")
def clean_mediawiki(mediawiki, mw_nginx_proc, postgresql_proc):
    """
    A function-scope fixture based on ``mediawiki``.

    Note that:
    - the server root is inherited from/shared with the ``mediawiki`` fixture
    - the SQL database is re-created from scratch to clear the content

    Tests which don't care about the content should use ``mediawiki`` directly,
    content-sensitive test can use ``clean_mediawiki``.
    """
    # DROP DATABASE is much faster than TRUNCATE on many tables
    _drop_mw_database(postgresql_proc)
    mw_engine = _init_mw_database(mw_nginx_proc, postgresql_proc)

    # _drop_mw_database closed the original db_engine, so we assign the new one
    mediawiki.db_engine = mw_engine
    yield mediawiki

__all__ = ("mw_server_root", "mw_nginx_proc", "mediawiki", "clean_mediawiki")
