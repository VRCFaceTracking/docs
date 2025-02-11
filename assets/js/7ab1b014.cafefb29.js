"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[3283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65130:(e,t,n)=>{n.d(t,{b:()=>r,k:()=>o});var a=n(67294),i=n(902);const l=a.createContext(null);function r(e){let{children:t,content:n}=e;const i=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(l.Provider,{value:i},t)}function o(){const e=(0,a.useContext)(l);if(null===e)throw new i.i6("DocProvider");return e}},90351:(e,t,n)=>{n.d(t,{F4:()=>r,X9:()=>u,d9:()=>p,gm:()=>s,xb:()=>o,y$:()=>d});var a=n(65130),i=n(67294),l=n(52263);function r(e){let{children:t}=e;const{metadata:n}=(0,a.k)(),{editUrl:l}=n;return i.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},t)}function o(e){let{children:t,to:n,append:a=""}=e;const{siteConfig:r}=(0,l.Z)(),o=r.customFields[n.toLowerCase()];return i.createElement("a",{href:o.href+a,target:"_blank",rel:"noopener noreferrer"},t??o.label)}function s(e){let{children:t,cause:n}=e;return i.createElement("div",null,i.createElement("table",null,i.createElement("tbody",null,i.createElement("tr",null,i.createElement("td",null,i.createElement("strong",null,"Cause")),i.createElement("td",{style:{textAlign:"left",width:"100vh"}},n)),i.createElement("tr",null,i.createElement("td",null,i.createElement("strong",null,"Solution")),i.createElement("td",{style:{textAlign:"left",width:"100vh"}},t)))))}const p=e=>{let{children:t,color:n}=e;return i.createElement("span",{style:{color:n}},t)},d=e=>{let{children:t,color:n}=e;return i.createElement("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)};function u(e){let{items:t}=e;const n=t.sort((()=>Math.random()-.5));return i.createElement("ul",null,n.map(((e,t)=>i.createElement("li",null,e))))}},56054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),l=n(39960),r=n(44996),o=n(90351);const s={},p="SRanipal (VIVE)",d={unversionedId:"hardware/vr/vive/sranipal",id:"hardware/vr/vive/sranipal",title:"SRanipal (VIVE)",description:"SRanipal is the runtime used to interface with the Vive Facial Tracker and other Vive eye / face tracking related hardware on Windows PCs.",source:"@site/docs/hardware/vr/vive/sranipal.mdx",sourceDirName:"hardware/vr/vive",slug:"/hardware/vr/vive/sranipal",permalink:"/docs/hardware/vr/vive/sranipal",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/vr/vive/sranipal.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vive Focus Vision / Focus 3 / XR Elite",permalink:"/docs/hardware/vr/vive/focus3_xre"},next:{title:"Vive Pro Eye",permalink:"/docs/hardware/vr/vive/vpe"}},u={},c=[{value:"Hardware",id:"hardware",level:2},{value:"Setup",id:"setup",level:2},{value:"Installing Via v1.3.1.1 Installer",id:"installing-via-v1311-installer",level:3},{value:"Installing Via v1.3.6.5 .zip",id:"installing-via-v1365-zip",level:3},{value:"Installing Via Vive Console",id:"installing-via-vive-console",level:3},{value:"Removing LipSyncNotification",id:"removing-lipsyncnotification",level:3},{value:"Using SRanipal",id:"using-sranipal",level:2},{value:"Checking Active SRanipal Version",id:"checking-active-sranipal-version",level:3},{value:"Calibrating Eye Tracking",id:"calibrating-eye-tracking",level:3},{value:"Uninstalling SRanipal",id:"uninstalling-sranipal",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:c},h="wrapper";function k(e){let{components:t,...s}=e;return(0,i.kt)(h,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sranipal-vive"},"SRanipal (VIVE)"),(0,i.kt)("p",null,"SRanipal is the runtime used to interface with the Vive Facial Tracker and other Vive eye / face tracking related hardware on Windows PCs.\nSRanipal is ",(0,i.kt)("strong",{parentName:"p"},"required software")," for the Vive Facial Tracker and Vive Pro Eye but ",(0,i.kt)("strong",{parentName:"p"},"NOT REQUIRED")," for running VRCFT if you are not using Vive hardware."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Trivia Fact: SRanipal stands for "',(0,i.kt)("em",{parentName:"p"},"Super Runtime Animation Pal"),'"')),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"SRanipal is generally a ",(0,i.kt)("em",{parentName:"p"},"resource intensive")," piece of software.\nOutside of when used with a Vive Streaming headset, SRanipal may cause a noticable performance and/or stability hit on weaker/older systems!")),(0,i.kt)("h2",{id:"hardware"},"Hardware"),(0,i.kt)("p",null,"SRanipal is only intended for the following headsets/hardware:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Headset"),(0,i.kt)("th",{parentName:"tr",align:null},"Eye Tracking"),(0,i.kt)("th",{parentName:"tr",align:null},"Facial Tracking"),(0,i.kt)("th",{parentName:"tr",align:null},"Minimum SRanipal Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vive Pro Eye"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u2705")," Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u274c")," No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.3.0.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Droolon F1"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u2705")," Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u274c")," No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.3.0.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vive Facial Tracker"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u274c")," No"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u2705")," Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.3.0.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vive Focus 3 (with both add-ons)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u2705")," Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u2705")," Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.3.6.8"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vive XR Elite (with add-on)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u2705")," Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u2705")," Yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1.3.6.8"))))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To use the SRanipal Module, you'll need a compatible headset and the SRanipal Runtime from Vive installed.\nWhich version of SRanipal you install is very important!\nPlease read carefully to avoid any issues."),(0,i.kt)("p",null,"There are three methods of installing SRanipal, in order of most to least recommended:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use the installer of SRanipal v1.3.1.1"),(0,i.kt)("li",{parentName:"ol"},"Use the v1.3.6.5 zip of SRanipal in the VRCFT Discord #file-share channel"),(0,i.kt)("li",{parentName:"ol"},"Install Vive Console (avaliable on Steam or Vive website)")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Version 1.3.2.0 is known to unnecessarily hog computer resources. We generally don't recommend using v1.3.2.0 if you can avoid it. ")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Versions of SRanipal including and after 1.3.6.10 (any version currently packaged with Vive Console) will ",(0,i.kt)("strong",{parentName:"p"},"only work with a Vive Pro series headset connected to the computer"),",\nor with a Vive Streaming Headset (Focus 3, XR Elite). ")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Versions of SRanipal including and after ",(0,i.kt)("strong",{parentName:"p"},"1.3.6.5")," will generate ",(0,i.kt)("em",{parentName:"p"},"an unreasonable")," amount of spam in it's EyeModule log when eye tracking is initialized.\nDo not leave VRCFaceTracking unnecessarily running in the background for long periods of time as the size of the log file can easily get into the range of\ntens to hundreds of ",(0,i.kt)("strong",{parentName:"p"},"gigabytes")," if left unchecked.\nUntil this is resolved, we recommend using older versions of SRanipal if possible.")),(0,i.kt)("p",null,"The recommended version to use as of now (January 2024):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you aren't using a Focus 3 or XR Elite, you should use the ",(0,i.kt)("a",{parentName:"li",href:"#installing-via-v1311-installer"},"v1.3.1.1 installer")),(0,i.kt)("li",{parentName:"ul"},"Focus 3 and XR Elite users ",(0,i.kt)("strong",{parentName:"li"},"must")," use the Vive Console version of SRanipal")),(0,i.kt)("h3",{id:"installing-via-v1311-installer"},"Installing Via v1.3.1.1 Installer"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the ",(0,i.kt)("a",{parentName:"li",href:"https://drive.google.com/drive/folders/1hU1tvOiTHQbT-Ad-wBJ8II8uXkQ8bvvh?usp=share_link"},"SRanipal v1.3.1.1 installer")),(0,i.kt)("li",{parentName:"ol"},"Run the installer and complete the installation process")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The installer for v1.3.1.1 has a known failure point during installation: ",(0,i.kt)("strong",{parentName:"p"},"Error 1001"),". It is not entirely clear why it happens\nin ",(0,i.kt)("strong",{parentName:"p"},"all")," of the cases, but most of the time it's because of either another version of\nSRanipal being present on the system, or an uninstall of a previous version\nnot finishing properly.")),(0,i.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,i.kt)("img",{src:n(97975).default,alt:"sranipal error 1001"})),(0,i.kt)("p",null,"In case you encounter this error while attempting to install SRanipal v1.3.1.1,\ntry this first:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Remove existing SRanipal service"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("ol",null,(0,i.kt)("li",null,"Exit/Finish out of SRanipal installer"),(0,i.kt)("li",null,"Open Windows Terminal / Powershell (as admin)"),(0,i.kt)("li",null,"Run ",(0,i.kt)("code",null,"sc delete SRanipalService")," or ",(0,i.kt)("code",null,'Remove-Service -Name "SRanipalService"')," if you have Powershell 6.0 or above."),(0,i.kt)("li",null,"Try installing again"))))),(0,i.kt)("p",null,"If this fails as well, proceed with this workaround:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Manual Installation Workaround for Error 1001"),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("b",null,"KEEP THE INSTALLER WINDOW OPEN ON THE ERROR BEFORE CONTINUING"),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Copy the installed SRanipal directory from ",(0,i.kt)("code",null,"C:\\Program Files\\Vive\\SRanipal")," into a temporary directory somewhere else"),(0,i.kt)("li",null,'Let the installer continue to fail and "uninstall" SRanipal '),(0,i.kt)("li",null,"Copy SRanipal back from the temporary directory into the proper installation directory"),(0,i.kt)("li",null,"Run the following command in a Windows terminal opened in the SRanipal install directory: ",(0,i.kt)("code",null,'New-Service -Name "SRanipalService" -BinaryPathName "SRanipalService.exe" -StartupType Automatic -Description "SRanipal Service"'))),"Or, just pull computer power so the installer doesn't uninstall anything. Use SRanipal normally after restarting the computer."))),(0,i.kt)("p",null,"Finally, failing both of these, you can"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Attempt a complete ",(0,i.kt)("a",{parentName:"li",href:"#uninstalling-sranipal"},"uninstall of SRanipal")," and see if it installs correctly after"),(0,i.kt)("li",{parentName:"ol"},"(Last resort!) Install SRanipal via one of the other options (Vive Console or the v1.3.6.5 zip)")),(0,i.kt)("h3",{id:"installing-via-v1365-zip"},"Installing Via v1.3.6.5 .zip"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"   Using SRanipal from this zip will not automatically install the SRanipalService, which means starting VRCFaceTracking or any other\nprogram that uses SRanipal ",(0,i.kt)("strong",{parentName:"p"},"will not start SRanipal automatically"),".\nMake sure to ",(0,i.kt)("strong",{parentName:"p"},"run sr_runtime.exe first")," before using VRCFaceTracking or install the SRanipalService manually / use it from the 1.3.1.1 installer.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the ",(0,i.kt)("a",{parentName:"li",href:"https://discord.com/channels/849300336128032789/915075185328152606/1017600042837753906"},"SRanipal v1.3.6.5 .zip (Discord Link)")),(0,i.kt)("li",{parentName:"ol"},"Unzip the folder and run ",(0,i.kt)("inlineCode",{parentName:"li"},"DriverInstaller.msi")),(0,i.kt)("li",{parentName:"ol"},"Run the following command in a Windows Powershell terminal opened in unzipped SRanipal v1.3.6.5 directory: ",(0,i.kt)("inlineCode",{parentName:"li"},'New-Service -Name "SRanipalService" -BinaryPathName "SRanipalService.exe" -StartupType Automatic -Description "SRanipal Service"'))),(0,i.kt)("p",null,"An alternative installation method would be to run the v1.3.1.1 (or v.1.3.2.0) installer, then copy the contents of the v1.3.6.5 version into the older version's installation directory.\nThis will keep the service intact while using the newer runtime."),(0,i.kt)("h3",{id:"installing-via-vive-console"},"Installing Via Vive Console"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It is recommended to install ",(0,i.kt)("a",{parentName:"li",href:"https://store.steampowered.com/app/1635730/VIVE_Console_for_SteamVR/"},"Vive Console via Steam")),(0,i.kt)("li",{parentName:"ol"},"After install, run Vive Console once to let it's internal installers run. You never need to run Vive Console again.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Vive Console does take up a lot of space (~1.6Gb), so copying the SRanipal folder (",(0,i.kt)("inlineCode",{parentName:"p"},"Steam\\steamapps\\common\\VIVEDriver\\App\\SRanipal"),") out , then uninstalling Vive Console is another avenue. Note that this will require manual registration of the SRanipal service and drivers as the Vive Console uninstall will remove them.\nRefer to the instructions for ",(0,i.kt)("a",{parentName:"p",href:"#installing-via-v1365-zip"},"installing via v1.3.6.5 .zip")," for how to manually add the SRanipalService.exe service.")),(0,i.kt)("h3",{id:"removing-lipsyncnotification"},"Removing LipSyncNotification"),(0,i.kt)("p",null,"Many users have noted that this separate program ",(0,i.kt)("inlineCode",{parentName:"p"},"LipSyncNotification.exe")," seems to take up way too much computer resources for doing absolutely nothing.\nWhile an optional step, we would recommend disabling this program.\nThis does not affect SRanipal operation in any way."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to your SRanipal installation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If installed with standalone installer (1.3.1.1), this should be at ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\VIVE\\SRanipal")),(0,i.kt)("li",{parentName:"ul"},"If you installed Vive Console, this should be at ",(0,i.kt)("inlineCode",{parentName:"li"},"[VIVE Console Installation directory]\\App\\SRanipal")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"tools\\lip_sync_notification")," and delete or rename the ",(0,i.kt)("inlineCode",{parentName:"p"},"LipSyncNotfication.exe")))),(0,i.kt)("p",null,"Note that if you are using VIVE Console you will need to re-disable the executable every time VIVE Console updates."),(0,i.kt)("h2",{id:"using-sranipal"},"Using SRanipal"),(0,i.kt)("p",null,"Once SRanipal initializes, the tray icon can show a few possible states indicating the status of SRanipal-compatible hardware connected to the computer.\nYou can find the Windows tray in your Windows taskbar, close to the clock. You might need to click the little right-pointing arrow to show hidden icons to find\nthe little SRanipal robot icon."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Area/ Color"),(0,i.kt)("th",{parentName:"tr",align:null},"Eye"),(0,i.kt)("th",{parentName:"tr",align:null},"Mouth"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\u2b1b")," Black (Dark)"),(0,i.kt)("td",{parentName:"tr",align:null},"Eye tracker (VPE) was not detected"),(0,i.kt)("td",{parentName:"tr",align:null},"Vive Facial Tracker was not detected")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\ud83d\udfe7")," Orange"),(0,i.kt)("td",{parentName:"tr",align:null},"Eye tracker (VPE) was detected, currently uninitialized"),(0,i.kt)("td",{parentName:"tr",align:null},"Vive Facial Tracker was detected, currently uninitialized")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\ud83d\udfe9")," Green"),(0,i.kt)("td",{parentName:"tr",align:null},"Eye tracker (VPE) was initialized and sending eye tracking data"),(0,i.kt)("td",{parentName:"tr",align:null},"Vive Facial Tracker was initialized and sending face tracking data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\ud83d\udfea")," Purple"),(0,i.kt)("td",{parentName:"tr",align:null},"Eye tracker (over Vive Streaming) successful connection"),(0,i.kt)("td",{parentName:"tr",align:null},"Face Tracker (over Vive Streaming) successful connection")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"\ud83d\udfe6")," Blue"),(0,i.kt)("td",{parentName:"tr",align:null},"Some uninitialized state in 1.3.6.10+ versions"),(0,i.kt)("td",{parentName:"tr",align:null},"Some uninitialized state in 1.3.6.10+ versions")))),(0,i.kt)("p",null,"To actually use your Vive hardware with VRChat, you will need to use the SRanipal VRCFT Module with the VRCFaceTracking software.\nFor more information on how to install the VRCFT Module, see the ",(0,i.kt)(l.Z,{to:(0,r.Z)("docs/vrcft-software/vrcft#module-registry"),mdxType:"Link"},"Module Registry")," section."),(0,i.kt)("p",null,"Assuming there are no connection issues with the hardware, the connection hardware components (eye, face, or both) should be initialized by VRCFT after a few seconds.\nNote that upon first initlization of the Vive Facial Tracker and Vive Pro Eye in SteamVR it may prompt you for permission.\nMake sure to accept to the user agreement."),(0,i.kt)("h3",{id:"checking-active-sranipal-version"},"Checking Active SRanipal Version"),(0,i.kt)("p",null,'To see what version of SRanipal is currently running, start SRanipal and right click on the little SRanipal robot tray icon, then click "About".\nThis should open a small info window containing information about the version of SRanipal and the firmware versions of any detected SRanipal-compatible hardware.\nIf you can\'t seem to right-click the SRanipal tray icon, see the relevant point in ',(0,i.kt)("a",{parentName:"p",href:"#troubleshooting"},"Troubleshooting"),"."),(0,i.kt)("h3",{id:"calibrating-eye-tracking"},"Calibrating Eye Tracking"),(0,i.kt)("p",null,'After installing SRanipal, a new app will be added to your SteamVR dashboard called "Vive Pro Eye Calibration". This app is ',(0,i.kt)("strong",{parentName:"p"},"only for Vive Pro Eye")," (and the Droolon F1 module).\nThe Vive Focus 3 eye tracker and Vive Full Facial tracker for the XR Elite are calibrated with the calibration sequence accessible from the standalone settings Inputs sub-menu.\nEye tracking calibration is not required to be performed frequently, but should be done after initial SRanipal software installation, after a change to the headset (i.e. change the facial interface), or when switching the headset between users.\nNote that the calibration is only for gaze tracking."),(0,i.kt)("p",null,'Start calibration by making sure "Use Eye Tracking" is enabled, then hitting the "Calibrate" button in the app. Follow the in-app instructions to finish calibrating the eye gaze tracking.  '),(0,i.kt)("h2",{id:"uninstalling-sranipal"},"Uninstalling SRanipal"),(0,i.kt)("p",null,'To uninstall SRanipal, uninstall Vive Console (if installed that route) or run the SRanipal installer .exe (v1.3.1.1) and select the "uninstall" option.'),(0,i.kt)("p",null,"In case SRanipal seems to have some issues (especially after having mixed different versions) and the SRanipal installer seems to be unable to uninstall SRanipal, follow ",(0,i.kt)("a",{parentName:"p",href:"https://forum.htc.com/topic/5642-sranipal-getting-started-steps/?do=findComment&comment=46845"},"these instructions from Vive Admin C.T.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a Windows Terminal (cmd/Powershell/etc.) with Administrator priviledges and run ",(0,i.kt)("inlineCode",{parentName:"p"},"sc delete SRanipalService"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the following registry entries using ",(0,i.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/windows/how-to-open-registry-editor-in-windows-10-deab38e6-91d6-e0aa-4b7c-8878d9e07b11"},"regedit"),".\nYou may want to ",(0,i.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-gb/topic/how-to-back-up-and-restore-the-registry-in-windows-855140ad-e318-2a13-2829-d428a2ab0692"},"back up your registry")," before performing these edits."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\\HKEY_LOCAL_MACHINE\\SOFTWARE\\VIVE\\SRWorks\\")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\\HKEY_CURRENT_USER\\Software\\VIVE\\SRWorks\\")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"}," \\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\SranipalService\\")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete all the installed SRanipal files"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If installed with standalone installer (1.3.1.1), the installation directory should be at ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\VIVE\\SRanipal")),(0,i.kt)("li",{parentName:"ul"},"If you installed Vive Console, the files would be at ",(0,i.kt)("inlineCode",{parentName:"li"},"[VIVE Console Installation directory]\\App\\SRanipal")," if for some reason this still exists. Uninstall Vive Console!")))),(0,i.kt)("p",null,"After completing these steps, your system should be 100% free of SRanipal and you can attempt a clean install again."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"You may find more troubleshooting steps specifically related to your Vive headset/hardware on its respective page."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Installing SRanipal fails with Error 1001!?!"),(0,i.kt)(o.gm,{cause:"Vive software being Vive software",mdxType:"TroubleShootTable"},"Follow the workarounds listed at the ",(0,i.kt)(l.Z,{to:"#installing-via-v1311-installer",mdxType:"Link"},"instructions for the 1.3.1.1 installer"),".")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"SRanipal does not automatically start with VRCFT"),(0,i.kt)(o.gm,{cause:"Either you forgot to install the SRanipal module for VRCFT, or SRanipalService.exe is not registered as a Windows service.",mdxType:"TroubleShootTable"},(0,i.kt)("p",null,"  Make sure the SRanipal module is installed from the Module Registry in VRCFT. Then if SRanipal still does not start with VRCFT,\ntry manually registering the SRanipal Service by navigating to the SRanipal install directory and running the following command in a\nWindows terminal opened to that directory:"),(0,i.kt)("code",null,'New-Service -Name "SRanipalService" -BinaryPathName "SRanipalService.exe" -StartupType Automatic -Description "SRanipal Service"'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Cannot right-click the SRanipal tray icon and the eyes and face stay dark/blue"),(0,i.kt)(o.gm,{cause:"You are using a version of SRanipal that requires a Vive Pro headset connected, and you do not have a Vive Pro headset connected.",mdxType:"TroubleShootTable"},"Uninstall Vive Console and ",(0,i.kt)(l.Z,{to:"#installing-via-v1311-installer",mdxType:"Link"},"install an older version of SRanipal"),".")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"I have a Vive Facial Tracker connected to my headset but the SRanipal tray icon robot's mouth stays dark!"),(0,i.kt)(o.gm,{cause:"SRanipal cannot initialize the Vive Facial Tracker for some reason, usually related to a USB connection problem.",mdxType:"TroubleShootTable"},"Please refer to the ",(0,i.kt)(l.Z,{to:(0,r.Z)("docs/hardware/addons/vive/face-tracker"),mdxType:"Link"},"Vive Facial Tracker")," page on why there might be a connection issue, and verify if it is a connection issue by plugging in the Facial Tracker directly into a USB-C port on your computer.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Another (rarer) possibility is that your Windows Settings has disabled any app from accessing any ",(0,i.kt)("i",null,"Camera")," device. Make sure that VRCFT can access camera devices!")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"VRCFT with the SRanipal Module / SRanipal has high CPU and memory usage"),(0,i.kt)(o.gm,{cause:"SRanipal is generally resource intensive, but SRanipal version 1.3.2.0 may be showing why you shouldn't use it or the pointless LipSyncNotification.exe is doing its thing.",mdxType:"TroubleShootTable"},"If you are using SRanipal 1.3.2.0 (",(0,i.kt)(l.Z,{to:"#checking-active-sranipal-version",mdxType:"Link"},"How do I check SRanipal version?"),"), you should try ",(0,i.kt)(l.Z,{to:"#setup",mdxType:"Link"},"installing another version of SRanipal"),". Please understand that SRanipal is generally a non-trivial background process and weaker/older machines may still have a noticable performance hit even on non-1.3.2.0 versions of SRanipal.",(0,i.kt)("br",null),(0,i.kt)("br",null),"LipSyncNotifcation.exe is a generally useless overlay program that seems to do nothing other than needlessly consume a ton of your computer resources. You can ",(0,i.kt)(l.Z,{to:"#removing-lipsyncnotification",mdxType:"Link"},"safely disable it"),".")))}k.isMDXComponent=!0},97975:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/vive_installer_error_1001-18cb261602c9d84b0b93cc57b7f5406d.png"}}]);