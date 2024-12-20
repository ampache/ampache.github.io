"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[39],{5494:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"api-acls","title":"Access Control Lists","description":"API documentation","source":"@site/docs/api-acls.md","sourceDirName":".","slug":"/api-acls","permalink":"/api/api-acls","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Access Control Lists","metaTitle":"Access Control Lists","description":"API documentation"},"sidebar":"api","previous":{"title":"API Changelog","permalink":"/api/api-changelog"},"next":{"title":"Media Methods","permalink":"/api/api-media-methods"}}');var i=s(4848),l=s(8453);const r={title:"Access Control Lists",metaTitle:"Access Control Lists",description:"API documentation"},c=void 0,o={},a=[{value:"Start IP &amp; End IP",id:"start-ip--end-ip",level:2},{value:"ACL Types",id:"acl-types",level:2},{value:"ACL Users",id:"acl-users",level:2},{value:"Access Levels",id:"access-levels",level:2},{value:"Setting up an ACL",id:"setting-up-an-acl",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.RP)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Ampache supports internal Access Control Lists, these are IP/DNS based restrictions on different actions and interactions with Ampache. By Default Access Controls lists are turned off in Ampache. In order to turn them on you must modify the ",(0,i.jsx)(n.em,{children:"/config/ampache.cfg.php"})," and set access_control to true"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-INI",children:'; Use Access List\n; Toggle this on if you want ampache to pay attention to the access list\n; and only allow streaming/downloading/xml-rpc from known hosts xml-rpc\n; will not work without this on.\n; NOTE: Default Behavior is DENY FROM ALL\n; DEFAULT: false\n;access_control = "false"\n'})}),"\n",(0,i.jsx)(n.p,{children:"The default configuration of Ampache's ACLs when enabled is Deny From All. There are a few different types, and levels"}),"\n",(0,i.jsx)(n.h2,{id:"start-ip--end-ip",children:"Start IP & End IP"}),"\n",(0,i.jsx)(n.p,{children:"This is a range of IP addresses represented by a pair of dotted quad's. This does not have to be within a subnet boundary. Currently only IPV4 is supported."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Any IP Address:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"0.0.0.0 - 255.255.255.255"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Any 10.x IP Address:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"10.0.0.0 - 10.255.255.255"})}),"\n",(0,i.jsx)(n.h2,{id:"acl-types",children:"ACL Types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Interface"})," - Access to the web interface","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Restricts Login based on IP"}),"\n",(0,i.jsx)(n.li,{children:"Defaults to DENY FROM ALL"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Streaming"})," - Controls streaming/downloading access","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Restricts access to /play/index.php based on IP + USER"}),"\n",(0,i.jsx)(n.li,{children:"Defaults to DENY FROM ALL"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Local Network"})," - Local network ACL","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Used by the downsample remote configuration option"}),"\n",(0,i.jsx)(n.li,{children:"Tells Ampache which IP addresses should be considered local to the server and which ones are remote"}),"\n",(0,i.jsx)(n.li,{children:"Default not applicable"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RPC"})," - Used to control remote access to your Ampache installation","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Remote access to the ",(0,i.jsx)(n.a,{href:"/",children:"Ampache API"})]}),"\n",(0,i.jsx)(n.li,{children:"Remote Sync using XML-RPC."}),"\n",(0,i.jsx)(n.li,{children:"Restricts based on IP + USER + KEY, KEY may not be blank"}),"\n",(0,i.jsx)(n.li,{children:"Defaults to DENY FROM ALL"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"acl-users",children:"ACL Users"}),"\n",(0,i.jsx)(n.p,{children:"Ampache allows you to define different ACLs to different users. This can be useful for defining connecting an API calls to a username, or to limiting a specific user's streaming access regardless of their IP Address. The default is 'system' which will apply to all users of Ampache."}),"\n",(0,i.jsx)(n.h2,{id:"access-levels",children:"Access Levels"}),"\n",(0,i.jsx)(n.p,{children:"This setting is not fully implemented, more on this later"}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-an-acl",children:"Setting up an ACL"}),"\n",(0,i.jsx)(n.p,{children:"ACl's can only be created by Full Administrators. You can find them under the Admin Menu under the submenu Access Control"})]})}function h(e={}){const{wrapper:n}={...(0,l.RP)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{RP:()=>l,xA:()=>c});var t=s(6540);const i=t.createContext({});function l(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:l(e),t.createElement(i.Provider,{value:c},n)}}}]);