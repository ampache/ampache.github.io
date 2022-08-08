"use strict";(self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[]).push([[407],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),i=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=i(e.components);return a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(t),d=n,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(h,s(s({ref:r},c),{},{components:t})):a.createElement(h,s({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6614:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=t(7462),n=(t(7294),t(3905));const o={title:"API 5.1 Errors",metaTitle:"API 5.1 Errors",description:"API documentation"},s=void 0,l={unversionedId:"versions/api-5.1/api-errors",id:"versions/api-5.1/api-errors",title:"API 5.1 Errors",description:"API documentation",source:"@site/docs/versions/api-5.1/api-errors.md",sourceDirName:"versions/api-5.1",slug:"/versions/api-5.1/api-errors",permalink:"/api/versions/api-5.1/api-errors",draft:!1,tags:[],version:"current",frontMatter:{title:"API 5.1 Errors",metaTitle:"API 5.1 Errors",description:"API documentation"},sidebar:"api",previous:{title:"API 5.1 advanced_search",permalink:"/api/versions/api-5.1/api-advanced-search"},next:{title:"API 5.1 JSON Methods",permalink:"/api/versions/api-5.1/api-json-methods"}},p={},i=[{value:"Rules Regarding errors",id:"rules-regarding-errors",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Example Error messages",id:"example-error-messages",level:2}],c={toc:i};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ampache's API errors are loosely based around the HTTP status codes. All errors are returned in the form of an XML/JSON Document however the string error message provided is translated into the language of the Ampache server in question. All services should only use the code value."),(0,n.kt)("p",null,"For Ampache5 error codes are changing and expanding on the information available to the user/client/application that caused the error."),(0,n.kt)("p",null,"An Ampache5 error has the following parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"errorCode: numeric code"),(0,n.kt)("li",{parentName:"ul"},"errorAction: method that caused the error"),(0,n.kt)("li",{parentName:"ul"},"errorType: further information such as the type of data missing or access level required"),(0,n.kt)("li",{parentName:"ul"},"errorMessage: translated error message")),(0,n.kt)("h2",{id:"rules-regarding-errors"},"Rules Regarding errors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"XML and JSON errors are always in an 'error' object."),(0,n.kt)("li",{parentName:"ul"},"Errors will always provide a code"),(0,n.kt)("li",{parentName:"ul"},"The data names user in the error must use names that don't conflict with other data objects"),(0,n.kt)("li",{parentName:"ul"},"Allow the ability to drill down even further using the action and type of error",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"errorAction will return the method used that caused the error"),(0,n.kt)("li",{parentName:"ul"},"Use errorType 'system' for things users can't change / server config"),(0,n.kt)("li",{parentName:"ul"},"Use errorType 'account' for user issues (password, perms, auth, etc)"))),(0,n.kt)("li",{parentName:"ul"},"errorMessage must be a translated string to allow devs to show things for the user in their language.")),(0,n.kt)("h2",{id:"error-codes"},"Error Codes"),(0,n.kt)("p",null,"All error codes are accompanied by a string value for the error and derived from the ",(0,n.kt)("a",{parentName:"p",href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html"},"HTTP/1.1 Status Codes")),(0,n.kt)("p",null,"To separate Ampache from the http codes it's been decided to prefix our codes with 47 to allow clear differentiation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4700")," Access Control not Enabled",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The API is disabled. Enable 'access_control' in your config"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4701")," Received Invalid Handshake",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is a temporary error, this means no valid session was passed or the handshake failed"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4703")," Access Denied",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The requested method is not available"),(0,n.kt)("li",{parentName:"ul"},"You can check the error message for details about which feature is disabled"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4704")," Not Found",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The API could not find the requested object"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4705")," Missing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is a fatal error, the service requested a method that the API does not implement"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4706")," Depreciated",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is a fatal error, the method requested is no longer available"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4710")," Bad Request",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Used when you have specified a valid method but something about the input is incorrect, invalid or missing"),(0,n.kt)("li",{parentName:"ul"},"You can check the error message for details, but do not re-attempt the exact same request"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"4742")," Failed Access Check",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Access denied to the requested object or function for this user")))),(0,n.kt)("h2",{id:"example-error-messages"},"Example Error messages"),(0,n.kt)("p",null,"Error 4700: Access Control not Enabled"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/xml-responses/error-4700.xml"},"Example XML")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4700">\n        <errorAction><![CDATA[handshake]]></errorAction>\n        <errorType><![CDATA[system]]></errorType>\n        <errorMessage><![CDATA[Access Denied]]></errorMessage>\n    </error>\n</root>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/json-responses/error-4700.json"},"Example JSON")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "error": {\n        "errorCode": "4700",\n        "errorAction": "handshake",\n        "errorType": "system",\n        "errorMessage": "Access Denied"\n    }\n}\n')),(0,n.kt)("p",null,"Error 4701: Received Invalid Handshake"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/xml-responses/error-4701.xml"},"Example XML")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4701">\n        <errorAction><![CDATA[playlist_create]]></errorAction>\n        <errorType><![CDATA[account]]></errorType>\n        <errorMessage><![CDATA[Session Expired]]></errorMessage>\n    </error>\n</root>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/json-responses/error-4701.json"},"Example JSON")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "error": {\n        "errorCode": "4701",\n        "errorAction": "playlist_create",\n        "errorType": "account",\n        "errorMessage": "Session Expired"\n    }\n}\n')),(0,n.kt)("p",null,"Error 4703: Missing Feature"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/xml-responses/error-4703.xml"},"Example XML")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4703">\n        <errorAction><![CDATA[podcasts]]></errorAction>\n        <errorType><![CDATA[system]]></errorType>\n        <errorMessage><![CDATA[Enable: podcast]]></errorMessage>\n    </error>\n</root>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/json-responses/error-4703.json"},"Example JSON")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "error": {\n        "errorCode": "4703",\n        "errorAction": "podcasts",\n        "errorType": "system",\n        "errorMessage": "Enable: podcast"\n    }\n}\n')),(0,n.kt)("p",null,"Error 4704: Not Found"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/xml-responses/error-4704.xml"},"Example XML")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4704">\n        <errorAction><![CDATA[scrobble]]></errorAction>\n        <errorType><![CDATA[song]]></errorType>\n        <errorMessage><![CDATA[Not Found]]></errorMessage>\n    </error>\n</root>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/json-responses/error-4704.json"},"Example JSON")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "error": {\n        "errorCode": "4704",\n        "errorAction": "scrobble",\n        "errorType": "song",\n        "errorMessage": "Not Found"\n    }\n}\n')),(0,n.kt)("p",null,"Error 4705: Missing Method"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/xml-responses/error-4705.xml"},"Example XML")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4705">\n        <errorAction><![CDATA[plafgfylist_create]]></errorAction>\n        <errorType><![CDATA[system]]></errorType>\n        <errorMessage><![CDATA[Invalid Request]]></errorMessage>\n    </error>\n</root>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/json-responses/error-4705.json"},"Example JSON")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "error": {\n        "errorCode": "4705",\n        "errorAction": "plafgfylist_create",\n        "errorType": "system",\n        "errorMessage": "Invalid Request"\n    }\n}\n')),(0,n.kt)("p",null,"Error 4706: Depreciated Method"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/xml-responses/error-4706.xml"},"Example XML")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4706">\n        <errorAction><![CDATA[tag_songs]]></errorAction>\n        <errorType><![CDATA[removed]]></errorType>\n        <errorMessage><![CDATA[Depreciated]]></errorMessage>\n    </error>\n</root>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/json-responses/error-4706.json"},"Example JSON")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "error": {\n        "errorCode": "4706",\n        "errorAction": "tag_songs",\n        "errorType": "removed",\n        "errorMessage": "Depreciated"\n    }\n}\n')),(0,n.kt)("p",null,"Error 4710: Bad Request"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/xml-responses/error-4710.xml"},"Example XML")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4710">\n        <errorAction><![CDATA[playlist_create]]></errorAction>\n        <errorType><![CDATA[system]]></errorType>\n        <errorMessage><![CDATA[Bad Request: name]]></errorMessage>\n    </error>\n</root>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/json-responses/error-4710.json"},"Example JSON")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "error": {\n        "errorCode": "4710",\n        "errorAction": "playlist_create",\n        "errorType": "system",\n        "errorMessage": "Bad Request: name"\n    }\n}\n')),(0,n.kt)("p",null,"Error 4742: Failed Access Check"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/xml-responses/error-4742.xml"},"Example XML")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},'<?xml version="1.0" encoding="UTF-8" ?>\n<root>\n    <error errorCode="4710">\n        <errorAction><![CDATA[playlist_delete]]></errorAction>\n        <errorType><![CDATA[account]]></errorType>\n        <errorMessage><![CDATA[Require: 100]]></errorMessage>\n    </error>\n</root>\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ampache/python3-ampache/master/docs/json-responses/error-4742.json"},"Example JSON")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "error": {\n        "errorCode": "4742",\n        "errorAction": "playlist_delete",\n        "errorType": "account",\n        "errorMessage": "Require: 100"\n    }\n}\n')))}m.isMDXComponent=!0}}]);