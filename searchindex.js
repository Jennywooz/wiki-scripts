Search.setIndex({envversion:47,filenames:["changelog","configuration","index","modules","tutorial","ws/ws","ws/ws.ArchWiki","ws/ws.ArchWiki.header","ws/ws.ArchWiki.lang","ws/ws.cache","ws/ws.cache.AllRevisionsProps","ws/ws.cache.AllUsersProps","ws/ws.cache.LatestRevisionsText","ws/ws.config","ws/ws.core","ws/ws.core.api","ws/ws.core.connection","ws/ws.core.lazy","ws/ws.core.rate","ws/ws.diff","ws/ws.dump","ws/ws.interactive","ws/ws.logging","ws/ws.parser_helpers","ws/ws.parser_helpers.encodings","ws/ws.parser_helpers.wikicode","ws/ws.utils","ws/ws.wikitable"],objects:{"":{ws:[5,0,0,"-"]},"ws.ArchWiki":{header:[7,0,0,"-"],lang:[8,0,0,"-"]},"ws.ArchWiki.header":{HeaderError:[7,5,1,""],build_header:[7,2,1,""],fix_header:[7,2,1,""],get_header_parts:[7,2,1,""]},"ws.ArchWiki.lang":{detect_language:[8,2,1,""],english_for_langname:[8,2,1,""],english_for_tag:[8,2,1,""],get_category_languages:[8,2,1,""],get_english_language_names:[8,2,1,""],get_external_tags:[8,2,1,""],get_interlanguage_tags:[8,2,1,""],get_internal_tags:[8,2,1,""],get_language_names:[8,2,1,""],get_language_tags:[8,2,1,""],get_local_language:[8,2,1,""],is_category_language:[8,2,1,""],is_english_language_name:[8,2,1,""],is_external_tag:[8,2,1,""],is_interlanguage_tag:[8,2,1,""],is_internal_tag:[8,2,1,""],is_language_name:[8,2,1,""],is_language_tag:[8,2,1,""],langname_for_english:[8,2,1,""],langname_for_tag:[8,2,1,""],tag_for_english:[8,2,1,""],tag_for_langname:[8,2,1,""]},"ws.cache":{AllRevisionsProps:[10,0,0,"-"],AllUsersProps:[11,0,0,"-"],CacheDb:[9,3,1,""],CacheDbError:[9,5,1,""],LatestRevisionsText:[12,0,0,"-"]},"ws.cache.AllRevisionsProps":{"_fetch_revisions":[9,1,1,""],"_get_last_revid_api":[9,1,1,""],"_get_last_revid_db":[9,1,1,""],AllRevisionsProps:[10,3,1,""],init:[9,1,1,""],update:[9,1,1,""]},"ws.cache.AllRevisionsProps.AllRevisionsProps":{"_fetch_revisions":[10,1,1,""],"_get_last_revid_api":[10,1,1,""],"_get_last_revid_db":[10,1,1,""],init:[10,1,1,""],update:[10,1,1,""]},"ws.cache.AllUsersProps":{"_find_active_users":[9,1,1,""],"_find_changed_users":[9,1,1,""],"_update_recent_edit_counts":[9,1,1,""],AllUsersProps:[11,3,1,""],init:[9,1,1,""],mw_ts_format:[9,4,1,""],update:[9,1,1,""]},"ws.cache.AllUsersProps.AllUsersProps":{"_find_active_users":[11,1,1,""],"_find_changed_users":[11,1,1,""],"_update_recent_edit_counts":[11,1,1,""],init:[11,1,1,""],mw_ts_format:[11,4,1,""],update:[11,1,1,""]},"ws.cache.CacheDb":{"_load_and_update":[9,1,1,""],"_update_timestamp":[9,1,1,""],autocommit:[9,4,1,""],data:[9,4,1,""],dump:[9,1,1,""],init:[9,1,1,""],load:[9,1,1,""],meta:[9,4,1,""],ts_format:[9,4,1,""],update:[9,1,1,""]},"ws.cache.LatestRevisionsText":{"_get_for_update":[9,1,1,""],LatestRevisionsText:[12,3,1,""],init:[9,1,1,""],update:[9,1,1,""]},"ws.cache.LatestRevisionsText.LatestRevisionsText":{"_get_for_update":[12,1,1,""],init:[12,1,1,""],update:[12,1,1,""]},"ws.config":{ConfigFileParser:[13,3,1,""],argtype_dirname_must_exist:[13,2,1,""],argtype_existing_dir:[13,2,1,""],getArgParser:[13,2,1,""],object_from_argparser:[13,2,1,""]},"ws.config.ConfigFileParser":{get_syntax_description:[13,1,1,""],parse:[13,1,1,""],serialize:[13,1,1,""]},"ws.core":{api:[15,0,0,"-"],connection:[16,0,0,"-"],lazy:[17,0,0,"-"],rate:[18,0,0,"-"]},"ws.core.api":{API:[15,3,1,""],LoginFailed:[15,5,1,""]},"ws.core.api.API":{"_csrftoken":[15,4,1,""],detect_namespace:[15,1,1,""],edit:[15,1,1,""],generator:[15,1,1,""],is_loggedin:[15,4,1,""],list:[15,1,1,""],login:[15,1,1,""],logout:[15,1,1,""],namespaces:[15,4,1,""],query_continue:[15,1,1,""],redirects_map:[15,1,1,""],resolve_redirects:[15,1,1,""],user_rights:[15,4,1,""]},"ws.core.connection":{APIError:[16,5,1,""],APIJsonError:[16,5,1,""],APIWrongAction:[16,5,1,""],Connection:[16,3,1,""],ConnectionError:[16,5,1,""]},"ws.core.connection.Connection":{call_api:[16,1,1,""],call_index:[16,1,1,""],from_argparser:[16,7,1,""],get_hostname:[16,1,1,""],request:[16,1,1,""],set_argparser:[16,6,1,""]},"ws.core.lazy":{LazyProperty:[17,3,1,""]},"ws.core.rate":{RateLimited:[18,2,1,""]},"ws.diff":{RevisionDiffer:[19,3,1,""],diff_highlighted:[19,2,1,""]},"ws.diff.RevisionDiffer":{diff:[19,1,1,""]},"ws.dump":{DumpGenerator:[20,3,1,""]},"ws.dump.DumpGenerator":{"_export":[20,1,1,""],dump:[20,1,1,""]},"ws.interactive":{InteractiveQuit:[21,5,1,""],edit_interactive:[21,2,1,""],require_login:[21,2,1,""]},"ws.logging":{init:[22,2,1,""],setTerminalLogging:[22,2,1,""],set_argparser:[22,2,1,""]},"ws.parser_helpers":{canonicalize:[23,2,1,""],encodings:[24,0,0,"-"],wikicode:[25,0,0,"-"]},"ws.parser_helpers.encodings":{dotencode:[24,2,1,""],encode:[24,2,1,""],queryencode:[24,2,1,""],urlencode:[24,2,1,""]},"ws.parser_helpers.wikicode":{get_adjacent_node:[25,2,1,""],get_parent_wikicode:[25,2,1,""],remove_and_squash:[25,2,1,""]},"ws.utils":{ListOfDictsAttrWrapper:[26,3,1,""],bisect_find:[26,2,1,""],bisect_insert_or_replace:[26,2,1,""],dmerge:[26,2,1,""],flatten_gen:[26,2,1,""],flatten_list:[26,2,1,""],is_ascii:[26,2,1,""],iter_chunks:[26,2,1,""],list_chunks:[26,2,1,""],parse_date:[26,2,1,""]},"ws.wikitable":{Wikitable:[27,3,1,""],WikitableParseError:[27,5,1,""]},"ws.wikitable.Wikitable":{assemble:[27,6,1,""],parse:[27,6,1,""]},ws:{ArchWiki:[6,0,0,"-"],cache:[9,0,0,"-"],config:[13,0,0,"-"],core:[14,0,0,"-"],diff:[19,0,0,"-"],dump:[20,0,0,"-"],interactive:[21,0,0,"-"],logging:[22,0,0,"-"],parser_helpers:[23,0,0,"-"],utils:[26,0,0,"-"],wikitable:[27,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","class","Python class"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"],"6":["py","staticmethod","Python static method"],"7":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:method","2":"py:function","3":"py:class","4":"py:attribute","5":"py:exception","6":"py:staticmethod","7":"py:classmethod"},terms:{"__getitem__":9,"__init__":9,"_all_":1,"_csrftoken":15,"_export":20,"_fetch_revis":[9,10],"_find_active_us":[9,11],"_find_changed_us":[9,11],"_get_for_upd":[9,12],"_get_last_revid_api":[9,10],"_get_last_revid_db":[9,10],"_load_and_upd":9,"_pageid":15,"_update_recent_edit_count":[9,11],"_update_timestamp":9,"byte":24,"case":[0,8,9,15],"catch":0,"class":[0,9,10,11,12,13,15,16,17,19,20,26,27],"default":[0,1,13,15,16,24,26],"function":[0,7,8,9,12,18,21,22],"import":1,"int":[9,10],"long":[1,8],"new":[0,2],"public":15,"return":[7,8,9,11,13,15,16,17,23,24,25,26,27],"static":[16,27],"true":[1,7,9,10,11,12,15,16,25,27],"try":9,access:[9,17],accessor:9,accord:[7,15],accordingli:26,account:[9,11],across:15,action:[15,16],activ:[9,11],active_dai:[9,11],add:[16,22],addit:[15,16],affect:[9,11],after:[9,24],again:17,against:0,agent:16,algorithm:[0,18,24],all:[0,1,2,7,15,24,25],allow:[1,9,11,15,18],allpag:15,allrevisionsprop:[3,5,9],allusersprop:[3,5,9],alreadi:7,also:[0,7,9,16],altern:2,although:[1,15],alwai:15,anchor:24,ani:[2,7,15],ansi:19,answer:18,api:[0,1,2],api_url:[15,16],apierror:16,apijsonerror:16,apiwrongact:16,appli:[7,18,24],archlinux:1,archwiki:[1,2,3,5],arg:[13,15,16,22],argpars:[13,16,22],argtype_dirname_must_exist:13,argtype_existing_dir:13,argument:[0,1,15,16,22],argumentpars:[13,16,22],argv:13,around:[15,16,19,26],articl:7,ascii:24,ask:21,assembl:27,assert:0,assum:7,attr:26,attribut:[9,16,17,26],august:0,aur:2,authent:[15,16,21],autocommit:[9,10,11,12],autom:[2,15],automat:[0,2,7,9,15],avail:[1,2,15,16],avoid:[1,15],back:[7,13],bad:26,base:[2,7,9,10,11,12,13,15,16,17,19,20,21,26,27],basetimestamp:[15,21],basi:1,basic:[0,16,19],beautifi:2,becaus:0,been:[0,2,18],behaviour:24,better:1,between:[0,2,9,11,16,25],big:15,bisect:26,bisect_find:26,bisect_insert_or_replac:26,bool:9,bot:[0,1],both:24,box:7,broken:[0,2],bug:0,build:15,build_head:7,bundl:2,cach:[0,1,2,3,5],cache_dir:[1,9,10,11,12,16],cachedb:[9,10,11,12],cachedberror:9,call:[7,9,15,16,17,18,22],call_api:16,call_index:16,can:[1,7,9,16,17,25],canon:23,canonic:23,capit:23,cat:7,categor:0,categori:[7,8],catlink:7,caus:17,cell1:27,cell2:27,cell3:27,cell:27,certif:[1,16],chang:[0,9,11],charact:24,charset:24,check:[0,16,21],checker:2,children:7,chunk:15,classmethod:16,clean:13,client:2,clipboard:2,clone:2,code:0,collect:[2,21],color:[2,19],colorlog:2,column:27,com:[2,16],combin:15,come:18,command:[0,1],comment:19,commit:9,common:[0,1,2],compar:[0,15,19],comparison:24,comput:15,concaten:15,conf:1,config:[0,1,2,3,5],configargpars:[1,2],configfil:[1,2],configfilepars:13,configur:0,conflict:15,connect:[0,1,2,3,5,14,15],connectionerror:16,consid:[7,9,11],construct:16,constructor:13,contain:[7,8,16,27],content:[7,13,15],context:13,continu:[0,15],continuing_queri:15,conveni:[15,16],convert:[13,26],cooki:[0,1,16],cookie_fil:16,cookiejar:16,cookielib:16,copi:2,core:[0,2,3,5,9],correct:16,correspond:[1,15,24],count:[9,11],creat:[0,1,13],credenti:21,critic:1,csrftoken:0,current:[15,16,21],dai:[9,11],data:[1,9,10,15,16,19],data_el:26,data_list:26,databas:[9,10,12],date:26,datetim:[9,26],dbname:9,debug:1,decod:16,decor:[0,15,17,18],dedupl:[0,7],deep:26,def:18,defin:[9,24],del:17,delet:17,depend:[0,2,9],descend:25,describ:24,descript:19,descriptor:17,destin:26,detail:[0,16],detect:[0,8,15],detect_languag:8,detect_namespac:[0,15],determin:9,develop:2,dict:[9,16,26],dict_list:26,dictionari:[13,15,16,26],diff:[2,3,5],diff_highlight:19,differ:[1,2,9,11],difflib:19,dir:1,directli:0,directori:[1,2],disk:[9,16],displaytitl:7,dmerg:26,docstr:0,document:0,doe:[1,9,13],dot:0,dotencod:24,download:2,dump:[0,2,3,5,9],dumpgener:20,duplic:[1,7],each:[7,9,15,27],edit:[0,9,11,15],edit_interact:21,editcount:[9,11],either:[7,9,16],element:[0,7,9,26],empti:[15,24],encod:[0,3,5,23],encode_char:24,end:[9,10,11],english_for_langnam:8,english_for_tag:8,entri:[0,16],equival:[1,7],error:[1,9,16,24],escap:24,escape_char:24,establish:16,etc:8,evalu:[15,17],exampl:[1,2,4,15],exceed:[15,18],except:[0,7,9,15,16,21,27],exist:[1,9,16],exit:1,exmampl:15,expand:0,expand_result:16,expect:[16,22],explicitli:24,expos:17,extend:[1,6,15,21],extract:[0,7],fabric:2,fact:1,factori:13,fail:[0,9,15,16,24],fals:[7,9,11,15,25,27],fast:17,fetch:[9,10,11],field:[19,27],file:0,filecookiejar:16,find:[2,9,11,26],first:[9,10,17,23],fix:[0,2,25],fix_head:7,flake8:2,flatten_gen:26,flatten_list:26,flexibl:1,follow:[2,7,25],foo:7,form:[8,23],format:0,found:26,fragment:[0,15],from:[0,1,2,7,9,10,12,13,15,16,18,22,25,26],from_argpars:[13,16],fromfil:19,fromfiled:19,full:[1,2,15,16],func:17,gapfilterredir:15,gaplimit:15,gapnamespac:15,gener:[0,2,6,9,15,19,24,26],get:[2,9,10,16,19,25],get_adjacent_nod:25,get_category_languag:8,get_english_language_nam:8,get_external_tag:8,get_header_part:7,get_hostnam:16,get_interlanguage_tag:8,get_internal_tag:8,get_language_nam:8,get_language_tag:8,get_local_languag:8,get_parent_wikicod:25,get_syntax_descript:13,getargpars:13,git:2,github:[2,16],given:[8,9,10,15,16,26],global:[0,1,22],good:1,grp:2,guarante:25,gzip:9,handl:[0,8,15,16],handler:16,hash:15,have:[2,7,9,11,15],header:[0,3,5,6],header_field:27,headererror:7,heavi:0,help:[1,7,8,16],helper:[9,15],highlight:[2,19],hold:9,home:1,hostnam:16,hour:[9,11],http:[1,15,16],http_password:16,http_user:16,i18n:8,idea:1,identifi:15,ignor:[9,10,11,16,25],ignore_whitespac:25,immedi:[9,25],implement:[9,15,18,24],improv:0,includ:[7,15,16,19],index:[0,1,2,9,12,16,26],index_list:26,index_url:16,indexerror:26,indic:0,info:1,inform:15,inherit:1,ini:1,init:[9,10,11,12,15,22],initi:[9,22],input:15,insert:[7,26],insid:0,inspir:2,instanc:[7,9,13,16,19,21,22],instanti:13,intend:17,interact:[2,3,5],interactivequit:21,interfac:[0,1,6,13,15,16],interlanguag:[0,2,7],intern:[1,9,12,22],interpol:1,interwiki:15,introduct:7,invers:13,is_ascii:26,is_category_languag:8,is_english_language_nam:8,is_external_tag:8,is_interlanguage_tag:8,is_internal_tag:8,is_language_nam:8,is_language_tag:8,is_loggedin:[0,15],iso:26,item:13,iter:26,iter_chunk:26,json:[0,9,16],just:15,keep:15,kei:[0,1,9,10,11,12,15,26],keyword:[15,16],klass:[13,16],kwarg:[13,15,16,21],lahwaacz:[1,2,16],lang:[3,5,6],langlink:7,langname_for_english:8,langname_for_tag:8,languag:[7,8],last:[9,10,11,25],latest:2,latestrevisionstext:[3,5,9],layout:7,lazi:[0,3,5,9,14],lazili:[15,17],lazyproperti:[0,15,17],lead:[16,23,25],least:0,letter:23,level:[1,16],librari:[1,16],like:[4,9,26,27],limit:[15,18],line:[0,1,27],link:[0,2,7,15],list:[0,2,7,9,11,15,26,27],list_:26,list_chunk:26,listofdictsattrwrapp:26,load:9,local:8,log:[0,1,2,3,5,13,15],login:15,loginfail:15,logout:15,longer:18,low:16,lower:15,lowercas:7,made:0,magic:[7,15],mai:[1,9,11,15],main:15,maintain:[1,2],mainten:2,major:[0,27],make:[1,16],manag:16,mani:[0,2],manual:[2,4,9],markup:27,match:8,matplotlib:2,matrix:27,max:15,maximum:[9,11,15],md5:15,mean:[1,24],mediawiki:[0,2,6,11,15,16,19,24,26,27],memori:15,merg:26,messag:[0,1],meta:[9,19],method:[9,15,16,17,19,26],midnight:[9,11],minor:0,mode:2,modif:9,modifi:[0,2,18],modul:[0,2,3,4,5,6],monkei:2,more:19,most:18,move:[0,2],multi:9,multipl:[0,1,8,15,16],must:[1,15],mw_ts_format:[9,11],mwparserfromhel:[2,7,23,25,27],name:[1,9,11,13,15,19],namespac:[0,1,9,12,15,16,22],necessari:[1,9],necessarili:1,nest:0,newrevid:19,next:17,node:[7,23,25],noinclud:0,non:[0,24],none:[7,9,10,11,12,13,15,16,24,25,26],nose:2,nosecover3:2,note:1,now:0,num:18,numer:[9,10],numpi:2,obj:25,object:[7,9,13,15,16,17,19,20,23,25,26,27],object_from_argpars:13,obtain:15,obvious:2,offici:2,old:[9,11,19],oldest:[9,11],oldrevid:19,onc:17,onli:[2,7,16,19],open:0,oper:[17,19,26],option:[1,2,7,19,26],order:[7,15],ordereddict:13,org:[1,2,15],origin:[0,2,18,19],other:[2,15],otherwis:[7,15,16,21],out:15,outfil:20,output:[2,19],over:[0,1,2,7],overlap:15,overrid:[1,24],overridden:1,packag:[2,3],page:[0,2,7,8,15,20],pageid1:15,pageid2:15,pageid:[15,21],pair:1,param:[15,16],paramet:[0,1,7,8,9,10,11,12,13,15,16,19,21,22,23,24,25,26,27],parent:[1,7,25],pars:[0,2,13,16,22,27],parse_d:26,parser_help:[0,2,3,5],part:[0,1,7,9,15,16],partial:2,pass:[1,9,13,16,24],password:15,path:[0,1,15,16,24],per:[1,15,18],percent:24,perform:9,period:9,perman:16,persist:9,php:[0,1,16],piec:15,pkg:[1,2],place:25,plan:26,plugin:2,point:[0,7,15,16],possibl:[1,15,16],power:2,preced:[1,7],prefac:7,prefix:[0,1],present:[7,15,16],preserv:[7,15],previou:1,print:[1,18],printnumb:18,prior:22,process:1,project:[0,1],prompt:21,prop:[0,15],proper:[0,9,15],properti:[0,9,10,11,15,17],provid:[15,16],pure:[8,15],pure_titl:15,pyalpm:2,pygment:[2,19],pypi:2,python:[1,2,15,18],queri:[0,9,15,24],query_continu:15,queryencod:24,question:1,quiet:1,quit:[2,21],rais:[7,9,15,16,21,25,26],rang:[9,10],rate:[3,5,14,15],ratelimit:[15,18],rc_err_hour:[9,11],rcuser:[9,11],read:[1,13],recategor:0,recent:[9,11],recenteditcount:[9,11],recommend:2,redirect:[0,2,15],redirects_map:15,refactor:0,refer:2,reflect:[9,11],rel:2,relat:[7,8],releas:[0,2],relev:16,reli:1,remov:[7,25],remove_and_squash:[0,25],remove_from_par:7,renam:0,renew:0,reorgan:0,replac:[15,23,26],repositori:2,repres:[9,13,27],represent:26,request:[2,16],require_login:21,reset:17,resolv:15,resolve_redirect:15,respons:[0,9,15,16],result:15,retriev:[9,11],reusabl:2,revis:[2,9,10,12,15,19],revisiondiff:19,right:15,root:[1,2],round:[9,11],round_to_midnight:[9,11],row:27,rule:7,runtim:18,rvprop:15,safe:7,same:[7,8,15,16],sampl:1,save:[9,10,16],scratch:2,script:[0,1],scriptnam:1,search:[2,26],second:[15,18],section:[1,7,15],see:[0,2,8,15,16,19],select:[1,15,16],self:[9,16],sens:1,sensit:8,sent:16,sequenc:[19,24],serial:[0,9,13],server:[0,16,26],server_respons:16,session:[15,16,21],set:[1,8,13,15,16,24],set_argpars:[16,22],setterminallog:22,share:[0,1,16],shorthand:1,should:[4,7,9,15,16,24],show:[1,19],shown:24,simpl:[15,16],simplemediawiki:2,simplifi:[1,2],sinc:[9,11,24],singl:[9,27],single_line_row:27,site:1,sitenam:1,skip:24,skip_char:24,softwar:2,some:[0,2],someth:4,sort:[7,26],sourc:[15,26],source_namespac:15,space:[8,15,23,25],span:[9,11],special:1,special_map:24,specif:[6,7,8,16],specifi:[1,15,16,21],sphinx:2,split:15,squash:[0,15],ssl:[1,16],ssl_verifi:16,stabl:2,stackoverflow:18,standard:24,start:[0,1,9,10,15],state:[9,11],statist:[0,2],statistics_histogram:2,statu:7,still:25,store:[1,9,10],str:[0,9,15,23,24],str_:24,streak:0,stream:13,strict:24,string:[7,13,15,16,24,26,27],strip:23,structur:[0,1,9],stuff:6,style:[2,7,24],subclass:9,submodul:[0,1,2,3],subnam:13,subpackag:[2,3],subscript:9,subsect:[1,13],subsequ:17,success:15,suffix:8,suit:0,summari:[15,21],suppli:[7,15],support:[1,19],sure:15,syntax:[1,9],tag:[0,7,8],tag_for_english:8,tag_for_langnam:8,take:[1,7,13],taken:[9,11,12,13,26],tarbal:2,target:15,target_namespac:15,task:[2,21],tcl:2,templat:[1,2,7],temporari:1,termin:[1,19],test:0,text:[15,19,25,26,27],text_new:21,text_old:21,than:15,thei:[0,7],them:[1,2,7,13],thi:[1,7,9,11,15,16,18,22,24,26],think:26,those:[1,7],through:15,time:[9,11,15,26],timeout:18,timestamp:[0,9,11,15,19],timestamp_start:20,titl:[7,8,15,19,23],tmp:1,todo:4,tofil:19,tofiled:19,tool:2,top:[1,13],top_level_arg:13,total:[9,11],trail:23,treat:8,tri:2,trigger:9,ts_format:9,tupl:[7,8,15,27],tutori:4,two:19,type:9,typo:0,underli:2,underscor:[8,15,23],unifi:[0,19],unified_diff:19,unless:24,unpack:15,unreleas:0,updat:[0,1,2,7,9,10,11,12],url:[1,15,16,24],urlencod:24,usag:18,user:[0,9,11,15,16,21],user_ag:16,user_right:[0,15],usernam:[15,19],usual:[9,13],utc:26,utf:24,util:[2,3,5],valu:[0,1,9,13,15,17,22],valueerror:25,variou:21,verbos:1,verifi:[1,16],via:[9,15],wai:[1,8,15,16],warn:[0,1,16],web:16,were:[0,2,9,11],wgapimaxresults:15,what:26,when:[2,7,9,11,15,16,18,21,24,25,26],where:[1,7,8,9,12,15,26,27],whether:[1,9,11,15],which:[1,9,11,15,17,24],white:25,whitespac:[0,23,25],who:[9,11],whose:[9,11],wiki:[0,1],wikicod:[0,3,5,7,23],wikilink:2,wikipedia:24,wikit:[2,3,5],wikitableparseerror:27,without:[1,8],word:[7,15],work:[8,9],wrap:[17,18],wrapper:[15,16,19,26],write:2,written:[2,13],wrong:16,www:15,xdg_cache_hom:0,yet:[2,9],yield:15},titles:["Changelog","Configuration","wiki-scripts documentation","API reference","Writing new scripts","ws package","ws.ArchWiki package","ws.ArchWiki.header module","ws.ArchWiki.lang module","ws.cache package","ws.cache.AllRevisionsProps module","ws.cache.AllUsersProps module","ws.cache.LatestRevisionsText module","ws.config module","ws.core package","ws.core.api module","ws.core.connection module","ws.core.lazy module","ws.core.rate module","ws.diff module","ws.dump module","ws.interactive module","ws.logging module","ws.parser_helpers package","ws.parser_helpers.encodings module","ws.parser_helpers.wikicode module","ws.utils module","ws.wikitable module"],titleterms:{"new":4,acknowledg:2,allrevisionsprop:10,allusersprop:11,api:[3,15],archwiki:[6,7,8],cach:[9,10,11,12],changelog:0,config:13,configur:1,connect:16,core:[14,15,16,17,18],diff:19,document:2,dump:20,encod:24,featur:2,file:1,format:1,header:7,indic:2,instal:2,interact:21,lang:8,latestrevisionstext:12,lazi:17,log:22,map:2,modul:[7,8,10,11,12,13,15,16,17,18,19,20,21,22,24,25,26,27],packag:[5,6,9,14,23],parser_help:[23,24,25],rate:18,refer:3,requir:2,script:[2,4],site:2,submodul:[5,6,9,14,23],subpackag:5,tabl:2,util:26,version:0,wiki:2,wikicod:25,wikit:27,write:4}})