"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[5073],{393:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"browse/podcast_episode-browse","title":"Podcast Browse","description":"API documentation","source":"@site/docs/browse/podcast_episode-browse.md","sourceDirName":"browse","slug":"/browse/podcast_episode-browse","permalink":"/api/browse/podcast_episode-browse","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Podcast Browse","metaTitle":"Podcast Browse","description":"API documentation"},"sidebar":"api","previous":{"title":"Playlist Browse","permalink":"/api/browse/playlist-browse"},"next":{"title":"Podcast Browse","permalink":"/api/browse/podcast-browse"}}');var r=s(4848),a=s(8453);const o={title:"Podcast Browse",metaTitle:"Podcast Browse",description:"API documentation"},i=void 0,l={},c=[{value:"Available browse filters",id:"available-browse-filters",level:2},{value:"Available browse sorts",id:"available-browse-sorts",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This page focuses on a single object type."}),"\n",(0,r.jsxs)(t.p,{children:["Refer to the main ",(0,r.jsx)(t.a,{href:"https://ampache.org/api/api-browse",children:"Api Browse methods"})," page for further information regarding the other Browse types method."]}),"\n",(0,r.jsx)(t.h2,{id:"available-browse-filters",children:"Available browse filters"}),"\n",(0,r.jsx)(t.p,{children:"You can filter responses by the object name using the following conditions."}),"\n",(0,r.jsxs)(t.p,{children:["e.g. ",(0,r.jsx)(t.code,{children:"cond=like,unplayed+tracks"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Name/Title string filters","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"like"}),"\n",(0,r.jsx)(t.li,{children:"not_like"}),"\n",(0,r.jsx)(t.li,{children:"equal"}),"\n",(0,r.jsx)(t.li,{children:"regex_match"}),"\n",(0,r.jsx)(t.li,{children:"regex_not_match"}),"\n",(0,r.jsx)(t.li,{children:"starts_with"}),"\n",(0,r.jsx)(t.li,{children:"not_starts_with"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-PHP",children:"    public const FILTERS = array(\n        'podcast',\n        'catalog',\n        'catalog_enabled',\n        'user_catalog',\n        'add_gt',\n        'add_lt',\n        'unplayed'\n    );\n"})}),"\n",(0,r.jsx)(t.h2,{id:"available-browse-sorts",children:"Available browse sorts"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-PHP",children:"    protected array $sorts = array(\n        'id',\n        'podcast',\n        'title',\n        'name',\n        'catalog',\n        'category',\n        'author',\n        'time',\n        'pubdate',\n        'state',\n        'rand',\n        'addition_time',\n        'total_count',\n        'total_skip',\n        'rating',\n        'user_flag',\n        'user_flag_rating',\n    );\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.RP)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{RP:()=>a,xA:()=>i});var n=s(6540);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:a(e),n.createElement(r.Provider,{value:i},t)}}}]);