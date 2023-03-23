# Eye Tracking Parameters

|Parameter Name (**Case Sensitive**)|Description|Eye|
|---------|-----------|---|
|<sup>3</sup>`EyesX`|Gaze Direction X|Combined|
|<sup>3</sup>`EyesY`|Gaze Direction Y|Combined|
|`LeftEyeLid`|Eyelid Open|Left|
|`RightEyeLid`|Eyelid Open|Right|
|`CombinedEyeLid`|Eyelid Open|Combined|
|`EyesWiden`|Eye Widen|Combined|
|`EyesDilation`|Pupil Dilation (0 is Constricted, 1 is Dilated)|Combined|
|`EyesPupilDiameter`|Pupil Diameter (0 cm to 1cm)|Combined|
|`EyesSqueeze`|Eyelid Squeeze|Combined|
|<sup>3</sup>`LeftEyeX`|Gaze Direction X|Left|
|<sup>1, 3</sup>`LeftEyeY`|Gaze Direction Y|Left|
|<sup>3</sup>`RightEyeX`|Gaze Direction X|Right|
|<sup>1, 3</sup>`RightEyeY`|Gaze Direction Y|Right|
|`LeftEyeWiden`|Eye Widen|Left|
|`RightEyeWiden`|Eye Widen|Right|
|`LeftEyeSqueeze`|Eyelid Squeeze|Left|
|`RightEyeSqueeze`|Eyelid Squeeze|Right|
|<sup>2</sup>`LeftEyeLidExpanded`|0.0 to 0.8 Eyelid Squeeze, Eyelid Open, 0.8 to 1.0 Eye Widen|Left|
|<sup>2</sup>`RightEyeLidExpanded`|0.0 to 0.8 Eyelid Squeeze, Eyelid Open, 0.8 to 1.0 Eye Widen|Right|
|<sup>2</sup>`CombinedEyeLidExpanded`|0.0 to 0.8 Eyelid Squeeze, Eyelid Open, 0.8 to 1.0 Eye Widen|Combined|
|<sup>2</sup>`LeftEyeLidExpandedSqueeze`|-1 to 0 Eyelid Squeeze, 0.0 to 0.8 Eyelid Open, 0.8 to 1.0 Eye Widen|Left|
|<sup>2</sup>`RightEyeLidExpandedSqueeze`|-1 to 0 Eyelid Squeeze, 0.0 to 0.8 Eyelid Open, 0.8 to 1.0 Eye Widen|Right|
|<sup>2</sup>`CombinedEyeLidExpandedSqueeze`|-1 to 0 Eyelid Squeeze, 0.0 to 0.8 Eyelid Open, 0.8 to 1.0 Eye Widen|Combined|

<sup>1</sup> Recommended to use `EyesY` over separated.

<sup>2</sup> Requires a unique setup to be used as a Binary Parameter.

<sup>3</sup> Only available as a Float Parameter.