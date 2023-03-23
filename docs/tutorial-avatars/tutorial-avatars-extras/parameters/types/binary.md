# Binary Parameters
Nearly all VRCFaceTracking expression parameters can be used as a Binary parameter. Exceptions are listed in the Parameters list above.

Binary parameters are a set of parameters which take advantage of the binary counting system in order to save space inside of the VRC Avatar Descriptor's parameters. All Binary parameters are able to be smoothed using animation transitions, so if you are looking to compact your face tracking setup, Binary parameters are a good solution for that purpose.

**You can use the [Binary Parameter Tool](https://github.com/regzo2/BinaryParameterTool/releases), a Unity Editor plugin, to create animation layers that a Binary parameter can be used with. Highly recommended as creating the animation layers for a Binary parameter is very tedious.**

Binary parameters can also control a single Float parameter inside of an animator to be able to interface with Blend Trees and other Float-exclusive fields inside an Animator, using animations that control a Float parameter. The [Binary Parameter Tool](https://github.com/regzo2/BinaryParameterTool/releases) can generate these as well.

Example of a Binary Parameter compatible animation layer:

![](https://i.imgur.com/XpkB0Fp.png)

Example of a single transition from AnyState to a State (in this case: JawForward1):

![](https://i.imgur.com/15a4OmM.png)

|Parameter Name (**Case Sensitive**)|Description|
|--|--|
|`~~~1`|(Float Parameter) 2<sup>0</sup>|
|`~~~2`|(Float Parameter) 2<sup>1</sup>|
|`~~~4`|(Float Parameter) 2<sup>2</sup>|
|`~~~8`|(Float Parameter) 2<sup>3</sup>|
|...||
|`~~~X` |(Float Parameter) 2<sup>X</sup>|
|`~~~Negative`|(Negative bit for Combined Lip Parameters) |

### Unique Binary Parameters

The following Binary parameters are setup differently compared to their Float counterparts.

* `EyeLidExpanded` will return the value of a Blink when `EyeWidenToggle` is false, and returns the value of Eye Widen when `EyeWidenToggle` is true.
* `EyeLidExpandedSqueeze` functions exactly as `EyeLidExpanded`, but also returns the value of Eye Squeeze when `EyeSqueezeToggle` is true.

|Parameter Name (**Case Sensitive**)|Description|
|--|--|
|<sup>1</sup>`LeftEyeLidExpandedX`|LeftEyeLidExpanded 2<sup>**X**</sup>|
|`LeftEyeWidenToggle`|LeftEyeWiden Widen State|
|<sup>1</sup>`RightEyeLidExpandedX`|RightEyeLidExpanded 2<sup>**X**</sup>|
|`RightEyeWidenToggle`|RightEyeWiden Widen State|
|<sup>1</sup>`CombinedEyeLidExpandedX`|CombinedEyeLidExpanded 2<sup>X</sup>|
|`CombinedEyeWidenToggle`|CombinedEyeWiden Widen State|
|<sup>1</sup>`LeftEyeLidExpandedSqueezeX`|LeftEyeLidExpandedSqueeze 2<sup>X</sup>|
|`LeftEyeSqueezeToggle`|LeftEyeSqueeze Squeeze State|
|<sup>1</sup>`RightEyeLidExpandedSqueezeX`|RightEyeLidExpandedSqueeze 2<sup>X</sup>|
|`RightEyeSqueezeToggle`|RightEyeSqueeze Squeeze State|
|<sup>1</sup>`CombinedEyeLidExpandedSqueezeX`|CombinedEyeLidExpandedSqueeze 2<sup>X</sup>|
|`CombinedEyeSqueezeToggle`|CombinedEyeSqueeze Squeeze State|

<sup>1</sup> **X** Represents an up-to number of params, so you would have 1, 2, 4, ... , **X** Binary parameters.