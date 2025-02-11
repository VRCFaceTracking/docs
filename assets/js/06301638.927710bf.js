"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[4541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,p=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},23612:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(34334),o=n(35281),i=n(95999);const l={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const s={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}function m(e){const{children:t,type:n,title:i,icon:m}=d(e),u=function(e){const t=c[e]??e,n=s[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),s.info)}(n),h=i??u.label,{iconComponent:p}=u,f=m??a.createElement(p,null);return a.createElement("div",{className:(0,r.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert",`alert--${u.infimaClassName}`,l.admonition)},a.createElement("div",{className:l.admonitionHeading},a.createElement("span",{className:l.admonitionIcon},f),h),a.createElement("div",{className:l.admonitionContent},t))}},92503:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(34334),i=n(95999),l=n(86668),s=n(39960);const c={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,l.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},d,{id:void 0}));const u=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return r.createElement(t,(0,a.Z)({},d,{className:(0,o.Z)("anchor",m?c.anchorWithHideOnScrollNavbar:c.anchorWithStickyNavbar,d.className),id:n}),d.children,r.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},65130:(e,t,n)=>{n.d(t,{b:()=>i,k:()=>l});var a=n(67294),r=n(902);const o=a.createContext(null);function i(e){let{children:t,content:n}=e;const r=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:r},t)}function l(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}},24928:(e,t,n)=>{n.d(t,{Ue:()=>c,xc:()=>l});var a=n(67294),r=n(39960),o=n(92503),i=n(90512);function l(e){let{name:t,url:n,description:i}=e;return a.createElement("div",{className:"col col--6 margin-bottom--lg"},a.createElement(r.Z,{class:"card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module",to:n},a.createElement(o.Z,{as:"h2",class:"text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"},t),a.createElement("p",{class:"text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"},i)))}function s(e){let{name:t,image:n,url:l,description:s}=e;return a.createElement("div",{className:"col col--6 margin-bottom--lg"},a.createElement("div",{className:(0,i.Z)("card")},a.createElement("div",{className:(0,i.Z)("card__image")},a.createElement(r.Z,{to:l},a.createElement("img",{src:n,alt:`${t}'s image`}))),a.createElement("div",{className:"card__body"},a.createElement(o.Z,{as:"h3"},t),a.createElement("p",null,s)),a.createElement("div",{className:"card__footer"},a.createElement("div",{className:"button-group button-group--block"},a.createElement(r.Z,{className:"button button--secondary",to:l},"Download")))))}function c(){return a.createElement("div",{class:"row",style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.createElement(s,{name:"VRCFaceTracking AppInstaller",url:"https://github.com/benaclejames/VRCFaceTracking/releases/latest/download/VRCFaceTracking_x64.appinstaller",image:n(82648).default,description:"Get the latest Release lightweight Windows AppInstaller, just run and install!"}))}},90351:(e,t,n)=>{n.d(t,{F4:()=>i,X9:()=>m,d9:()=>c,gm:()=>s,xb:()=>l,y$:()=>d});var a=n(65130),r=n(67294),o=n(52263);function i(e){let{children:t}=e;const{metadata:n}=(0,a.k)(),{editUrl:o}=n;return r.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},t)}function l(e){let{children:t,to:n,append:a=""}=e;const{siteConfig:i}=(0,o.Z)(),l=i.customFields[n.toLowerCase()];return r.createElement("a",{href:l.href+a,target:"_blank",rel:"noopener noreferrer"},t??l.label)}function s(e){let{children:t,cause:n}=e;return r.createElement("div",null,r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Cause")),r.createElement("td",{style:{textAlign:"left",width:"100vh"}},n)),r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Solution")),r.createElement("td",{style:{textAlign:"left",width:"100vh"}},t)))))}const c=e=>{let{children:t,color:n}=e;return r.createElement("span",{style:{color:n}},t)},d=e=>{let{children:t,color:n}=e;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)};function m(e){let{items:t}=e;const n=t.sort((()=>Math.random()-.5));return r.createElement("ul",null,n.map(((e,t)=>r.createElement("li",null,e))))}},27458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));n(24928),n(90351),n(39960),n(44996),n(23612);const o={description:"Information about the infamous Quest Pro FT dying phenomena"},i="The Quest Pro's Dying Face Tracking Problem",l={unversionedId:"hardware/vr/meta/quest-pro/other-info/quest-pro-dead-ft",id:"hardware/vr/meta/quest-pro/other-info/quest-pro-dead-ft",title:"The Quest Pro's Dying Face Tracking Problem",description:"Information about the infamous Quest Pro FT dying phenomena",source:"@site/docs/hardware/vr/meta/quest-pro/other-info/quest-pro-dead-ft.mdx",sourceDirName:"hardware/vr/meta/quest-pro/other-info",slug:"/hardware/vr/meta/quest-pro/other-info/quest-pro-dead-ft",permalink:"/docs/hardware/vr/meta/quest-pro/other-info/quest-pro-dead-ft",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/vr/meta/quest-pro/other-info/quest-pro-dead-ft.mdx",tags:[],version:"current",frontMatter:{description:"Information about the infamous Quest Pro FT dying phenomena"},sidebar:"tutorialSidebar",previous:{title:"Quest Pro",permalink:"/docs/hardware/vr/meta/quest-pro/"},next:{title:"ALVR",permalink:"/docs/hardware/vr/meta/quest-pro/alvr"}},s={},c=[{value:"Issue Analysis",id:"issue-analysis",level:2},{value:"Detection",id:"detection",level:2},{value:"Repair",id:"repair",level:2},{value:"Prevention",id:"prevention",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-quest-pros-dying-face-tracking-problem"},"The Quest Pro's Dying Face Tracking Problem"),(0,r.kt)("p",null,"The Quest Pro has a well-known failure point for its face tracking system, with numerous users who have encountered the exact same symptoms.\nHow the story typically goes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The eye and face tracking was working fine until it wasn't"),(0,r.kt)("li",{parentName:"ol"},"The eye tracking calibration on the headset works"),(0,r.kt)("li",{parentName:"ol"},"The eye and face tracking are nonfunctional ",(0,r.kt)("em",{parentName:"li"},"only")," when attempting using eye and face tracking simultaneously. ")),(0,r.kt)("p",null,"The problem is moisture getting in the headset.\nSweat and other moisture will find their way into the headset if you use the headset like a VRC user would.\nThis is especially true if you do things like Just Dance, VR workouts, or long sessions of Beat Saber with the headset.\nThe problem may be exacerbated if you live in a humid and warm environment. "),(0,r.kt)("p",null,"An example of what your Quest Pro's front plate might look like on the inside after a fair bit of use:"),(0,r.kt)("div",{style:{width:"75%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:n(69363).Z,alt:"teh_venom's Quest Pro front plate moisture example"})),(0,r.kt)("h2",{id:"issue-analysis"},"Issue Analysis"),(0,r.kt)("p",null,"The fundamental problem that develops is ",(0,r.kt)("em",{parentName:"p"},"corrosion")," on the face tracking illuminator boards on the bottom of the headset.\nThe Quest Pro has 4 boards with little IR LEDs on them that turn on when you use face tracking.\nThe outer pair of these boards are completely exposed (not encased into the plastic frame with adhesive like the inner pair), and unfortunately placed right\nnext to the intake vent that runs along the edge of the headset.\nMoisture, whether it be sweat from the lens side of the headset finding its way between the rubber flap and lens modules down to the bottom of the headset, or moisture from the user's breath / other\nsourcefinding its way into the headset through the intake vent, will end up condensing on the exposed solder points of the face tracking illuminator board. "),(0,r.kt)("div",{style:{width:"75%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:n(61264).default,alt:"Quest Pro FT LEDs and potential moisture ingress areas"})),(0,r.kt)("p",null,'This eventually causes a green corrosion to appear on the outer LED boards, as well as other exposed metal bits in the area, such as the body of the face tracking camera.\nEventually this corrosion ("green crud") causes one or some of the LEDs to fail. '),(0,r.kt)("div",{style:{width:"75%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:n(18013).Z,alt:"The Quest Pro 'Green Crud' from corrosion"})),(0,r.kt)("div",{style:{width:"75%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:n(65195).Z,alt:"The Quest Pro 'Green Crud' from corrosion"})),(0,r.kt)("p",null,"The LEDs for face tracking ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"and eye tracking"))," are driven by a single, ",(0,r.kt)("em",{parentName:"p"},"shared")," driver IC (",(0,r.kt)("a",{parentName:"p",href:"https://www.ti.com/product/TLC59401#tech-docs"},"TLC59401"),").\nWhat this means is, if the user ",(0,r.kt)("em",{parentName:"p"},"only has eye tracking enabled"),", which means the face tracking LEDs on the bottom of the headset are ",(0,r.kt)("em",{parentName:"p"},"not being driven"),", everything will seem fine.\nHowever, when something attempts to use the face tracking, the IC detects that something is wrong (due to the corroded face tracking LED board) and effectively gets shut down,\ntaking all the illuminators with it, eye and face.\nWith no (or very dim) lights, the cameras for tracking your eyes and face can't see anything clearly, and tracking looks dead. "),(0,r.kt)("h2",{id:"detection"},"Detection"),(0,r.kt)("p",null,"If your Quest Pro's face tracking seems to have stopped working, you can easily verify whether or not the cause is this problem"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure that you can still complete eye tracking calibration"),(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("a",{parentName:"li",href:"https://www.meta.com/experiences/aura/5367350470041414/"},"Aura")," application from the Meta Quest store "),(0,r.kt)("li",{parentName:"ol"},"Run Aura and test eye and face tracking with the alien flower girl head. It might take a little bit of time to start at first",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the alien girl's eyes and face are unresponsive, you most likely have corroded face tracking LEDs"),(0,r.kt)("li",{parentName:"ul"},"If the alien girl's eyes and face are completely responsive and expressive, you probably have a VRCFT-setup related issue, and not damaged hardware"))),(0,r.kt)("li",{parentName:"ol"},"You could also use a smartphone's camera to observe the eye and face tracking LEDs (they will show up as purple-ish dots). Run Aura as above, and take off the headset.\nIf you notice that one or more of the LEDs on the bottom are missing (there should be 3 LEDs per outer board), then you definitely have the problem. ")),(0,r.kt)("p",null,"Example Quest Pro (cropped image from ",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/QuestPro/comments/12tfqzr/busted_face_tracking_kills_otherwise_working_eye/"},"evg-zhabotinsky"),") with dead LEDs on one side: "),(0,r.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:n(93200).default,alt:"Dead face tracking LED example from evg-zhabotinsky"})),(0,r.kt)("h2",{id:"repair"},"Repair"),(0,r.kt)("p",null,"For now, refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/849300336128032789/1294044503832789042"},"VRCFT Discord post")),(0,r.kt)("h2",{id:"prevention"},"Prevention"),(0,r.kt)("p",null,"For now, refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/849300336128032789/1294044503832789042"},"VRCFT Discord post")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Big thanks to community members tikkaqrow, cucumberworks, ",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/QuestPro/comments/12tfqzr/busted_face_tracking_kills_otherwise_working_eye/"},"evg-zhabotinsky")," on Reddit, and teh_venom\nfor their knowledge contributions to this niche issue (and pictures)."))}u.isMDXComponent=!0},61264:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/quest_pro_bottom_labeled-30d7352c0d7265146480735386455960.png"},18013:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quest_pro_crud-70cec856610e59a012bb3073b05ad000.jpg"},65195:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quest_pro_crud_1-e6e1aa5b8ac69532702b503c8258ebd4.jpg"},93200:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/quest_pro_dead_leds_example-c8a43f25bcf3dabac086f727b68d0c38.png"},69363:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quest_pro_front_plate_sweaty-91e42b5a337327faa33faa06acf42a02.jpg"},82648:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/vrcft_installer-ee91e492bc58e5982831a43ad159fa6e.png"},90512:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r});const r=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}}}]);