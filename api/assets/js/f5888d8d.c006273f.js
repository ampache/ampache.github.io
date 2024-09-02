"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[1052],{9794:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(4848),t=r(8453);const i={title:"Genre Browse",metaTitle:"Genre Browse",description:"API documentation"},o=void 0,a={id:"browse/genre-browse",title:"Genre Browse",description:"API documentation",source:"@site/docs/browse/genre-browse.md",sourceDirName:"browse",slug:"/browse/genre-browse",permalink:"/api/browse/genre-browse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Genre Browse",metaTitle:"Genre Browse",description:"API documentation"},sidebar:"api",previous:{title:"Follower Browse",permalink:"/api/browse/follower-browse"},next:{title:"Label Browse",permalink:"/api/browse/label-browse"}},l={},c=[{value:"Available browse filters",id:"available-browse-filters",level:2},{value:"Available browse sorts",id:"available-browse-sorts",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.RP)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This page focuses on a single object type."}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the main ",(0,s.jsx)(n.a,{href:"https://ampache.org/api/api-browse",children:"Api Browse methods"})," page for further information regarding the other Browse types method."]}),"\n",(0,s.jsx)(n.h2,{id:"available-browse-filters",children:"Available browse filters"}),"\n",(0,s.jsx)(n.p,{children:"You can filter responses by the object name using the following conditions."}),"\n",(0,s.jsxs)(n.p,{children:["e.g. ",(0,s.jsx)(n.code,{children:"cond=like,unplayed+tracks"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Name/Title string filters","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"like"}),"\n",(0,s.jsx)(n.li,{children:"not_like"}),"\n",(0,s.jsx)(n.li,{children:"equal"}),"\n",(0,s.jsx)(n.li,{children:"regex_match"}),"\n",(0,s.jsx)(n.li,{children:"regex_not_match"}),"\n",(0,s.jsx)(n.li,{children:"starts_with"}),"\n",(0,s.jsx)(n.li,{children:"not_starts_with"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PHP",children:"    public const FILTERS = array(\n        'exact_match',\n        'hidden',\n        'object_type',\n        'regex_match',\n        'regex_not_match',\n        'genre',\n        'rating',\n        'user_flag',\n        'user_flag_rating',\n    );\n"})}),"\n",(0,s.jsx)(n.h2,{id:"available-browse-sorts",children:"Available browse sorts"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-PHP",children:"    protected array $sorts = array(\n        'id',\n        'rand',\n        'genre',\n        'name'\n    );\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.RP)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{RP:()=>i,xA:()=>a});var s=r(6540);const t=s.createContext({});function i(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||o:i(e),s.createElement(t.Provider,{value:a},n)}}}]);