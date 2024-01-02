"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[9834],{5431:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>o,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var l=s(5893),i=s(1151);const a={title:"API5.0",metaTitle:"API5.0",description:"API documentation"},t=void 0,r={id:"versions/api-5.0/api-5.0",title:"API5.0",description:"API documentation",source:"@site/docs/versions/api-5.0/api-5.0.md",sourceDirName:"versions/api-5.0",slug:"/versions/api-5.0/",permalink:"/api/versions/api-5.0/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"API5.0",metaTitle:"API5.0",description:"API documentation"},sidebar:"api",previous:{title:"API5.1 advanced_search",permalink:"/api/versions/api-5.1/api-advanced-search"},next:{title:"API5.0 Standards",permalink:"/api/versions/api-5.0/api-standards"}},h={},d=[{value:"Changelog API develop",id:"changelog-api-develop",level:2},{value:"Sending Handshake Request",id:"sending-handshake-request",level:2},{value:"User / Password",id:"user--password",level:3},{value:"Api Key",id:"api-key",level:3},{value:"HTTP Header Authentication",id:"http-header-authentication",level:2},{value:"Other handshake-related stuff",id:"other-handshake-related-stuff",level:3},{value:"Ampache scheme",id:"ampache-scheme",level:4},{value:"Application Name",id:"application-name",level:4},{value:"Geolocation",id:"geolocation",level:4},{value:"Result",id:"result",level:3},{value:"Methods",id:"methods",level:2},{value:"Auth Methods",id:"auth-methods",level:3},{value:"Non-Data Methods",id:"non-data-methods",level:3},{value:"Data Methods",id:"data-methods",level:3},{value:"Binary Data Methods",id:"binary-data-methods",level:3},{value:"Control Methods",id:"control-methods",level:3},{value:"Access Levels",id:"access-levels",level:2},{value:"Request URL Examples",id:"request-url-examples",level:2},{value:"Requesting all genres whose name starts with Rock",id:"requesting-all-genres-whose-name-starts-with-rock",level:3},{value:"Requesting all song titles, with an offset of 5000",id:"requesting-all-song-titles-with-an-offset-of-5000",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Compatible Versions:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"5.0.0-release"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Ampache Provides an API for pulling out it's meta data in the form of simple XML documents. This was originally created for use by ",(0,l.jsx)(n.a,{href:"http://amarok.kde.org/",children:"Amarok"}),", but there is no reason it couldn't be used to create other front-ends to the Ampache data. Access to the API is controlled by the Internal ",(0,l.jsx)(n.a,{href:"https://ampache.org/api/api-acls",children:"Access Control Lists"}),". The KEY defined in the ACL is the passphrase that must be used to establish an API session. Currently all requests are limited to a maximum of 5000 results for performance reasons. To get additional results pass offset as an additional parameter.\nIf you have any questions or requests for this API please submit a ",(0,l.jsx)(n.a,{href:"https://github.com/ampache/ampache/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFeature+Request%5D",children:"Feature Request"}),". All dates in the API calls should be passed as ",(0,l.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/ISO_8601",children:"ISO 8601"})," dates."]}),"\n",(0,l.jsx)(n.h2,{id:"changelog-api-develop",children:"Changelog API develop"}),"\n",(0,l.jsxs)(n.p,{children:["Take a look at the ",(0,l.jsx)(n.a,{href:"https://ampache.org/api/api-changelog",children:"API Changelog"})," to keep an eye on changes between versions"]}),"\n",(0,l.jsx)(n.h2,{id:"sending-handshake-request",children:"Sending Handshake Request"}),"\n",(0,l.jsx)(n.p,{children:"Multiple authentication methods are available, described in the next sections."}),"\n",(0,l.jsx)(n.h3,{id:"user--password",children:"User / Password"}),"\n",(0,l.jsx)(n.p,{children:"The handshake is a combination of the following three things"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Encoded Passphrase"}),"\n",(0,l.jsx)(n.li,{children:"Timestamp"}),"\n",(0,l.jsx)(n.li,{children:"Username"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The key that must be passed to Ampache is ",(0,l.jsx)(n.code,{children:"SHA256(TIME+KEY)"})," where ",(0,l.jsx)(n.code,{children:"KEY"})," is ",(0,l.jsx)(n.code,{children:"SHA256('PASSWORD')"}),". Below is a PHP example"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-PHP",children:"$time = time();\n$key = hash('sha256', 'mypassword');\n$passphrase = hash('sha256', $time . $key);\n"})}),"\n",(0,l.jsx)(n.p,{children:"Once you've generated the encoded passphrase, you can call the following URL (localhost/ampache is the location of your Ampache installation)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Text",children:"http://localhost/ampache/server/xml.server.php?action=handshake&auth=PASSPHRASE&timestamp=TIME&version=500001&user=USER\n"})}),"\n",(0,l.jsx)(n.h3,{id:"api-key",children:"Api Key"}),"\n",(0,l.jsx)(n.p,{children:"The key that must be passed to Ampache is the API Key generated for a specific user (none by default, only the administrator can generate one). Then call the following URL (localhost/ampache is the location of your Ampache installation):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Text",children:"http://localhost/ampache/server/xml.server.php?action=handshake&auth=API_KEY&version=500001\n"})}),"\n",(0,l.jsxs)(n.p,{children:["In API 4.0.0 and higher; the key can be passed to Ampache using ",(0,l.jsx)(n.code,{children:"SHA256(USER+KEY)"})," where ",(0,l.jsx)(n.code,{children:"KEY"})," is ",(0,l.jsx)(n.code,{children:"SHA256('APIKEY')"}),". Below is a PHP example"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-PHP",children:"$user = 'username';\n$key = hash('sha256', 'myapikey');\n$passphrase = hash('sha256', $user . $key);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"http-header-authentication",children:"HTTP Header Authentication"}),"\n",(0,l.jsx)(n.p,{children:"Ampache supports sending your auth parameter to the server using a Bearer Token."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Text",children:"GET https://demo.ampache.dev/server/json.server.php?action=handshake&version=6.0.0 HTTP/1.1\nAuthorization: Bearer 000111112233334444455556667777788888899aaaaabbbbcccccdddeeeeeeff\n"})}),"\n",(0,l.jsx)(n.h3,{id:"other-handshake-related-stuff",children:"Other handshake-related stuff"}),"\n",(0,l.jsx)(n.h4,{id:"ampache-scheme",children:"Ampache scheme"}),"\n",(0,l.jsx)(n.p,{children:"To standardize how to transfer Ampache connection information, the following Ampache scheme is defined."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Text",children:"ampache://authentication@hostname[:port]/subdirectory[#parameters]\n"})}),"\n",(0,l.jsx)(n.p,{children:"for example:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["ampache://myuser",":mypwd","@localhost/ampache"]}),"\n",(0,l.jsx)(n.li,{children:"ampache://yourapikey@localhost:993/ampache#ssl=true"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"application-name",children:"Application Name"}),"\n",(0,l.jsxs)(n.p,{children:["By default Ampache uses USER_AGENT as application name but this could also be defined through http query string. Add ",(0,l.jsx)(n.code,{children:"&client=YourAppName"})," to override the application name. This parameter also works on stream sessions."]}),"\n",(0,l.jsx)(n.h4,{id:"geolocation",children:"Geolocation"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Latitude"}),"\n",(0,l.jsx)(n.li,{children:"Longitude"}),"\n",(0,l.jsx)(n.li,{children:"Place name"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Optionally, you can also provide geolocation information ",(0,l.jsx)(n.code,{children:"&geo_latitude=$latitude&geo_longitude=$longitude"}),", with an optional place name if you already know coordinates match ",(0,l.jsx)(n.code,{children:"&geo_name=$placename"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"result",children:"Result"}),"\n",(0,l.jsx)(n.p,{children:"If your authenticated User and IP match a row in the Access List the following will be returned."}),"\n",(0,l.jsx)(n.p,{children:"For XML"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <auth><%AUTHENTICATION TOKEN%></auth>\n    <api><%APIVERSION%></api>\n    <session_expire><![CDATA[2019-12-03T09:36:46+10:00]]></session_expire>\n    <update><![CDATA[2019-11-26T16:35:05+10:00]]></update>\n    <add><![CDATA[2019-12-03T06:42:55+10:00]]></add>\n    <clean><![CDATA[2019-12-03T06:41:02+10:00]]></clean>\n    <songs><![CDATA[268302]]></songs>\n    <albums><![CDATA[25686]]></albums>\n    <artists><![CDATA[11055]]></artists>\n    <playlists><![CDATA[20]]></playlists>\n    <videos><![CDATA[0]]></videos>\n    <catalogs><![CDATA[4]]></catalogs>\n</root>\n'})}),"\n",(0,l.jsx)(n.p,{children:"For JSON"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:'{\n    "auth": "%AUTHENTICATION TOKEN%",\n    "api": "%APIVERSION%",\n    "session_expire": "2020-01-28T13:59:24+10:00",\n    "update": "2020-01-24T19:29:35+10:00",\n    "add": "2020-01-28T04:49:18+10:00",\n    "clean": "2020-01-28T04:47:28+10:00",\n    "songs": "274209",\n    "albums": "26275",\n    "artists": "11275",\n    "playlists": 31,\n    "videos": "0",\n    "catalogs": "4"\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["All future interactions with the Ampache API must include the ",(0,l.jsx)(n.code,{children:"AUTHENTICATION_TOKEN"})," as a ",(0,l.jsx)(n.code,{children:"GET"})," variable named ",(0,l.jsx)(n.code,{children:"auth"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsxs)(n.p,{children:["All methods must be passed as ",(0,l.jsx)(n.code,{children:"action=METHODNAME"}),". All methods except the ",(0,l.jsx)(n.code,{children:"handshake"})," can take an optional ",(0,l.jsx)(n.code,{children:"offset=XXX"})," and ",(0,l.jsx)(n.code,{children:"limit=XXX"}),". The limit determines the maximum number of results returned. The offset will tell Ampache where to start in the result set. For example if there are 100 total results and you set the offset to 50, and the limit to 50 Ampache will return results between 50 and 100. The default limit is 5000. The default offset is 0."]}),"\n",(0,l.jsxs)(n.p,{children:["You can also pass it ",(0,l.jsx)(n.code,{children:"limit=none"})," to overcome the ",(0,l.jsx)(n.code,{children:"limit"})," limitation and return ",(0,l.jsx)(n.strong,{children:"all"})," the matching elements."]}),"\n",(0,l.jsx)(n.p,{children:"For more in depth information regarding the different api servers you can view the following documentation pages."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://ampache.org/api/api-xml-methods",children:"XML Documentation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://ampache.org/api/api-json-methods",children:"JSON Documentation"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"auth-methods",children:"Auth Methods"}),"\n",(0,l.jsx)(n.p,{children:"All Auth methods return HTTP 200 responses"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"handshake"}),"\n",(0,l.jsx)(n.li,{children:"ping"}),"\n",(0,l.jsx)(n.li,{children:"goodbye"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"non-data-methods",children:"Non-Data Methods"}),"\n",(0,l.jsx)(n.p,{children:"All Non-Data methods return HTTP 200 responses"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"system_update"}),"\n",(0,l.jsx)(n.li,{children:"users"}),"\n",(0,l.jsx)(n.li,{children:"user_preferences"}),"\n",(0,l.jsx)(n.li,{children:"bookmarks"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"data-methods",children:"Data Methods"}),"\n",(0,l.jsx)(n.p,{children:"All Data methods return HTTP 200 responses"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"get_indexes"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://ampache.org/api/api-advanced-search",children:"advanced_search"})}),"\n",(0,l.jsx)(n.li,{children:"artists"}),"\n",(0,l.jsx)(n.li,{children:"artist"}),"\n",(0,l.jsx)(n.li,{children:"artist_songs"}),"\n",(0,l.jsx)(n.li,{children:"artist_albums"}),"\n",(0,l.jsx)(n.li,{children:"albums"}),"\n",(0,l.jsx)(n.li,{children:"album"}),"\n",(0,l.jsx)(n.li,{children:"album_songs"}),"\n",(0,l.jsx)(n.li,{children:"genres"}),"\n",(0,l.jsx)(n.li,{children:"genre"}),"\n",(0,l.jsx)(n.li,{children:"genre_artists"}),"\n",(0,l.jsx)(n.li,{children:"genre_albums"}),"\n",(0,l.jsx)(n.li,{children:"genre_songs"}),"\n",(0,l.jsx)(n.li,{children:"songs"}),"\n",(0,l.jsx)(n.li,{children:"song"}),"\n",(0,l.jsx)(n.li,{children:"song_delete"}),"\n",(0,l.jsx)(n.li,{children:"url_to_song"}),"\n",(0,l.jsx)(n.li,{children:"playlists"}),"\n",(0,l.jsx)(n.li,{children:"playlist"}),"\n",(0,l.jsx)(n.li,{children:"playlist_songs"}),"\n",(0,l.jsx)(n.li,{children:"playlist_create"}),"\n",(0,l.jsx)(n.li,{children:"playlist_edit"}),"\n",(0,l.jsx)(n.li,{children:"playlist_delete"}),"\n",(0,l.jsx)(n.li,{children:"playlist_add_song"}),"\n",(0,l.jsx)(n.li,{children:"playlist_remove_song"}),"\n",(0,l.jsx)(n.li,{children:"playlist_generate"}),"\n",(0,l.jsx)(n.li,{children:"shares"}),"\n",(0,l.jsx)(n.li,{children:"share"}),"\n",(0,l.jsx)(n.li,{children:"share_create"}),"\n",(0,l.jsx)(n.li,{children:"share_edit"}),"\n",(0,l.jsx)(n.li,{children:"share_delete"}),"\n",(0,l.jsx)(n.li,{children:"get_similar"}),"\n",(0,l.jsx)(n.li,{children:"search_songs"}),"\n",(0,l.jsx)(n.li,{children:"videos"}),"\n",(0,l.jsx)(n.li,{children:"video"}),"\n",(0,l.jsx)(n.li,{children:"podcasts"}),"\n",(0,l.jsx)(n.li,{children:"podcast"}),"\n",(0,l.jsx)(n.li,{children:"podcast_create"}),"\n",(0,l.jsx)(n.li,{children:"podcast_edit"}),"\n",(0,l.jsx)(n.li,{children:"podcast_delete"}),"\n",(0,l.jsx)(n.li,{children:"podcast_episodes"}),"\n",(0,l.jsx)(n.li,{children:"podcast_episode"}),"\n",(0,l.jsx)(n.li,{children:"podcast_episode_delete"}),"\n",(0,l.jsx)(n.li,{children:"stats"}),"\n",(0,l.jsx)(n.li,{children:"catalogs"}),"\n",(0,l.jsx)(n.li,{children:"catalog"}),"\n",(0,l.jsx)(n.li,{children:"catalog_file"}),"\n",(0,l.jsx)(n.li,{children:"licenses"}),"\n",(0,l.jsx)(n.li,{children:"license"}),"\n",(0,l.jsx)(n.li,{children:"license_songs"}),"\n",(0,l.jsx)(n.li,{children:"labels"}),"\n",(0,l.jsx)(n.li,{children:"label"}),"\n",(0,l.jsx)(n.li,{children:"label_artists"}),"\n",(0,l.jsx)(n.li,{children:"user"}),"\n",(0,l.jsx)(n.li,{children:"user_create"}),"\n",(0,l.jsx)(n.li,{children:"user_update"}),"\n",(0,l.jsx)(n.li,{children:"user_delete"}),"\n",(0,l.jsx)(n.li,{children:"rate"}),"\n",(0,l.jsx)(n.li,{children:"flag"}),"\n",(0,l.jsx)(n.li,{children:"record_play"}),"\n",(0,l.jsx)(n.li,{children:"scrobble"}),"\n",(0,l.jsx)(n.li,{children:"followers"}),"\n",(0,l.jsx)(n.li,{children:"following"}),"\n",(0,l.jsx)(n.li,{children:"toggle_follow"}),"\n",(0,l.jsx)(n.li,{children:"last_shouts"}),"\n",(0,l.jsx)(n.li,{children:"timeline"}),"\n",(0,l.jsx)(n.li,{children:"friends_timeline"}),"\n",(0,l.jsx)(n.li,{children:"catalog_action"}),"\n",(0,l.jsx)(n.li,{children:"update_from_tags"}),"\n",(0,l.jsx)(n.li,{children:"update_artist_info"}),"\n",(0,l.jsx)(n.li,{children:"update_art"}),"\n",(0,l.jsx)(n.li,{children:"update_podcast"}),"\n",(0,l.jsx)(n.li,{children:"user_preference"}),"\n",(0,l.jsx)(n.li,{children:"system_preferences"}),"\n",(0,l.jsx)(n.li,{children:"system_preference"}),"\n",(0,l.jsx)(n.li,{children:"preference_create"}),"\n",(0,l.jsx)(n.li,{children:"preference_edit"}),"\n",(0,l.jsx)(n.li,{children:"preference_delete"}),"\n",(0,l.jsx)(n.li,{children:"get_bookmark"}),"\n",(0,l.jsx)(n.li,{children:"bookmark_create"}),"\n",(0,l.jsx)(n.li,{children:"bookmark_edit"}),"\n",(0,l.jsx)(n.li,{children:"bookmark_delete"}),"\n",(0,l.jsx)(n.li,{children:"deleted_songs"}),"\n",(0,l.jsx)(n.li,{children:"deleted_podcast_episodes"}),"\n",(0,l.jsx)(n.li,{children:"deleted_videos"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"binary-data-methods",children:"Binary Data Methods"}),"\n",(0,l.jsx)(n.p,{children:"All binary methods will not return XML/JSON responses. they will either return the requested file/data or an HTTP error code."}),"\n",(0,l.jsx)(n.p,{children:"@return (HTTP 200 OK)"}),"\n",(0,l.jsx)(n.p,{children:"@throws (HTTP 400 Bad Request)"}),"\n",(0,l.jsx)(n.p,{children:"@throws (HTTP 404 Not Found)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"stream"}),"\n",(0,l.jsx)(n.li,{children:"download"}),"\n",(0,l.jsx)(n.li,{children:"get_art"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"control-methods",children:"Control Methods"}),"\n",(0,l.jsx)(n.p,{children:"All Control methods return HTTP 200 responses"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"localplay"}),"\n",(0,l.jsx)(n.li,{children:"democratic"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"access-levels",children:"Access Levels"}),"\n",(0,l.jsx)(n.p,{children:"Some methods have a user access level requirement. Access goes from 0-100 and is split into the following types."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"5: Guest"}),"\n",(0,l.jsx)(n.li,{children:"25: User"}),"\n",(0,l.jsx)(n.li,{children:"50: Content Manager"}),"\n",(0,l.jsx)(n.li,{children:"75: Catalog Manager"}),"\n",(0,l.jsx)(n.li,{children:"100: Admin"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"request-url-examples",children:"Request URL Examples"}),"\n",(0,l.jsx)(n.p,{children:"For the purpose of this example the Ampache host is 'localhost' and the path to Ampache is /ampache"}),"\n",(0,l.jsx)(n.h3,{id:"requesting-all-genres-whose-name-starts-with-rock",children:"Requesting all genres whose name starts with Rock"}),"\n",(0,l.jsx)(n.p,{children:"XML"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:"http://localhost/ampache/server/xml.server.php?action=tags&auth=1234567890123456789012345678901&filter=Rock\n"})}),"\n",(0,l.jsx)(n.p,{children:"JSON"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:"http://localhost/ampache/server/json.server.php?action=tags&auth=1234567890123456789012345678901&filter=Rock\n"})}),"\n",(0,l.jsx)(n.h3,{id:"requesting-all-song-titles-with-an-offset-of-5000",children:"Requesting all song titles, with an offset of 5000"}),"\n",(0,l.jsx)(n.p,{children:"XML"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-XML",children:"http://localhost/ampache/server/xml.server.php?action=songs&auth=12345678901234567890123456789012&offset=5000\n"})}),"\n",(0,l.jsx)(n.p,{children:"JSON"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-JSON",children:"http://localhost/ampache/server/json.server.php?action=songs&auth=12345678901234567890123456789012&offset=5000\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{ah:()=>a});var l=s(7294);const i=l.createContext({});function a(e){const n=l.useContext(i);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);