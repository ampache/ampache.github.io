"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[5162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=i(a),m=n,k=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const l={title:"Podcast Search",metaTitle:"Podcast Search",description:"API documentation"},o=void 0,p={unversionedId:"advanced-search/podcast-advanced-search",id:"advanced-search/podcast-advanced-search",title:"Podcast Search",description:"API documentation",source:"@site/docs/advanced-search/podcast-advanced-search.md",sourceDirName:"advanced-search",slug:"/advanced-search/podcast-advanced-search",permalink:"/api/advanced-search/podcast-advanced-search",draft:!1,tags:[],version:"current",frontMatter:{title:"Podcast Search",metaTitle:"Podcast Search",description:"API documentation"},sidebar:"api",previous:{title:"Playlist Search",permalink:"/api/advanced-search/playlist-advanced-search"},next:{title:"Podcast Episode Search",permalink:"/api/advanced-search/podcast-episode-advanced-search"}},c={},i=[{value:"Available search rules",id:"available-search-rules",level:3},{value:"Available operator values",id:"available-operator-values",level:3}],d={toc:i};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page focuses on a single object type."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE")," This type is only available in Ampache develop (Ampache 5.5.0+)"),(0,n.kt)("p",null,"Refer to the main ",(0,n.kt)("a",{parentName:"p",href:"https://ampache.org/api/api-advanced-search"},"Advanced Search")," page for further information regarding the advanced_search method."),(0,n.kt)("h3",{id:"available-search-rules"},"Available search rules"),(0,n.kt)("p",null,"Select the type of search based on the type of data you are searching for. (songs, playlists, etc)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"rule_1"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Operator Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},"Title / Name"),(0,n.kt)("td",{parentName:"tr",align:null},"text")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"(*Alias of title)"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"podcast_episode"),(0,n.kt)("td",{parentName:"tr",align:null},"Podcast Episode"),(0,n.kt)("td",{parentName:"tr",align:null},"text")))),(0,n.kt)("h3",{id:"available-operator-values"},"Available operator values"),(0,n.kt)("p",null,"Select your operator (integer only!) based on the type or your selected search"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"rule_1_operator"),(0,n.kt)("th",{parentName:"tr",align:null},"Text"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"contains")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"does not contain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"starts with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"ends with")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"is")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"is not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"sounds like")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"does not sound like")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"matches regular expression")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"does not match regular expression")))))}s.isMDXComponent=!0}}]);