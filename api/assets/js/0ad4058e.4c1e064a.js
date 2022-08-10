"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[4867],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={title:"Playlist Search",metaTitle:"Playlist Search",description:"API documentation"},i=void 0,o={unversionedId:"advanced-search/playlist-advanced-search",id:"advanced-search/playlist-advanced-search",title:"Playlist Search",description:"API documentation",source:"@site/docs/advanced-search/playlist-advanced-search.md",sourceDirName:"advanced-search",slug:"/advanced-search/playlist-advanced-search",permalink:"/api/advanced-search/playlist-advanced-search",draft:!1,tags:[],version:"current",frontMatter:{title:"Playlist Search",metaTitle:"Playlist Search",description:"API documentation"},sidebar:"api",previous:{title:"Label Search",permalink:"/api/advanced-search/label-advanced-search"},next:{title:"Podcast Search",permalink:"/api/advanced-search/podcast-advanced-search"}},p={},c=[{value:"Available search rules",id:"available-search-rules",level:3},{value:"Available operator values",id:"available-operator-values",level:3}],d={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page focuses on a single object type."),(0,n.kt)("p",null,"Refer to the main ",(0,n.kt)("a",{parentName:"p",href:"https://ampache.org/api/api-advanced-search"},"Advanced Search")," page for further information regarding the advanced_search method."),(0,n.kt)("h3",{id:"available-search-rules"},"Available search rules"),(0,n.kt)("p",null,"Select the type of search based on the type of data you are searching for. (songs, playlists, etc)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"rule_1"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Operator Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},"Title / Name"),(0,n.kt)("td",{parentName:"tr",align:null},"text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"(*Alias of title)"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"Playlist Type (private, public)"),(0,n.kt)("td",{parentName:"tr",align:null},"text")))),(0,n.kt)("h3",{id:"available-operator-values"},"Available operator values"),(0,n.kt)("p",null,"Select your operator (integer only!) based on the type or your selected search"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"rule_1_operator"),(0,n.kt)("th",{parentName:"tr",align:null},"Text"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"contains")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"does not contain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"starts with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"ends with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"is")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"is not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"sounds like")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"does not sound like")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"matches regular expression")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"does not match regular expression")))))}s.isMDXComponent=!0}}]);