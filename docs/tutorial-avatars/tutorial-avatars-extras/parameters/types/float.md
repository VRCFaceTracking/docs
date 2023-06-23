---
description: Detailed explanation of Float-typed parameters. 
---

# Float Parameters

**Float Parameters** (typically **Floating-point** numbers, shortened as **Floats**) 
are a parameter type available for use in VRCFaceTracking. 

**Floats** are the *native* parameter type of all parameters in **VRCFaceTracking**,
for the very simple reason that all tracking interfaces return float values for their
tracked expressions. 
<!-- **VRChat**, and *other platforms* that can accept VRCFaceTracking tracking data. They 
represent numbers with a defined amount of decimal points. -->
Thus, **Floats** are the simpler and more direct parameter type to use for 
a face tracking parameter. 
If it wasn't for VRChat's avatar expression synced bit limit, we would only need **Float** parameters!

Float parameters are typically driven with a Blend Tree, such as the one pictured below:

![](https://i.imgur.com/KSAPIFz.png)

There are multiple Float parameters that are given in an X and Y distinction, and using a 2D Blend Tree is the best way to control these parameters. Here is an example of how you would drive such a parameter:

![](https://i.imgur.com/DGsedgX.png)