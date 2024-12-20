"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[7948],{3208:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"advanced-search/podcast-advanced-search","title":"Podcast Search","description":"API documentation","source":"@site/docs/advanced-search/podcast-advanced-search.md","sourceDirName":"advanced-search","slug":"/advanced-search/podcast-advanced-search","permalink":"/api/advanced-search/podcast-advanced-search","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Podcast Search","metaTitle":"Podcast Search","description":"API documentation"},"sidebar":"api","previous":{"title":"Playlist Search","permalink":"/api/advanced-search/playlist-advanced-search"},"next":{"title":"Podcast Episode Search","permalink":"/api/advanced-search/podcast-episode-advanced-search"}}');var r=s(4848),n=s(8453);const l={title:"Podcast Search",metaTitle:"Podcast Search",description:"API documentation"},i=void 0,a={},c=[{value:"Available search rules",id:"available-search-rules",level:3},{value:"Available operator values",id:"available-operator-values",level:3}];function h(e){const t={a:"a",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This page focuses on a single object type."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"NOTE"})," This type is only available in Ampache develop (Ampache 5.5.0+)"]}),"\n",(0,r.jsxs)(t.p,{children:["Refer to the main ",(0,r.jsx)(t.a,{href:"https://ampache.org/api/api-advanced-search",children:"Advanced Search"})," page for further information regarding the advanced_search method."]}),"\n",(0,r.jsx)(t.h3,{id:"available-search-rules",children:"Available search rules"}),"\n",(0,r.jsx)(t.p,{children:"Select the type of search based on the type of data you are searching for. (songs, playlists, etc)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"rule_1"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Operator Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{children:"Title / Name"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"(*Alias of title)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"podcast_episode"}),(0,r.jsx)(t.td,{children:"Podcast Episode"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"podcast_episode_title"}),(0,r.jsx)(t.td,{children:"(*Alias of podcast_episode)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"played_times"}),(0,r.jsx)(t.td,{children:"# Played"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"skipped_times"}),(0,r.jsx)(t.td,{children:"# Skipped"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"play_skip_ratio"}),(0,r.jsx)(t.td,{children:"Played/Skipped ratio"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_play"}),(0,r.jsx)(t.td,{children:"My Last Play"}),(0,r.jsx)(t.td,{children:"days"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_play_or_skip"}),(0,r.jsx)(t.td,{children:"My Last Play OR skip"}),(0,r.jsx)(t.td,{children:"days"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"played"}),(0,r.jsx)(t.td,{children:"Played"}),(0,r.jsx)(t.td,{children:"boolean"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"myplayed"}),(0,r.jsx)(t.td,{children:"Played by Me"}),(0,r.jsx)(t.td,{children:"boolean"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"time"}),(0,r.jsx)(t.td,{children:"Length (in minutes)"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"file"}),(0,r.jsx)(t.td,{children:"Filename"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"state"}),(0,r.jsx)(t.td,{children:"File state (completed, pending skipped)"}),(0,r.jsx)(t.td,{children:"boolean_numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"status"}),(0,r.jsx)(t.td,{children:"(*Alias of state)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"added"}),(0,r.jsx)(t.td,{children:"Added"}),(0,r.jsx)(t.td,{children:"date"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pubdate"}),(0,r.jsx)(t.td,{children:"Publication Date"}),(0,r.jsx)(t.td,{children:"date"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"available-operator-values",children:"Available operator values"}),"\n",(0,r.jsx)(t.p,{children:"Select your operator (integer only!) based on the type or your selected search"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"rule_1_operator"}),(0,r.jsx)(t.th,{children:"text"}),(0,r.jsx)(t.th,{children:"numeric"}),(0,r.jsx)(t.th,{children:"date"}),(0,r.jsx)(t.th,{children:"boolean, boolean_numeric, days"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(t.td,{children:"contains"}),(0,r.jsx)(t.td,{children:"is greater than or equal to / has loved"}),(0,r.jsx)(t.td,{children:"before"}),(0,r.jsx)(t.td,{children:"is true / before (x) days ago"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,r.jsx)(t.td,{children:"does not contain"}),(0,r.jsx)(t.td,{children:"is less than or equal to / has rated 5 stars"}),(0,r.jsx)(t.td,{children:"after"}),(0,r.jsx)(t.td,{children:"is false / after (x) days ago"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,r.jsx)(t.td,{children:"starts with"}),(0,r.jsx)(t.td,{children:"equals / has rated 4 stars"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,r.jsx)(t.td,{children:"ends with"}),(0,r.jsx)(t.td,{children:"does not equal / has rated 3 stars"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,r.jsx)(t.td,{children:"is"}),(0,r.jsx)(t.td,{children:"is greater than / has rated 2 stars"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,r.jsx)(t.td,{children:"is not"}),(0,r.jsx)(t.td,{children:"is less than / has rated 1 stars"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"6 (Text Only)"}),(0,r.jsx)(t.td,{children:"sounds like"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"7 (Text Only)"}),(0,r.jsx)(t.td,{children:"does not sound like"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"8 (Text Only)"}),(0,r.jsx)(t.td,{children:"matches regular expression"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"9 (Text Only)"}),(0,r.jsx)(t.td,{children:"does not match regular expression"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,n.RP)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{RP:()=>n,xA:()=>i});var d=s(6540);const r=d.createContext({});function n(e){const t=d.useContext(r);return d.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:n(e),d.createElement(r.Provider,{value:i},t)}}}]);