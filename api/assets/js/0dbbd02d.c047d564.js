"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[3445],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>c});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=l.createContext({}),o=function(e){var a=l.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=o(e.components);return l.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},d=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(t),c=n,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return t?l.createElement(h,r(r({ref:a},u),{},{components:t})):l.createElement(h,r({ref:a},u))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var o=2;o<i;o++)r[o]=t[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8573:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var l=t(7462),n=(t(7294),t(3905));const i={title:"API4.2",metaTitle:"API4.2",description:"API documentation"},r=void 0,s={unversionedId:"versions/api-4.2/api-4.2",id:"versions/api-4.2/api-4.2",title:"API4.2",description:"API documentation",source:"@site/docs/versions/api-4.2/api-4.2.md",sourceDirName:"versions/api-4.2",slug:"/versions/api-4.2/",permalink:"/api/versions/api-4.2/",draft:!1,tags:[],version:"current",frontMatter:{title:"API4.2",metaTitle:"API4.2",description:"API documentation"},sidebar:"api",previous:{title:"advanced_search 4.3",permalink:"/api/versions/api-4.3/api-advanced-search"},next:{title:"XML 4.2",permalink:"/api/versions/api-4.2/api-xml-methods"}},p={},o=[{value:"Changelog",id:"changelog",level:2},{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Deprecated",id:"deprecated",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Sending Handshake Request",id:"sending-handshake-request",level:2},{value:"User / Password",id:"user--password",level:3},{value:"Api Key",id:"api-key",level:3},{value:"HTTP Header Authentication",id:"http-header-authentication",level:2},{value:"Other handshake-related stuff",id:"other-handshake-related-stuff",level:3},{value:"Ampache sheme",id:"ampache-sheme",level:4},{value:"Application Name",id:"application-name",level:4},{value:"Geolocation",id:"geolocation",level:4},{value:"Result",id:"result",level:3},{value:"Methods",id:"methods",level:2},{value:"Non-Data Methods",id:"non-data-methods",level:3},{value:"Data Methods",id:"data-methods",level:3},{value:"Control Methods",id:"control-methods",level:3},{value:"Request URL Examples",id:"request-url-examples",level:2},{value:"Requesting all genres whose name starts with Rock",id:"requesting-all-genres-whose-name-starts-with-rock",level:3},{value:"Requesting all song titles, with an offset of 5000",id:"requesting-all-song-titles-with-an-offset-of-5000",level:3}],u={toc:o};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Compatible Versions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4.2.0-release"),(0,n.kt)("li",{parentName:"ul"},"4.2.1-release"),(0,n.kt)("li",{parentName:"ul"},"4.2.2-release"),(0,n.kt)("li",{parentName:"ul"},"4.2.3-release"),(0,n.kt)("li",{parentName:"ul"},"4.2.4-release"),(0,n.kt)("li",{parentName:"ul"},"4.2.5-release"),(0,n.kt)("li",{parentName:"ul"},"4.2.6-release")),(0,n.kt)("p",null,"Ampache Provides an API for pulling out it's meta data in the form of simple XML documents. This was originally created for use by ",(0,n.kt)("a",{parentName:"p",href:"http://amarok.kde.org/"},"Amarok"),", but there is no reason it couldn't be used to create other front-ends to the Ampache data. Access to the API is controlled by the Internal ",(0,n.kt)("a",{parentName:"p",href:"https://ampache.org/api/api-acls"},"Access Control Lists"),". The KEY defined in the ACL is the passphrase that must be used to establish an API session. Currently all requests are limited to a maximum of 5000 results for performance reasons. To get additional results pass offset as an additional parameter.\nIf you have any questions or requests for this API please submit a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ampache/ampache/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFeature+Request%5D"},"Feature Request"),". All dates in the API calls should be passed as ",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601")," dates."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("h3",{id:"added"},"Added"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JSON API now available!",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Call xml as normal:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"[<http://music.com.au/server/xml.server.php?action=handshake&auth=APIKEY&version=420000>]"))),(0,n.kt)("li",{parentName:"ul"},"Call the JSON server:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"[<http://music.com.au/server/json.server.php?action=handshake&auth=APIKEY&version=420000>]"))),(0,n.kt)("li",{parentName:"ul"},"Example XML and JSON responses available ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ampache/python3-ampache/tree/master/docs"},"here")))),(0,n.kt)("li",{parentName:"ul"},"NEW API functions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"get_similar: send artist or song id to get related objects from last.fm"),(0,n.kt)("li",{parentName:"ul"},"shares: get a list of shares you can access"),(0,n.kt)("li",{parentName:"ul"},"share: get a share by id"),(0,n.kt)("li",{parentName:"ul"},"share_create: create a share"),(0,n.kt)("li",{parentName:"ul"},"share_edit: edit an existing share"),(0,n.kt)("li",{parentName:"ul"},"share_delete: delete an existing share"),(0,n.kt)("li",{parentName:"ul"},"podcasts: get a list of podcasts you can access"),(0,n.kt)("li",{parentName:"ul"},"podcast: get a podcast by id"),(0,n.kt)("li",{parentName:"ul"},"podcast_episodes: get a list of podcast_episodes you can access"),(0,n.kt)("li",{parentName:"ul"},"podcast_episode: get a podcast_episode by id"),(0,n.kt)("li",{parentName:"ul"},"podcast_episode_delete: delete an existing podcast_episode"),(0,n.kt)("li",{parentName:"ul"},"podcast_create: create a podcast"),(0,n.kt)("li",{parentName:"ul"},"podcast_edit: edit an existing podcast"),(0,n.kt)("li",{parentName:"ul"},"podcast_delete: delete an existing podcast"),(0,n.kt)("li",{parentName:"ul"},"update_podcast: sync and download new episodes"),(0,n.kt)("li",{parentName:"ul"},"licenses: get a list of licenses you can access"),(0,n.kt)("li",{parentName:"ul"},"license: get a license by id"),(0,n.kt)("li",{parentName:"ul"},"catalogs: get all the catalogs"),(0,n.kt)("li",{parentName:"ul"},"catalog: get a catalog by id"),(0,n.kt)("li",{parentName:"ul"},"catalog_file: clean, add, verify using the file path (good for scripting)"))),(0,n.kt)("li",{parentName:"ul"},"Api::advanced_search added parameter 'random' (0, 1) to shuffle your searches")),(0,n.kt)("h3",{id:"changed"},"Changed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bump API version to 420000 (4.2.0)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All calls that return songs now include ",(0,n.kt)("inlineCode",{parentName:"p"},"<playlisttrack>")," which can be used to identify track order.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<playcount>")," added to objects with a playcount.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<license>")," added to song objects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Don't gather art when adding songs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added actions to catalog_action. 'verify_catalog' 'gather_art'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'API function "playlist_edit": added ability to edit playlist items'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"items  = (string) comma-separated song_id's (replace existing items with a new object_id) //optional"),(0,n.kt)("li",{parentName:"ul"},"tracks = (string) comma-separated playlisttrack numbers matched to items in order //optional"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Random albums will get songs for all disks if album_group enabled")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Remove spaces from advanced_search rule names. (Backwards compatible with old names)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"'has image' => 'has_image'"),(0,n.kt)("li",{parentName:"ul"},"'image height' => 'image_height'"),(0,n.kt)("li",{parentName:"ul"},"'image width' => 'image_width'"),(0,n.kt)("li",{parentName:"ul"},"'filename' => 'file' (Video search)")))),(0,n.kt)("h3",{id:"deprecated"},"Deprecated"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"API Build number is depreciated (the last 3 digits of the api version)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'API5 will be released with a string version ("5.0.0-release")'))),(0,n.kt)("li",{parentName:"ul"},"Tag in songs is depreciated and will be removed in API5.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use genre instead of tag, genre provides an ID as well as the name.")))),(0,n.kt)("h3",{id:"fixed"},"Fixed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Extra text in catalog API calls"),(0,n.kt)("li",{parentName:"ul"},"Don't fail the API calls when the database needs updating"),(0,n.kt)("li",{parentName:"ul"},'Filter in "playlist" and "playlist_songs" fixed')),(0,n.kt)("h2",{id:"sending-handshake-request"},"Sending Handshake Request"),(0,n.kt)("p",null,"Multiple authentication methods are available, described in the next sections."),(0,n.kt)("h3",{id:"user--password"},"User / Password"),(0,n.kt)("p",null,"The handshake is a combination of the following three things"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Encoded Passphrase"),(0,n.kt)("li",{parentName:"ul"},"Timestamp"),(0,n.kt)("li",{parentName:"ul"},"Username")),(0,n.kt)("p",null,"The key that must be passed to Ampache is ",(0,n.kt)("inlineCode",{parentName:"p"},"SHA256(TIME+KEY)")," where ",(0,n.kt)("inlineCode",{parentName:"p"},"KEY")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"SHA256('PASSWORD')"),". Below is a PHP example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-PHP"},"$time = time();\n$key = hash('sha256', 'mypassword');\n$passphrase = hash('sha256', $time . $key);\n")),(0,n.kt)("p",null,"Once you've generated the encoded passphrase, you can call the following URL (localhost/ampache is the location of your Ampache installation)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Text"},"http://localhost/ampache/server/xml.server.php?action=handshake&auth=PASSPHRASE&timestamp=TIME&version=420001&user=USER\n")),(0,n.kt)("h3",{id:"api-key"},"Api Key"),(0,n.kt)("p",null,"The key that must be passed to Ampache is the API Key generated for a specific user (none by default, only the administrator can generate one). Then call the following URL (localhost/ampache is the location of your Ampache installation):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Text"},"http://localhost/ampache/server/xml.server.php?action=handshake&auth=API_KEY&version=420001\n")),(0,n.kt)("p",null,"In API4 and higher; the key can be passed to Ampache using ",(0,n.kt)("inlineCode",{parentName:"p"},"SHA256(USER+KEY)")," where ",(0,n.kt)("inlineCode",{parentName:"p"},"KEY")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"SHA256('APIKEY')"),". Below is a PHP example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-PHP"},"$user = 'username';\n$key = hash('sha256', 'myapikey');\n$passphrase = hash('sha256', $user . $key);\n")),(0,n.kt)("h2",{id:"http-header-authentication"},"HTTP Header Authentication"),(0,n.kt)("p",null,"Ampache supports sending your auth parameter to the server using a Bearer Token."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Text"},"Authorization: Bearer PASSPHRASE\n")),(0,n.kt)("h3",{id:"other-handshake-related-stuff"},"Other handshake-related stuff"),(0,n.kt)("h4",{id:"ampache-sheme"},"Ampache sheme"),(0,n.kt)("p",null,"To standardize how to transfer Ampache connection information, the following Ampache scheme is defined."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Text"},"ampache://authentication@hostname[:port]/subdirectory[#parameters]\n")),(0,n.kt)("p",null,"for example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ampache://myuser:mypwd@localhost/ampache"),(0,n.kt)("li",{parentName:"ul"},"ampache://yourapikey@localhost:993/ampache#ssl=true")),(0,n.kt)("h4",{id:"application-name"},"Application Name"),(0,n.kt)("p",null,"By default Ampache uses USER_AGENT as application name but this could also be defined through http query string. Add ",(0,n.kt)("inlineCode",{parentName:"p"},"&client=YourAppName")," to override the application name. This parameter also works on stream sessions."),(0,n.kt)("h4",{id:"geolocation"},"Geolocation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Latitude"),(0,n.kt)("li",{parentName:"ul"},"Longitude"),(0,n.kt)("li",{parentName:"ul"},"Place name")),(0,n.kt)("p",null,"Optionally, you can also provide geolocation information ",(0,n.kt)("inlineCode",{parentName:"p"},"&geo_latitude=$latitude&geo_longitude=$longitude"),", with an optional place name if you already know coordinates match ",(0,n.kt)("inlineCode",{parentName:"p"},"&geo_name=$placename"),"."),(0,n.kt)("h3",{id:"result"},"Result"),(0,n.kt)("p",null,"If your authenticated User and IP match a row in the Access List the following will be returned."),(0,n.kt)("p",null,"For XML"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <auth><%AUTHENTICATION TOKEN%></auth>\n    <api><%APIVERSION%></api>\n    <session_expire><![CDATA[2019-12-03T09:36:46+10:00]]></session_expire>\n    <update><![CDATA[2019-11-26T16:35:05+10:00]]></update>\n    <add><![CDATA[2019-12-03T06:42:55+10:00]]></add>\n    <clean><![CDATA[2019-12-03T06:41:02+10:00]]></clean>\n    <songs><![CDATA[268302]]></songs>\n    <albums><![CDATA[25686]]></albums>\n    <artists><![CDATA[11055]]></artists>\n    <playlists><![CDATA[20]]></playlists>\n    <videos><![CDATA[0]]></videos>\n    <catalogs><![CDATA[4]]></catalogs>\n</root>\n')),(0,n.kt)("p",null,"For JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "auth": "%AUTHENTICATION TOKEN%",\n    "api": "%APIVERSION%",\n    "session_expire": "2020-01-28T13:59:24+10:00",\n    "update": "2020-01-24T19:29:35+10:00",\n    "add": "2020-01-28T04:49:18+10:00",\n    "clean": "2020-01-28T04:47:28+10:00",\n    "songs": "274209",\n    "albums": "26275",\n    "artists": "11275",\n    "playlists": 31,\n    "videos": "0",\n    "catalogs": "4"\n}\n')),(0,n.kt)("p",null,"All future interactions with the Ampache API must include the ",(0,n.kt)("inlineCode",{parentName:"p"},"AUTHENTICATION_TOKEN")," as a ",(0,n.kt)("inlineCode",{parentName:"p"},"GET")," variable named ",(0,n.kt)("inlineCode",{parentName:"p"},"auth"),"."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("p",null,"All methods must be passed as ",(0,n.kt)("inlineCode",{parentName:"p"},"action=METHODNAME"),". All methods except the ",(0,n.kt)("inlineCode",{parentName:"p"},"handshake")," can take an optional ",(0,n.kt)("inlineCode",{parentName:"p"},"offset=XXX")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"limit=XXX"),". The limit determines the maximum number of results returned. The offset will tell Ampache where to start in the result set. For example if there are 100 total results and you set the offset to 50, and the limit to 50 Ampache will return results between 50 and 100. The default limit is 5000. The default offset is 0."),(0,n.kt)("p",null,"You can also pass it ",(0,n.kt)("inlineCode",{parentName:"p"},"limit=none")," to overcome the ",(0,n.kt)("inlineCode",{parentName:"p"},"limit")," limitation and return ",(0,n.kt)("strong",{parentName:"p"},"all")," the matching elements."),(0,n.kt)("p",null,"For more in depth information regarding the different api servers you can view the following documentation pages."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ampache.org/api/versions/api-4.2/api-xml-methods"},"XML Documentation (4.2)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ampache.org/api/versions/api-4.2/api-xml-methods"},"JSON Documentation (4.2)"))),(0,n.kt)("h3",{id:"non-data-methods"},"Non-Data Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"handshake"),(0,n.kt)("li",{parentName:"ul"},"ping"),(0,n.kt)("li",{parentName:"ul"},"goodbye"),(0,n.kt)("li",{parentName:"ul"},"url_to_song"),(0,n.kt)("li",{parentName:"ul"},"check_parameter"),(0,n.kt)("li",{parentName:"ul"},"message")),(0,n.kt)("h3",{id:"data-methods"},"Data Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"get_indexes"),(0,n.kt)("li",{parentName:"ul"},"artists"),(0,n.kt)("li",{parentName:"ul"},"artist"),(0,n.kt)("li",{parentName:"ul"},"artist_songs"),(0,n.kt)("li",{parentName:"ul"},"artist_albums"),(0,n.kt)("li",{parentName:"ul"},"albums"),(0,n.kt)("li",{parentName:"ul"},"album"),(0,n.kt)("li",{parentName:"ul"},"album_songs"),(0,n.kt)("li",{parentName:"ul"},"tags"),(0,n.kt)("li",{parentName:"ul"},"tag"),(0,n.kt)("li",{parentName:"ul"},"tag_artists"),(0,n.kt)("li",{parentName:"ul"},"tag_albums"),(0,n.kt)("li",{parentName:"ul"},"tag_songs"),(0,n.kt)("li",{parentName:"ul"},"songs"),(0,n.kt)("li",{parentName:"ul"},"song"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ampache.org/api/versions/api-4.2/api-advanced-search"},"advanced_search")),(0,n.kt)("li",{parentName:"ul"},"stats"),(0,n.kt)("li",{parentName:"ul"},"playlists"),(0,n.kt)("li",{parentName:"ul"},"playlist"),(0,n.kt)("li",{parentName:"ul"},"playlist_songs"),(0,n.kt)("li",{parentName:"ul"},"playlist_create"),(0,n.kt)("li",{parentName:"ul"},"playlist_edit"),(0,n.kt)("li",{parentName:"ul"},"playlist_delete"),(0,n.kt)("li",{parentName:"ul"},"playlist_add_song"),(0,n.kt)("li",{parentName:"ul"},"playlist_remove_song"),(0,n.kt)("li",{parentName:"ul"},"playlist_generate"),(0,n.kt)("li",{parentName:"ul"},"search_songs"),(0,n.kt)("li",{parentName:"ul"},"videos"),(0,n.kt)("li",{parentName:"ul"},"video"),(0,n.kt)("li",{parentName:"ul"},"shares"),(0,n.kt)("li",{parentName:"ul"},"share"),(0,n.kt)("li",{parentName:"ul"},"share_create"),(0,n.kt)("li",{parentName:"ul"},"share_edit"),(0,n.kt)("li",{parentName:"ul"},"share_delete"),(0,n.kt)("li",{parentName:"ul"},"get_similar"),(0,n.kt)("li",{parentName:"ul"},"podcasts"),(0,n.kt)("li",{parentName:"ul"},"podcast"),(0,n.kt)("li",{parentName:"ul"},"podcast_create"),(0,n.kt)("li",{parentName:"ul"},"podcast_edit"),(0,n.kt)("li",{parentName:"ul"},"podcast_delete"),(0,n.kt)("li",{parentName:"ul"},"podcast_episodes"),(0,n.kt)("li",{parentName:"ul"},"podcast_episode"),(0,n.kt)("li",{parentName:"ul"},"podcast_episode_delete"),(0,n.kt)("li",{parentName:"ul"},"catalogs"),(0,n.kt)("li",{parentName:"ul"},"catalog"),(0,n.kt)("li",{parentName:"ul"},"catalog_file"),(0,n.kt)("li",{parentName:"ul"},"licenses"),(0,n.kt)("li",{parentName:"ul"},"license"),(0,n.kt)("li",{parentName:"ul"},"license_songs"),(0,n.kt)("li",{parentName:"ul"},"user"),(0,n.kt)("li",{parentName:"ul"},"user_create"),(0,n.kt)("li",{parentName:"ul"},"user_update"),(0,n.kt)("li",{parentName:"ul"},"user_delete"),(0,n.kt)("li",{parentName:"ul"},"stream"),(0,n.kt)("li",{parentName:"ul"},"download"),(0,n.kt)("li",{parentName:"ul"},"get_art"),(0,n.kt)("li",{parentName:"ul"},"rate"),(0,n.kt)("li",{parentName:"ul"},"flag"),(0,n.kt)("li",{parentName:"ul"},"record_play"),(0,n.kt)("li",{parentName:"ul"},"scrobble"),(0,n.kt)("li",{parentName:"ul"},"followers"),(0,n.kt)("li",{parentName:"ul"},"following"),(0,n.kt)("li",{parentName:"ul"},"toggle_follow"),(0,n.kt)("li",{parentName:"ul"},"last_shouts"),(0,n.kt)("li",{parentName:"ul"},"timeline"),(0,n.kt)("li",{parentName:"ul"},"friends_timeline"),(0,n.kt)("li",{parentName:"ul"},"catalog_action"),(0,n.kt)("li",{parentName:"ul"},"update_from_tags"),(0,n.kt)("li",{parentName:"ul"},"update_artist_info"),(0,n.kt)("li",{parentName:"ul"},"update_art"),(0,n.kt)("li",{parentName:"ul"},"update_podcast")),(0,n.kt)("h3",{id:"control-methods"},"Control Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"localplay"),(0,n.kt)("li",{parentName:"ul"},"democratic")),(0,n.kt)("h2",{id:"request-url-examples"},"Request URL Examples"),(0,n.kt)("p",null,"For the purpose of this example the Ampache host is 'localhost' and the path to Ampache is /ampache"),(0,n.kt)("h3",{id:"requesting-all-genres-whose-name-starts-with-rock"},"Requesting all genres whose name starts with Rock"),(0,n.kt)("p",null,"XML"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},"http://localhost/ampache/server/xml.server.php?action=tags&auth=1234567890123456789012345678901&filter=Rock\n")),(0,n.kt)("p",null,"JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},"http://localhost/ampache/server/json.server.php?action=tags&auth=1234567890123456789012345678901&filter=Rock\n")),(0,n.kt)("h3",{id:"requesting-all-song-titles-with-an-offset-of-5000"},"Requesting all song titles, with an offset of 5000"),(0,n.kt)("p",null,"XML"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},"http://localhost/ampache/server/xml.server.php?action=songs&auth=12345678901234567890123456789012&offset=5000\n")),(0,n.kt)("p",null,"JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},"http://localhost/ampache/server/json.server.php?action=songs&auth=12345678901234567890123456789012&offset=5000\n")))}m.isMDXComponent=!0}}]);