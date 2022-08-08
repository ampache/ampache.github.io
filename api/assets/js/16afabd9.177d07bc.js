"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[8376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={title:"Access Control Lists",metaTitle:"Access Control Lists",description:"API documentation"},s=void 0,o={unversionedId:"api-acls",id:"api-acls",title:"Access Control Lists",description:"API documentation",source:"@site/docs/api-acls.md",sourceDirName:".",slug:"/api-acls",permalink:"/api/api-acls",draft:!1,tags:[],version:"current",frontMatter:{title:"Access Control Lists",metaTitle:"Access Control Lists",description:"API documentation"},sidebar:"api",previous:{title:"API Changelog",permalink:"/api/api-changelog"},next:{title:"advanced_search",permalink:"/api/api-advanced-search"}},i={},c=[{value:"Start IP &amp; End IP",id:"start-ip--end-ip",level:2},{value:"ACL Types",id:"acl-types",level:2},{value:"ACL Users",id:"acl-users",level:2},{value:"Access Levels",id:"access-levels",level:2},{value:"Setting up an ACL",id:"setting-up-an-acl",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ampache supports internal Access Control Lists, these are IP/DNS based restrictions on different actions and interactions with Ampache. By Default Access Controls lists are turned off in Ampache. In order to turn them on you must modify the ",(0,r.kt)("em",{parentName:"p"},"/config/ampache.cfg.php")," and set access_control to true"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-INI"},'; Use Access List\n; Toggle this on if you want ampache to pay attention to the access list\n; and only allow streaming/downloading/xml-rpc from known hosts xml-rpc\n; will not work without this on.\n; NOTE: Default Behavior is DENY FROM ALL\n; DEFAULT: false\n;access_control = "false"\n')),(0,r.kt)("p",null,"The default configuration of Ampache's ACLs when enabled is Deny From All. There are a few different types, and levels"),(0,r.kt)("h2",{id:"start-ip--end-ip"},"Start IP & End IP"),(0,r.kt)("p",null,"This is a range of IP addresses represented by a pair of dotted quad's. This does not have to be within a subnet boundary. Currently only IPV4 is supported."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Any IP Address:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0 - 255.255.255.255")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Any 10.x IP Address:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"10.0.0.0 - 10.255.255.255")),(0,r.kt)("h2",{id:"acl-types"},"ACL Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interface")," - Access to the web interface",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Restricts Login based on IP"),(0,r.kt)("li",{parentName:"ul"},"Defaults to DENY FROM ALL"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Streaming")," - Controls streaming/downloading access",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Restricts access to /play/index.php based on IP + USER"),(0,r.kt)("li",{parentName:"ul"},"Defaults to DENY FROM ALL"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Local Network")," - Local network ACL",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used by the downsample remote configuration option"),(0,r.kt)("li",{parentName:"ul"},"Tells Ampache which IP addresses should be considered local to the server and which ones are remote"),(0,r.kt)("li",{parentName:"ul"},"Default not applicable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RPC")," - Used to control remote access to your Ampache installation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Remote access to the ",(0,r.kt)("a",{parentName:"li",href:"/"},"Ampache API")),(0,r.kt)("li",{parentName:"ul"},"Remote Sync using XML-RPC."),(0,r.kt)("li",{parentName:"ul"},"Restricts based on IP + USER + KEY, KEY may not be blank"),(0,r.kt)("li",{parentName:"ul"},"Defaults to DENY FROM ALL")))),(0,r.kt)("h2",{id:"acl-users"},"ACL Users"),(0,r.kt)("p",null,"Ampache allows you to define different ACLs to different users. This can be useful for defining connecting an API calls to a username, or to limiting a specific user's streaming access regardless of their IP Address. The default is 'system' which will apply to all users of Ampache."),(0,r.kt)("h2",{id:"access-levels"},"Access Levels"),(0,r.kt)("p",null,"This setting is not fully implemented, more on this later"),(0,r.kt)("h2",{id:"setting-up-an-acl"},"Setting up an ACL"),(0,r.kt)("p",null,"ACl's can only be created by Full Administrators. You can find them under the Admin Menu under the submenu Access Control"))}u.isMDXComponent=!0}}]);