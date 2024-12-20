"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[161],{2113:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"versions/api-6.0/api-errors","title":"API6 Errors","description":"API documentation","source":"@site/docs/versions/api-6.0/api-errors.md","sourceDirName":"versions/api-6.0","slug":"/versions/api-6.0/api-errors","permalink":"/api/versions/api-6.0/api-errors","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"API6 Errors","metaTitle":"API6 Errors","description":"API documentation"},"sidebar":"api","previous":{"title":"API6 JSON Methods","permalink":"/api/versions/api-6.0/api-json-methods"},"next":{"title":"advanced_search","permalink":"/api/versions/api-6.0/api-advanced-search"}}');var o=n(4848),a=n(8453);const t={title:"API6 Errors",metaTitle:"API6 Errors",description:"API documentation"},i=void 0,c={},l=[{value:"Rules Regarding errors",id:"rules-regarding-errors",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Error Types",id:"error-types",level:2},{value:"Example Error messages",id:"example-error-messages",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.RP)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"Ampache's API errors are loosely based around the HTTP status codes. All errors are returned in the form of an XML/JSON Document however the string error message provided is translated into the language of the Ampache server in question. All services should only use the code value."}),"\n",(0,o.jsx)(r.p,{children:"For Ampache5 error codes are changing and expanding on the information available to the user/client/application that caused the error."}),"\n",(0,o.jsx)(r.p,{children:"An Ampache5 error has the following parts:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"errorCode: numeric code"}),"\n",(0,o.jsx)(r.li,{children:"errorAction: method that caused the error"}),"\n",(0,o.jsx)(r.li,{children:"errorType: further information such as the type of data missing or access level required"}),"\n",(0,o.jsx)(r.li,{children:"errorMessage: translated error message"}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"rules-regarding-errors",children:"Rules Regarding errors"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"XML and JSON errors are always in an 'error' object."}),"\n",(0,o.jsx)(r.li,{children:"Errors will always provide a code"}),"\n",(0,o.jsx)(r.li,{children:"The data names used in the error must use names that don't conflict with other data objects"}),"\n",(0,o.jsx)(r.li,{children:"errorAction will return the method used that caused the error"}),"\n",(0,o.jsx)(r.li,{children:"Use errorType 'system' for things users can't change / server config"}),"\n",(0,o.jsx)(r.li,{children:"Use errorType 'account' for user issues (password, perms, auth, etc)"}),"\n",(0,o.jsx)(r.li,{children:"All other errorTypes should return the parameter name that caused the error. (type, filter, email, etc)"}),"\n",(0,o.jsx)(r.li,{children:"errorMessage must be a translated string to allow devs to show things for the user in their language."}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,o.jsxs)(r.p,{children:["All error codes are accompanied by a string value for the error and derived from the ",(0,o.jsx)(r.a,{href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html",children:"HTTP/1.1 Status Codes"})]}),"\n",(0,o.jsx)(r.p,{children:"To separate Ampache from the http codes it's been decided to prefix our codes with 47 to allow clear differentiation"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"4700"})," Access Control not Enabled","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"The API is disabled. Enable 'access_control' in your config"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"4701"})," Received Invalid Handshake","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"This is a temporary error, this means no valid session was passed or the handshake failed"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"4703"})," Access Denied","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"The requested method is not available"}),"\n",(0,o.jsx)(r.li,{children:"You can check the error message for details about which feature is disabled"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"4704"})," Not Found","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"The API could not find the requested object"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"4705"})," Missing","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"This is a fatal error, the service requested a method that the API does not implement"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"4706"})," Depreciated","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"This is a fatal error, the method requested is no longer available"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"4710"})," Bad Request","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Used when you have specified a valid method but something about the input is incorrect, invalid or missing"}),"\n",(0,o.jsx)(r.li,{children:"You can check the error message for details, but do not re-attempt the exact same request"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"4742"})," Failed Access Check","\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Access denied to the requested object or function for this user"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"error-types",children:"Error Types"}),"\n",(0,o.jsx)(r.p,{children:"There are three error types; two are static 'account' and 'system'"}),"\n",(0,o.jsx)(r.p,{children:"Account errors are things that your user can't do. Either the permission level or something with the session is incorrect."}),"\n",(0,o.jsx)(r.p,{children:"System errors tell you whether a system feature is disabled or something else has failed on the server. Check the debug logs for further information."}),"\n",(0,o.jsx)(r.p,{children:"Everything else will be a parameter from the call that caused your error. Maybe the email you used was malformed or the song you looked for doesn't exist?"}),"\n",(0,o.jsx)(r.h2,{id:"example-error-messages",children:"Example Error messages"}),"\n",(0,o.jsx)(r.p,{children:"Error 4700: Access Control not Enabled"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/xml-responses/error-4700.xml",children:"Example XML"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4700">\n        <errorAction><![CDATA[handshake]]></errorAction>\n        <errorType><![CDATA[system]]></errorType>\n        <errorMessage><![CDATA[Access Denied]]></errorMessage>\n    </error>\n</root>\n'})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/json-responses/error-4700.json",children:"Example JSON"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JSON",children:'{\n    "error": {\n        "errorCode": "4700",\n        "errorAction": "handshake",\n        "errorType": "system",\n        "errorMessage": "Access Denied"\n    }\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"Error 4701: Received Invalid Handshake"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/xml-responses/error-4701.xml",children:"Example XML"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4701">\n        <errorAction><![CDATA[playlist_create]]></errorAction>\n        <errorType><![CDATA[account]]></errorType>\n        <errorMessage><![CDATA[Session Expired]]></errorMessage>\n    </error>\n</root>\n'})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/json-responses/error-4701.json",children:"Example JSON"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JSON",children:'{\n    "error": {\n        "errorCode": "4701",\n        "errorAction": "playlist_create",\n        "errorType": "account",\n        "errorMessage": "Session Expired"\n    }\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"Error 4703: Missing Feature"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/xml-responses/error-4703.xml",children:"Example XML"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4703">\n        <errorAction><![CDATA[podcasts]]></errorAction>\n        <errorType><![CDATA[system]]></errorType>\n        <errorMessage><![CDATA[Enable: podcast]]></errorMessage>\n    </error>\n</root>\n'})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/json-responses/error-4703.json",children:"Example JSON"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JSON",children:'{\n    "error": {\n        "errorCode": "4703",\n        "errorAction": "podcasts",\n        "errorType": "system",\n        "errorMessage": "Enable: podcast"\n    }\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"Error 4704: Not Found"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/xml-responses/error-4704.xml",children:"Example XML"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4704">\n        <errorAction><![CDATA[scrobble]]></errorAction>\n        <errorType><![CDATA[song]]></errorType>\n        <errorMessage><![CDATA[Not Found]]></errorMessage>\n    </error>\n</root>\n'})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/json-responses/error-4704.json",children:"Example JSON"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JSON",children:'{\n    "error": {\n        "errorCode": "4704",\n        "errorAction": "scrobble",\n        "errorType": "song",\n        "errorMessage": "Not Found"\n    }\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"Error 4705: Missing Method"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/xml-responses/error-4705.xml",children:"Example XML"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4705">\n        <errorAction><![CDATA[plafgfylist_create]]></errorAction>\n        <errorType><![CDATA[system]]></errorType>\n        <errorMessage><![CDATA[Invalid Request]]></errorMessage>\n    </error>\n</root>\n'})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/json-responses/error-4705.json",children:"Example JSON"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JSON",children:'{\n    "error": {\n        "errorCode": "4705",\n        "errorAction": "plafgfylist_create",\n        "errorType": "system",\n        "errorMessage": "Invalid Request"\n    }\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"Error 4706: Depreciated Method"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/xml-responses/error-4706.xml",children:"Example XML"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4706">\n        <errorAction><![CDATA[tag_songs]]></errorAction>\n        <errorType><![CDATA[removed]]></errorType>\n        <errorMessage><![CDATA[Depreciated]]></errorMessage>\n    </error>\n</root>\n'})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/json-responses/error-4706.json",children:"Example JSON"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JSON",children:'{\n    "error": {\n        "errorCode": "4706",\n        "errorAction": "tag_songs",\n        "errorType": "removed",\n        "errorMessage": "Depreciated"\n    }\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"Error 4710: Bad Request"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/xml-responses/error-4710.xml",children:"Example XML"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4710">\n        <errorAction>user_create</errorAction>\n        <errorType>username</errorType>\n        <errorMessage>Bad Request: temp_user</errorMessage>\n    </error>\n</root>\n'})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/json-responses/error-4710.json",children:"Example JSON"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JSON",children:'{\n    "error": {\n        "errorCode": "4710",\n        "errorAction": "user_create",\n        "errorType": "username",\n        "errorMessage": "Bad Request: temp_user"\n    }\n}\n'})}),"\n",(0,o.jsx)(r.p,{children:"Error 4742: Failed Access Check"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/xml-responses/error-4742.xml",children:"Example XML"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4710">\n        <errorAction><![CDATA[playlist_delete]]></errorAction>\n        <errorType><![CDATA[account]]></errorType>\n        <errorMessage><![CDATA[Require: 100]]></errorMessage>\n    </error>\n</root>\n'})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://raw.githubusercontent.com/ampache/python3-ampache/api6/docs/json-responses/error-4742.json",children:"Example JSON"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-JSON",children:'{\n    "error": {\n        "errorCode": "4742",\n        "errorAction": "playlist_delete",\n        "errorType": "account",\n        "errorMessage": "Require: 100"\n    }\n}\n'})})]})}function d(e={}){const{wrapper:r}={...(0,a.RP)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{RP:()=>a,xA:()=>i});var s=n(6540);const o=s.createContext({});function a(e){const r=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const t={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||t:a(e),s.createElement(o.Provider,{value:i},r)}}}]);