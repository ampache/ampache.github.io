"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[39],{654:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var t=n(4848),i=n(8453);const l={title:"Access Control Lists",metaTitle:"Access Control Lists",description:"API documentation"},r=void 0,c={id:"api-acls",title:"Access Control Lists",description:"API documentation",source:"@site/docs/api-acls.md",sourceDirName:".",slug:"/api-acls",permalink:"/api/api-acls",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Access Control Lists",metaTitle:"Access Control Lists",description:"API documentation"},sidebar:"api",previous:{title:"API Changelog",permalink:"/api/api-changelog"},next:{title:"advanced_search",permalink:"/api/api-advanced-search"}},a={},o=[{value:"Start IP &amp; End IP",id:"start-ip--end-ip",level:2},{value:"ACL Types",id:"acl-types",level:2},{value:"ACL Users",id:"acl-users",level:2},{value:"Access Levels",id:"access-levels",level:2},{value:"Setting up an ACL",id:"setting-up-an-acl",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Ampache supports internal Access Control Lists, these are IP/DNS based restrictions on different actions and interactions with Ampache. By Default Access Controls lists are turned off in Ampache. In order to turn them on you must modify the ",(0,t.jsx)(s.em,{children:"/config/ampache.cfg.php"})," and set access_control to true"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-INI",children:'; Use Access List\n; Toggle this on if you want ampache to pay attention to the access list\n; and only allow streaming/downloading/xml-rpc from known hosts xml-rpc\n; will not work without this on.\n; NOTE: Default Behavior is DENY FROM ALL\n; DEFAULT: false\n;access_control = "false"\n'})}),"\n",(0,t.jsx)(s.p,{children:"The default configuration of Ampache's ACLs when enabled is Deny From All. There are a few different types, and levels"}),"\n",(0,t.jsx)(s.h2,{id:"start-ip--end-ip",children:"Start IP & End IP"}),"\n",(0,t.jsx)(s.p,{children:"This is a range of IP addresses represented by a pair of dotted quad's. This does not have to be within a subnet boundary. Currently only IPV4 is supported."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Any IP Address:"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"0.0.0.0 - 255.255.255.255"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Any 10.x IP Address:"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"10.0.0.0 - 10.255.255.255"})}),"\n",(0,t.jsx)(s.h2,{id:"acl-types",children:"ACL Types"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Interface"})," - Access to the web interface","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Restricts Login based on IP"}),"\n",(0,t.jsx)(s.li,{children:"Defaults to DENY FROM ALL"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Streaming"})," - Controls streaming/downloading access","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Restricts access to /play/index.php based on IP + USER"}),"\n",(0,t.jsx)(s.li,{children:"Defaults to DENY FROM ALL"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Local Network"})," - Local network ACL","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Used by the downsample remote configuration option"}),"\n",(0,t.jsx)(s.li,{children:"Tells Ampache which IP addresses should be considered local to the server and which ones are remote"}),"\n",(0,t.jsx)(s.li,{children:"Default not applicable"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"RPC"})," - Used to control remote access to your Ampache installation","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Remote access to the ",(0,t.jsx)(s.a,{href:"/",children:"Ampache API"})]}),"\n",(0,t.jsx)(s.li,{children:"Remote Sync using XML-RPC."}),"\n",(0,t.jsx)(s.li,{children:"Restricts based on IP + USER + KEY, KEY may not be blank"}),"\n",(0,t.jsx)(s.li,{children:"Defaults to DENY FROM ALL"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"acl-users",children:"ACL Users"}),"\n",(0,t.jsx)(s.p,{children:"Ampache allows you to define different ACLs to different users. This can be useful for defining connecting an API calls to a username, or to limiting a specific user's streaming access regardless of their IP Address. The default is 'system' which will apply to all users of Ampache."}),"\n",(0,t.jsx)(s.h2,{id:"access-levels",children:"Access Levels"}),"\n",(0,t.jsx)(s.p,{children:"This setting is not fully implemented, more on this later"}),"\n",(0,t.jsx)(s.h2,{id:"setting-up-an-acl",children:"Setting up an ACL"}),"\n",(0,t.jsx)(s.p,{children:"ACl's can only be created by Full Administrators. You can find them under the Admin Menu under the submenu Access Control"})]})}function h(e={}){const{wrapper:s}={...(0,i.RP)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{RP:()=>l});var t=n(6540);const i=t.createContext({});function l(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}}}]);