"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[3919],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),u=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=u(a),c=n,k=s["".concat(o,".").concat(c)]||s[c]||m[c]||l;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5063:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={title:"Label Search",metaTitle:"Label Search",description:"API documentation"},i=void 0,p={unversionedId:"advanced-search/label-advanced-search",id:"advanced-search/label-advanced-search",title:"Label Search",description:"API documentation",source:"@site/docs/advanced-search/label-advanced-search.md",sourceDirName:"advanced-search",slug:"/advanced-search/label-advanced-search",permalink:"/api/advanced-search/label-advanced-search",draft:!1,tags:[],version:"current",frontMatter:{title:"Label Search",metaTitle:"Label Search",description:"API documentation"},sidebar:"api",previous:{title:"Artist Search",permalink:"/api/advanced-search/artist-advanced-search"},next:{title:"Playlist Search",permalink:"/api/advanced-search/playlist-advanced-search"}},o={},u=[{value:"Find Labels with advanced_search",id:"find-labels-with-advanced_search",level:2},{value:"Available search rules",id:"available-search-rules",level:3},{value:"Available operator values",id:"available-operator-values",level:3},{value:"advanced_search parameters",id:"advanced_search-parameters",level:3},{value:"Example URLs",id:"example-urls",level:3}],d={toc:u};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Lets make things a bit simpler here and look at an individual opject you can search for."),(0,n.kt)("h2",{id:"find-labels-with-advanced_search"},"Find Labels with advanced_search"),(0,n.kt)("p",null,"Perform an advanced search given passed rules. This works in a similar way to the web/UI search pages."),(0,n.kt)("p",null,"You can pass multiple rules as well as joins to create in depth search results"),(0,n.kt)("p",null,"Rules must be sent in groups of 3 using an int (starting from 1) to designate which rules are combined."),(0,n.kt)("p",null,"Use operator ('and', 'or') to choose whether to join or separate each rule when searching."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rule arrays must contain the following:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"rule name (e.g. rule_1","['title']",", rule_2","['album']",")"),(0,n.kt)("li",{parentName:"ul"},"rule operator (e.g. rule_1_operator","[0]",", rule_2_operator","[3]",")"),(0,n.kt)("li",{parentName:"ul"},"rule input (e.g. rule_1_input","['Prodigy']",", rule_2_input","['Land']",")")))),(0,n.kt)("h3",{id:"available-search-rules"},"Available search rules"),(0,n.kt)("p",null,"Select the type of search based on the type of data you are searching for. (songs, playlists, etc)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"rule_1"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Operator Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},"Title / Name"),(0,n.kt)("td",{parentName:"tr",align:null},"text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"(*Alias of title)"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"category"),(0,n.kt)("td",{parentName:"tr",align:null},"Category"),(0,n.kt)("td",{parentName:"tr",align:null},"text")))),(0,n.kt)("h3",{id:"available-operator-values"},"Available operator values"),(0,n.kt)("p",null,"Select your operator (integer only!) based on the type or your selected search"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"rule_1_operator"),(0,n.kt)("th",{parentName:"tr",align:null},"Text"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"contains")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"does not contain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"starts with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"ends with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"is")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"is not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"sounds like")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"does not sound like")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"matches regular expression")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"does not match regular expression")))),(0,n.kt)("p",null,"Send the correct input based on the type of search."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"rule_1_input"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text")))),(0,n.kt)("h3",{id:"advanced_search-parameters"},"advanced_search parameters"),(0,n.kt)("p",null,"@param array $input"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Input"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operator"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"'and','or' (whether to match one rule or all)"),(0,n.kt)("td",{parentName:"tr",align:"right"},"NO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rule_*"),(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"[rule_1,rule_1_operator,rule_1_input]",","),(0,n.kt)("td",{parentName:"tr",align:"right"},"NO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rule_*"),(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"[rule_2,rule_2_operator,rule_2_input]",", ","[etc]"),(0,n.kt)("td",{parentName:"tr",align:"right"},"YES")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"'song', 'album', 'artist', 'playlist',"),(0,n.kt)("td",{parentName:"tr",align:"right"},"NO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"'label', 'user', 'video'"),(0,n.kt)("td",{parentName:"tr",align:"right"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"random"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"0, 1 (random order of results; default to 0)"),(0,n.kt)("td",{parentName:"tr",align:"right"},"YES")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offset"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:"right"},"YES")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit'"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:"right"},"YES")))),(0,n.kt)("h3",{id:"example-urls"},"Example URLs"),(0,n.kt)("p",null,"Here are some example calls that might help you get an idea of the URL required to create an advanced search."),(0,n.kt)("p",null,"Artist ",(0,n.kt)("inlineCode",{parentName:"p"},"https://music.com.au/server/xml.server.php?action=advanced_search&auth=eeb9f1b6056246a7d563f479f518bb34&operator=or&type=artist&offset=0&limit=4&random=0&rule_1=favorite&rule_1_operator=0&rule_1_input=%25&rule_2=artist&rule_2_operator=2&rule_2_input=Car")),(0,n.kt)("p",null,"Album ",(0,n.kt)("inlineCode",{parentName:"p"},"https://music.com.au/server/xml.server.php?action=advanced_search&auth=eeb9f1b6056246a7d563f479f518bb34&operator=or&type=album&offset=0&limit=4&random=0&rule_1=favorite&rule_1_operator=0&rule_1_input=%25&rule_2=artist&rule_2_operator=0&rule_2_input=Men")),(0,n.kt)("p",null,"Song ",(0,n.kt)("inlineCode",{parentName:"p"},"https://music.com.au/server/xml.server.php?action=advanced_search&auth=eeb9f1b6056246a7d563f479f518bb34&operator=or&type=song&offset=0&limit=4&random=0&rule_1=favorite&rule_1_operator=0&rule_1_input=%25&rule_2=title&rule_2_operator=2&rule_2_input=Dance")))}m.isMDXComponent=!0}}]);