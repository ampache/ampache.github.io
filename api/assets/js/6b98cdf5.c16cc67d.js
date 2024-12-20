"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[614],{2769:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"api-advanced-search","title":"advanced_search","description":"API documentation","source":"@site/docs/api-advanced-search.md","sourceDirName":".","slug":"/api-advanced-search","permalink":"/api/api-advanced-search","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"advanced_search","metaTitle":"advanced_search","description":"API documentation"},"sidebar":"api","previous":{"title":"Video Browse","permalink":"/api/browse/video-browse"},"next":{"title":"Song Search","permalink":"/api/advanced-search/song-advanced-search"}}');var d=s(4848),n=s(8453);const l={title:"advanced_search",metaTitle:"advanced_search",description:"API documentation"},i=void 0,c={},x=[{value:"Search Types",id:"search-types",level:3},{value:"advanced_search parameters",id:"advanced_search-parameters",level:3},{value:"Using advanced_search",id:"using-advanced_search",level:2},{value:"Available search rules",id:"available-search-rules",level:3},{value:"Available operator values",id:"available-operator-values",level:3},{value:"Metadata operator table",id:"metadata-operator-table",level:3},{value:"Example URLs",id:"example-urls",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.RP)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:"Advanced search is the API method to access the search rules used in the WEB UI."}),"\n",(0,d.jsx)(t.p,{children:"It can be confusing to process how the rules are generated so this has been split into it's own page."}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"NOTE"})," We have also condensed this page into subpages for each search type as well so you can focus on the objects you want."]}),"\n",(0,d.jsx)(t.h3,{id:"search-types",children:"Search Types"}),"\n",(0,d.jsx)(t.p,{children:"You can search for multiple object types in advanced_search."}),"\n",(0,d.jsx)(t.p,{children:"This is passed as a type argument and will only return this object in results"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://ampache.org/api/advanced-search/song-advanced-search",children:"song"})}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://ampache.org/api/advanced-search/album-advanced-search",children:"album"})}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://ampache.org/api/advanced-search/artist-advanced-search",children:"artist"})}),"\n",(0,d.jsxs)(t.li,{children:["song_artist (",(0,d.jsx)(t.strong,{children:"NOTE"})," same rules as artist but only returns song artists)"]}),"\n",(0,d.jsxs)(t.li,{children:["album_artist (",(0,d.jsx)(t.strong,{children:"NOTE"})," same rules as artist but only returns album artists)"]}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://ampache.org/api/advanced-search/label-advanced-search",children:"label"})}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://ampache.org/api/advanced-search/playlist-advanced-search",children:"playlist"})}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://ampache.org/api/advanced-search/podcast-advanced-search",children:"podcast"})}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://ampache.org/api/advanced-search/podcast-episode-advanced-search",children:"podcast_episode"})}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://ampache.org/api/advanced-search/genre-advanced-search",children:"genre"})}),"\n",(0,d.jsx)(t.li,{children:"tag (*Alias of genre)"}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://ampache.org/api/advanced-search/user-advanced-search",children:"user"})}),"\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"https://ampache.org/api/advanced-search/video-advanced-search",children:"video"})}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"advanced_search-parameters",children:"advanced_search parameters"}),"\n",(0,d.jsx)(t.p,{children:"@param array $input"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Input"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{style:{textAlign:"right"},children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"operator"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsx)(t.td,{children:"and, or (whether to match one rule or all)"}),(0,d.jsx)(t.td,{style:{textAlign:"right"},children:"NO"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rule_*"}),(0,d.jsx)(t.td,{children:"array"}),(0,d.jsxs)(t.td,{children:["[",(0,d.jsx)(t.code,{children:"rule_1"}),", ",(0,d.jsx)(t.code,{children:"rule_1_operator"}),", ",(0,d.jsx)(t.code,{children:"rule_1_input"}),"]"]}),(0,d.jsx)(t.td,{style:{textAlign:"right"},children:"NO"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rule_*"}),(0,d.jsx)(t.td,{children:"array"}),(0,d.jsxs)(t.td,{children:["[",(0,d.jsx)(t.code,{children:"rule_2"}),", ",(0,d.jsx)(t.code,{children:"rule_2_operator"}),", ",(0,d.jsx)(t.code,{children:"rule_2_input"}),"], [etc]"]}),(0,d.jsx)(t.td,{style:{textAlign:"right"},children:"YES"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"type"}),(0,d.jsx)(t.td,{children:"string"}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"song"}),", ",(0,d.jsx)(t.code,{children:"album"}),", ",(0,d.jsx)(t.code,{children:"artist"}),", ",(0,d.jsx)(t.code,{children:"label"}),", ",(0,d.jsx)(t.code,{children:"playlist"}),", ",(0,d.jsx)(t.code,{children:"podcast"}),", ",(0,d.jsx)(t.code,{children:"podcast_episode"}),", ",(0,d.jsx)(t.code,{children:"genre"}),", ",(0,d.jsx)(t.code,{children:"user"}),", ",(0,d.jsx)(t.code,{children:"video"})]}),(0,d.jsx)(t.td,{style:{textAlign:"right"},children:"NO"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"random"}),(0,d.jsx)(t.td,{children:"boolean"}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"0"}),", ",(0,d.jsx)(t.code,{children:"1"})," (random order of results; default to 0)"]}),(0,d.jsx)(t.td,{style:{textAlign:"right"},children:"YES"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"offset"}),(0,d.jsx)(t.td,{children:"integer"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"right"},children:"YES"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"limit'"}),(0,d.jsx)(t.td,{children:"integer"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"right"},children:"YES"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"using-advanced_search",children:"Using advanced_search"}),"\n",(0,d.jsx)(t.p,{children:"Perform an advanced search given passed rules. This works in a similar way to the web/UI search pages."}),"\n",(0,d.jsx)(t.p,{children:"You can pass multiple rules as well as joins to create in depth search results"}),"\n",(0,d.jsx)(t.p,{children:"Rules must be sent in groups of 3 using an int (starting from 1) to designate which rules are combined."}),"\n",(0,d.jsx)(t.p,{children:"Use operator ('and', 'or') to choose whether to join or separate each rule when searching."}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:["Rule arrays must contain the following:","\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:"rule name (e.g. rule_1['title'], rule_2['album'])"}),"\n",(0,d.jsx)(t.li,{children:"rule operator (e.g. rule_1_operator[0], rule_2_operator[3])"}),"\n",(0,d.jsx)(t.li,{children:"rule input (e.g. rule_1_input['Prodigy'], rule_2_input['Land'])"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"available-search-rules",children:"Available search rules"}),"\n",(0,d.jsx)(t.p,{children:"Select the type of search based on the type of data you are searching for. (songs, playlists, etc)"}),"\n",(0,d.jsx)(t.p,{children:"Searching 'anywhere' searches song title, song filename, song genre, album title, artist title, label title and song comment"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"rule_1"}),(0,d.jsx)(t.th,{children:"Title"}),(0,d.jsx)(t.th,{children:"Operator Type"}),(0,d.jsx)(t.th,{style:{textAlign:"center"},children:"Valid Types"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"anywhere"}),(0,d.jsx)(t.td,{children:"Any searchable text"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"title"}),(0,d.jsx)(t.td,{children:"Title / Name"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist, playlist, label, podcast, podcast_episode, genre"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"(*Alias of title)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song"}),(0,d.jsx)(t.td,{children:"Song Title"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song_title"}),(0,d.jsx)(t.td,{children:"(*Alias of song)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"album"}),(0,d.jsx)(t.td,{children:"Album Title"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"album_title"}),(0,d.jsx)(t.td,{children:"(*Alias of album)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artist"}),(0,d.jsx)(t.td,{children:"Artist"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artist_title"}),(0,d.jsx)(t.td,{children:"(*Alias of artist)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"podcast"}),(0,d.jsx)(t.td,{children:"Podcast"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"podcast_title"}),(0,d.jsx)(t.td,{children:"(*Alias of podcast)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"podcast_episode"}),(0,d.jsx)(t.td,{children:"Podcast Episode"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"podcast"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"podcast_episode_title"}),(0,d.jsx)(t.td,{children:"(*Alias of podcast_episode)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"album_artist"}),(0,d.jsx)(t.td,{children:"Album Artist"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"album_artist_title"}),(0,d.jsx)(t.td,{children:"(*Alias of album_artist)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song_artist"}),(0,d.jsx)(t.td,{children:"Song Artist"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song_artist_title"}),(0,d.jsx)(t.td,{children:"(*Alias of song_artist)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"composer"}),(0,d.jsx)(t.td,{children:"Composer"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"track"}),(0,d.jsx)(t.td,{children:"Track"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"year"}),(0,d.jsx)(t.td,{children:"Year"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"original_year"}),(0,d.jsx)(t.td,{children:"Original Year"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"summary"}),(0,d.jsx)(t.td,{children:"Summary"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"yearformed"}),(0,d.jsx)(t.td,{children:"Year Formed"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"placeformed"}),(0,d.jsx)(t.td,{children:"Place Formed"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"release_type"}),(0,d.jsx)(t.td,{children:"Release Type"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"release_status"}),(0,d.jsx)(t.td,{children:"Release Status"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"barcode"}),(0,d.jsx)(t.td,{children:"Barcode"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"catalog_number"}),(0,d.jsx)(t.td,{children:"Catalog Number"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"version"}),(0,d.jsx)(t.td,{children:"Release Version"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"release_comment"}),(0,d.jsx)(t.td,{children:"(*Alias of version)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"subtitle"}),(0,d.jsx)(t.td,{children:"(*Alias of version)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"myrating"}),(0,d.jsx)(t.td,{children:"My Rating"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"rating"}),(0,d.jsx)(t.td,{children:"Rating (Average)"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"songrating"}),(0,d.jsx)(t.td,{children:"My Rating (Song)"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"albumrating"}),(0,d.jsx)(t.td,{children:"My Rating (Album)"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artistrating"}),(0,d.jsx)(t.td,{children:"My Rating (Artist)"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"favorite"}),(0,d.jsx)(t.td,{children:"Favorites"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"favorite_album"}),(0,d.jsx)(t.td,{children:"Favorites (Album)"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"favorite_artist"}),(0,d.jsx)(t.td,{children:"Favorites (Artist)"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"played_times"}),(0,d.jsx)(t.td,{children:"# Played"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist, podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"skipped_times"}),(0,d.jsx)(t.td,{children:"# Skipped"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"play_skip_ratio"}),(0,d.jsx)(t.td,{children:"Played/Skipped ratio"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"last_play"}),(0,d.jsx)(t.td,{children:"My Last Play"}),(0,d.jsx)(t.td,{children:"days"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist, podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"last_play_or_skip"}),(0,d.jsx)(t.td,{children:"My Last Play OR skip"}),(0,d.jsx)(t.td,{children:"days"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist, podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"played"}),(0,d.jsx)(t.td,{children:"Played"}),(0,d.jsx)(t.td,{children:"boolean"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist, podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"myplayed"}),(0,d.jsx)(t.td,{children:"Played by Me"}),(0,d.jsx)(t.td,{children:"boolean"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist, podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"myplayedalbum"}),(0,d.jsx)(t.td,{children:"Played by Me (Album)"}),(0,d.jsx)(t.td,{children:"boolean"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"myplayedartist"}),(0,d.jsx)(t.td,{children:"Played by Me (Artist)"}),(0,d.jsx)(t.td,{children:"boolean"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"album_count"}),(0,d.jsx)(t.td,{children:"Album Count"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song_count"}),(0,d.jsx)(t.td,{children:"Song Count"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"disk_count"}),(0,d.jsx)(t.td,{children:"Song Count"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"time"}),(0,d.jsx)(t.td,{children:"Length (in minutes)"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist, podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"genre"}),(0,d.jsx)(t.td,{children:"Genre"}),(0,d.jsx)(t.td,{children:"tags"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"tag"}),(0,d.jsx)(t.td,{children:"(*Alias of genre)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song_genre"}),(0,d.jsx)(t.td,{children:"Song Genre"}),(0,d.jsx)(t.td,{children:"tags"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"song_tag"}),(0,d.jsx)(t.td,{children:"(*Alias of song_genre)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"album_genre"}),(0,d.jsx)(t.td,{children:"Album Genre"}),(0,d.jsx)(t.td,{children:"tags"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"album_tag"}),(0,d.jsx)(t.td,{children:"(*Alias of album_genre)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artist_genre"}),(0,d.jsx)(t.td,{children:"Artist Genre"}),(0,d.jsx)(t.td,{children:"tags"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"artist_tag"}),(0,d.jsx)(t.td,{children:"(*Alias of artist_genre)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"no_genre"}),(0,d.jsx)(t.td,{children:"No Genre"}),(0,d.jsx)(t.td,{children:"is_true"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"no_tag"}),(0,d.jsx)(t.td,{children:"(*Alias of no_genre)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"other_user"}),(0,d.jsx)(t.td,{children:"Another User"}),(0,d.jsx)(t.td,{children:"user_numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"other_user_album"}),(0,d.jsx)(t.td,{children:"Another User (Album)"}),(0,d.jsx)(t.td,{children:"user_numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"other_user_artist"}),(0,d.jsx)(t.td,{children:"Another User (Artist)"}),(0,d.jsx)(t.td,{children:"user_numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"label"}),(0,d.jsx)(t.td,{children:"Label"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"license"}),(0,d.jsx)(t.td,{children:"Music License"}),(0,d.jsx)(t.td,{children:"boolean_numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"no_license"}),(0,d.jsx)(t.td,{children:"No License"}),(0,d.jsx)(t.td,{children:"is_true"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"playlist"}),(0,d.jsx)(t.td,{children:"Playlist"}),(0,d.jsx)(t.td,{children:"boolean_numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"smartplaylist"}),(0,d.jsx)(t.td,{children:"Smart Playlist"}),(0,d.jsx)(t.td,{children:"boolean_subsearch"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"playlist_name"}),(0,d.jsx)(t.td,{children:"Playlist Name"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"type"}),(0,d.jsx)(t.td,{children:"Playlist Type (private, public)"}),(0,d.jsx)(t.td,{children:"boolean_numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"playlist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"comment"}),(0,d.jsx)(t.td,{children:"Comment"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"lyrics"}),(0,d.jsx)(t.td,{children:"Lyrics"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"file"}),(0,d.jsx)(t.td,{children:"Filename"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist, video, podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"state"}),(0,d.jsx)(t.td,{children:"File state (completed, pending skipped)"}),(0,d.jsx)(t.td,{children:"boolean_numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"status"}),(0,d.jsx)(t.td,{children:"(*Alias of state)"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"bitrate"}),(0,d.jsx)(t.td,{children:"Bitrate"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"added"}),(0,d.jsx)(t.td,{children:"Added"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"updated"}),(0,d.jsx)(t.td,{children:"Updated"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pubdate"}),(0,d.jsx)(t.td,{children:"Publication Date"}),(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"podcast, podcast_episode"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"recent_played"}),(0,d.jsx)(t.td,{children:"Recently Played"}),(0,d.jsx)(t.td,{children:"numeric_limit"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"recent_added"}),(0,d.jsx)(t.td,{children:"Recently Added"}),(0,d.jsx)(t.td,{children:"numeric_limit"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"recent_updated"}),(0,d.jsx)(t.td,{children:"Recently Updated"}),(0,d.jsx)(t.td,{children:"numeric_limit"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"catalog"}),(0,d.jsx)(t.td,{children:"Catalog"}),(0,d.jsx)(t.td,{children:"boolean_numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mbid"}),(0,d.jsx)(t.td,{children:"MusicBrainz ID"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mbid_album"}),(0,d.jsx)(t.td,{children:"MusicBrainz ID (Album)"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mbid_artist"}),(0,d.jsx)(t.td,{children:"MusicBrainz ID (Artist)"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"mbid_song"}),(0,d.jsx)(t.td,{children:"MusicBrainz ID (Song)"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"metadata"}),(0,d.jsx)(t.td,{children:"Metadata"}),(0,d.jsx)(t.td,{children:"metadata (mixed)"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"has_image"}),(0,d.jsx)(t.td,{children:"Local Image"}),(0,d.jsx)(t.td,{children:"boolean"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"image_height"}),(0,d.jsx)(t.td,{children:"Image Height"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"image_width"}),(0,d.jsx)(t.td,{children:"Image Width"}),(0,d.jsx)(t.td,{children:"numeric"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"possible_duplicate"}),(0,d.jsx)(t.td,{children:"Possible Duplicate"}),(0,d.jsx)(t.td,{children:"is_true"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"possible_duplicate_album"}),(0,d.jsx)(t.td,{children:"Possible Duplicate Albums"}),(0,d.jsx)(t.td,{children:"is_true"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"song, album, artist"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"username"}),(0,d.jsx)(t.td,{children:"Username"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"user"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"category"}),(0,d.jsx)(t.td,{children:"Category"}),(0,d.jsx)(t.td,{children:"text"}),(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"label, genre"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"available-operator-values",children:"Available operator values"}),"\n",(0,d.jsx)(t.p,{children:"Select your operator (integer only!) based on the type or your selected search"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"NOTE"})," with the numeric_limit and is_true operators the operator is ignored, but still required"]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"center"},children:"rule_1_operator"}),(0,d.jsx)(t.th,{children:"text / tags"}),(0,d.jsx)(t.th,{children:"numeric / user_numeric"}),(0,d.jsx)(t.th,{children:"date"}),(0,d.jsx)(t.th,{children:"boolean, boolean_numeric, boolean_subsearch, days"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,d.jsx)(t.td,{children:"contains"}),(0,d.jsx)(t.td,{children:"is greater than or equal to / has loved"}),(0,d.jsx)(t.td,{children:"before"}),(0,d.jsx)(t.td,{children:"is true / before (x) days ago"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,d.jsx)(t.td,{children:"does not contain"}),(0,d.jsx)(t.td,{children:"is less than or equal to / has rated 5 stars"}),(0,d.jsx)(t.td,{children:"after"}),(0,d.jsx)(t.td,{children:"is false / after (x) days ago"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,d.jsx)(t.td,{children:"starts with"}),(0,d.jsx)(t.td,{children:"equals / has rated 4 stars"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,d.jsx)(t.td,{children:"ends with"}),(0,d.jsx)(t.td,{children:"does not equal / has rated 3 stars"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,d.jsx)(t.td,{children:"is"}),(0,d.jsx)(t.td,{children:"is greater than / has rated 2 stars"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,d.jsx)(t.td,{children:"is not"}),(0,d.jsx)(t.td,{children:"is less than / has rated 1 stars"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"6 (Text Only)"}),(0,d.jsx)(t.td,{children:"sounds like"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"7 (Text Only)"}),(0,d.jsx)(t.td,{children:"does not sound like"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"8 (Text Only)"}),(0,d.jsx)(t.td,{children:"matches regular expression"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"9 (Text Only)"}),(0,d.jsx)(t.td,{children:"does not match regular expression"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"Send the correct input based on the type of search."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsx)(t.tr,{children:(0,d.jsx)(t.th,{children:"rule_1_input"})})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsx)(t.tr,{children:(0,d.jsx)(t.td,{children:"text"})}),(0,d.jsx)(t.tr,{children:(0,d.jsx)(t.td,{children:"integer"})}),(0,d.jsx)(t.tr,{children:(0,d.jsx)(t.td,{children:"boolean"})})]})]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"NOTE"}),' To search metadata you need to add a 4th rule "rule_*_subtype"']}),"\n",(0,d.jsxs)(t.p,{children:["Operators for metadata are using the text/tag types ",(0,d.jsx)(t.strong,{children:"AND"})," numeric types in a single list as they can be ints/strings/dates."]}),"\n",(0,d.jsx)(t.p,{children:"Currently there is not a simple way to identify what metadata types you have saved. New methods will be created for this."}),"\n",(0,d.jsx)(t.h3,{id:"metadata-operator-table",children:"Metadata operator table"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"center"},children:"rule_1_operator"}),(0,d.jsx)(t.th,{children:"Metadata"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,d.jsx)(t.td,{children:"contains"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,d.jsx)(t.td,{children:"does not contain"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,d.jsx)(t.td,{children:"starts with"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,d.jsx)(t.td,{children:"ends with"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,d.jsx)(t.td,{children:"is"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,d.jsx)(t.td,{children:"is not"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"6 (Text Only)"}),(0,d.jsx)(t.td,{children:"sounds like"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"7 (Text Only)"}),(0,d.jsx)(t.td,{children:"does not sound like"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"8 (Text Only)"}),(0,d.jsx)(t.td,{children:"matches regular expression"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"9 (Text Only)"}),(0,d.jsx)(t.td,{children:"does not match regular expression"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,d.jsx)(t.td,{children:"is greater than or equal to"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"11"}),(0,d.jsx)(t.td,{children:"is less than or equal to"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"12"}),(0,d.jsx)(t.td,{children:"is"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"13"}),(0,d.jsx)(t.td,{children:"is not"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"14"}),(0,d.jsx)(t.td,{children:"is greater than"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"center"},children:"15"}),(0,d.jsx)(t.td,{children:"is less than"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:"To search a mixed type like metadata you must search using 4 rules."}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:["Search rule 1 for band containing 'Prodigy', Search Rule 2 for bbm > 120","\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:"rule name (e.g. rule_1['metadata'], rule_2['metadata'])"}),"\n",(0,d.jsx)(t.li,{children:"rule operator (e.g. rule_1_operator[0], rule_2_operator[12])"}),"\n",(0,d.jsx)(t.li,{children:"rule input (e.g. rule_1_input['Prodigy'], rule_2_input['120'])"}),"\n",(0,d.jsx)(t.li,{children:"rule subtype (e.g. rule_1_subtype['4'], rule_2_subtype['9'])"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"example-urls",children:"Example URLs"}),"\n",(0,d.jsx)(t.p,{children:"Here are some example calls that might help you get an idea of the URL required to create an advanced search."}),"\n",(0,d.jsxs)(t.p,{children:["Artist ",(0,d.jsx)(t.code,{children:"https://music.com.au/server/xml.server.php?action=advanced_search&auth=eeb9f1b6056246a7d563f479f518bb34&operator=or&type=artist&offset=0&limit=4&random=0&rule_1=favorite&rule_1_operator=0&rule_1_input=%25&rule_2=artist&rule_2_operator=2&rule_2_input=Car"})]}),"\n",(0,d.jsxs)(t.p,{children:["Album ",(0,d.jsx)(t.code,{children:"https://music.com.au/server/xml.server.php?action=advanced_search&auth=eeb9f1b6056246a7d563f479f518bb34&operator=or&type=album&offset=0&limit=4&random=0&rule_1=favorite&rule_1_operator=0&rule_1_input=%25&rule_2=artist&rule_2_operator=0&rule_2_input=Men"})]}),"\n",(0,d.jsxs)(t.p,{children:["Song ",(0,d.jsx)(t.code,{children:"https://music.com.au/server/xml.server.php?action=advanced_search&auth=eeb9f1b6056246a7d563f479f518bb34&operator=or&type=song&offset=0&limit=4&random=0&rule_1=favorite&rule_1_operator=0&rule_1_input=%25&rule_2=title&rule_2_operator=2&rule_2_input=Dance"})]})]})}function a(e={}){const{wrapper:t}={...(0,n.RP)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{RP:()=>n,xA:()=>i});var r=s(6540);const d=r.createContext({});function n(e){const t=r.useContext(d);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:n(e),r.createElement(d.Provider,{value:i},t)}}}]);