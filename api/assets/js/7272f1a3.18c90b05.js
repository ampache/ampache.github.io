"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[8268],{8002:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var n=s(4848),o=s(8453);const t={title:"Errors 4.2",metaTitle:"Errors 4.2",description:"API documentation"},i=void 0,l={id:"versions/api-4.1/api-errors",title:"Errors 4.2",description:"API documentation",source:"@site/docs/versions/api-4.1/api-errors.md",sourceDirName:"versions/api-4.1",slug:"/versions/api-4.1/api-errors",permalink:"/api/versions/api-4.1/api-errors",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Errors 4.2",metaTitle:"Errors 4.2",description:"API documentation"}},c={},a=[{value:"Example Error messages",id:"example-error-messages",level:2},{value:"Current Error Codes",id:"current-error-codes",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Ampache's API errors are loosely based around the HTTP status codes.\nAll errors are returned in the form of an XML/JSON Document however the string error message provided is translated into the language of the Ampache server in question. All services should only use the code value."}),"\n",(0,n.jsx)(r.h2,{id:"example-error-messages",children:"Example Error messages"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",children:'<root>\n      <error code="501">Access Control Not Enabled</error>\n</root>\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-JSON",children:'{\n    "error": {\n        "code": "404",\n        "message": "share 107 was not found"\n    }\n}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"current-error-codes",children:"Current Error Codes"}),"\n",(0,n.jsxs)(r.p,{children:["All error codes are accompanied by a string value for the error and derived from the ",(0,n.jsx)(r.a,{href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html",children:"HTTP/1.1 Status Codes"})]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"501"})," Access Control not Enabled","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"The API is disabled. Enable 'access_control' in your config"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"400"})," Bad Request","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Used when you have specified a valid method but something about the input is incorrect, invalid or missing"}),"\n",(0,n.jsx)(r.li,{children:"You can check the error message for details, but do not re-attempt the exact same request"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"401"})," Received Invalid Handshake","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"This is a temporary error, this means no valid session was passed or the handshake failed"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"403"})," Access Denied","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"The requested method is not available"}),"\n",(0,n.jsx)(r.li,{children:"You can check the error message for details about which feature is disabled"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"404"})," Not Found","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"The API could not find the requested object"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"405"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"This is a fatal error, the service requested a method that the API does not implement"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"412"})," Failed Access Check","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Access denied to the requested object or function for this user"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.RP)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,s)=>{s.d(r,{RP:()=>t,xA:()=>l});var n=s(6540);const o=n.createContext({});function t(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function l({components:e,children:r,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:t(e),n.createElement(o.Provider,{value:l},r)}}}]);