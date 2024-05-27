"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[9965],{7166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=a(5893),n=a(1151);const r={title:"Playlist Browse",metaTitle:"Playlist Browse",description:"API documentation"},l=void 0,i={id:"browse/playlist-browse",title:"Playlist Browse",description:"API documentation",source:"@site/docs/browse/playlist-browse.md",sourceDirName:"browse",slug:"/browse/playlist-browse",permalink:"/api/browse/playlist-browse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Playlist Browse",metaTitle:"Playlist Browse",description:"API documentation"},sidebar:"api",previous:{title:"Live Stream Browse",permalink:"/api/browse/live_stream-browse"},next:{title:"Podcast Browse",permalink:"/api/browse/podcast_episode-browse"}},o={},c=[{value:"Available browse filters",id:"available-browse-filters",level:3},{value:"Available browse sorts",id:"available-browse-sorts",level:3}];function p(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This page focuses on playlist browses."}),"\n",(0,s.jsxs)(t.p,{children:["Refer to the main ",(0,s.jsx)(t.a,{href:"https://ampache.org/api/api-browse",children:"Api Browse methods"})," page for further information regarding the other Browse types method."]}),"\n",(0,s.jsx)(t.p,{children:"In the Ampache API a playlist is actually a combined object of static playlists and dynamic searches."}),"\n",(0,s.jsx)(t.p,{children:"This allows you to list these objects together in a single call."}),"\n",(0,s.jsx)(t.p,{children:"There are options to ignore, hide or filter searches from your playlist calls but playlist calls will return both types of object."}),"\n",(0,s.jsx)(t.h3,{id:"available-browse-filters",children:"Available browse filters"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-PHP",children:"    // playlist_search\n    public const FILTERS = array(\n        'hide_dupe_smartlist',\n        'smartlist',\n    );\n\n    // smartplaylist\n    // playlist\n    public const FILTERS = array(\n        'alpha_match',\n        'exact_match',\n        'not_like',\n        'playlist_open',\n        'playlist_type',\n        'playlist_user',\n        'regex_match',\n        'regex_not_match',\n        'starts_with',\n        'not_starts_with'\n    );\n"})}),"\n",(0,s.jsx)(t.h3,{id:"available-browse-sorts",children:"Available browse sorts"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-PHP",children:"    // playlist_search\n    protected array $sorts = array(\n        'rand',\n        'date',\n        'last_count',\n        'last_update',\n        'title',\n        'name',\n        'rating',\n        'type',\n        'user',\n        'username',\n        'user_flag'\n    );\n\n    // playlist\n    protected array $sorts = array(\n        'rand',\n        'date',\n        'last_count',\n        'last_update',\n        'title',\n        'name',\n        'rating',\n        'type',\n        'user',\n        'username',\n        'user_flag'\n    );\n\n    // smartplaylist\n    protected array $sorts = array(\n        'date',\n        'last_count',\n        'last_update',\n        'title',\n        'name',\n        'limit',\n        'rand',\n        'random',\n        'rating',\n        'type',\n        'user',\n        'username',\n        'user_flag'\n    );\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.ah)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,t,a)=>{a.d(t,{ah:()=>r});var s=a(7294);const n=s.createContext({});function r(e){const t=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);