"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[6971],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),p=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,c=d["".concat(o,".").concat(h)]||d[h]||m[h]||r;return a?l.createElement(c,s(s({ref:t},u),{},{components:a})):l.createElement(c,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=a(7462),n=(a(7294),a(3905));const r={title:"Ampache API",metaTitle:"Ampache API",description:"API documentation"},s=void 0,i={unversionedId:"index",id:"index",title:"Ampache API",description:"API documentation",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/api/",draft:!1,tags:[],version:"current",frontMatter:{title:"Ampache API",metaTitle:"Ampache API",description:"API documentation"},sidebar:"api",next:{title:"API6 Standards",permalink:"/api/api-standards"}},o={},p=[{value:"News",id:"news",level:2},{value:"Archived Version Documentation",id:"archived-version-documentation",level:2},{value:"Changelog API develop",id:"changelog-api-develop",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Sending Handshake Request",id:"sending-handshake-request",level:2},{value:"User / Password",id:"user--password",level:3},{value:"Api Key",id:"api-key",level:3},{value:"Other handshake-related stuff",id:"other-handshake-related-stuff",level:3},{value:"Ampache sheme",id:"ampache-sheme",level:4},{value:"Application Name",id:"application-name",level:4},{value:"Geolocation",id:"geolocation",level:4},{value:"Result",id:"result",level:3},{value:"Methods",id:"methods",level:2},{value:"Auth Methods",id:"auth-methods",level:3},{value:"Non-Data Methods",id:"non-data-methods",level:3},{value:"Data Methods",id:"data-methods",level:3},{value:"Binary Data Methods",id:"binary-data-methods",level:3},{value:"Control Methods",id:"control-methods",level:3},{value:"Access Levels",id:"access-levels",level:2},{value:"Request URL Examples",id:"request-url-examples",level:2},{value:"Requesting all genres whose name starts with Rock",id:"requesting-all-genres-whose-name-starts-with-rock",level:3},{value:"Requesting all song titles, with an offset of 5000",id:"requesting-all-song-titles-with-an-offset-of-5000",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Ampache API Provides methods for pulling out it's meta data in the form of\nsimple XML (and JSON!) documents. This was originally created for use by ",(0,n.kt)("a",{parentName:"p",href:"https://ampache.org/api/http://amarok.kde.org/"},"Amarok"),",\nbut there is no reason it couldn't be used to create other front-ends to the Ampache data."),(0,n.kt)("p",null,"Access to the API is controlled by the Internal ",(0,n.kt)("a",{parentName:"p",href:"https://ampache.org/api/api-acls"},"Access Control Lists"),".\nCurrently all requests are limited to a maximum of 5000 results for performance reasons. To get additional results\npass offset as an additional parameter."),(0,n.kt)("p",null,"If you have any questions or requests for this API please submit a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ampache/ampache/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFeature+Request%5D"},"Feature Request"),".\nAll dates in the API calls should be passed as ",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601")," dates."),(0,n.kt)("h2",{id:"news"},"News"),(0,n.kt)("p",null,"API6 development has started but don't be alarmed! API5 is stable, not changing and like API3 and API4 will continue to be supported."),(0,n.kt)("p",null,"The goals of API6 are simply to extend on top of API5 and remove what's no longer needed. API5 docs have moved to the ",(0,n.kt)("a",{parentName:"p",href:"https://ampache.org/api/api-5"},"archive")," and API6 will become the default."),(0,n.kt)("h2",{id:"archived-version-documentation"},"Archived Version Documentation"),(0,n.kt)("p",null,"After each release, a documentation page will be created to allow pruning old features from the current version."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ampache.org/api/api-5"},"API 5.5 Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ampache.org/api/api-4"},"API 4.4 Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ampache.org/api/api-3"},"API 3.9 Documentation"))),(0,n.kt)("p",null,"Ampache supports the last major release of each API version. You can also check out the ",(0,n.kt)("a",{parentName:"p",href:"https://ampache.org/api/versions/"},"past releases")," page for some historical detail but ",(0,n.kt)("strong",{parentName:"p"},"DO NOT")," use these pages as a guide for API development."),(0,n.kt)("h2",{id:"changelog-api-develop"},"Changelog API develop"),(0,n.kt)("p",null,"Take a look at the ",(0,n.kt)("a",{parentName:"p",href:"https://ampache.org/api/api-changelog"},"API Changelog")," to keep an eye on changes between versions"),(0,n.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,n.kt)("p",null,"Ampache 5.2.0+ supports multiple API versions. This means that you can send your handshake with a specific version (e.g. 390001, 440001, 5.2.0 or 6.0.0) you will be sent API3, API4, API5 and API6 responses in return."),(0,n.kt)("p",null,"To change from API3 to API5 you can send a ping with a new version parameter to update your session (or send goodbye to log off and start again.)"),(0,n.kt)("p",null,"API3 is not recommended for use outside of running old applications and it is recommended that you turn off API versions you don't use."),(0,n.kt)("h2",{id:"sending-handshake-request"},"Sending Handshake Request"),(0,n.kt)("p",null,"Multiple authentication methods are available, described in the next sections."),(0,n.kt)("h3",{id:"user--password"},"User / Password"),(0,n.kt)("p",null,"The handshake is a combination of the following three things"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Encoded Passphrase"),(0,n.kt)("li",{parentName:"ul"},"Timestamp"),(0,n.kt)("li",{parentName:"ul"},"Username")),(0,n.kt)("p",null,"The key that must be passed to Ampache is ",(0,n.kt)("inlineCode",{parentName:"p"},"SHA256(TIME+KEY)")," where ",(0,n.kt)("inlineCode",{parentName:"p"},"KEY")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"SHA256('PASSWORD')"),". Below is a PHP example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-PHP"},"$time = time();\n$key = hash('sha256', 'mypassword');\n$passphrase = hash('sha256', $time . $key);\n")),(0,n.kt)("p",null,"Once you've generated the encoded passphrase, you can call the following URL (localhost/ampache is the location of your Ampache installation)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Text"},"http://localhost/ampache/server/xml.server.php?action=handshake&auth=PASSPHRASE&timestamp=TIME&version=6.0.0&user=USER\n")),(0,n.kt)("h3",{id:"api-key"},"Api Key"),(0,n.kt)("p",null,"The key that must be passed to Ampache is the API Key generated for a specific user (none by default, only the administrator can generate one). Then call the following URL (localhost/ampache is the location of your Ampache installation):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Text"},"http://localhost/ampache/server/xml.server.php?action=handshake&auth=API_KEY&version=6.0.0\n")),(0,n.kt)("p",null,"If you are using Ampache 4.0.0 and higher; the key can be passed to Ampache using ",(0,n.kt)("inlineCode",{parentName:"p"},"SHA256(USER+KEY)")," where ",(0,n.kt)("inlineCode",{parentName:"p"},"KEY")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"SHA256('APIKEY')"),". Below is a PHP example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-PHP"},"$user = 'username';\n$key = hash('sha256', 'myapikey');\n$passphrase = hash('sha256', $user . $key);\n")),(0,n.kt)("h3",{id:"other-handshake-related-stuff"},"Other handshake-related stuff"),(0,n.kt)("h4",{id:"ampache-sheme"},"Ampache sheme"),(0,n.kt)("p",null,"To standardize how to transfer Ampache connection information, the following Ampache scheme is defined."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Text"},"ampache://authentication@hostname[:port]/subdirectory[#parameters]\n")),(0,n.kt)("p",null,"for example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ampache://myuser:mypwd@localhost/ampache"),(0,n.kt)("li",{parentName:"ul"},"ampache://yourapikey@localhost:993/ampache#ssl=true")),(0,n.kt)("h4",{id:"application-name"},"Application Name"),(0,n.kt)("p",null,"By default Ampache uses USER_AGENT as application name but this could also be defined through http query string. Add ",(0,n.kt)("inlineCode",{parentName:"p"},"&client=YourAppName")," to override the application name. This parameter also works on stream sessions."),(0,n.kt)("h4",{id:"geolocation"},"Geolocation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Latitude"),(0,n.kt)("li",{parentName:"ul"},"Longitude"),(0,n.kt)("li",{parentName:"ul"},"Place name")),(0,n.kt)("p",null,"Optionally, you can also provide geolocation information ",(0,n.kt)("inlineCode",{parentName:"p"},"&geo_latitude=$latitude&geo_longitude=$longitude"),", with an optional place name if you already know coordinates match ",(0,n.kt)("inlineCode",{parentName:"p"},"&geo_name=$placename"),"."),(0,n.kt)("h3",{id:"result"},"Result"),(0,n.kt)("p",null,"If your authenticated User and IP match a row in the Access List the following will be returned."),(0,n.kt)("p",null,"For XML"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <auth><%AUTHENTICATION TOKEN%></auth>\n    <api><%APIVERSION%></api>\n    <session_expire><![CDATA[2019-12-03T09:36:46+10:00]]></session_expire>\n    <update><![CDATA[2019-11-26T16:35:05+10:00]]></update>\n    <add><![CDATA[2019-12-03T06:42:55+10:00]]></add>\n    <clean><![CDATA[2019-12-03T06:41:02+10:00]]></clean>\n    <songs><![CDATA[268302]]></songs>\n    <albums><![CDATA[25686]]></albums>\n    <artists><![CDATA[11055]]></artists>\n    <playlists><![CDATA[20]]></playlists>\n    <videos><![CDATA[0]]></videos>\n    <catalogs><![CDATA[4]]></catalogs>\n</root>\n')),(0,n.kt)("p",null,"For JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "auth": "%AUTHENTICATION TOKEN%",\n    "api": "%APIVERSION%",\n    "session_expire": "2020-01-28T13:59:24+10:00",\n    "update": "2020-01-24T19:29:35+10:00",\n    "add": "2020-01-28T04:49:18+10:00",\n    "clean": "2020-01-28T04:47:28+10:00",\n    "songs": "274209",\n    "albums": "26275",\n    "artists": "11275",\n    "playlists": 31,\n    "videos": "0",\n    "catalogs": "4"\n}\n')),(0,n.kt)("p",null,"All future interactions with the Ampache API must include the ",(0,n.kt)("inlineCode",{parentName:"p"},"AUTHENTICATION_TOKEN")," as a ",(0,n.kt)("inlineCode",{parentName:"p"},"GET")," variable named ",(0,n.kt)("inlineCode",{parentName:"p"},"auth"),"."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("p",null,"All methods must be passed as ",(0,n.kt)("inlineCode",{parentName:"p"},"action=METHODNAME"),". All methods except the ",(0,n.kt)("inlineCode",{parentName:"p"},"handshake")," can take an optional ",(0,n.kt)("inlineCode",{parentName:"p"},"offset=XXX")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"limit=XXX"),". The limit determines the maximum number of results returned. The offset will tell Ampache where to start in the result set. For example if there are 100 total results and you set the offset to 50, and the limit to 50 Ampache will return results between 50 and 100. The default limit is 5000. The default offset is 0."),(0,n.kt)("p",null,"You can also pass it ",(0,n.kt)("inlineCode",{parentName:"p"},"limit=none")," to overcome the ",(0,n.kt)("inlineCode",{parentName:"p"},"limit")," limitation and return ",(0,n.kt)("strong",{parentName:"p"},"all")," the matching elements."),(0,n.kt)("p",null,"For more in depth information regarding the different api servers you can view the following documentation pages."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ampache.org/api/api-xml-methods"},"XML Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ampache.org/api/api-json-methods"},"JSON Documentation"))),(0,n.kt)("h3",{id:"auth-methods"},"Auth Methods"),(0,n.kt)("p",null,"All Auth methods return HTTP 200 responses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"handshake"),(0,n.kt)("li",{parentName:"ul"},"goodbye"),(0,n.kt)("li",{parentName:"ul"},"ping"),(0,n.kt)("li",{parentName:"ul"},"register ",(0,n.kt)("strong",{parentName:"li"},"Api6"))),(0,n.kt)("h3",{id:"non-data-methods"},"Non-Data Methods"),(0,n.kt)("p",null,"All Non-Data methods return HTTP 200 responses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"bookmarks"),(0,n.kt)("li",{parentName:"ul"},"system_update"),(0,n.kt)("li",{parentName:"ul"},"users"),(0,n.kt)("li",{parentName:"ul"},"user_preferences")),(0,n.kt)("h3",{id:"data-methods"},"Data Methods"),(0,n.kt)("p",null,"All Data methods return HTTP 200 responses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ampache.org/api/api-advanced-search"},"advanced_search")),(0,n.kt)("li",{parentName:"ul"},"albums"),(0,n.kt)("li",{parentName:"ul"},"album"),(0,n.kt)("li",{parentName:"ul"},"album_songs"),(0,n.kt)("li",{parentName:"ul"},"artists"),(0,n.kt)("li",{parentName:"ul"},"artist"),(0,n.kt)("li",{parentName:"ul"},"artist_albums"),(0,n.kt)("li",{parentName:"ul"},"artist_songs"),(0,n.kt)("li",{parentName:"ul"},"bookmark_create"),(0,n.kt)("li",{parentName:"ul"},"bookmark_delete"),(0,n.kt)("li",{parentName:"ul"},"bookmark_edit"),(0,n.kt)("li",{parentName:"ul"},"catalogs"),(0,n.kt)("li",{parentName:"ul"},"catalog"),(0,n.kt)("li",{parentName:"ul"},"catalog_action"),(0,n.kt)("li",{parentName:"ul"},"catalog_file"),(0,n.kt)("li",{parentName:"ul"},"deleted_podcast_episodes"),(0,n.kt)("li",{parentName:"ul"},"deleted_songs"),(0,n.kt)("li",{parentName:"ul"},"deleted_videos"),(0,n.kt)("li",{parentName:"ul"},"flag"),(0,n.kt)("li",{parentName:"ul"},"followers"),(0,n.kt)("li",{parentName:"ul"},"following"),(0,n.kt)("li",{parentName:"ul"},"friends_timeline"),(0,n.kt)("li",{parentName:"ul"},"genres"),(0,n.kt)("li",{parentName:"ul"},"genre"),(0,n.kt)("li",{parentName:"ul"},"genre_albums"),(0,n.kt)("li",{parentName:"ul"},"genre_artists"),(0,n.kt)("li",{parentName:"ul"},"genre_songs"),(0,n.kt)("li",{parentName:"ul"},"get_bookmark"),(0,n.kt)("li",{parentName:"ul"},"get_indexes"),(0,n.kt)("li",{parentName:"ul"},"get_similar"),(0,n.kt)("li",{parentName:"ul"},"labels"),(0,n.kt)("li",{parentName:"ul"},"label"),(0,n.kt)("li",{parentName:"ul"},"label_artists"),(0,n.kt)("li",{parentName:"ul"},"last_shouts"),(0,n.kt)("li",{parentName:"ul"},"licenses"),(0,n.kt)("li",{parentName:"ul"},"license"),(0,n.kt)("li",{parentName:"ul"},"license_songs"),(0,n.kt)("li",{parentName:"ul"},"list ",(0,n.kt)("strong",{parentName:"li"},"Api6")," Replaces get_indexes"),(0,n.kt)("li",{parentName:"ul"},"live_streams"),(0,n.kt)("li",{parentName:"ul"},"live_stream"),(0,n.kt)("li",{parentName:"ul"},"live_stream_create ",(0,n.kt)("strong",{parentName:"li"},"Api6")),(0,n.kt)("li",{parentName:"ul"},"live_stream_delete ",(0,n.kt)("strong",{parentName:"li"},"Api6")),(0,n.kt)("li",{parentName:"ul"},"live_stream_edit ",(0,n.kt)("strong",{parentName:"li"},"Api6")),(0,n.kt)("li",{parentName:"ul"},"playlists"),(0,n.kt)("li",{parentName:"ul"},"playlist"),(0,n.kt)("li",{parentName:"ul"},"playlist_add_song"),(0,n.kt)("li",{parentName:"ul"},"playlist_create"),(0,n.kt)("li",{parentName:"ul"},"playlist_delete"),(0,n.kt)("li",{parentName:"ul"},"playlist_edit"),(0,n.kt)("li",{parentName:"ul"},"playlist_generate"),(0,n.kt)("li",{parentName:"ul"},"playlist_remove_song"),(0,n.kt)("li",{parentName:"ul"},"playlist_songs"),(0,n.kt)("li",{parentName:"ul"},"podcasts"),(0,n.kt)("li",{parentName:"ul"},"podcast"),(0,n.kt)("li",{parentName:"ul"},"podcast_create"),(0,n.kt)("li",{parentName:"ul"},"podcast_delete"),(0,n.kt)("li",{parentName:"ul"},"podcast_edit"),(0,n.kt)("li",{parentName:"ul"},"podcast_episodes"),(0,n.kt)("li",{parentName:"ul"},"podcast_episode"),(0,n.kt)("li",{parentName:"ul"},"podcast_episode_delete"),(0,n.kt)("li",{parentName:"ul"},"preference_create"),(0,n.kt)("li",{parentName:"ul"},"preference_delete"),(0,n.kt)("li",{parentName:"ul"},"preference_edit"),(0,n.kt)("li",{parentName:"ul"},"rate"),(0,n.kt)("li",{parentName:"ul"},"record_play"),(0,n.kt)("li",{parentName:"ul"},"scrobble"),(0,n.kt)("li",{parentName:"ul"},"search_songs"),(0,n.kt)("li",{parentName:"ul"},"shares"),(0,n.kt)("li",{parentName:"ul"},"share"),(0,n.kt)("li",{parentName:"ul"},"share_create"),(0,n.kt)("li",{parentName:"ul"},"share_delete"),(0,n.kt)("li",{parentName:"ul"},"share_edit"),(0,n.kt)("li",{parentName:"ul"},"songs"),(0,n.kt)("li",{parentName:"ul"},"song"),(0,n.kt)("li",{parentName:"ul"},"song_delete"),(0,n.kt)("li",{parentName:"ul"},"stats"),(0,n.kt)("li",{parentName:"ul"},"system_preference"),(0,n.kt)("li",{parentName:"ul"},"system_preferences"),(0,n.kt)("li",{parentName:"ul"},"timeline"),(0,n.kt)("li",{parentName:"ul"},"toggle_follow"),(0,n.kt)("li",{parentName:"ul"},"update_art"),(0,n.kt)("li",{parentName:"ul"},"update_artist_info"),(0,n.kt)("li",{parentName:"ul"},"update_from_tags"),(0,n.kt)("li",{parentName:"ul"},"update_podcast"),(0,n.kt)("li",{parentName:"ul"},"url_to_song"),(0,n.kt)("li",{parentName:"ul"},"user"),(0,n.kt)("li",{parentName:"ul"},"user_create"),(0,n.kt)("li",{parentName:"ul"},"user_delete"),(0,n.kt)("li",{parentName:"ul"},"user_edit ",(0,n.kt)("strong",{parentName:"li"},"Api6")," Replaces user_update"),(0,n.kt)("li",{parentName:"ul"},"user_update"),(0,n.kt)("li",{parentName:"ul"},"user_preference"),(0,n.kt)("li",{parentName:"ul"},"videos"),(0,n.kt)("li",{parentName:"ul"},"video")),(0,n.kt)("h3",{id:"binary-data-methods"},"Binary Data Methods"),(0,n.kt)("p",null,"All binary methods will not return XML/JSON responses. they will either return the requested file/data or an HTTP error code."),(0,n.kt)("p",null,"@return (HTTP 200 OK)"),(0,n.kt)("p",null,"@throws (HTTP 400 Bad Request)"),(0,n.kt)("p",null,"@throws (HTTP 404 Not Found)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"download"),(0,n.kt)("li",{parentName:"ul"},"get_art"),(0,n.kt)("li",{parentName:"ul"},"stream")),(0,n.kt)("h3",{id:"control-methods"},"Control Methods"),(0,n.kt)("p",null,"All Control methods return HTTP 200 responses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"democratic"),(0,n.kt)("li",{parentName:"ul"},"localplay"),(0,n.kt)("li",{parentName:"ul"},"localplay_songs")),(0,n.kt)("h2",{id:"access-levels"},"Access Levels"),(0,n.kt)("p",null,"Some methods have a user access level requirement. Access goes from 0-100 and is split into the following types."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"5: Guest"),(0,n.kt)("li",{parentName:"ul"},"25: User"),(0,n.kt)("li",{parentName:"ul"},"50: Content Manager"),(0,n.kt)("li",{parentName:"ul"},"75: Catalog Manager"),(0,n.kt)("li",{parentName:"ul"},"100: Admin")),(0,n.kt)("h2",{id:"request-url-examples"},"Request URL Examples"),(0,n.kt)("p",null,"For the purpose of this example the Ampache host is 'localhost' and the path to Ampache is /ampache"),(0,n.kt)("h3",{id:"requesting-all-genres-whose-name-starts-with-rock"},"Requesting all genres whose name starts with Rock"),(0,n.kt)("p",null,"XML"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},"http://localhost/ampache/server/xml.server.php?action=tags&auth=1234567890123456789012345678901&filter=Rock\n")),(0,n.kt)("p",null,"JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},"http://localhost/ampache/server/json.server.php?action=tags&auth=1234567890123456789012345678901&filter=Rock\n")),(0,n.kt)("h3",{id:"requesting-all-song-titles-with-an-offset-of-5000"},"Requesting all song titles, with an offset of 5000"),(0,n.kt)("p",null,"XML"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},"http://localhost/ampache/server/xml.server.php?action=songs&auth=12345678901234567890123456789012&offset=5000\n")),(0,n.kt)("p",null,"JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},"http://localhost/ampache/server/json.server.php?action=songs&auth=12345678901234567890123456789012&offset=5000\n")))}m.isMDXComponent=!0}}]);