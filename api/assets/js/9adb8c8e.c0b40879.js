"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[6981],{9654:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(4848),t=n(8453);const o={title:"Share Browse",metaTitle:"Share Browse",description:"API documentation"},i=void 0,a={id:"browse/share-browse",title:"Share Browse",description:"API documentation",source:"@site/docs/browse/share-browse.md",sourceDirName:"browse",slug:"/browse/share-browse",permalink:"/api/browse/share-browse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Share Browse",metaTitle:"Share Browse",description:"API documentation"},sidebar:"api",previous:{title:"Podcast Browse",permalink:"/api/browse/podcast-browse"},next:{title:"Song Browse",permalink:"/api/browse/song-browse"}},l={},c=[{value:"Available browse filters",id:"available-browse-filters",level:2},{value:"Available browse sorts",id:"available-browse-sorts",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.RP)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"This page focuses on a single object type."}),"\n",(0,s.jsxs)(r.p,{children:["Refer to the main ",(0,s.jsx)(r.a,{href:"https://ampache.org/api/api-browse",children:"Api Browse methods"})," page for further information regarding the other Browse types method."]}),"\n",(0,s.jsx)(r.h2,{id:"available-browse-filters",children:"Available browse filters"}),"\n",(0,s.jsx)(r.p,{children:"You can filter responses by the object name using the following conditions."}),"\n",(0,s.jsxs)(r.p,{children:["e.g. ",(0,s.jsx)(r.code,{children:"cond=like,unplayed+tracks"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Name/Title string filters","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"like"}),"\n",(0,s.jsx)(r.li,{children:"not_like"}),"\n",(0,s.jsx)(r.li,{children:"equal"}),"\n",(0,s.jsx)(r.li,{children:"regex_match"}),"\n",(0,s.jsx)(r.li,{children:"regex_not_match"}),"\n",(0,s.jsx)(r.li,{children:"starts_with"}),"\n",(0,s.jsx)(r.li,{children:"not_starts_with"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-PHP",children:"    public const FILTERS = array(\n    );\n"})}),"\n",(0,s.jsx)(r.h2,{id:"available-browse-sorts",children:"Available browse sorts"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-PHP",children:"    protected array $sorts = array(\n        'id',\n        'object',\n        'object_type',\n        'user',\n        'creation_date',\n        'lastvisit_date',\n        'counter',\n        'max_counter',\n        'allow_stream',\n        'allow_download',\n        'expire'\n    );\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.RP)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{RP:()=>o,xA:()=>a});var s=n(6540);const t=s.createContext({});function o(e){const r=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function a({components:e,children:r,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||i:o(e),s.createElement(t.Provider,{value:a},r)}}}]);