"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[2478],{1620:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var r=s(4848),a=s(8453);const n={title:"Playlist Search",metaTitle:"Playlist Search",description:"API documentation"},l=void 0,d={id:"advanced-search/playlist-advanced-search",title:"Playlist Search",description:"API documentation",source:"@site/docs/advanced-search/playlist-advanced-search.md",sourceDirName:"advanced-search",slug:"/advanced-search/playlist-advanced-search",permalink:"/api/advanced-search/playlist-advanced-search",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Playlist Search",metaTitle:"Playlist Search",description:"API documentation"},sidebar:"api",previous:{title:"Label Search",permalink:"/api/advanced-search/label-advanced-search"},next:{title:"Podcast Search",permalink:"/api/advanced-search/podcast-advanced-search"}},i={},c=[{value:"Available search rules",id:"available-search-rules",level:3},{value:"Available operator values",id:"available-operator-values",level:3}];function h(e){const t={a:"a",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This page focuses on a single object type."}),"\n",(0,r.jsxs)(t.p,{children:["Refer to the main ",(0,r.jsx)(t.a,{href:"https://ampache.org/api/api-advanced-search",children:"Advanced Search"})," page for further information regarding the advanced_search method."]}),"\n",(0,r.jsx)(t.h3,{id:"available-search-rules",children:"Available search rules"}),"\n",(0,r.jsx)(t.p,{children:"Select the type of search based on the type of data you are searching for. (songs, playlists, etc)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"rule_1"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Operator Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{children:"Title / Name"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"(*Alias of title)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"Playlist Type (private, public)"}),(0,r.jsx)(t.td,{children:"boolean_numeric"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"available-operator-values",children:"Available operator values"}),"\n",(0,r.jsx)(t.p,{children:"Select your operator (integer only!) based on the type or your selected search"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"rule_1_operator"}),(0,r.jsx)(t.th,{children:"text"}),(0,r.jsx)(t.th,{children:"boolean_numeric"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(t.td,{children:"contains"}),(0,r.jsx)(t.td,{children:"is true / before (x) days ago"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,r.jsx)(t.td,{children:"does not contain"}),(0,r.jsx)(t.td,{children:"is false / after (x) days ago"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,r.jsx)(t.td,{children:"starts with"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,r.jsx)(t.td,{children:"ends with"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,r.jsx)(t.td,{children:"is"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,r.jsx)(t.td,{children:"is not"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"6 (Text Only)"}),(0,r.jsx)(t.td,{children:"sounds like"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"7 (Text Only)"}),(0,r.jsx)(t.td,{children:"does not sound like"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"8 (Text Only)"}),(0,r.jsx)(t.td,{children:"matches regular expression"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"9 (Text Only)"}),(0,r.jsx)(t.td,{children:"does not match regular expression"}),(0,r.jsx)(t.td,{})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,a.RP)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{RP:()=>n});var r=s(6540);const a=r.createContext({});function n(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);