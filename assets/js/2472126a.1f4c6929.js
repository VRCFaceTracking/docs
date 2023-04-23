"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[3107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5413:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>p,assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={},o="Vive Pro Eye",l={unversionedId:"hardware/VIVE/vpe",id:"hardware/VIVE/vpe",title:"Vive Pro Eye",description:"Overview",source:"@site/docs/hardware/VIVE/vpe.mdx",sourceDirName:"hardware/VIVE",slug:"/hardware/VIVE/vpe",permalink:"/docs/hardware/VIVE/vpe",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/VIVE/vpe.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SRanipal (VIVE)",permalink:"/docs/hardware/VIVE/sranipal"},next:{title:"Vive Wireless + Eye & Face Tracking",permalink:"/docs/hardware/VIVE/wireless"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"Mods",id:"mods",level:2}],p=e=>{let{children:t,color:r}=e;return(0,n.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},d={toc:c,Highlight:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vive-pro-eye"},"Vive Pro Eye"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Vive Pro Eye provides eye gaze tracking as well as detailed eye expression tracking.\nIt is a ",(0,n.kt)("em",{parentName:"p"},"built-in")," eye-tracking device (no additional hardware setup required).\nEye tracking data is accessed through ",(0,n.kt)("a",{parentName:"p",href:"sranipal"},"Vive's SRanipal interface"),"."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the Vive hardware setup instructions that came the headset. Make sure that the headset cable is not damaged, and make sure to plug in the USB connection from the linkbox to a USB 3.0 port (usually ",(0,n.kt)("em",{parentName:"li"},"blue")," internal connector tab)"),(0,n.kt)("li",{parentName:"ol"},"Install the SRanipal runtime software. ",(0,n.kt)("a",{parentName:"li",href:"sranipal#software"},"See the guide")),(0,n.kt)("li",{parentName:"ol"},"Calibrate the eye tracking with the SRanipal Vive Pro Eye Calibration tool in SteamVR")),(0,n.kt)("h2",{id:"common-issues"},"Common Issues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A regular Vive Pro is occasionally mistaken to be a Vive Pro Eye.\nA Vive Pro Eye will have ",(0,n.kt)(p,{color:"#2aa5cd",mdxType:"Highlight"},"light blue rings")," around the front two passthrough cameras and a plastic covered IR LED ring surrounding each lens on the inside"),(0,n.kt)("div",{style:{display:"flex","justify-content":"space-between"}},(0,n.kt)("div",{style:{width:"50%",height:"auto"}},(0,n.kt)("img",{src:r(9404).Z,alt:"Front View"})),(0,n.kt)("div",{style:{width:"50%",height:"auto"}},(0,n.kt)("img",{src:r(8508).Z,alt:"Inside View"})))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The headset cable can be damaged with heavy use, especially if it gets tangled around or used with a ceiling pulley system.\nA damaged cable may not show tell-tale \u201cdisplay snow\u201d or even obvious physical indicators, but can affect USB connectivity of the Eye\nbut more commonly, the Vive Facial Tracker.\nReplacing the headset cable will often resolve \u201ccutting out\u201d or \u201cfail to initialize\u201d face and eye tracking problems."))),(0,n.kt)("h2",{id:"mods"},"Mods"),(0,n.kt)("p",null,"The stock VPE experience kind of sucks, but what if it could be way better?"))}m.isMDXComponent=!0},9404:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vpe_front-4313a025d6a79d1d39bbd8eeb396265a.jpg"},8508:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vpe_inside-f3e71280d014ef806d20a1628560f250.jpg"}}]);