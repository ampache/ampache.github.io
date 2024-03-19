"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[5288],{5496:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var d=s(5893),r=s(1151);const n={title:"Artist Search",metaTitle:"Artist Search",description:"API documentation"},i=void 0,l={id:"advanced-search/artist-advanced-search",title:"Artist Search",description:"API documentation",source:"@site/docs/advanced-search/artist-advanced-search.md",sourceDirName:"advanced-search",slug:"/advanced-search/artist-advanced-search",permalink:"/api/advanced-search/artist-advanced-search",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Artist Search",metaTitle:"Artist Search",description:"API documentation"},sidebar:"api",previous:{title:"Album Search",permalink:"/api/advanced-search/album-advanced-search"},next:{title:"Label Search",permalink:"/api/advanced-search/label-advanced-search"}},c={},h=[{value:"Available search rules",id:"available-search-rules",level:3},{value:"Available operator values",id:"available-operator-values",level:3}];function a(e){const t={a:"a",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.ah)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:"This page focuses on a single object type."}),"\n",(0,d.jsxs)(t.p,{children:["Refer to the main ",(0,d.jsx)(t.a,{href:"https://ampache.org/api/api-advanced-search",children:"Advanced Search"})," page for further information regarding the advanced_search method."]}),"\n",(0,d.jsx)(t.h3,{id:"available-search-rules",children:"Available search rules"}),"\n",(0,d.jsx)(t.p,{children:"Select the type of search based on the type of data you are searching for. (songs, playlists, etc)"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"rule_1"}),(0,d.jsx)(t.th,{children:"Title"}),(0,d.jsx)(t.th,{children:"Operator Type"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"title"}),(0,d.jsx)(t.td,{children:"Title / Name"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"(*Alias of title)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song"}),(0,d.jsx)(t.td,{children:"Song Title"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song_title"}),(0,d.jsx)(t.td,{children:"(*Alias of song)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"album"}),(0,d.jsx)(t.td,{children:"Album Title"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"album_title"}),(0,d.jsx)(t.td,{children:"(*Alias of album)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artist"}),(0,d.jsx)(t.td,{children:"Artist"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artist_title"}),(0,d.jsx)(t.td,{children:"(*Alias of artist)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"summary"}),(0,d.jsx)(t.td,{children:"Summary"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"yearformed"}),(0,d.jsx)(t.td,{children:"Year Formed"}),(0,d.jsx)(t.td,{children:"numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"placeformed"}),(0,d.jsx)(t.td,{children:"Place Formed"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"myrating"}),(0,d.jsx)(t.td,{children:"My Rating"}),(0,d.jsx)(t.td,{children:"numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rating"}),(0,d.jsx)(t.td,{children:"Rating (Average)"}),(0,d.jsx)(t.td,{children:"numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"songrating"}),(0,d.jsx)(t.td,{children:"My Rating (Song)"}),(0,d.jsx)(t.td,{children:"numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"albumrating"}),(0,d.jsx)(t.td,{children:"My Rating (Album)"}),(0,d.jsx)(t.td,{children:"numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"favorite"}),(0,d.jsx)(t.td,{children:"Favorites"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"played_times"}),(0,d.jsx)(t.td,{children:"# Played"}),(0,d.jsx)(t.td,{children:"numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"last_play"}),(0,d.jsx)(t.td,{children:"My Last Play"}),(0,d.jsx)(t.td,{children:"days"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"last_play_or_skip"}),(0,d.jsx)(t.td,{children:"My Last Play OR skip"}),(0,d.jsx)(t.td,{children:"days"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"played"}),(0,d.jsx)(t.td,{children:"Played"}),(0,d.jsx)(t.td,{children:"boolean"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"myplayed"}),(0,d.jsx)(t.td,{children:"Played by Me"}),(0,d.jsx)(t.td,{children:"boolean"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"album_count"}),(0,d.jsx)(t.td,{children:"Album Count"}),(0,d.jsx)(t.td,{children:"numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song_count"}),(0,d.jsx)(t.td,{children:"Song Count"}),(0,d.jsx)(t.td,{children:"numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"time"}),(0,d.jsx)(t.td,{children:"Length (in minutes)"}),(0,d.jsx)(t.td,{children:"numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"genre"}),(0,d.jsx)(t.td,{children:"Genre"}),(0,d.jsx)(t.td,{children:"tags"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tag"}),(0,d.jsx)(t.td,{children:"(*Alias of genre)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song_genre"}),(0,d.jsx)(t.td,{children:"Song Genre"}),(0,d.jsx)(t.td,{children:"tags"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song_tag"}),(0,d.jsx)(t.td,{children:"(*Alias of song_genre)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artist_genre"}),(0,d.jsx)(t.td,{children:"Artist Genre"}),(0,d.jsx)(t.td,{children:"tags"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artist_tag"}),(0,d.jsx)(t.td,{children:"(*Alias of artist_genre)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"no_genre"}),(0,d.jsx)(t.td,{children:"No Genre"}),(0,d.jsx)(t.td,{children:"is_true"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"no_tag"}),(0,d.jsx)(t.td,{children:"(*Alias of no_genre)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"other_user"}),(0,d.jsx)(t.td,{children:"Another User"}),(0,d.jsx)(t.td,{children:"user_numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"playlist"}),(0,d.jsx)(t.td,{children:"Playlist"}),(0,d.jsx)(t.td,{children:"boolean_numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"playlist_name"}),(0,d.jsx)(t.td,{children:"Playlist Name"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"file"}),(0,d.jsx)(t.td,{children:"Filename"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"recent_played"}),(0,d.jsx)(t.td,{children:"Recently Played"}),(0,d.jsx)(t.td,{children:"numeric_limit"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"catalog"}),(0,d.jsx)(t.td,{children:"Catalog"}),(0,d.jsx)(t.td,{children:"boolean_numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mbid"}),(0,d.jsx)(t.td,{children:"MusicBrainz ID"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mbid_album"}),(0,d.jsx)(t.td,{children:"MusicBrainz ID (Album)"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mbid_artist"}),(0,d.jsx)(t.td,{children:"MusicBrainz ID (Artist)"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mbid_song"}),(0,d.jsx)(t.td,{children:"MusicBrainz ID (Song)"}),(0,d.jsx)(t.td,{children:"text"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"has_image"}),(0,d.jsx)(t.td,{children:"Local Image"}),(0,d.jsx)(t.td,{children:"boolean"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"image_height"}),(0,d.jsx)(t.td,{children:"Image Height"}),(0,d.jsx)(t.td,{children:"numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"image_width"}),(0,d.jsx)(t.td,{children:"Image Width"}),(0,d.jsx)(t.td,{children:"numeric"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"possible_duplicate"}),(0,d.jsx)(t.td,{children:"Possible Duplicate"}),(0,d.jsx)(t.td,{children:"is_true"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"possible_duplicate_album"}),(0,d.jsx)(t.td,{children:"Possible Duplicate Albums"}),(0,d.jsx)(t.td,{children:"is_true"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"available-operator-values",children:"Available operator values"}),"\n",(0,d.jsx)(t.p,{children:"Select your operator (integer only!) based on the type or your selected search"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"NOTE"})," with the numeric_limit and is_true operators the operator is ignored, but still required"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"center"},children:"rule_1_operator"}),(0,d.jsx)(t.th,{children:"text / tags"}),(0,d.jsx)(t.th,{children:"numeric / user_numeric"}),(0,d.jsx)(t.th,{children:"boolean, boolean_numeric, days"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,d.jsx)(t.td,{children:"contains"}),(0,d.jsx)(t.td,{children:"is greater than or equal to / has loved"}),(0,d.jsx)(t.td,{children:"is true / before (x) days ago"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,d.jsx)(t.td,{children:"does not contain"}),(0,d.jsx)(t.td,{children:"is less than or equal to / has rated 5 stars"}),(0,d.jsx)(t.td,{children:"is false / after (x) days ago"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,d.jsx)(t.td,{children:"starts with"}),(0,d.jsx)(t.td,{children:"equals / has rated 4 stars"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,d.jsx)(t.td,{children:"ends with"}),(0,d.jsx)(t.td,{children:"does not equal / has rated 3 stars"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,d.jsx)(t.td,{children:"is"}),(0,d.jsx)(t.td,{children:"is greater than / has rated 2 stars"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,d.jsx)(t.td,{children:"is not"}),(0,d.jsx)(t.td,{children:"is less than / has rated 1 stars"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"6 (Text Only)"}),(0,d.jsx)(t.td,{children:"sounds like"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"7 (Text Only)"}),(0,d.jsx)(t.td,{children:"does not sound like"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"8 (Text Only)"}),(0,d.jsx)(t.td,{children:"matches regular expression"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"9 (Text Only)"}),(0,d.jsx)(t.td,{children:"does not match regular expression"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Send the correct input based on the type of search."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsx)(t.tr,{children:(0,d.jsx)(t.th,{children:"rule_1_input"})})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsx)(t.tr,{children:(0,d.jsx)(t.td,{children:"text"})}),(0,d.jsx)(t.tr,{children:(0,d.jsx)(t.td,{children:"integer"})}),(0,d.jsx)(t.tr,{children:(0,d.jsx)(t.td,{children:"boolean"})})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},1151:(e,t,s)=>{s.d(t,{ah:()=>n});var d=s(7294);const r=d.createContext({});function n(e){const t=d.useContext(r);return d.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);