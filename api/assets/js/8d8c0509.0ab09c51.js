"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[3811],{4538:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(5893),t=n(1151);const i={title:"Label Browse",metaTitle:"Label Browse",description:"API documentation"},a=void 0,l={id:"browse/label-browse",title:"Label Browse",description:"API documentation",source:"@site/docs/browse/label-browse.md",sourceDirName:"browse",slug:"/browse/label-browse",permalink:"/api/browse/label-browse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Label Browse",metaTitle:"Label Browse",description:"API documentation"},sidebar:"api",previous:{title:"Genre Browse",permalink:"/api/browse/genre-browse"},next:{title:"License Browse",permalink:"/api/browse/license-browse"}},o={},c=[{value:"Available browse filters",id:"available-browse-filters",level:2},{value:"Available browse sorts",id:"available-browse-sorts",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"This page focuses on a single object type."}),"\n",(0,s.jsxs)(r.p,{children:["Refer to the main ",(0,s.jsx)(r.a,{href:"https://ampache.org/api/api-browse",children:"Api Browse methods"})," page for further information regarding the other Browse types method."]}),"\n",(0,s.jsx)(r.h2,{id:"available-browse-filters",children:"Available browse filters"}),"\n",(0,s.jsx)(r.p,{children:"You can filter responses by the object name using the following conditions."}),"\n",(0,s.jsxs)(r.p,{children:["e.g. ",(0,s.jsx)(r.code,{children:"cond=like,unplayed+tracks"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Name/Title string filters","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"like"}),"\n",(0,s.jsx)(r.li,{children:"not_like"}),"\n",(0,s.jsx)(r.li,{children:"equal"}),"\n",(0,s.jsx)(r.li,{children:"regex_match"}),"\n",(0,s.jsx)(r.li,{children:"regex_not_match"}),"\n",(0,s.jsx)(r.li,{children:"starts_with"}),"\n",(0,s.jsx)(r.li,{children:"not_starts_with"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-PHP",children:"    public const FILTERS = array(\n        'exact_match',\n        'regex_match',\n        'regex_not_match',\n        'starts_with'\n    );\n"})}),"\n",(0,s.jsx)(r.h2,{id:"available-browse-sorts",children:"Available browse sorts"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-PHP",children:"    protected array $sorts = array(\n        'id',\n        'title',\n        'name',\n        'category',\n        'user',\n        'creation_date',\n        'mbid',\n        'country',\n        'active',\n        'rating',\n        'user_flag',\n        'user_flag_rating',\n    );\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.ah)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{ah:()=>i});var s=n(7294);const t=s.createContext({});function i(e){const r=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}}}]);