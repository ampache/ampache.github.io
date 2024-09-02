"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[1148],{4730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(4848),s=t(8453);const i={title:"Video Browse",metaTitle:"Video Browse",description:"API documentation"},a=void 0,o={id:"browse/video-browse",title:"Video Browse",description:"API documentation",source:"@site/docs/browse/video-browse.md",sourceDirName:"browse",slug:"/browse/video-browse",permalink:"/api/browse/video-browse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Video Browse",metaTitle:"Video Browse",description:"API documentation"},sidebar:"api",previous:{title:"User Browse",permalink:"/api/browse/user-browse"},next:{title:"advanced_search",permalink:"/api/api-advanced-search"}},l={},c=[{value:"Available browse filters",id:"available-browse-filters",level:2},{value:"Available browse sorts",id:"available-browse-sorts",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This page focuses on a single object type."}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the main ",(0,r.jsx)(n.a,{href:"https://ampache.org/api/api-browse",children:"Api Browse methods"})," page for further information regarding the other Browse types method."]}),"\n",(0,r.jsx)(n.h2,{id:"available-browse-filters",children:"Available browse filters"}),"\n",(0,r.jsx)(n.p,{children:"You can filter responses by the object name using the following conditions."}),"\n",(0,r.jsxs)(n.p,{children:["e.g. ",(0,r.jsx)(n.code,{children:"cond=like,unplayed+tracks"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Name/Title string filters","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"like"}),"\n",(0,r.jsx)(n.li,{children:"not_like"}),"\n",(0,r.jsx)(n.li,{children:"equal"}),"\n",(0,r.jsx)(n.li,{children:"regex_match"}),"\n",(0,r.jsx)(n.li,{children:"regex_not_match"}),"\n",(0,r.jsx)(n.li,{children:"starts_with"}),"\n",(0,r.jsx)(n.li,{children:"not_starts_with"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PHP",children:"    public const FILTERS = array(\n        'add_gt',\n        'add_lt',\n        'catalog',\n        'catalog_enabled',\n        'user_catalog',\n        'genre',\n        'update_gt',\n        'update_lt'\n    );\n"})}),"\n",(0,r.jsx)(n.h2,{id:"available-browse-sorts",children:"Available browse sorts"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PHP",children:"    protected array $sorts = array(\n        'id',\n        'title',\n        'name',\n        'catalog',\n        'resolution',\n        'length',\n        'codec',\n        'addition_time',\n        'update_time',\n        'total_count',\n        'total_skip',\n        'rand',\n        'rating',\n        'user_flag',\n        'user_flag_rating',\n    );\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.RP)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{RP:()=>i,xA:()=>o});var r=t(6540);const s=r.createContext({});function i(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:i(e),r.createElement(s.Provider,{value:o},n)}}}]);