# Vive Wireless + Eye & Face Tracking
Vive Wireless with a Vive Pro Eye and Vive Facial Tracker works (with some quirks). 
Don’t believe that popup from SRanipal saying otherwise.

## Pros and Cons
### Pros
* Wireless freedom
* No long cable to bend and micro-break, eventually leading to spotty Facial tracker USB connection
* Did I mention wireless?
### Cons
* Battery management
* Potential wireless disconnects / unreliability
* [Quirks of Vive Wireless with FT](#-quirks-of-vive-wireless-with-ft)

## 🤔 Quirks of Vive Wireless with FT
While it does work, there are some things to keep in mind or that you need to work around.

### 🔌 No USB Hubs
In a traditional wired setup, a (quality) USB-C hub could be used to expand the connectivity of the single USB-C 3.0 peripheral port. 
This is not the case when using the Vive Wireless adapter, where bandwidth is already at a premium. 
Multiple other devices may work over a hub connected to the peripheral port, but never when paired with the [Vive Facial Tracker](face-tracker.mdx). 
If you wanted to use the USB port for other modifications (alternative mic, alternative headphones, etc.) you will need to find another solution.

### ⚡ Higher Power Draw
The [Vive Facial Tracker](face-tracker.mdx) is a bit of a power hog. 
When used over wireless, the original stock 18W QC3.0 battery may not be able to support it reliably. 
Users have reported more reliable experience with upgraded power cable (more robust USB-A to A or USB-A to C with an adapter) and higher power output battery, such as the 21W version that now comes stock with the Vive Wireless kits (for Cosmos / Vive Pro 2).

### 🌡 Higher Temps
The Vive Wireless Adapter is already well known for being a head toaster, but with the increased power draw and bandwidth usage when using the Vive Facial Tracker, it is more important than ever to keep the headset wireless module cool. 
Excess heat is one of the primary reasons for wireless cutouts. 
Adding a small fan over the center grill is basically a necessity if you plan on running the [Facial Tracker](face-tracker.mdx) over wireless. 
Keeping the computer-side PCIe card and antenna (“wireless linkbox”) cool too will help improve wireless performance.

### 🏿 CPU Intensive
Running SRanipal and Vive Wireless (and VR + VRChat) together is not for weak CPUs. 
[SRanipal](../../tutorial-modules/sranipal.mdx) does use a reasonable amount of CPU when active. 
Since the encoding for the wireless connection is done by the CPU, any hiccup can result in a wireless freeze / disconnect or simply just wireless USB freeze / disconnect (aka eye/face tracking stops working). 
Weaker or older CPUs (i.e. 8th gen Intel i7, R5-level CPUs 2 generations or older) may have a notably degraded experience. 
If you were already struggling performance-wise in VRChat without wireless, or without face tracking, you should avoid this combo.