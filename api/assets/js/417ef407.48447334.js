"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[7223],{8087:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"versions/api-4.1/api-4.1","title":"API4.1","description":"API documentation","source":"@site/docs/versions/api-4.1/api-4.1.md","sourceDirName":"versions/api-4.1","slug":"/versions/api-4.1/","permalink":"/api/versions/api-4.1/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"API4.1","metaTitle":"API4.1","description":"API documentation"},"sidebar":"api","previous":{"title":"advanced_search 4.2","permalink":"/api/versions/api-4.2/api-advanced-search"},"next":{"title":"XML 4.1","permalink":"/api/versions/api-4.1/xml-methods"}}');var l=n(4848),a=n(8453);const t={title:"API4.1",metaTitle:"API4.1",description:"API documentation"},r=void 0,h={},d=[{value:"Sending Handshake Request",id:"sending-handshake-request",level:2},{value:"User / Password",id:"user--password",level:3},{value:"Api Key",id:"api-key",level:3},{value:"HTTP Header Authentication",id:"http-header-authentication",level:2},{value:"Other handshake-related stuff",id:"other-handshake-related-stuff",level:3},{value:"Ampache scheme",id:"ampache-scheme",level:4},{value:"Application Name",id:"application-name",level:4},{value:"Geolocation",id:"geolocation",level:4},{value:"Result",id:"result",level:3},{value:"Errors",id:"errors",level:2},{value:"Methods",id:"methods",level:2},{value:"Non-Data Methods",id:"non-data-methods",level:3},{value:"Data Methods",id:"data-methods",level:3},{value:"Control Methods",id:"control-methods",level:3},{value:"Request URL Examples",id:"request-url-examples",level:2},{value:"Requesting all genres whose name starts with Rock",id:"requesting-all-genres-whose-name-starts-with-rock",level:3},{value:"Requesting all song titles, with an offset of 5000",id:"requesting-all-song-titles-with-an-offset-of-5000",level:3}];function o(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.RP)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Compatible Versions:"})," ",(0,l.jsx)(s.em,{children:">= 350001"})]}),"\n",(0,l.jsxs)(s.p,{children:["Ampache Provides an API for pulling out it's meta data in the form of simple XML documents. This was originally created for use by ",(0,l.jsx)(s.a,{href:"http://amarok.kde.org/",children:"Amarok"}),", but there is no reason it couldn't be used to create other front-ends to the Ampache data. Access to the API is controlled by the Internal ",(0,l.jsx)(s.a,{href:"https://ampache.org/api/api-acls",children:"Access Control Lists"}),". The KEY defined in the ACL is the passphrase that must be used to establish an API session. Currently all requests are limited to a maximum of 5000 results for performance reasons. To get additional results pass offset as an additional parameter.\nIf you have any questions or requests for this API please submit a ",(0,l.jsx)(s.a,{href:"https://github.com/ampache/ampache/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFeature+Request%5D",children:"Feature Request"}),". All dates in the API calls should be passed as ",(0,l.jsx)(s.a,{href:"http://en.wikipedia.org/wiki/ISO_8601",children:"ISO 8601"})," dates."]}),"\n",(0,l.jsx)(s.h2,{id:"sending-handshake-request",children:"Sending Handshake Request"}),"\n",(0,l.jsx)(s.p,{children:"Multiple authentication methods are available, described in the next sections."}),"\n",(0,l.jsx)(s.h3,{id:"user--password",children:"User / Password"}),"\n",(0,l.jsx)(s.p,{children:"The handshake is a combination of the following three things"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Encoded Passphrase"}),"\n",(0,l.jsx)(s.li,{children:"Timestamp"}),"\n",(0,l.jsx)(s.li,{children:"Username"}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["The key that must be passed to Ampache is ",(0,l.jsx)(s.code,{children:"SHA256(TIME+KEY)"})," where ",(0,l.jsx)(s.code,{children:"KEY"})," is ",(0,l.jsx)(s.code,{children:"SHA256('PASSWORD')"}),". Below is a PHP example"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-PHP",children:"$time = time();\n$key = hash('sha256', 'mypassword');\n$passphrase = hash('sha256', $time . $key);\n"})}),"\n",(0,l.jsx)(s.p,{children:"Once you've generated the encoded passphrase, you can call the following URL (localhost/ampache is the location of your Ampache installation)"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-URL",children:"http://localhost/ampache/server/xml.server.php?action=handshake&auth=PASSPHRASE&timestamp=TIME&version=410001&user=USER\n"})}),"\n",(0,l.jsx)(s.h3,{id:"api-key",children:"Api Key"}),"\n",(0,l.jsx)(s.p,{children:"The key that must be passed to Ampache is the API Key generated for a specific user (none by default, only the administrator can generate one). Then call the following URL (localhost/ampache is the location of your Ampache installation):"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-URL",children:"http://localhost/ampache/server/xml.server.php?action=handshake&auth=API_KEY&version=410001\n"})}),"\n",(0,l.jsxs)(s.p,{children:["If you are using Ampache 4.0.0 and higher; the key can be passed to Ampache using ",(0,l.jsx)(s.code,{children:"SHA256(USER+KEY)"})," where ",(0,l.jsx)(s.code,{children:"KEY"})," is ",(0,l.jsx)(s.code,{children:"SHA256('APIKEY')"}),". Below is a PHP example"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-PHP",children:"$user = 'username';\n$key = hash('sha256', 'myapikey');\n$passphrase = hash('sha256', $user . $key);\n"})}),"\n",(0,l.jsx)(s.h2,{id:"http-header-authentication",children:"HTTP Header Authentication"}),"\n",(0,l.jsx)(s.p,{children:"Ampache supports sending your auth parameter to the server using a Bearer Token."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-Text",children:"GET https://demo.ampache.dev/server/json.server.php?action=handshake&version=6.0.0 HTTP/1.1\nAuthorization: Bearer 000111112233334444455556667777788888899aaaaabbbbcccccdddeeeeeeff\n"})}),"\n",(0,l.jsx)(s.h3,{id:"other-handshake-related-stuff",children:"Other handshake-related stuff"}),"\n",(0,l.jsx)(s.h4,{id:"ampache-scheme",children:"Ampache scheme"}),"\n",(0,l.jsx)(s.p,{children:"To standardize how to transfer Ampache connection information, the following Ampache scheme is defined."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-Text",children:"ampache://authentication@hostname[:port]/subdirectory[#parameters]\n"})}),"\n",(0,l.jsx)(s.p,{children:"for example:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["ampache://myuser",":mypwd","@localhost/ampache"]}),"\n",(0,l.jsx)(s.li,{children:"ampache://yourapikey@localhost:993/ampache#ssl=true"}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"application-name",children:"Application Name"}),"\n",(0,l.jsxs)(s.p,{children:["By default Ampache uses USER_AGENT as application name but this could also be defined through http query string. Add ",(0,l.jsx)(s.code,{children:"&client=YourAppName"})," to override the application name. This parameter also works on stream sessions."]}),"\n",(0,l.jsx)(s.h4,{id:"geolocation",children:"Geolocation"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Latitude"}),"\n",(0,l.jsx)(s.li,{children:"Longitude"}),"\n",(0,l.jsx)(s.li,{children:"Place name"}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Optionally, you can also provide geolocation information ",(0,l.jsx)(s.code,{children:"&geo_latitude=$latitude&geo_longitude=$longitude"}),", with an optional place name if you already know coordinates match ",(0,l.jsx)(s.code,{children:"&geo_name=$placename"}),"."]}),"\n",(0,l.jsx)(s.h3,{id:"result",children:"Result"}),"\n",(0,l.jsx)(s.p,{children:"If your authenticated User and IP match a row in the Access List the following will be returned."}),"\n",(0,l.jsx)(s.p,{children:"For XML"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <auth><%AUTHENTICATION TOKEN%></auth>\n    <api><%APIVERSION%></api>\n    <session_expire><![CDATA[2019-12-03T09:36:46+10:00]]></session_expire>\n    <update><![CDATA[2019-11-26T16:35:05+10:00]]></update>\n    <add><![CDATA[2019-12-03T06:42:55+10:00]]></add>\n    <clean><![CDATA[2019-12-03T06:41:02+10:00]]></clean>\n    <songs><![CDATA[268302]]></songs>\n    <albums><![CDATA[25686]]></albums>\n    <artists><![CDATA[11055]]></artists>\n    <playlists><![CDATA[20]]></playlists>\n    <videos><![CDATA[0]]></videos>\n    <catalogs><![CDATA[4]]></catalogs>\n</root>\n'})}),"\n",(0,l.jsxs)(s.p,{children:["All future interactions with the Ampache API must include the ",(0,l.jsx)(s.code,{children:"AUTHENTICATION_TOKEN"})," as a ",(0,l.jsx)(s.code,{children:"GET"})," variable named ",(0,l.jsx)(s.code,{children:"auth"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"errors",children:"Errors"}),"\n",(0,l.jsxs)(s.p,{children:["All errors will be returned as an XML document as specified in the ",(0,l.jsx)(s.a,{href:"api-errors",children:"XML API Error Document"}),". When possible the text part of the message will be translated into the users configured language."]}),"\n",(0,l.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsxs)(s.p,{children:["All methods must be passed as ",(0,l.jsx)(s.code,{children:"action=METHODNAME"}),". All methods except the ",(0,l.jsx)(s.code,{children:"handshake"})," can take an optional ",(0,l.jsx)(s.code,{children:"offset=XXX"})," and ",(0,l.jsx)(s.code,{children:"limit=XXX"}),". The limit determines the maximum number of results returned. The offset will tell Ampache where to start in the result set. For example if there are 100 total results and you set the offset to 50, and the limit to 50 Ampache will return results between 50 and 100. The default limit is 5000. The default offset is 0."]}),"\n",(0,l.jsxs)(s.p,{children:["You can also pass it ",(0,l.jsx)(s.code,{children:"limit=none"})," to overcome the ",(0,l.jsx)(s.code,{children:"limit"})," limitation and return ",(0,l.jsx)(s.strong,{children:"all"})," the matching elements."]}),"\n",(0,l.jsx)(s.p,{children:"For more in depth information regarding the different api servers you can view the following documentation pages."}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://ampache.org/api/versions/api-4.1/xml-methods",children:"XML Documentation"})," page."]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"non-data-methods",children:"Non-Data Methods"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"handshake"}),"\n",(0,l.jsx)(s.li,{children:"ping"}),"\n",(0,l.jsx)(s.li,{children:"goodbye (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"url_to_song"}),"\n",(0,l.jsx)(s.li,{children:"check_parameter (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"message (MINIMUM_API_VERSION=420000)"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"data-methods",children:"Data Methods"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"get_indexes (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"artists"}),"\n",(0,l.jsx)(s.li,{children:"artist"}),"\n",(0,l.jsx)(s.li,{children:"artist_songs"}),"\n",(0,l.jsx)(s.li,{children:"artist_albums"}),"\n",(0,l.jsx)(s.li,{children:"albums"}),"\n",(0,l.jsx)(s.li,{children:"album"}),"\n",(0,l.jsx)(s.li,{children:"album_songs"}),"\n",(0,l.jsx)(s.li,{children:"tags"}),"\n",(0,l.jsx)(s.li,{children:"tag"}),"\n",(0,l.jsx)(s.li,{children:"tag_artists"}),"\n",(0,l.jsx)(s.li,{children:"tag_albums"}),"\n",(0,l.jsx)(s.li,{children:"tag_songs"}),"\n",(0,l.jsx)(s.li,{children:"songs"}),"\n",(0,l.jsx)(s.li,{children:"song"}),"\n",(0,l.jsx)(s.li,{children:"advanced_search (CHANGED_IN_API_VERSION=400001)"}),"\n",(0,l.jsxs)(s.li,{children:["stats (CHANGED_IN_API_VERSION=400001 ",(0,l.jsx)(s.code,{children:"filter"})," added)"]}),"\n",(0,l.jsx)(s.li,{children:"playlists"}),"\n",(0,l.jsx)(s.li,{children:"playlist"}),"\n",(0,l.jsx)(s.li,{children:"playlist_songs"}),"\n",(0,l.jsx)(s.li,{children:"playlist_create"}),"\n",(0,l.jsx)(s.li,{children:"playlist_edit (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"playlist_delete"}),"\n",(0,l.jsx)(s.li,{children:"playlist_add_song (CHANGED_IN_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"playlist_remove_song (CHANGED_IN_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"playlist_generate (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"shares (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"share (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"share_create (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"share_edit (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"share_delete (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"get_similar (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"podcasts (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"podcast (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"podcast_create (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"podcast_edit (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"podcast_delete (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"podcast_episodes (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"podcast_episode (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"podcast_episode_delete (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"catalogs (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"catalog (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"catalog_file (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"search_songs"}),"\n",(0,l.jsx)(s.li,{children:"videos"}),"\n",(0,l.jsx)(s.li,{children:"video"}),"\n",(0,l.jsx)(s.li,{children:"user"}),"\n",(0,l.jsx)(s.li,{children:"user_create (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"user_update (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"user_delete (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"stream (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"download (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"get_art (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"rate"}),"\n",(0,l.jsx)(s.li,{children:"flag (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"record_play (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"scrobble (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"licenses (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"license (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"license_songs (MINIMUM_API_VERSION=420000)"}),"\n",(0,l.jsx)(s.li,{children:"followers"}),"\n",(0,l.jsx)(s.li,{children:"following"}),"\n",(0,l.jsx)(s.li,{children:"toggle_follow"}),"\n",(0,l.jsx)(s.li,{children:"last_shouts"}),"\n",(0,l.jsx)(s.li,{children:"timeline"}),"\n",(0,l.jsx)(s.li,{children:"friends_timeline"}),"\n",(0,l.jsx)(s.li,{children:"catalog_action (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"update_from_tags (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"update_artist_info (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"update_art (MINIMUM_API_VERSION=400001)"}),"\n",(0,l.jsx)(s.li,{children:"update_podcast (MINIMUM_API_VERSION=420000)"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"control-methods",children:"Control Methods"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"localplay"}),"\n",(0,l.jsx)(s.li,{children:"democratic"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"request-url-examples",children:"Request URL Examples"}),"\n",(0,l.jsx)(s.p,{children:"For the purpose of this example the Ampache host is 'localhost' and the path to Ampache is /ampache"}),"\n",(0,l.jsx)(s.h3,{id:"requesting-all-genres-whose-name-starts-with-rock",children:"Requesting all genres whose name starts with Rock"}),"\n",(0,l.jsx)(s.p,{children:"XML"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-URL",children:"http://localhost/ampache/server/xml.server.php?action=tags&auth=1234567890123456789012345678901&filter=Rock\n"})}),"\n",(0,l.jsx)(s.h3,{id:"requesting-all-song-titles-with-an-offset-of-5000",children:"Requesting all song titles, with an offset of 5000"}),"\n",(0,l.jsx)(s.p,{children:"XML"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-URL",children:"http://localhost/ampache/server/xml.server.php?action=songs&auth=12345678901234567890123456789012&offset=5000\n"})})]})}function c(e={}){const{wrapper:s}={...(0,a.RP)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{RP:()=>a,xA:()=>r});var i=n(6540);const l=i.createContext({});function a(e){const s=i.useContext(l);return i.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function r({components:e,children:s,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||t:a(e),i.createElement(l.Provider,{value:r},s)}}}]);