"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[4006],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,g=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return t?n.createElement(g,i(i({ref:a},p),{},{components:t})):n.createElement(g,i({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3934:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=t(7462),r=(t(7294),t(3905));const l={title:"API5.1 Standards",metaTitle:"API5.1 Standards",description:"API documentation"},i=void 0,s={unversionedId:"versions/api-5.1/api-standards",id:"versions/api-5.1/api-standards",title:"API5.1 Standards",description:"API documentation",source:"@site/docs/versions/api-5.1/api-standards.md",sourceDirName:"versions/api-5.1",slug:"/versions/api-5.1/api-standards",permalink:"/api/versions/api-5.1/api-standards",draft:!1,tags:[],version:"current",frontMatter:{title:"API5.1 Standards",metaTitle:"API5.1 Standards",description:"API documentation"},sidebar:"api",previous:{title:"API5.1",permalink:"/api/versions/api-5.1/"},next:{title:"API5.1 XML Methods",permalink:"/api/versions/api-5.1/api-xml-methods"}},o={},d=[{value:"Rules regarding objects and data",id:"rules-regarding-objects-and-data",level:2},{value:"Rules regarding dates",id:"rules-regarding-dates",level:2},{value:"Tag is being renamed into Genre",id:"tag-is-being-renamed-into-genre",level:3},{value:"Genre will provide a genre ID as well as the name",id:"genre-will-provide-a-genre-id-as-well-as-the-name",level:3},{value:"Remove spaces from advanced_search rule names. (Backwards compatible with old names)",id:"remove-spaces-from-advanced_search-rule-names-backwards-compatible-with-old-names",level:3}],p={toc:d};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here are some basic standards that all Ampache API's should follow."),(0,r.kt)("p",null,"There will be inconsistencies between the current API's and we will be working on merging to a clear set of standards."),(0,r.kt)("h2",{id:"rules-regarding-objects-and-data"},"Rules regarding objects and data"),(0,r.kt)("p",null,"For now, here are a few basic rules that the API should follow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ID is a string for all objects."),(0,r.kt)("li",{parentName:"ul"},"Everything that has an ID should include this in the response."),(0,r.kt)("li",{parentName:"ul"},"All other integers are cast to int"),(0,r.kt)("li",{parentName:"ul"},"Same thing for doubles"),(0,r.kt)("li",{parentName:"ul"},"null and empty values may be returned. (for example XML will always return an object but it may not have any value)")),(0,r.kt)("h2",{id:"rules-regarding-dates"},"Rules regarding dates"),(0,r.kt)("p",null,"There are 2 date formats used in the API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.time.php"},"Unix epoch time")," (e.g. 1629345129)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO 8601 date")," (e.g. 2004-02-12T15:19:21+00:00)")),(0,r.kt)("p",null,"The Ampache handshake method returns dates in ISO 8601"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "session_expire": "2021-08-20T12:20:26+10:00",\n    "update": "2021-07-21T12:51:36+10:00",\n    "add": "2021-08-03T10:04:14+10:00",\n    "clean": "2021-08-03T10:05:54+10:00",\n}\n')),(0,r.kt)("p",null,"Podcasts and Podcast Episodes objects also return ISO dates for the following fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'podcast object "build_date" and "sync_date"'),(0,r.kt)("li",{parentName:"ul"},'podcast_episode object "pubdate"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "build_date": "1970-01-01T10:00:00+10:00",\n    "sync_date": "2021-08-20T11:08:30+10:00",\n    "podcast_episode": [\n        {\n            "pubdate": "2021-08-17T23:00:00+10:00",\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"All remaining Ampache dates should be returned as an integer using Unix epoch time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "last_add": "1627949046",\n    "last_clean": "1627949154",\n    "last_update": "1626835896"\n}\n')),(0,r.kt)("h3",{id:"tag-is-being-renamed-into-genre"},"Tag is being renamed into Genre"),(0,r.kt)("p",null,"Debate resolved. Ampache 5.0.0 will rename Tag and remove the old genre variable."),(0,r.kt)("h3",{id:"genre-will-provide-a-genre-id-as-well-as-the-name"},"Genre will provide a genre ID as well as the name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-XML"},'<genre id="20" count="1" ><![CDATA[Metal]]></tag>\n<genre id="37" count="1" ><![CDATA[Hard Rock]]></tag>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'        "genre": [\n            {\n                "id": "4",\n                "name": "Electronic"\n            },\n            {\n                "id": "77",\n                "name": "Experimental"\n            }\n        ],\n')),(0,r.kt)("h3",{id:"remove-spaces-from-advanced_search-rule-names-backwards-compatible-with-old-names"},"Remove spaces from advanced_search rule names. (Backwards compatible with old names)"),(0,r.kt)("p",null,"These rules have been changed to make sure everything has no spaces.\nThe backward compatible names will be removed in Ampache 5.0.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'has image' => 'has_image'"),(0,r.kt)("li",{parentName:"ul"},"'image height' => 'image_height'"),(0,r.kt)("li",{parentName:"ul"},"'image width' => 'image_width'"),(0,r.kt)("li",{parentName:"ul"},"'filename' => 'file' (Video search)")))}c.isMDXComponent=!0}}]);