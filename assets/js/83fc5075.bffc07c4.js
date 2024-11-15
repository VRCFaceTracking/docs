"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[124],{90351:(e,t,a)=>{a.d(t,{F4:()=>o,d9:()=>u,gm:()=>s,xb:()=>l,y$:()=>d});var n=a(65130),i=a(67294),r=a(52263);function o(e){let{children:t}=e;const{metadata:a}=(0,n.k)(),{editUrl:r}=a;return i.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},t)}function l(e){let{children:t,to:a,append:n=""}=e;const{siteConfig:o}=(0,r.Z)(),l=o.customFields[a.toLowerCase()];return i.createElement("a",{href:l.href+n,target:"_blank",rel:"noopener noreferrer"},t??l.label)}function s(e){let{children:t,cause:a}=e;return i.createElement("div",null,i.createElement("table",null,i.createElement("tbody",null,i.createElement("tr",null,i.createElement("td",null,i.createElement("strong",null,"Cause")),i.createElement("td",{style:{textAlign:"left",width:"100vh"}},a)),i.createElement("tr",null,i.createElement("td",null,i.createElement("strong",null,"Solution")),i.createElement("td",{style:{textAlign:"left",width:"100vh"}},t)))))}const u=e=>{let{children:t,color:a}=e;return i.createElement("span",{style:{color:a}},t)},d=e=>{let{children:t,color:a}=e;return i.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},66105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(87462),i=(a(67294),a(3905)),r=a(22004),o=a(90351);const l={},s="Vive Focus 3 / Vive XR Elite",u={unversionedId:"hardware/VIVE/focus3_xre",id:"hardware/VIVE/focus3_xre",title:"Vive Focus 3 / Vive XR Elite",description:"Introduction",source:"@site/docs/hardware/VIVE/focus3_xre.mdx",sourceDirName:"hardware/VIVE",slug:"/hardware/VIVE/focus3_xre",permalink:"/docs/hardware/VIVE/focus3_xre",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/VIVE/focus3_xre.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vive Facial Tracker",permalink:"/docs/hardware/VIVE/face-tracker"},next:{title:"SRanipal (VIVE)",permalink:"/docs/hardware/VIVE/sranipal"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Preliminary Setup",id:"preliminary-setup",level:3},{value:"Vive Streamer Setup",id:"vive-streamer-setup",level:3},{value:"ALXR Setup",id:"alxr-setup",level:3},{value:"Modules",id:"modules",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],h={toc:c},m="wrapper";function p(e){let{components:t,...l}=e;return(0,i.kt)(m,(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vive-focus-3--vive-xr-elite"},"Vive Focus 3 / Vive XR Elite"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The Vive Focus 3 and XR Elite are standalone VR headsets powered by the Qualcomm XR2, similar to the Quest 2 and Quest Pro headsets from Meta.\nAlthough by default having neither eye nor face tracking, the Focus 3 has 2 add-on modules that can be installed to add eye and face tracking capabilities,\nand the XRE has a single combo module that can be installed to add both eye and face tracking capabilities.\nWhile the XRE can send a (extremely) limited set of face tracking parameters to the Vive standalone version of VRChat, this function is unrelated to VRCFaceTracking and questions/issues regarding this headset feature should be directed to Vive Support.\nThe follow instructions are specifically for ",(0,i.kt)("strong",{parentName:"p"},"PCVR and VRCFT"),". "),(0,i.kt)("p",null,"Since September 2023, the Vive PCVR VR streamer programs (Vive Business Streaming and Vive Streamer Hub) have had the ability to control VRCFT avatars in VRChat on their own (by copying the VRCFT program's functions).\nWhile users can choose to forgo using VRCFT, we would recommend using VRCFT over the Vive Streamer's built-in OSC function.\nEven now, Vive's implementation of VRCFT's functionality is buggy, slow, and handles some parameters (notably MouthClosed) completely incorrectly. "),(0,i.kt)("p",null,"The VRCFT server will be unable to provide support to users who experience issues with the VRCFT clone in Vive's streamer software. "),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"There are two PCVR Streaming methods that supports the eye and face tracking features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Vive Streamer"),(0,i.kt)("li",{parentName:"ol"},"ALXR")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Vive Streamer")," will be more straightforward to set up and use and is recommended for most users.\nALXR on Vive standalone headsets will require some user tweaking and the ALXR remote module doesn't handle eye-openness and gaze correctly yet (August 2024). "),(0,i.kt)("h3",{id:"preliminary-setup"},"Preliminary Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the eye and/or face tracking modules to the headset. Both modules should come with their own hardware quick-start guides in the box and should generally simply involve connecting the module to a single USB-C port on the headset.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Digital Quick Start Guides For Focus 3 Modules"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("ol",null,(0,i.kt)("li",null,(0,i.kt)("a",{href:"https://dl.vive.com/QSG/Accessory/VIVE_Focus_3_Eye_Tracker_QSG.pdf",target:"_blank"},"Face Tracker Quick Start Guide")),(0,i.kt)("li",null,(0,i.kt)("a",{href:"https://dl.vive.com/QSG/Accessory/VIVE_Focus_3_Eye_Tracker_QSG.pdf",target:"_blank"},"Eye Tracker Quick Start Guide")))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Video Quick Start Guide for the XR Elite Full Facial Tracker"),(0,i.kt)("div",{class:"row",style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,i.kt)(r.Z,{controls:!0,url:"https://www.youtube.com/watch?v=BaiuNRrOVQQ",mdxType:"ReactPlayer"}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Make sure that you agree to the privacy notices for eye and face tracking after installation, follow the instructions for eye tracking calibration, and have the eye and face tracking options enabled in the headset Input settings. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you do not see eye/face tracking Input options in your headset settings, try re-seating the connector(s). ")))),(0,i.kt)("h3",{id:"vive-streamer-setup"},"Vive Streamer Setup"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Vive Streamer Setup"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As of August 2, 2024, you should opt into the BETA version of the Vive Streaming Hub. The live version at the time of writing has various issues related to eye/face tracking. Make sure to check for updates and update both Vive Hub and the Vive Streamer app on the headset to the beta versions after enabling the Beta toggle."),(0,i.kt)("div",{style:{width:"80%",height:"auto",margin:"auto",display:"block"}},(0,i.kt)("img",{src:a(85669).Z,alt:"Vive Streamer Beta option"}))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install VIVE Business Streaming or VIVE (Streaming) Hub onto your computer. They are functionally identical, but the typical cases are VBS for the Focus 3 and Vive Hub for the XR Elite. You can use them interchangably. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Update the streaming app to the latest version on the Focus 3 or XR Elite by plugging the headset into the computer then clicking the Update button in the VIVE Streaming application for "Headset software version" (Settings \u279c About \u279c Vive Streaming).'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Focus 3: you will need to unplug the eye tracking module to use the USB-C port on the side of the headset"),(0,i.kt)("li",{parentName:"ul"},"XR Elite: you can use the USB-C port on the top of the battery cradle or the dangling USB-C port if using the XRE without the battery")),(0,i.kt)("div",{style:{width:"75%",height:"auto",margin:"auto",display:"block"}},(0,i.kt)("img",{src:a(28260).Z,alt:"Headset software version Update button"})))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},'Make sure that the "Eye and facial tracking data" toggle under "Stream avatar data to VRChat via OSC" is ',(0,i.kt)("strong",{parentName:"li"},"enabled")," in the Vive Hub or VBS application (Settings \u279c Vive Streaming \u279c Input). ")),(0,i.kt)("div",{style:{width:"75%",height:"auto",margin:"auto",display:"block"}},(0,i.kt)("img",{src:a(7620).Z,alt:"Vive Streaming Eye and Face tracking toggle"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Download and install the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/ViveSoftware/ViveStreamingFaceTrackingModule"},"Vive Streaming Face Tracking Module"))," from Vive. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Download the latest module .zip from the Releases section found at the right side of the Github page"),(0,i.kt)("li",{parentName:"ul"},'Use the "Install Module from Zip" button in the VRCFT Module Registry page'))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Vive Streamer with SRanipal Module Setup"),(0,i.kt)("p",null,"  SRanipal was the original ET/FT method that was available for the Focus 3 headset, and still works for both the Focus 3 and XR Elite.\nIt offers no obvious improvement over the Vive Streaming Face Tracking module, involves more setup and software, and like all Vive implementations, has its own quirks.\nHowever, it is still better than the built-in output from the Vive Hub software itself..."),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"Follow the ",(0,i.kt)("a",{parentName:"li",href:"#vive-streamer-setup"},'"Vive Streamer Setup" instructions')," up until installing the Vive Streaming Face Tracking Module."),(0,i.kt)("li",{parentName:"ol"},"Install VIVE Console onto your computer. We need this for the latest version (",(0,i.kt)("strong",{parentName:"li"},"1.3.6.8+"),") of ",(0,i.kt)("a",{parentName:"li",href:"/docs/hardware/VIVE/sranipal#installing-via-vive-console"},"SRanipal"),". ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'The easiest way is to search for "VIVE Console" in Steam store, and install it through Steam. '),(0,i.kt)("li",{parentName:"ul"},"Run Vive Console once to let it complete whatever it needs to install"),(0,i.kt)("li",{parentName:"ul"},"You can ",(0,i.kt)("em",{parentName:"li"},"completely ignore")," Vive Console afterwards, you only need the install for SRanipal, not Vive Console itself"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Disable"),' the OSC output from the Vive Streamer by unchecking "Eye and facial tracking data" under "Stream avatar data to VRChat via OSC" in the Input tab of the VIVE Streaming Settings of the Vive Hub application. ',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Alternatively, you can do this manually by opening ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\ProgramData\\HTC\\ViveSoftware\\ViveRR\\RRServer\\serverSetting.setting")," and setting the ",(0,i.kt)("inlineCode",{parentName:"li"},"VOF"),' key to "',(0,i.kt)("strong",{parentName:"li"},"false"),'".')))),(0,i.kt)("div",{style:{width:"75%",height:"auto",margin:"auto",display:"block"}},(0,i.kt)("img",{src:a(7620).Z,alt:"Vive Streaming Eye and Face tracking toggle"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the ",(0,i.kt)("strong",{parentName:"p"},"SRanipalTrackingModule")," module from the VRCFaceTracking module repository. This should open a UAC prompt asking for permission to start the SRanipal runtime (sr_runtime). Make sure to allow it to run. "),(0,i.kt)("admonition",{parentName:"li",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},'If you do not disable the Streamer\'s output, it can double-send messages to VRC in tandemn with VRCFT, causing a "stuttering" effect. '))))),(0,i.kt)("h3",{id:"alxr-setup"},"ALXR Setup"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The ALXR remote module currently doesn't handle eye-openness and gaze correctly for the XR Elite or Focus 3.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"ALXR Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download and install the latest ALXR client ",(0,i.kt)("em",{parentName:"li"},"and server")," from the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/korejan/ALXR-nightly/releases"},"ALXR-nightly")," repository.\nIf this is your first time using ALXR, follow the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/korejan/ALVR/wiki/ALXR-Client#usage"},"Usage guide")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/korejan/ALVR/wiki/ALXR-Client#android-all-flavors---questpicogenericetc"},"Android-specific client install instructions")," "),(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("strong",{parentName:"li"},"ALXR Remote")," module from the VRCFaceTracking module repository."),(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"ALXRModuleConfig.json")," found in the installed module directory.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You may need to navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\[username]\\AppData\\Local\\Packages\\96ba052f-0948-44d8-86c4-a0212e4ae047_d7rcq4vxghz0r\\LocalCache\\Roaming\\VRCFaceTracking\\")," to find the module directory and config json."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/korejan/VRCFT-ALXR-Modules#module-settings"},"Learn more about the ALXR module configuration options")))),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"ALXRModuleConfig.json"),', in the "RemoteConfig" section set "ClientIpAddress" to the headset IP. This can be found in the ALVR server dashboard.',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You will need to restart VRCFT to reinitialize the ALXR Remote Module with the updated configuration."))))),(0,i.kt)("h2",{id:"modules"},"Modules"),(0,i.kt)("p",null,"There are 3 modules that can be used with the Vive Focus 3 or XR Elite, 2 for Vive Streaming and 1 for ALXR. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are using a Vive Streamer (Vive Business Streaming / Vive Hub), you can use the ",(0,i.kt)("strong",{parentName:"li"},"Vive Streaming Face Tracking Module")," or the ",(0,i.kt)("strong",{parentName:"li"},"SRanipalTrackingModule"),"."),(0,i.kt)("li",{parentName:"ul"},"If you are using ALXR, you should install the ",(0,i.kt)("strong",{parentName:"li"},"ALXR Remote Module"),". ")),(0,i.kt)("p",null,"Make sure to follow the setup instructions above for which module to use.\nThe SRanipal and ALXR Remote modules are readily available to be installed from the VRCFT module registry.\n",(0,i.kt)("a",{parentName:"p",href:"/docs/intro/getting-started#installing-the-vrcfacetracking-module"},"Learn how to install modules from the module registry"),".\nThe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ViveSoftware/ViveStreamingFaceTrackingModule"},"Vive Streaming Face Tracking Module")," is not part of the VRCFT module registry and must be installed manually. "),(0,i.kt)("p",null,"Interested in the source code? Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/VRCFaceTracking/SRanipalTrackingModule"},"SRanipalTrackingModule source repository")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/korejan/VRCFT-ALXR-Modules"},"ALXR Remote module")," repos.\nThe Vive Streaming module is closed source and thus does not have a publicly accessible source code. "),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"My avatar's lower lip is up too high/clipping even when I have a neutral facial expression IRL"),(0,i.kt)(o.gm,{cause:"You're using the Vive Streamer's built in output",mdxType:"TroubleShootTable"},(0,i.kt)("p",null,"  Follow the instructions on this page to use VRCFT instead.\nThe mouth clipping issue is only caused by the Vive Streamer Hub's direct output to VRChat, so if you see it, either you did not setup VRCFT and your chosen module ",(0,i.kt)("i",null,"correctly"),", or you did not set up VRCFT at all. "))))}p.isMDXComponent=!0},85669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/streamer_beta-6c328ffda1595475a729215ee0192884.png"},7620:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/streamer_osc_toggle-d2ff47f1983787eda370714bffa4a2ce.png"},28260:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/streamer_update-2497bc9b080c62cf1d23b7b4fa7889bd.png"}}]);