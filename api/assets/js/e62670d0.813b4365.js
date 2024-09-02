"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[8963],{6930:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=a(4848),r=a(8453);const t={title:"Standards",metaTitle:"Standards",description:"API documentation"},i=void 0,l={id:"api-standards",title:"Standards",description:"API documentation",source:"@site/docs/api-standards.md",sourceDirName:".",slug:"/api-standards",permalink:"/api/api-standards",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Standards",metaTitle:"Standards",description:"API documentation"},sidebar:"api",previous:{title:"Ampache API",permalink:"/api/"},next:{title:"XML Methods",permalink:"/api/api-xml-methods"}},d={},c=[{value:"Rules regarding objects and data",id:"rules-regarding-objects-and-data",level:2},{value:"XML attributes and elements",id:"xml-attributes-and-elements",level:2},{value:"Rules regarding dates",id:"rules-regarding-dates",level:2},{value:"Tag is being renamed into Genre",id:"tag-is-being-renamed-into-genre",level:3},{value:"Genre will provide a genre ID as well as the name",id:"genre-will-provide-a-genre-id-as-well-as-the-name",level:3},{value:"Remove spaces from advanced_search rule names. (Backwards compatible with old names)",id:"remove-spaces-from-advanced_search-rule-names-backwards-compatible-with-old-names",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.RP)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Here are some basic standards that all Ampache API's should follow."}),"\n",(0,s.jsx)(n.p,{children:"There will be inconsistencies between the current API's and we will be working on merging to a clear set of standards."}),"\n",(0,s.jsx)(n.h2,{id:"rules-regarding-objects-and-data",children:"Rules regarding objects and data"}),"\n",(0,s.jsx)(n.p,{children:"For now, here are a few basic rules that the API should follow:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ID is a string for all objects."}),"\n",(0,s.jsx)(n.li,{children:"Everything that has an ID should include this in the response."}),"\n",(0,s.jsx)(n.li,{children:"All other integers are cast to int"}),"\n",(0,s.jsx)(n.li,{children:"Same thing for doubles"}),"\n",(0,s.jsx)(n.li,{children:"null and empty values may be returned. (for example XML will always return an object but it may not have any value)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"xml-attributes-and-elements",children:"XML attributes and elements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Any object that has an ID will add that as an attribute to the repsonse"}),"\n",(0,s.jsx)(n.li,{children:"All other information is to be returned as an element"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<album id="2">\n    <name><![CDATA[Colorsmoke EP]]></name>\n</album>\n'})}),"\n",(0,s.jsx)(n.p,{children:"The exception to this is for success & error messages which return a code attribute."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<success code="1"><![CDATA[successfully updated: temp_user]]></success>\n'})}),"\n",(0,s.jsx)(n.p,{children:"The message is also not an element."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<error code="400"><![CDATA[User does not have access to this function]]></error>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"rules-regarding-dates",children:"Rules regarding dates"}),"\n",(0,s.jsx)(n.p,{children:"There are 2 date formats used in the API:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.php.net/manual/en/function.time.php",children:"Unix epoch time"})," (e.g. 1629345129)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.iso.org/iso-8601-date-and-time-format.html",children:"ISO 8601 date"})," (e.g. 2004-02-12T15:19:21+00:00)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Ampache handshake method returns dates in ISO 8601"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JSON",children:'{\n    "session_expire": "2021-08-20T12:20:26+10:00",\n    "update": "2021-07-21T12:51:36+10:00",\n    "add": "2021-08-03T10:04:14+10:00",\n    "clean": "2021-08-03T10:05:54+10:00",\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Podcasts and Podcast Episodes objects also return ISO dates for the following fields"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'podcast object "build_date" and "sync_date"'}),"\n",(0,s.jsx)(n.li,{children:'podcast_episode object "pubdate"'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JSON",children:'{\n    "build_date": "1970-01-01T10:00:00+10:00",\n    "sync_date": "2021-08-20T11:08:30+10:00",\n    "podcast_episode": [\n        {\n            "pubdate": "2021-08-17T23:00:00+10:00",\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"All remaining Ampache dates should be returned as an integer using Unix epoch time"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JSON",children:'{\n    "last_add": 1627949046,\n    "last_clean": 1627949154,\n    "last_update": 1626835896\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"tag-is-being-renamed-into-genre",children:"Tag is being renamed into Genre"}),"\n",(0,s.jsx)(n.p,{children:"Ampache 5.0.0 renamed all tag objects into genre and removed the old genre element from the object."}),"\n",(0,s.jsx)(n.h3,{id:"genre-will-provide-a-genre-id-as-well-as-the-name",children:"Genre will provide a genre ID as well as the name"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<genre id="20">\n    <name><![CDATA[Metal]]><name>\n</genre>\n<genre id="37">\n    <name><![CDATA[Hard Rock]]><name>\n</genre>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JSON",children:'        "genre": [\n            {\n                "id": "4",\n                "name": "Electronic"\n            },\n            {\n                "id": "77",\n                "name": "Experimental"\n            }\n        ],\n'})}),"\n",(0,s.jsx)(n.h3,{id:"remove-spaces-from-advanced_search-rule-names-backwards-compatible-with-old-names",children:"Remove spaces from advanced_search rule names. (Backwards compatible with old names)"}),"\n",(0,s.jsxs)(n.p,{children:["These rules have been changed to make sure everything has no spaces.\nThe backward compatible names were ",(0,s.jsx)(n.strong,{children:"removed"})," in Ampache 5.0.0"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"'has image' => 'has_image'"}),"\n",(0,s.jsx)(n.li,{children:"'image height' => 'image_height'"}),"\n",(0,s.jsx)(n.li,{children:"'image width' => 'image_width'"}),"\n",(0,s.jsx)(n.li,{children:"'filename' => 'file' (Video search)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.RP)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,a)=>{a.d(n,{RP:()=>t,xA:()=>l});var s=a(6540);const r=s.createContext({});function t(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||i:t(e),s.createElement(r.Provider,{value:l},n)}}}]);