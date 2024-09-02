"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[3399],{354:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var r=s(4848),d=s(8453);const n={title:"Song Search",metaTitle:"Song Search",description:"API documentation"},i=void 0,l={id:"advanced-search/song-advanced-search",title:"Song Search",description:"API documentation",source:"@site/docs/advanced-search/song-advanced-search.md",sourceDirName:"advanced-search",slug:"/advanced-search/song-advanced-search",permalink:"/api/advanced-search/song-advanced-search",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Song Search",metaTitle:"Song Search",description:"API documentation"},sidebar:"api",previous:{title:"advanced_search",permalink:"/api/api-advanced-search"},next:{title:"Album Search",permalink:"/api/advanced-search/album-advanced-search"}},c={},h=[{value:"Available search rules",id:"available-search-rules",level:3},{value:"Available operator values",id:"available-operator-values",level:3},{value:"Metadata operator table",id:"metadata-operator-table",level:3}];function x(e){const t={a:"a",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This page focuses on a single object type."}),"\n",(0,r.jsxs)(t.p,{children:["Refer to the main ",(0,r.jsx)(t.a,{href:"https://ampache.org/api/api-advanced-search",children:"Advanced Search"})," page for further information regarding the advanced_search method."]}),"\n",(0,r.jsx)(t.h3,{id:"available-search-rules",children:"Available search rules"}),"\n",(0,r.jsx)(t.p,{children:"Select the type of search based on the type of data you are searching for. (songs, playlists, etc)"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"rule_1"}),(0,r.jsx)(t.th,{children:"Title"}),(0,r.jsx)(t.th,{children:"Operator Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"anywhere"}),(0,r.jsx)(t.td,{children:"Any searchable text"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{children:"Title / Name"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"(*Alias of title)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"song"}),(0,r.jsx)(t.td,{children:"(*Alias of title)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"song_title"}),(0,r.jsx)(t.td,{children:"(*Alias of title)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"album"}),(0,r.jsx)(t.td,{children:"Album Title"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"album_title"}),(0,r.jsx)(t.td,{children:"(*Alias of album)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"artist"}),(0,r.jsx)(t.td,{children:"Artist"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"artist_title"}),(0,r.jsx)(t.td,{children:"(*Alias of artist)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"album_artist"}),(0,r.jsx)(t.td,{children:"Album Artist"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"album_artist_title"}),(0,r.jsx)(t.td,{children:"(*Alias of album_artist)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"song_artist"}),(0,r.jsx)(t.td,{children:"Song Artist"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"song_artist_title"}),(0,r.jsx)(t.td,{children:"(*Alias of song_artist)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"composer"}),(0,r.jsx)(t.td,{children:"Composer"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"track"}),(0,r.jsx)(t.td,{children:"Track"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"year"}),(0,r.jsx)(t.td,{children:"Year"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"myrating"}),(0,r.jsx)(t.td,{children:"My Rating"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rating"}),(0,r.jsx)(t.td,{children:"Rating (Average)"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"songrating"}),(0,r.jsx)(t.td,{children:"My Rating (Song)"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"albumrating"}),(0,r.jsx)(t.td,{children:"My Rating (Album)"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"artistrating"}),(0,r.jsx)(t.td,{children:"My Rating (Artist)"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"favorite"}),(0,r.jsx)(t.td,{children:"Favorites"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"favorite_album"}),(0,r.jsx)(t.td,{children:"Favorites (Album)"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"favorite_artist"}),(0,r.jsx)(t.td,{children:"Favorites (Artist)"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"played_times"}),(0,r.jsx)(t.td,{children:"# Played"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"skipped_times"}),(0,r.jsx)(t.td,{children:"# Skipped"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"play_skip_ratio"}),(0,r.jsx)(t.td,{children:"Played/Skipped ratio"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_play"}),(0,r.jsx)(t.td,{children:"My Last Play"}),(0,r.jsx)(t.td,{children:"days"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_play_or_skip"}),(0,r.jsx)(t.td,{children:"My Last Play OR skip"}),(0,r.jsx)(t.td,{children:"days"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"played"}),(0,r.jsx)(t.td,{children:"Played"}),(0,r.jsx)(t.td,{children:"boolean"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"myplayed"}),(0,r.jsx)(t.td,{children:"Played by Me"}),(0,r.jsx)(t.td,{children:"boolean"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"myplayedalbum"}),(0,r.jsx)(t.td,{children:"Played by Me (Album)"}),(0,r.jsx)(t.td,{children:"boolean"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"myplayedartist"}),(0,r.jsx)(t.td,{children:"Played by Me (Artist)"}),(0,r.jsx)(t.td,{children:"boolean"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"time"}),(0,r.jsx)(t.td,{children:"Length (in minutes)"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"genre"}),(0,r.jsx)(t.td,{children:"Genre"}),(0,r.jsx)(t.td,{children:"tags"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tag"}),(0,r.jsx)(t.td,{children:"(*Alias of genre)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"song_genre"}),(0,r.jsx)(t.td,{children:"(*Alias of genre)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"song_tag"}),(0,r.jsx)(t.td,{children:"(*Alias of genre)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"album_genre"}),(0,r.jsx)(t.td,{children:"Album Genre"}),(0,r.jsx)(t.td,{children:"tags"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"album_tag"}),(0,r.jsx)(t.td,{children:"(*Alias of album_genre)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"artist_genre"}),(0,r.jsx)(t.td,{children:"Artist Genre"}),(0,r.jsx)(t.td,{children:"tags"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"artist_tag"}),(0,r.jsx)(t.td,{children:"(*Alias of artist_genre)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"no_genre"}),(0,r.jsx)(t.td,{children:"No Genre"}),(0,r.jsx)(t.td,{children:"is_true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"no_tag"}),(0,r.jsx)(t.td,{children:"(*Alias of no_genre)"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"other_user"}),(0,r.jsx)(t.td,{children:"Another User"}),(0,r.jsx)(t.td,{children:"user_numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"other_user_album"}),(0,r.jsx)(t.td,{children:"Another User (Album)"}),(0,r.jsx)(t.td,{children:"user_numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"other_user_artist"}),(0,r.jsx)(t.td,{children:"Another User (Artist)"}),(0,r.jsx)(t.td,{children:"user_numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"label"}),(0,r.jsx)(t.td,{children:"Label"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"license"}),(0,r.jsx)(t.td,{children:"Music License"}),(0,r.jsx)(t.td,{children:"boolean_numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playlist"}),(0,r.jsx)(t.td,{children:"Playlist"}),(0,r.jsx)(t.td,{children:"boolean_numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"smartplaylist"}),(0,r.jsx)(t.td,{children:"Smart Playlist"}),(0,r.jsx)(t.td,{children:"boolean_subsearch"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playlist_name"}),(0,r.jsx)(t.td,{children:"Playlist Name"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"comment"}),(0,r.jsx)(t.td,{children:"Comment"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lyrics"}),(0,r.jsx)(t.td,{children:"Lyrics"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"file"}),(0,r.jsx)(t.td,{children:"Filename"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bitrate"}),(0,r.jsx)(t.td,{children:"Bitrate"}),(0,r.jsx)(t.td,{children:"numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"added"}),(0,r.jsx)(t.td,{children:"Added"}),(0,r.jsx)(t.td,{children:"date"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"updated"}),(0,r.jsx)(t.td,{children:"Updated"}),(0,r.jsx)(t.td,{children:"date"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"recent_played"}),(0,r.jsx)(t.td,{children:"Recently Played"}),(0,r.jsx)(t.td,{children:"numeric_limit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"recent_added"}),(0,r.jsx)(t.td,{children:"Recently Added"}),(0,r.jsx)(t.td,{children:"numeric_limit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"recent_updated"}),(0,r.jsx)(t.td,{children:"Recently Updated"}),(0,r.jsx)(t.td,{children:"numeric_limit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"catalog"}),(0,r.jsx)(t.td,{children:"Catalog"}),(0,r.jsx)(t.td,{children:"boolean_numeric"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mbid"}),(0,r.jsx)(t.td,{children:"MusicBrainz ID"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mbid_album"}),(0,r.jsx)(t.td,{children:"MusicBrainz ID (Album)"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mbid_artist"}),(0,r.jsx)(t.td,{children:"MusicBrainz ID (Artist)"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mbid_song"}),(0,r.jsx)(t.td,{children:"MusicBrainz ID (Song)"}),(0,r.jsx)(t.td,{children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"metadata"}),(0,r.jsx)(t.td,{children:"Metadata"}),(0,r.jsx)(t.td,{children:"metadata (mixed)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"possible_duplicate"}),(0,r.jsx)(t.td,{children:"Possible Duplicate"}),(0,r.jsx)(t.td,{children:"is_true"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"possible_duplicate_album"}),(0,r.jsx)(t.td,{children:"Possible Duplicate Albums"}),(0,r.jsx)(t.td,{children:"is_true"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"available-operator-values",children:"Available operator values"}),"\n",(0,r.jsx)(t.p,{children:"Select your operator (integer only!) based on the type or your selected search"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"NOTE"})," with the numeric_limit and is_true operators the operator is ignored, but still required"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"rule_1_operator"}),(0,r.jsx)(t.th,{children:"text / tags"}),(0,r.jsx)(t.th,{children:"numeric / user_numeric"}),(0,r.jsx)(t.th,{children:"date"}),(0,r.jsx)(t.th,{children:"boolean, boolean_numeric, boolean_subsearch, days"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(t.td,{children:"contains"}),(0,r.jsx)(t.td,{children:"is greater than or equal to / has loved"}),(0,r.jsx)(t.td,{children:"before"}),(0,r.jsx)(t.td,{children:"is true / before (x) days ago"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,r.jsx)(t.td,{children:"does not contain"}),(0,r.jsx)(t.td,{children:"is less than or equal to / has rated 5 stars"}),(0,r.jsx)(t.td,{children:"after"}),(0,r.jsx)(t.td,{children:"is false / after (x) days ago"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,r.jsx)(t.td,{children:"starts with"}),(0,r.jsx)(t.td,{children:"equals / has rated 4 stars"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,r.jsx)(t.td,{children:"ends with"}),(0,r.jsx)(t.td,{children:"does not equal / has rated 3 stars"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,r.jsx)(t.td,{children:"is"}),(0,r.jsx)(t.td,{children:"is greater than / has rated 2 stars"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,r.jsx)(t.td,{children:"is not"}),(0,r.jsx)(t.td,{children:"is less than / has rated 1 stars"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"6 (Text Only)"}),(0,r.jsx)(t.td,{children:"sounds like"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"7 (Text Only)"}),(0,r.jsx)(t.td,{children:"does not sound like"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"8 (Text Only)"}),(0,r.jsx)(t.td,{children:"matches regular expression"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"9 (Text Only)"}),(0,r.jsx)(t.td,{children:"does not match regular expression"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Send the correct input based on the type of search."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{children:"rule_1_input"})})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"text"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"integer"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"boolean"})})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"NOTE"}),' To search metadata you need to add a 4th rule "rule_*_subtype"']}),"\n",(0,r.jsxs)(t.p,{children:["Operators for metadata are using the text/tag types ",(0,r.jsx)(t.strong,{children:"AND"})," numeric types in a single list as they can be ints/strings/dates."]}),"\n",(0,r.jsx)(t.p,{children:"Currently there is not a simple way to identify what metadata types you have saved. New methods will be created for this."}),"\n",(0,r.jsx)(t.h3,{id:"metadata-operator-table",children:"Metadata operator table"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"rule_1_operator"}),(0,r.jsx)(t.th,{children:"Metadata"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(t.td,{children:"contains"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,r.jsx)(t.td,{children:"does not contain"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,r.jsx)(t.td,{children:"starts with"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,r.jsx)(t.td,{children:"ends with"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,r.jsx)(t.td,{children:"is"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,r.jsx)(t.td,{children:"is not"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"6 (Text Only)"}),(0,r.jsx)(t.td,{children:"sounds like"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"7 (Text Only)"}),(0,r.jsx)(t.td,{children:"does not sound like"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"8 (Text Only)"}),(0,r.jsx)(t.td,{children:"matches regular expression"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"9 (Text Only)"}),(0,r.jsx)(t.td,{children:"does not match regular expression"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,r.jsx)(t.td,{children:"is greater than or equal to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"11"}),(0,r.jsx)(t.td,{children:"is less than or equal to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"12"}),(0,r.jsx)(t.td,{children:"is"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"13"}),(0,r.jsx)(t.td,{children:"is not"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"14"}),(0,r.jsx)(t.td,{children:"is greater than"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"15"}),(0,r.jsx)(t.td,{children:"is less than"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"To search a mixed type like metadata you must search using 4 rules."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Search rule 1 for band containing 'Prodigy', Search Rule 2 for bbm > 120","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"rule name (e.g. rule_1['metadata'], rule_2['metadata'])"}),"\n",(0,r.jsx)(t.li,{children:"rule operator (e.g. rule_1_operator[0], rule_2_operator[12])"}),"\n",(0,r.jsx)(t.li,{children:"rule input (e.g. rule_1_input['Prodigy'], rule_2_input['120'])"}),"\n",(0,r.jsx)(t.li,{children:"rule subtype (e.g. rule_1_subtype['4'], rule_2_subtype['9'])"}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,d.RP)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},8453:(e,t,s)=>{s.d(t,{RP:()=>n,xA:()=>l});var r=s(6540);const d=r.createContext({});function n(e){const t=r.useContext(d);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function l({components:e,children:t,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:n(e),r.createElement(d.Provider,{value:l},t)}}}]);