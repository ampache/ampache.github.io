(()=>{"use strict";var e,a,d,c,b,f={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return f[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=f,r.c=t,e=[],r.O=(a,d,c,b)=>{if(!d){var f=1/0;for(i=0;i<e.length;i++){d=e[i][0],c=e[i][1],b=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&b||f>=b)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,b<f&&(f=b));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[d,c,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var f={};a=a||[null,d({}),d([]),d(d)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,r.d(b,f),b},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",223:"d263a616",1007:"237bcb03",1360:"0b2bb9cc",1464:"34ed4d93",1654:"3fae2260",1779:"308522b1",1814:"01353680",2031:"542a3051",2212:"7a511394",2231:"a8180c60",2498:"80f9a994",2739:"e62670d0",3087:"4bd0e1c8",3445:"0dbbd02d",3520:"a0afd0bd",3824:"6bc8fb69",3919:"702d5c70",4006:"70625dc2",4073:"d6204bc9",4253:"052fbc95",4325:"3604e9f1",4598:"584e7203",4704:"0a8cd4c3",4771:"b69e4d6d",4867:"0ad4058e",4871:"48f475b4",5124:"c15804c8",5162:"fc5132f9",5288:"cf323836",5407:"d21fcd6f",5682:"96b9e82d",5742:"486eb140",6177:"eaa027ed",6196:"84ba5c6b",6359:"5b6fbd72",6365:"f2356d46",6832:"1c5acfb5",6841:"42eb3ee9",6871:"13d5083f",6971:"c377a04b",7320:"9c401ef1",7352:"6ea2aad0",7631:"becc5997",7758:"33b6cb12",7818:"dabe12fe",7918:"17896441",8017:"d73ef89a",8175:"e7fb1820",8372:"0cca21c1",8376:"16afabd9",8531:"e79ec335",8589:"259b4479",8601:"417ef407",8691:"90dc6546",8833:"6b98cdf5",8888:"323977b1",9418:"7928baae",9514:"1be78505",9834:"6f5a207f",9875:"881e5e25"}[e]||e)+"."+{53:"30e1dfc1",223:"c065b3df",1007:"a3454d3d",1360:"d70443db",1464:"0031d0d9",1654:"108e5af8",1779:"8ab3b411",1814:"4f14e0de",2031:"16e77221",2212:"0324ee7e",2231:"19c8dab1",2498:"4ac068e7",2739:"059c3e97",3087:"2db17202",3445:"e001fd9a",3520:"dd478981",3824:"e35aa77d",3919:"0e80ce2b",4006:"8403ce86",4073:"e189fa6b",4253:"544eb094",4325:"7d1c4010",4598:"2eb258af",4704:"282f8486",4771:"2109a1a9",4867:"4c1e064a",4871:"3fe72c27",4972:"e8ccda41",5124:"d81ed050",5162:"71f2c6f9",5288:"9e02975e",5407:"f1ca2a57",5682:"3fd4b884",5742:"60f26cf1",6177:"28404032",6196:"58bcfb99",6359:"994fe489",6365:"5b769252",6832:"65cf8259",6841:"2c1c73d9",6871:"46b17bf5",6971:"98206f15",7320:"5aa13321",7352:"3cb7a9ed",7631:"669de7ea",7758:"73907d0c",7818:"f130f309",7918:"697f5b51",8017:"245602f5",8175:"6b4d5414",8372:"d2fee2ce",8376:"177d07bc",8531:"349c111b",8589:"bf7868f9",8601:"7accf277",8691:"d9ee3299",8833:"96a2fb73",8888:"7dfeea65",9418:"ad5857f5",9514:"1a614137",9834:"4b7be4e0",9875:"f2fc2ccd"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},b="ampache-org-api:",r.l=(e,a,d,f)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+d){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+d),t.src=e),c[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var b=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/api/",r.gca=function(e){return e={17896441:"7918","935f2afb":"53",d263a616:"223","237bcb03":"1007","0b2bb9cc":"1360","34ed4d93":"1464","3fae2260":"1654","308522b1":"1779","01353680":"1814","542a3051":"2031","7a511394":"2212",a8180c60:"2231","80f9a994":"2498",e62670d0:"2739","4bd0e1c8":"3087","0dbbd02d":"3445",a0afd0bd:"3520","6bc8fb69":"3824","702d5c70":"3919","70625dc2":"4006",d6204bc9:"4073","052fbc95":"4253","3604e9f1":"4325","584e7203":"4598","0a8cd4c3":"4704",b69e4d6d:"4771","0ad4058e":"4867","48f475b4":"4871",c15804c8:"5124",fc5132f9:"5162",cf323836:"5288",d21fcd6f:"5407","96b9e82d":"5682","486eb140":"5742",eaa027ed:"6177","84ba5c6b":"6196","5b6fbd72":"6359",f2356d46:"6365","1c5acfb5":"6832","42eb3ee9":"6841","13d5083f":"6871",c377a04b:"6971","9c401ef1":"7320","6ea2aad0":"7352",becc5997:"7631","33b6cb12":"7758",dabe12fe:"7818",d73ef89a:"8017",e7fb1820:"8175","0cca21c1":"8372","16afabd9":"8376",e79ec335:"8531","259b4479":"8589","417ef407":"8601","90dc6546":"8691","6b98cdf5":"8833","323977b1":"8888","7928baae":"9418","1be78505":"9514","6f5a207f":"9834","881e5e25":"9875"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,d)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var b=new Promise(((d,b)=>c=e[a]=[d,b]));d.push(c[2]=b);var f=r.p+r.u(a),t=new Error;r.l(f,(d=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var b=d&&("load"===d.type?"missing":d.type),f=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+f+")",t.name="ChunkLoadError",t.type=b,t.request=f,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var c,b,f=d[0],t=d[1],o=d[2],n=0;if(f.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(d);n<f.length;n++)b=f[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},d=self.webpackChunkampache_org_api=self.webpackChunkampache_org_api||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();