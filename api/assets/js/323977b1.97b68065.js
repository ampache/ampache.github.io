"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[8888],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=m(a),g=r,N=k["".concat(d,".").concat(g)]||k[g]||o[g]||l;return a?n.createElement(N,i(i({ref:e},u),{},{components:a})):n.createElement(N,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5990:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={title:"Album Search",metaTitle:"Album Search",description:"API documentation"},i=void 0,p={unversionedId:"advanced-search/album-advanced-search",id:"advanced-search/album-advanced-search",title:"Album Search",description:"API documentation",source:"@site/docs/advanced-search/album-advanced-search.md",sourceDirName:"advanced-search",slug:"/advanced-search/album-advanced-search",permalink:"/api/advanced-search/album-advanced-search",draft:!1,tags:[],version:"current",frontMatter:{title:"Album Search",metaTitle:"Album Search",description:"API documentation"},sidebar:"api",previous:{title:"Song Search",permalink:"/api/advanced-search/song-advanced-search"},next:{title:"Artist Search",permalink:"/api/advanced-search/artist-advanced-search"}},d={},m=[{value:"Available search rules",id:"available-search-rules",level:3},{value:"Available operator values",id:"available-operator-values",level:3}],u={toc:m};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page focuses on a single object type."),(0,r.kt)("p",null,"Refer to the main ",(0,r.kt)("a",{parentName:"p",href:"https://ampache.org/api/api-advanced-search"},"Advanced Search")," page for further information regarding the advanced_search method."),(0,r.kt)("h3",{id:"available-search-rules"},"Available search rules"),(0,r.kt)("p",null,"Select the type of search based on the type of data you are searching for. (songs, playlists, etc)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"rule_1"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Operator Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Title / Name"),(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"(*Alias of title)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"artist"),(0,r.kt)("td",{parentName:"tr",align:null},"Artist"),(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"song_artist"),(0,r.kt)("td",{parentName:"tr",align:null},"Song Artist"),(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"song"),(0,r.kt)("td",{parentName:"tr",align:null},"Song Title"),(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"song_title"),(0,r.kt)("td",{parentName:"tr",align:null},"(*Alias of song)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"year"),(0,r.kt)("td",{parentName:"tr",align:null},"Year"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"original_year"),(0,r.kt)("td",{parentName:"tr",align:null},"Original Year"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"release_type"),(0,r.kt)("td",{parentName:"tr",align:null},"Release Type"),(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"release_status"),(0,r.kt)("td",{parentName:"tr",align:null},"Release Status"),(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"myrating"),(0,r.kt)("td",{parentName:"tr",align:null},"My Rating"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating"),(0,r.kt)("td",{parentName:"tr",align:null},"Rating (Average)"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"songrating"),(0,r.kt)("td",{parentName:"tr",align:null},"My Rating (Song)"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"artistrating"),(0,r.kt)("td",{parentName:"tr",align:null},"My Rating (Artist)"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"favorite"),(0,r.kt)("td",{parentName:"tr",align:null},"Favorites"),(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"played_times"),(0,r.kt)("td",{parentName:"tr",align:null},"# Played"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_play"),(0,r.kt)("td",{parentName:"tr",align:null},"My Last Play"),(0,r.kt)("td",{parentName:"tr",align:null},"days")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"myplayed"),(0,r.kt)("td",{parentName:"tr",align:null},"Played by Me"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"myplayedartist"),(0,r.kt)("td",{parentName:"tr",align:null},"Played by Me (Artist)"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"song_count"),(0,r.kt)("td",{parentName:"tr",align:null},"Song Count"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"Length (in minutes)"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"genre"),(0,r.kt)("td",{parentName:"tr",align:null},"Genre"),(0,r.kt)("td",{parentName:"tr",align:null},"tags")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"(*Alias of genre)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no_genre"),(0,r.kt)("td",{parentName:"tr",align:null},"No Genre"),(0,r.kt)("td",{parentName:"tr",align:null},"is_true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no_tag"),(0,r.kt)("td",{parentName:"tr",align:null},"(*Alias of no_genre)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"other_user"),(0,r.kt)("td",{parentName:"tr",align:null},"Another User"),(0,r.kt)("td",{parentName:"tr",align:null},"user_numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"playlist"),(0,r.kt)("td",{parentName:"tr",align:null},"Playlist"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean_numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"playlist_name"),(0,r.kt)("td",{parentName:"tr",align:null},"Playlist Name"),(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"Filename"),(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recent_played"),(0,r.kt)("td",{parentName:"tr",align:null},"Recently Played"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric_limit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recent_added"),(0,r.kt)("td",{parentName:"tr",align:null},"Recently Added"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric_limit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"catalog"),(0,r.kt)("td",{parentName:"tr",align:null},"Catalog"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean_numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mbid"),(0,r.kt)("td",{parentName:"tr",align:null},"MusicBrainz ID"),(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"has_image"),(0,r.kt)("td",{parentName:"tr",align:null},"Local Image"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image_height"),(0,r.kt)("td",{parentName:"tr",align:null},"Image Height"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image_width"),(0,r.kt)("td",{parentName:"tr",align:null},"Image Width"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"possible_duplicate"),(0,r.kt)("td",{parentName:"tr",align:null},"Possible Duplicate"),(0,r.kt)("td",{parentName:"tr",align:null},"is_true")))),(0,r.kt)("h3",{id:"available-operator-values"},"Available operator values"),(0,r.kt)("p",null,"Select your operator (integer only!) based on the type or your selected search"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," with the numeric_limit and is_true operators the operator is ignored, but still required"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"rule_1_operator"),(0,r.kt)("th",{parentName:"tr",align:null},"text / tags"),(0,r.kt)("th",{parentName:"tr",align:null},"numeric / user_numeric"),(0,r.kt)("th",{parentName:"tr",align:null},"boolean, boolean_numeric, days"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"contains"),(0,r.kt)("td",{parentName:"tr",align:null},"is greater than or equal to / has loved"),(0,r.kt)("td",{parentName:"tr",align:null},"is true / before (x) days ago")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"does not contain"),(0,r.kt)("td",{parentName:"tr",align:null},"is less than or equal to / has rated 5 stars"),(0,r.kt)("td",{parentName:"tr",align:null},"is false / after (x) days ago")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"starts with"),(0,r.kt)("td",{parentName:"tr",align:null},"equals / has rated 4 stars"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"ends with"),(0,r.kt)("td",{parentName:"tr",align:null},"does not equal / has rated 3 stars"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"is"),(0,r.kt)("td",{parentName:"tr",align:null},"is greater than / has rated 2 stars"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"is not"),(0,r.kt)("td",{parentName:"tr",align:null},"is less than / has rated 1 stars"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"6 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"sounds like"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"7 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"does not sound like"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"8 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"matches regular expression"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"9 (Text Only)"),(0,r.kt)("td",{parentName:"tr",align:null},"does not match regular expression"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Send the correct input based on the type of search."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"rule_1_input"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean")))))}o.isMDXComponent=!0}}]);