# Float Parameters
Float parameters are, for the most part, the **best** parameter type to use: they are the _most flexible_, have _priority*_, get _smoothed over the network_ (if under _priority*_), and the easiest to setup parameter. Float parameters have the ability to be used in Blend Trees, which gives them the ability to blend between multiple animations at a time.

_*Priority_ is an attribute given to a Float parameter which makes it operate under IK Sync, the fastest network sync available in VRChat. Only float parameters and only up to 8 of them can operate in this mode.

Float parameters are typically driven with a Blend Tree, such as the one pictured below:

![](https://i.imgur.com/KSAPIFz.png)

There are multiple Float parameters that are given in an X and Y distinction, and using a 2D Blend Tree is the best way to control these parameters. Here is an example of how you would drive such a parameter:

![](https://i.imgur.com/DGsedgX.png)