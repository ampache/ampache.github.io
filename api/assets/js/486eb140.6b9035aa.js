"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[742],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>o});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=m(a),o=r,N=k["".concat(d,".").concat(o)]||k[o]||g[o]||l;return a?n.createElement(N,i(i({ref:e},u),{},{components:a})):n.createElement(N,i({ref:e},u))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={title:"advanced_search 4.3",metaTitle:"advanced_search 4.3",description:"API documentation"},i=void 0,p={unversionedId:"versions/api-4.3/api-advanced-search",id:"versions/api-4.3/api-advanced-search",title:"advanced_search 4.3",description:"API documentation",source:"@site/docs/versions/api-4.3/api-advanced-search.md",sourceDirName:"versions/api-4.3",slug:"/versions/api-4.3/api-advanced-search",permalink:"/api/versions/api-4.3/api-advanced-search",draft:!1,tags:[],version:"current",frontMatter:{title:"advanced_search 4.3",metaTitle:"advanced_search 4.3",description:"API documentation"},sidebar:"api",previous:{title:"API 4.3",permalink:"/api/versions/api-4.3/"},next:{title:"Errors 4.3",permalink:"/api/versions/api-4.3/api-errors"}},d={},m=[{value:"Using advanced_search",id:"using-advanced_search",level:2},{value:"Available search rules",id:"available-search-rules",level:3},{value:"Available search operators",id:"available-search-operators",level:3},{value:"Metadata operator table",id:"metadata-operator-table",level:3},{value:"advanced_search parameters",id:"advanced_search-parameters",level:3}],u={toc:m};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Advanced search is the API method to access the search rules used in the WEB UI. It can be confusing to process how the rules are generated so this has been split into it's own page."),(0,r.kt)("h2",{id:"using-advanced_search"},"Using advanced_search"),(0,r.kt)("p",null,"Perform an advanced search given passed rules. This works in a similar way to the web/UI search pages.\nYou can pass multiple rules as well as joins to create in depth search results"),(0,r.kt)("p",null,"Rules must be sent in groups of 3 using an int (starting from 1) to designate which rules are combined.\nUse operator ('and'|'or') to choose whether to join or separate each rule when searching."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rule arrays must contain the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rule name (e.g. rule_1","['title']",", rule_2","['album']",")"),(0,r.kt)("li",{parentName:"ul"},"rule operator (e.g. rule_1_operator","[0]",", rule_2_operator","[3]",")"),(0,r.kt)("li",{parentName:"ul"},"rule input (e.g. rule_1_input","['Prodigy']",", rule_2_input","['Land']",")")))),(0,r.kt)("h3",{id:"available-search-rules"},"Available search rules"),(0,r.kt)("p",null,"Select the type of search based on the type of data you are searching for. (songs, playlists, etc)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"rule_1"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Valid Items"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"anywhere"),(0,r.kt)("td",{parentName:"tr",align:null},"Any searchable text"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Title / Name"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album,artist,playlist,label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"album"),(0,r.kt)("td",{parentName:"tr",align:null},"Album"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"artist"),(0,r.kt)("td",{parentName:"tr",align:null},"Artist"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"album_artist"),(0,r.kt)("td",{parentName:"tr",align:null},"Album Artist"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"composer"),(0,r.kt)("td",{parentName:"tr",align:null},"Composer"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"year"),(0,r.kt)("td",{parentName:"tr",align:null},"Year"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"original_year"),(0,r.kt)("td",{parentName:"tr",align:null},"Original Year"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"album")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yearformed"),(0,r.kt)("td",{parentName:"tr",align:null},"Year Formed"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placeformed"),(0,r.kt)("td",{parentName:"tr",align:null},"Place Formed"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"release_type"),(0,r.kt)("td",{parentName:"tr",align:null},"Release Type"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"album")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"myrating"),(0,r.kt)("td",{parentName:"tr",align:null},"My Rating"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating"),(0,r.kt)("td",{parentName:"tr",align:null},"Rating (Average)"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"albumrating"),(0,r.kt)("td",{parentName:"tr",align:null},"My Rating (Album)"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"artistrating"),(0,r.kt)("td",{parentName:"tr",align:null},"My Rating (Artist)"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"favorite"),(0,r.kt)("td",{parentName:"tr",align:null},"Favorites"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"played_times"),(0,r.kt)("td",{parentName:"tr",align:null},"# Played"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skipped_times"),(0,r.kt)("td",{parentName:"tr",align:null},"# Skipped"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"play_skip_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"Played/Skipped ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_play"),(0,r.kt)("td",{parentName:"tr",align:null},"My Last Play"),(0,r.kt)("td",{parentName:"tr",align:null},"days"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"played"),(0,r.kt)("td",{parentName:"tr",align:null},"Played"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"myplayed"),(0,r.kt)("td",{parentName:"tr",align:null},"Played by Me"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"myplayedalbum"),(0,r.kt)("td",{parentName:"tr",align:null},"Played by Me (Album)"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"myplayedartist"),(0,r.kt)("td",{parentName:"tr",align:null},"Played by Me (Artist)"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"Length (in minutes)"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"album_tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Album tag"),(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"artist_tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Artist tag"),(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_user"),(0,r.kt)("td",{parentName:"tr",align:null},"Another User"),(0,r.kt)("td",{parentName:"tr",align:null},"user_numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_user_album"),(0,r.kt)("td",{parentName:"tr",align:null},"Another User (Album)"),(0,r.kt)("td",{parentName:"tr",align:null},"user_numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_user_artist"),(0,r.kt)("td",{parentName:"tr",align:null},"Another User (Artist)"),(0,r.kt)("td",{parentName:"tr",align:null},"user_numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"license"),(0,r.kt)("td",{parentName:"tr",align:null},"Music License"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean_numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"playlist"),(0,r.kt)("td",{parentName:"tr",align:null},"Playlist"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean_numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"smartplaylist"),(0,r.kt)("td",{parentName:"tr",align:null},"Smart Playlist"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean_subsearch"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"playlist_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Playlist Name"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"comment"),(0,r.kt)("td",{parentName:"tr",align:null},"Comment"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lyrics"),(0,r.kt)("td",{parentName:"tr",align:null},"Lyrics"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"Filename"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,video")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bitrate"),(0,r.kt)("td",{parentName:"tr",align:null},"Bitrate"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"added"),(0,r.kt)("td",{parentName:"tr",align:null},"Added"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updated"),(0,r.kt)("td",{parentName:"tr",align:null},"Updated"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recent_added"),(0,r.kt)("td",{parentName:"tr",align:null},"Recently Added"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recent_updated"),(0,r.kt)("td",{parentName:"tr",align:null},"Recently Updated"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"catalog"),(0,r.kt)("td",{parentName:"tr",align:null},"Catalog"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean_numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mbid"),(0,r.kt)("td",{parentName:"tr",align:null},"MusicBrainz ID"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song,album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mbid_album"),(0,r.kt)("td",{parentName:"tr",align:null},"MusicBrainz ID (Album)"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mbid_artist"),(0,r.kt)("td",{parentName:"tr",align:null},"MusicBrainz ID (Artist)"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"metadata (mixed)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"song")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"has_image"),(0,r.kt)("td",{parentName:"tr",align:null},"Local Image"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image_height"),(0,r.kt)("td",{parentName:"tr",align:null},"Image Height"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image_width"),(0,r.kt)("td",{parentName:"tr",align:null},"Image Width"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:"center"},"album,artist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"category"),(0,r.kt)("td",{parentName:"tr",align:null},"Category"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"label")))),(0,r.kt)("h3",{id:"available-search-operators"},"Available search operators"),(0,r.kt)("p",null,"Select your operator (integer only!) based on the type or your selected search"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"rule_1_operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Text / Tags / Metadata"),(0,r.kt)("th",{parentName:"tr",align:null},"Numeric / user_numeric"),(0,r.kt)("th",{parentName:"tr",align:null},"Date"),(0,r.kt)("th",{parentName:"tr",align:null},"Boolean, Numeric, Subsearch / Days"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"contains"),(0,r.kt)("td",{parentName:"tr",align:null},"is greater than or equal to / has loved"),(0,r.kt)("td",{parentName:"tr",align:null},"before"),(0,r.kt)("td",{parentName:"tr",align:null},"is true / before (x) days ago")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"does not contain"),(0,r.kt)("td",{parentName:"tr",align:null},"is less than or equal to / has rated 5 stars"),(0,r.kt)("td",{parentName:"tr",align:null},"after"),(0,r.kt)("td",{parentName:"tr",align:null},"is false / after (x) days ago")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"starts with"),(0,r.kt)("td",{parentName:"tr",align:null},"equals / has rated 4 stars"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"ends with"),(0,r.kt)("td",{parentName:"tr",align:null},"does not equal / has rated 3 stars"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"is"),(0,r.kt)("td",{parentName:"tr",align:null},"is greater than / has rated 2 stars"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"is not"),(0,r.kt)("td",{parentName:"tr",align:null},"is less than / has rated 1 stars"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"6 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"sounds like"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"7 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"does not sound like"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"8 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"matches regular expression"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"9 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"does not match regular expression"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Send the correct input based on the type of search."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"rule_1_input"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),' To search metadata you need to add a 4th rule "rule_X_subtype"\nOperators for metadata are using the text/tag types ',(0,r.kt)("strong",{parentName:"p"},"AND")," numeric types in a single list as they can be ints/strings/dates.\nCurrently there is not a simple way to identify what metadata types you have saved. New methods will be created for this."),(0,r.kt)("h3",{id:"metadata-operator-table"},"Metadata operator table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"rule_1_operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Metadata"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"contains")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"does not contain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"starts with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"ends with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"is")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"is not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"6 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"sounds like")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"7 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"does not sound like")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"8 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"matches regular expression")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"9 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"does not match regular expression")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"is greater than or equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"is less than or equal to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"is")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"is not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"is greater than")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"is less than")))),(0,r.kt)("p",null,"To search a mixed type like metadata you must search using 4 rules."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Search rule 1 for band containing 'Prodigy', Search Rule 2 for bbm > 120",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rule name (e.g. rule_1","['metadata']",", rule_2","['metadata']",")"),(0,r.kt)("li",{parentName:"ul"},"rule operator (e.g. rule_1_operator","[0]",", rule_2_operator","[12]",")"),(0,r.kt)("li",{parentName:"ul"},"rule input (e.g. rule_1_input","['Prodigy']",", rule_2_input","['120']",")"),(0,r.kt)("li",{parentName:"ul"},"rule subtype (e.g. rule_1_subtype","['4']",", rule_2_subtype","['9']",")")))),(0,r.kt)("h3",{id:"advanced_search-parameters"},"advanced_search parameters"),(0,r.kt)("p",null,"@param array $input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INPUTS\n* ampache_url = (string)\n* ampache_API = (string)\n* operator = (string) 'and'|'or' (whether to match one rule or all)\n* rules = (array) = [[rule_1,rule_1_operator,rule_1_input], [rule_2,rule_2_operator,rule_2_input], [etc]]\n* type = (string) 'song', 'album', 'artist', 'playlist', 'label', 'user', 'video'\n* random = (integer) 0|1 (random order of results; default to 0)\n* offset = (integer)\n* limit' = (integer)\n")))}g.isMDXComponent=!0}}]);