"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[3622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65130:(e,t,n)=>{n.d(t,{b:()=>o,k:()=>l});var a=n(67294),r=n(902);const i=a.createContext(null);function o(e){let{children:t,content:n}=e;const r=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(i.Provider,{value:r},t)}function l(){const e=(0,a.useContext)(i);if(null===e)throw new r.i6("DocProvider");return e}},90351:(e,t,n)=>{n.d(t,{F4:()=>o,d9:()=>d,gm:()=>c,xb:()=>l,y$:()=>s});var a=n(65130),r=n(67294),i=n(52263);function o(e){let{children:t}=e;const{metadata:n}=(0,a.k)(),{editUrl:i}=n;return r.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},t)}function l(e){let{children:t,to:n,append:a=""}=e;const{siteConfig:o}=(0,i.Z)(),l=o.customFields[n.toLowerCase()];return r.createElement("a",{href:l.href+a,target:"_blank",rel:"noopener noreferrer"},t??l.label)}function c(e){let{children:t,cause:n}=e;return r.createElement("div",null,r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Cause")),r.createElement("td",{style:{textAlign:"left",width:"100vh"}},n)),r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Solution")),r.createElement("td",{style:{textAlign:"left",width:"100vh"}},t)))))}const d=e=>{let{children:t,color:n}=e;return r.createElement("span",{style:{color:n}},t)},s=e=>{let{children:t,color:n}=e;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},24436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));n(90351);const i={description:"Detailed overview of creating VRCFaceTracking Tracking Modules."},o="Tracking Module SDK",l={unversionedId:"vrcft-software/vrcft-sdk/tracking-module",id:"version-v4.0/vrcft-software/vrcft-sdk/tracking-module",title:"Tracking Module SDK",description:"Detailed overview of creating VRCFaceTracking Tracking Modules.",source:"@site/versioned_docs/version-v4.0/vrcft-software/vrcft-sdk/tracking-module.mdx",sourceDirName:"vrcft-software/vrcft-sdk",slug:"/vrcft-software/vrcft-sdk/tracking-module",permalink:"/docs/v4.0/vrcft-software/vrcft-sdk/tracking-module",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/versioned_docs/version-v4.0/vrcft-software/vrcft-sdk/tracking-module.mdx",tags:[],version:"v4.0",frontMatter:{description:"Detailed overview of creating VRCFaceTracking Tracking Modules."},sidebar:"tutorialSidebar",previous:{title:"SDK",permalink:"/docs/v4.0/category/sdk"},next:{title:"VRCFaceTracking Program",permalink:"/docs/v4.0/vrcft-software/vrcft"}},c={},d=[{value:"Summary",id:"summary",level:3},{value:"Tracking Module Overview",id:"ue-overview",level:3},{value:"Project Setup",id:"project-setup",level:2},{value:"Tracking Module Architecture",id:"tracking-module-architecture",level:2},{value:"Building Project",id:"building-project",level:2}],s={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tracking-module-sdk"},"Tracking Module SDK"),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"v4.0.0 SDK is depricated!",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The documentation here references VRCFaceTracking in the ",(0,r.kt)("inlineCode",{parentName:"p"},"v4.0.0"),"\nrelease state. If you want to see the latest documentation that\nis reflective of active development, please consider using the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/vrcft-software/vrcft-sdk/tracking-module"},"'Current' docs"))),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"VRCFaceTracking")," provides an external tracking module\nSDK that allows developers to send face tracking data to\nany ",(0,r.kt)("strong",{parentName:"p"},"VRCFaceTracking")," compatible app. Modules will send\ndata to the ",(0,r.kt)("strong",{parentName:"p"},"UnifiedTrackingData")," interface that\nVRCFaceTracking will use to send tracking data to applications."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ue-overview"},"Tracking Module Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#project-setup"},"Project Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tracking-module-architecture"},"Tracking Module Architecture")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-project"},"Building Project"))),(0,r.kt)("h2",{id:"project-setup"},"Project Setup"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"VRCFaceTracking")," uses ",(0,r.kt)("strong",{parentName:"p"},".NET Framework"),", a relatively\neasy and intuitive development platform. ",(0,r.kt)("strong",{parentName:"p"},"VRCFaceTracking")," has\nthe ability to load any class library (Managed ",(0,r.kt)("inlineCode",{parentName:"p"},".dll")," files) built\non the ",(0,r.kt)("strong",{parentName:"p"},".NET Framework")," platform using a built-in module loader."),(0,r.kt)("p",null,"To get started, create a new Class Library project using the\n",(0,r.kt)("strong",{parentName:"p"},".NET Framework v4.7.2")," SDK and framework. Many IDEs provide a template to\nquickly get started with this environment."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Name the project after the tracking interface being implemented to\nVRCFaceTracking; a general naming scheme for tracking modules is along\nthe lines of ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleExtTrackingInterface"),".")),(0,r.kt)("p",null,"Once the project environment is setup, include ",(0,r.kt)("inlineCode",{parentName:"p"},"VRCFaceTracking"),"\nas a dependency (this can either be a project reference by using the\nVRCFaceTracking project in your own project, or by referencing the\n",(0,r.kt)("inlineCode",{parentName:"p"},"VRCFaceTracking")," binary), and inherit ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtTrackingModule")," to your\nmodule's main class. This will be where all the main functionality\nof the module will be implemented."),(0,r.kt)("admonition",{title:"Must implement ExtTrackingModule",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"VRCFaceTracking will at this time only load your external module\nif the base class inherits ExtTrackingModule, otherwise it will be\nskipped. This is to ensure that developers are implementing a\ntracking interface extension for devices to use VRCFaceTracking tracking\ndata, or otherwise."),(0,r.kt)("p",{parentName:"admonition"},"This may be changed in the future to allow different types of modules\nto be loaded by the module loader (potentially those that can provide\nan output for VRCFaceTracking tracking data, modify parts of VRCFaceTracking,\nmodify the UI of VRCFaceTracking, and more).")),(0,r.kt)("p",null,"The default architecture platform should be ",(0,r.kt)("inlineCode",{parentName:"p"},"Any CPU")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"x86")," to build\nfor VRCFaceTracking."),(0,r.kt)("p",null,"Your project environment should be fully setup and ready to accept your\ntracking interface!"),(0,r.kt)("h2",{id:"tracking-module-architecture"},"Tracking Module Architecture"),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"Refer to the VRCFaceTracking API!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The following API's are referenced when\nwriting a module. These are included with ",(0,r.kt)("inlineCode",{parentName:"p"},"VRCFaceTracking"),". "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/benaclejames/VRCFaceTracking/blob/v4.0.0/VRCFaceTracking/SDK/ExtTrackingModule.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"ExtTrackingModule"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/benaclejames/VRCFaceTracking/blob/v4.0.0/VRCFaceTracking/UnifiedTrackingData.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"UnifiedTrackingData"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/benaclejames/VRCFaceTracking/blob/v4.0.0/VRCFaceTracking/TrackingLibs/SRanipal/Lip/SRanipal_LipData_v2.cs#L11"},(0,r.kt)("inlineCode",{parentName:"a"},"ViveSR.anipal.Lip"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/benaclejames/VRCFaceTracking/blob/v4.0.0/VRCFaceTracking/TrackingLibs/SRanipal/Lip/SRanipal_EyeData_v2.cs"},(0,r.kt)("inlineCode",{parentName:"a"},"ViveSR.anipal.Eye")))),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/benaclejames/VRCFaceTracking/tree/v4.0.0"},(0,r.kt)("strong",{parentName:"a"},"VRCFaceTracking v4.0.0 source code")),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="ExampleExtTrackingInterface.cs"',title:'"ExampleExtTrackingInterface.cs"'},"public class ExampleExtTrackingModule : ExtTrackingModule\n{\n    // What your interface is able to send as tracking data.\n    public override (bool SupportsEye, bool SupportsLip) Supported => (true, true);\n\n    // This is the first function ran by VRCFaceTracking. Make sure to completely initialize \n    // your tracking interface or the data to be accepted by VRCFaceTracking here. This will let \n    // VRCFaceTracking know what data is available to be sent from your tracking interface at initialization.\n    public override (bool eyeSuccess, bool lipSuccess) Initialize(bool eyeAvailable, bool lipAvailable)\n    {\n        var state = (eyeAvailable, lipAvailable);\n\n        //... Initializing module. Modify state tuple as needed (or use bool contexts to determine what should be initialized).\n\n        return state;\n    }\n\n    // Polls data from the tracking interface.\n    // VRCFaceTracking will run this function in a separate thread;\n    public override Action GetUpdateThreadFunc()\n    {\n        return () =>\n        {\n            while (true)\n            {\n                // Get latest tracking data from your interface and transform to VRCFaceTracking data.\n\n                if (Status.EyeState == ModuleState.Active) // Eye Status validation\n                    UnifiedTrackingData.EyeTrackingData.Left.Openness = ExampleTracker.LeftEye.Openness;\n\n                if (Status.LipStatus == ModuleState.Active) // Lip Status validation\n                    UnifiedTrackingData.LipTrackingData.LatestShapes[(int)LipShape_v2.JawOpen] = ExampleTracker.Mouth.JawOpen;\n\n\n                // Add a delay or halt for the next update cycle for performance. eg: \n                Thread.Sleep(10);\n            }\n        };\n    }\n\n    // Called when the module is unloaded or VRCFaceTracking itself tears down.\n    public override void Teardown()\n    {\n        //... Deinitialize tracking interface; dispose any data created with the module.\n    }\n}\n")),(0,r.kt)("h2",{id:"building-project"},"Building Project"),(0,r.kt)("p",null,"Once the tracking module is fully setup and ready to be deployed, compile your binary.\nThis binary can then be loaded by VRCFaceTracking's module system!"),(0,r.kt)("p",null,"Simply take the compiled binary and place it in ",(0,r.kt)("inlineCode",{parentName:"p"},"%appdata%\\VRCFaceTracking\\CustomLibs"),",\nVRCFaceTracking will load any external modules in alphabetical order that are included in\nthis folder."),(0,r.kt)("admonition",{title:"Use Build Events!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Setting up build events for your project can make it easy to\niterate your project faster. Create a build event to place your\ncompiled binaries into the appropriate destinations!")))}u.isMDXComponent=!0}}]);