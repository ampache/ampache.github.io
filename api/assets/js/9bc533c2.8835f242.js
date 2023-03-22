"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[3997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,f=m["".concat(c,".").concat(b)]||m[b]||l[b]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Subsonic API",metaTitle:"Subsonic API",description:"API documentation"},o=void 0,s={unversionedId:"subsonic",id:"subsonic",title:"Subsonic API",description:"API documentation",source:"@site/docs/subsonic.md",sourceDirName:".",slug:"/subsonic",permalink:"/api/subsonic",draft:!1,tags:[],version:"current",frontMatter:{title:"Subsonic API",metaTitle:"Subsonic API",description:"API documentation"},sidebar:"api",previous:{title:"Video Search",permalink:"/api/advanced-search/video-advanced-search"},next:{title:"API5",permalink:"/api/api-5/"}},c={},p=[{value:"Subsonic API support",id:"subsonic-api-support",level:2},{value:"Subsonic Examples",id:"subsonic-examples",level:2}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"subsonic-api-support"},"Subsonic API support"),(0,a.kt)("p",null,"Ampache implements the ",(0,a.kt)("a",{parentName:"p",href:"http://www.subsonic.org/pages/api.jsp"},"Subsonic API")," with some minor extensions for clients."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Compatible Versions:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ampache6 => Subsonic ",(0,a.kt)("a",{parentName:"li",href:"http://www.subsonic.org/pages/inc/api/schema/subsonic-rest-api-1.16.1.xsd"},"1.16.1")),(0,a.kt)("li",{parentName:"ul"},"Ampache5 => Subsonic ",(0,a.kt)("a",{parentName:"li",href:"http://www.subsonic.org/pages/inc/api/schema/subsonic-rest-api-1.13.0.xsd"},"1.13.0")),(0,a.kt)("li",{parentName:"ul"},"Ampache4 => Subsonic ",(0,a.kt)("a",{parentName:"li",href:"http://www.subsonic.org/pages/inc/api/schema/subsonic-rest-api-1.13.0.xsd"},"1.13.0")),(0,a.kt)("li",{parentName:"ul"},"Ampache3 => Subsonic ",(0,a.kt)("a",{parentName:"li",href:"http://www.subsonic.org/pages/inc/api/schema/subsonic-rest-api-1.11.0.xsd"},"1.11.0"))),(0,a.kt)("h2",{id:"subsonic-examples"},"Subsonic Examples"),(0,a.kt)("p",null,"You can get examples from an official Subsonic release as well as examples from Ampache."),(0,a.kt)("p",null,"These servers are using a Subsonic 1.16.1 compatible API version."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ampache/python3-ampache/tree/api6/docs/subsonic-6.1.6"},"Subsonic 6.1.6 (1.16.1)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ampache/python3-ampache/tree/api6/docs/ampache-subsonic"},"Ampache Subsonic (1.16.1"))))}l.isMDXComponent=!0}}]);