"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[6017],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65130:(e,t,r)=>{r.d(t,{b:()=>i,k:()=>o});var n=r(67294),a=r(902);const l=n.createContext(null);function i(e){let{children:t,content:r}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return n.createElement(l.Provider,{value:a},t)}function o(){const e=(0,n.useContext)(l);if(null===e)throw new a.i6("DocProvider");return e}},43670:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=e=>{let{title:t,omitHeaders:r,disabledHeaders:a,headers:l,rows:i}=e;const[o,c]=(0,n.useState)(a?.map((e=>l.indexOf(e)))||[]),[u,s]=(0,n.useState)(""),[p,d]=(0,n.useState)(null),[m,k]=(0,n.useState)(!1),b=e=>{o.includes(e)?c(o.filter((t=>t!==e))):c([...o,e])},f=i.filter((e=>e.some((e=>{if(!p)return e?.toString&&e?.toString().includes(u);try{return e?.toString&&p.test(e.toString())}catch(t){return!1}}))));return n.createElement("div",null,n.createElement("input",{type:"text",placeholder:"Filter rows",value:u,onChange:e=>(e=>{s(e),k(!1);try{""!==e.trim()?d(new RegExp(e,"i")):d(null)}catch(t){k(!0),d(null)}})(e.target.value),className:"filter-input "+(m?"invalid":"")}),l.map(((e,t)=>r?.includes(e)?null:n.createElement("button",{key:t,onClick:()=>b(t),className:o.includes(t)?"disable":""},e))),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,l.map(((e,t)=>r?.includes(e)?n.createElement("th",{key:t},e):n.createElement("th",{key:t,onClick:()=>b(t),className:o.includes(t)?"hidden":""},e))))),n.createElement("tbody",null,f.map(((e,t)=>n.createElement("tr",{key:t},e.map(((e,t)=>n.createElement("td",{key:t,className:o.includes(t)?"hidden":""},e)))))))))}},90351:(e,t,r)=>{r.d(t,{F4:()=>i,X9:()=>p,d9:()=>u,gm:()=>c,xb:()=>o,y$:()=>s});var n=r(65130),a=r(67294),l=r(52263);function i(e){let{children:t}=e;const{metadata:r}=(0,n.k)(),{editUrl:l}=r;return a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},t)}function o(e){let{children:t,to:r,append:n=""}=e;const{siteConfig:i}=(0,l.Z)(),o=i.customFields[r.toLowerCase()];return a.createElement("a",{href:o.href+n,target:"_blank",rel:"noopener noreferrer"},t??o.label)}function c(e){let{children:t,cause:r}=e;return a.createElement("div",null,a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("strong",null,"Cause")),a.createElement("td",{style:{textAlign:"left",width:"100vh"}},r)),a.createElement("tr",null,a.createElement("td",null,a.createElement("strong",null,"Solution")),a.createElement("td",{style:{textAlign:"left",width:"100vh"}},t)))))}const u=e=>{let{children:t,color:r}=e;return a.createElement("span",{style:{color:r}},t)},s=e=>{let{children:t,color:r}=e;return a.createElement("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)};function p(e){let{items:t}=e;const r=t.sort((()=>Math.random()-.5));return a.createElement("ul",null,r.map(((e,t)=>a.createElement("li",null,e))))}},15530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(67294),l=r(3905),i=(r(90351),r(43670));const o={sidebar_position:1,description:"Overview of what interfaces can track what in VRCFaceTracking."},c="Tracking Compatibility",u={unversionedId:"hardware/interface-compatibilities",id:"hardware/interface-compatibilities",title:"Tracking Compatibility",description:"Overview of what interfaces can track what in VRCFaceTracking.",source:"@site/docs/hardware/interface-compatibilities.mdx",sourceDirName:"hardware",slug:"/hardware/interface-compatibilities",permalink:"/docs/hardware/interface-compatibilities",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/interface-compatibilities.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Overview of what interfaces can track what in VRCFaceTracking."},sidebar:"tutorialSidebar",previous:{title:"Hardware Guides",permalink:"/docs/hardware/"},next:{title:"VR Headsets",permalink:"/docs/hardware/vr/"}},s={},p=[],d={toc:p},m="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tracking-compatibility"},"Tracking Compatibility"),(0,l.kt)("hr",null),(0,l.kt)("admonition",{title:"How to read this page",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This page goes over generalized functions, features, and\ntracking quality of each interface, and what they can do in\nVRCFaceTracking. For more specific information about the listed\ninterfaces please refer to their dedicated sections."),(0,l.kt)("p",{parentName:"admonition"},"Various aspects of the interfaces are given a rank from 1-10, indicating\ntheir quality or effectiveness. The rankings are given by ranking devices\nrelative to each other based on criteria such as expressibility and\ntracking quality."),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Expressibility"),": The range of motions/expressions that can be tracked. The higher\nthe expressibility, the more face details the interface reports tracked values for. "),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Tracking Quality"),": How well the interface tracks its reported range of motions.\nThe higher the tracking quality, the better control most users will have over the\nrange of motions/expressions supported by the interface. ")),(0,l.kt)(i.Z,{title:"Interface Tracking Compatibility",headers:["Tracking Feature","VIVE Pro Eye","VIVE Facial Tracker","Varjo (All)","Meta Quest Pro","Pico 4 (Pro/Enterprise)","Pimax Droolon Pi1","Pimax Crystal","ARKit (iOS)","Project Babble","EyeTrackVR","VIVE Focus 3 (Eye Tracker)","VIVE Focus 3 (Facial Tracker)","HP Reverb G2 Omnicept","VIVE XR Elite (Full Facial Tracker)"],omitHeaders:["Tracking Feature"],rows:[["Category","HMD","Accessory","HMD","Standalone HMD","Standalone HMD","Accessory","HMD","Software/Mobile","Software","Software/DIY Hardware","Accessory","Accessory","HMD","Accessory"],["General Face Tracking Capability","Eye","Lower Face","Eye","Full","Full","Eye","Eye","Full","Lower Face","Eye","Eye","Lower Face","Eye","Full"],["Gaze","\u2714","~","\u2714","\u2714","\u2714","\u2714","\u2714","Eye Expression","~","\u2714","\u2714","~","\u2714","\u2714"],["Gaze Convergence","\u2714","~","\u2714","\u274c","\u274c","\u274c","\u274c","N/A","~","\u2714","\u2714","~","\u2714","\u2714"],["Eye Openness","Granular","~","Granular","Granular","Granular","2 Steps","Granular","Granular","~","Granular","Granular","~","Binary","Granular"],["Pupil Dilation","\u2714","~","\u2714","\u274c","\u274c","\u274c","\u274c","\u274c","~","\u274c","\u274c","~","\u2714","\u274c"],["Upper Face Expression Support",(0,l.kt)(a.Fragment,null,"Widen",(0,l.kt)("br",null),"Squeeze",(0,l.kt)("br",null),"Brow(Emulated)"),"~",(0,l.kt)(a.Fragment,null,"Widen(Emulated)",(0,l.kt)("br",null),"Squeeze(Emulated)",(0,l.kt)("br",null)),(0,l.kt)(a.Fragment,null,"Widen",(0,l.kt)("br",null),"Squint",(0,l.kt)("br",null),"Brow"),(0,l.kt)(a.Fragment,null,"Widen",(0,l.kt)("br",null),"Squint",(0,l.kt)("br",null),"Brow"),"\u274c","\u274c",(0,l.kt)(a.Fragment,null,"Widen",(0,l.kt)("br",null),"Squint",(0,l.kt)("br",null),"Brow"),"\u274c","\u274c",(0,l.kt)(a.Fragment,null,"Widen(broken)",(0,l.kt)("br",null),"Squeeze(broken)"),"~","~",(0,l.kt)(a.Fragment,null,"Widen(broken)",(0,l.kt)("br",null),"Squeeze(broken)")],["Upper Face Expressibility","6/10","~","N/A","9/10","8/10","\u274c","\u274c","9/10","\u274c","\u274c","3/10","~","~","3/10"],["Upper Face Tracking Quality","8/10","~","N/A","7/10","4/10","\u274c","\u274c","8/10","\u274c","\u274c","4/10","~","~","4/10"],["Lower Face Expression Support","~",(0,l.kt)(a.Fragment,null,"Jaw",(0,l.kt)("br",null),"Lip",(0,l.kt)("br",null),"Mouth",(0,l.kt)("br",null),"Cheek"),"~",(0,l.kt)(a.Fragment,null,"Jaw",(0,l.kt)("br",null),"Lip",(0,l.kt)("br",null),"Mouth",(0,l.kt)("br",null),"Cheek",(0,l.kt)("br",null),"Nose"),(0,l.kt)(a.Fragment,null,"Jaw",(0,l.kt)("br",null),"Lip",(0,l.kt)("br",null),"Mouth",(0,l.kt)("br",null),"Cheek",(0,l.kt)("br",null),"Nose"),"~","~",(0,l.kt)(a.Fragment,null,"Jaw",(0,l.kt)("br",null),"Lip",(0,l.kt)("br",null),"Mouth",(0,l.kt)("br",null),"Cheek",(0,l.kt)("br",null),"Nose"),(0,l.kt)(a.Fragment,null,"Jaw",(0,l.kt)("br",null),"Lip",(0,l.kt)("br",null),"Mouth",(0,l.kt)("br",null),"Cheek",(0,l.kt)("br",null),"Nose"),"~","~",(0,l.kt)(a.Fragment,null,"Jaw",(0,l.kt)("br",null),"Lip",(0,l.kt)("br",null),"Mouth",(0,l.kt)("br",null),"Cheek"),"~",(0,l.kt)(a.Fragment,null,"Jaw",(0,l.kt)("br",null),"Lip",(0,l.kt)("br",null),"Mouth",(0,l.kt)("br",null),"Cheek")],["Lower Face Expressibility","~","7/10","~","8/10","7/10","~","~","8/10","9/10","~","~","7/10","~","7/10"],["Face Tracking Quality","~","8/10","~","7/10","4/10","~","~","8/10","8/10","~","~","7/10","~","7/10"],["Tongue Expression Support","~","Tongue Out & Directions","~","Tongue Out","Tongue Out","~","~","Tongue Out","All Tongue Expressions","~","~","Tongue Out & Directions","~","Tongue Out & Directions"]],mdxType:"FilterTable"}))}k.isMDXComponent=!0}}]);