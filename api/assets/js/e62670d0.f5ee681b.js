"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[2739],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,g=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return t?n.createElement(g,s(s({ref:a},c),{},{components:t})):n.createElement(g,s({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<l;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6549:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=t(7462),r=(t(7294),t(3905));const l={title:"API6 Standards",metaTitle:"API6 Standards",description:"API documentation"},s=void 0,i={unversionedId:"api-standards",id:"api-standards",title:"API6 Standards",description:"API documentation",source:"@site/docs/api-standards.md",sourceDirName:".",slug:"/api-standards",permalink:"/api/api-standards",draft:!1,tags:[],version:"current",frontMatter:{title:"API6 Standards",metaTitle:"API6 Standards",description:"API documentation"},sidebar:"api",previous:{title:"Ampache API",permalink:"/api/"},next:{title:"API6 XML Methods",permalink:"/api/api-xml-methods"}},o={},d=[{value:"Rules regarding objects and data",id:"rules-regarding-objects-and-data",level:2},{value:"XML attributes and elements",id:"xml-attributes-and-elements",level:2},{value:"Rules regarding dates",id:"rules-regarding-dates",level:2},{value:"Tag is being renamed into Genre",id:"tag-is-being-renamed-into-genre",level:3},{value:"Genre will provide a genre ID as well as the name",id:"genre-will-provide-a-genre-id-as-well-as-the-name",level:3},{value:"Remove spaces from advanced_search rule names. (Backwards compatible with old names)",id:"remove-spaces-from-advanced_search-rule-names-backwards-compatible-with-old-names",level:3}],c={toc:d};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here are some basic standards that all Ampache API's should follow."),(0,r.kt)("p",null,"There will be inconsistencies between the current API's and we will be working on merging to a clear set of standards."),(0,r.kt)("h2",{id:"rules-regarding-objects-and-data"},"Rules regarding objects and data"),(0,r.kt)("p",null,"For now, here are a few basic rules that the API should follow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ID is a string for all objects."),(0,r.kt)("li",{parentName:"ul"},"Everything that has an ID should include this in the response."),(0,r.kt)("li",{parentName:"ul"},"All other integers are cast to int"),(0,r.kt)("li",{parentName:"ul"},"Same thing for doubles"),(0,r.kt)("li",{parentName:"ul"},"null and empty values may be returned. (for example XML will always return an object but it may not have any value)")),(0,r.kt)("h2",{id:"xml-attributes-and-elements"},"XML attributes and elements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any object that has an ID will add that as an attribute to the repsonse"),(0,r.kt)("li",{parentName:"ul"},"All other information is to be returned as an element")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-XML"},'<album id="2">\n    <name><![CDATA[Colorsmoke EP]]></name>\n</album>\n')),(0,r.kt)("p",null,"The exception to this is for success & error messages which return a code attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-XML"},'<success code="1"><![CDATA[successfully updated: temp_user]]></success>\n')),(0,r.kt)("p",null,"The message is also not an element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-XML"},'<error code="400"><![CDATA[User does not have access to this function]]></error>\n')),(0,r.kt)("h2",{id:"rules-regarding-dates"},"Rules regarding dates"),(0,r.kt)("p",null,"There are 2 date formats used in the API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.time.php"},"Unix epoch time")," (e.g. 1629345129)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO 8601 date")," (e.g. 2004-02-12T15:19:21+00:00)")),(0,r.kt)("p",null,"The Ampache handshake method returns dates in ISO 8601"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "session_expire": "2021-08-20T12:20:26+10:00",\n    "update": "2021-07-21T12:51:36+10:00",\n    "add": "2021-08-03T10:04:14+10:00",\n    "clean": "2021-08-03T10:05:54+10:00",\n}\n')),(0,r.kt)("p",null,"Podcasts and Podcast Episodes objects also return ISO dates for the following fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'podcast object "build_date" and "sync_date"'),(0,r.kt)("li",{parentName:"ul"},'podcast_episode object "pubdate"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "build_date": "1970-01-01T10:00:00+10:00",\n    "sync_date": "2021-08-20T11:08:30+10:00",\n    "podcast_episode": [\n        {\n            "pubdate": "2021-08-17T23:00:00+10:00",\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"All remaining Ampache dates should be returned as an integer using Unix epoch time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "last_add": 1627949046,\n    "last_clean": 1627949154,\n    "last_update": 1626835896\n}\n')),(0,r.kt)("h3",{id:"tag-is-being-renamed-into-genre"},"Tag is being renamed into Genre"),(0,r.kt)("p",null,"Ampache 5.0.0 renamed all tag objects into genre and removed the old genre element from the object."),(0,r.kt)("h3",{id:"genre-will-provide-a-genre-id-as-well-as-the-name"},"Genre will provide a genre ID as well as the name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-XML"},'<genre id="20">\n    <name><![CDATA[Metal]]><name>\n</genre>\n<genre id="37">\n    <name><![CDATA[Hard Rock]]><name>\n</genre>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'        "genre": [\n            {\n                "id": "4",\n                "name": "Electronic"\n            },\n            {\n                "id": "77",\n                "name": "Experimental"\n            }\n        ],\n')),(0,r.kt)("h3",{id:"remove-spaces-from-advanced_search-rule-names-backwards-compatible-with-old-names"},"Remove spaces from advanced_search rule names. (Backwards compatible with old names)"),(0,r.kt)("p",null,"These rules have been changed to make sure everything has no spaces.\nThe backward compatible names were ",(0,r.kt)("strong",{parentName:"p"},"removed")," in Ampache 5.0.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'has image' => 'has_image'"),(0,r.kt)("li",{parentName:"ul"},"'image height' => 'image_height'"),(0,r.kt)("li",{parentName:"ul"},"'image width' => 'image_width'"),(0,r.kt)("li",{parentName:"ul"},"'filename' => 'file' (Video search)")))}p.isMDXComponent=!0}}]);