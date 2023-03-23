# Lip Tracking Parameters

VRCFaceTracking provides the user with many lip tracking expression parameters.

_It is highly recommended to use the Combined Lip Parameters (seen below Lip Parameters) as much as possible to save space._

### Lip Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|---|---|---|
|`JawRight`|Jaw translation right|0.0 - 1.0|
|`JawLeft`|Jaw translation left|0.0 - 1.0|
|`JawForward`|Jaw translation jutting out|0.0 - 1.0|
|`JawOpen`|Jaw open|0.0 - 1.0|
|`MouthApeShape`|Jaw open, lips sealed closed|0.0 - 1.0|
|`MouthUpperRight`|Upper lip translate right, and not showing teeth|0.0 - 1.0|
|`MouthUpperLeft`|Upper lip translate left, and not showing teeth|0.0 - 1.0|
|`MouthLowerRight`|Lower lip translate right|0.0 - 1.0|
|`MouthLowerLeft`|Lower lip translate left|0.0 - 1.0|
|`MouthUpperOverturn`|Pushing top lip out|0.0 - 1.0|
|`MouthLowerOverturn`|Pouting out lower lip|0.0 - 1.0|
|`MouthPout`|Both lips pouting forward|0.0 - 1.0|
|`MouthSmileRight`|Smile right<sup>1</sup>|0.0 - 1.0|
|`MouthSmileLeft`|Smile left<sup>1</sup>|0.0 - 1.0|
|`MouthSadRight`|Sad Right<sup>1</sup>|0.0 - 1.0|
|`MouthSadLeft`|Sad Left<sup>1</sup>|0.0 - 1.0|
|`CheekPuffRight`|Cheek puffed out, right|0.0 - 1.0|
|`CheekPuffLeft`|Cheek puffed out, left|0.0 - 1.0|
|`CheekSuck`|Both cheeks sucked in|0.0 - 1.0|
|`MouthUpperUpRight`|Upper right lip drawn up to show teeth|0.0 - 1.0|
|`MouthUpperUpLeft`|Upper left lip drawn up to show teeth|0.0 - 1.0|
|`MouthLowerDownRight`|Bottom right lip drawn down to show teeth|0.0 - 1.0|
|`MouthLowerDownLeft`|Bottom left lip drawn down to show teeth|0.0 - 1.0|
|`MouthUpperInside`|Upper lip bitten by lower teeth|0.0 - 1.0|
|`MouthLowerInside`|Bottom lip bitten by upper teeth|0.0 - 1.0|
|`MouthLowerOverlay`|Upper lip out and over lower|0.0 - 1.0|
|`TongueLongStep1`|Seems to be an intermediate out|0.0 - 1.0|
|`TongueLongStep2`|Seems to be an intermediate out|0.0 - 1.0|
|`TongueDown`|Tongue tip angled down|0.0 - 1.0|
|`TongueUp`|Tongue tip angled up|0.0 - 1.0|
|`TongueRight`|Tongue tip angled right|0.0 - 1.0|
|`TongueLeft`|Tongue tip angled left|0.0 - 1.0|
|`TongueRoll`|Both sides of tongue brought up into "v"|0.0 - 1.0|
|`TongueUpLeftMorph`|Seems to deform upper left of tongue out of mouth|0.0 - 1.0|
|`TongueUpRightMorph`|Seems to deform upper right of tongue out of mouth|0.0 - 1.0|
|`TongueDownLeftMorph`|Seems to deform lower left of tongue out of mouth |0.0 - 1.0|
|`TongueDownRightMorph`|Seems to deform lower right of tongue out of mouth |0.0 - 1.0|

## Tracking Status Bools

The status of the tracking states of eye tracking and lip tracking from VRCFaceTracking.

|Parameter Name (**Case Sensitive**)|Description|Type|
|-------------------|---------------------------------------------|-----|
|`EyeTrackingActive`| Eye Tracking is Active (SRanipal Green Eyes)|`Bool`|
|`LipTrackingActive`| Lip Tracking is Active (SRanipal Green Mouth)|`Bool`|

## Combined Lip Parameters

Additionally, VRCFaceTracking provides computed parameters that combine some of the parameters, to save space:

### General Combined Lip Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`JawX`|Jaw translation fully left to fully right|-1.0 - 1.0|
|`MouthUpper`|MouthUpperLeft to MouthUpperRight, with 0 being neutral|-1.0 - 1.0|
|`MouthLower`|MouthLowerLeft to MouthLowerRight, with 0 being neutral|-1.0 - 1.0|
|`MouthX`|MouthLeft (Upper/Lower) to MouthRight (Upper/Lower), with 0 being neutral|-1.0 - 1.0|
|`MouthUpperInsideOverturn`|MouthUpperOverturn to MouthUpperInside, with 0 being neutral|-1.0 - 1.0|
|`MouthLowerInsideOverturn`|MouthLowerOverturn to MouthLowerInside, with 0 being neutral|-1.0 - 1.0|
|`SmileSadRight`|MouthSadRight to MouthSmileRight, with 0 being neutral|-1.0 - 1.0|
|`SmileSadLeft`|MouthSadLeft to MouthSmileLeft, with 0 being neutral|-1.0 - 1.0|
|`SmileSad`|MouthSad (Left/Right) to MouthSmile (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`TongueY`|TongueDown to TongueUp, with 0 being neutral|-1.0 - 1.0|
|`TongueX`|TongueLeft to TongueRight, with 0 being neutral|-1.0 - 1.0|
|`TongueSteps`|TongueLongStep1 to TongueLongStep2, with -1 being tongue fully in to 1 being fully out|-1.0 - 1.0|
|`PuffSuckRight`|CheekSuck to CheekPuffRight, with 0 being neutral|-1.0 - 1.0|
|`PuffSuckLeft`|CheekSuck to CheekPuffLeft, with 0 being neutral|-1.0 - 1.0|
|`PuffSuck`|CheekSuck to CheekPuff (Left/Right), with 0 being neutral|-1.0 - 1.0|

### Jaw Open Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`JawOpenApe`|MouthApeShape to JawOpen, with 0 being neutral|-1.0 - 1.0|
|`JawOpenPuff`|CheekPuff (Left/Right) to JawOpen, with 0 being neutral|-1.0 - 1.0|
|`JawOpenPuffRight`|CheekPuffRight to JawOpen, with 0 being neutral|-1.0 - 1.0|
|`JawOpenPuffLeft`|CheekPuffLeft to JawOpen, with 0 being neutral|-1.0 - 1.0|
|`JawOpenSuck`|CheekSuck to JawOpen, with 0 being neutral|-1.0 - 1.0|
|`JawOpenForward`|JawForward to JawOpen, with 0 being neutral|-1.0 - 1.0|
|`JawOpenOverlay`|MouthLowerOverlay to JawOpen, with 0 being neutral|-1.0 - 1.0|

### Mouth Upper Up Right Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`MouthUpperUpRightUpperInside`|MouthUpperInside to MouthUpperUpRight, with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpRightPuffRight`|CheekPuffRight to MouthUpperUpRight, with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpRightApe`|MouthApeShape to MouthUpperUpRight, with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpRightPout`|MouthPout to MouthUpperUpRight, with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpRightOverlay`|MouthLowerOverlay Shape to MouthUpperUpRight, with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpRightSuck`|CheekSuck Shape to MouthUpperUpRight, with 0 being neutral|-1.0 - 1.0|

### Mouth Upper Up Left Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`MouthUpperUpLeftUpperInside`|MouthUpperInside to MouthUpperUpLeft, with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpLeftPuffLeft`|CheekPuffLeft to MouthUpperUpLeft, with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpLeftApe`|MouthApeShape to MouthUpperUpLeft, with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpLeftPout`|MouthPout to MouthUpperUpLeft, with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpLeftOverlay`|MouthLowerOverlay Shape to MouthUpperUpLeft, with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpLeftSuck`|CheekSuck Shape to MouthUpperUpLeft, with 0 being neutral|-1.0 - 1.0|

### Mouth Upper Up Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`MouthUpperUpUpperInside`|MouthUpperInside to MouthUpperUp (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpInside`|MouthInside (Upper/Lower) to MouthUpperUp (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpPuff`|CheekPuff (Left/Right) to MouthUpperUp (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpPuffLeft`|CheekPuffLeft to MouthUpperUp (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpPuffRight`|CheekPuffRight to MouthUpperUp (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpApe`|MouthApeShape to MouthUpperUp (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpPout`|MouthPout to MouthUpperUp (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpOverlay`|MouthLowerOverlay Shape to MouthUpperUp (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthUpperUpSuck`|CheekSuck Shape to MouthUpperUp (Left/Right), with 0 being neutral|-1.0 - 1.0|

### Mouth Lower Down Right Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`MouthLowerDownRightLowerInside`|MouthLowerInside to MouthLowerDownRight, with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownRightPuffRight`|CheekPuffRight to MouthLowerDownRight, with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownRightApe`|MouthApeShape to MouthLowerDownRight, with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownRightPout`|MouthPout to MouthLowerDownRight, with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownRightOverlay`|MouthLowerOverlay Shape to MouthLowerDownRight, with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownRightSuck`|CheekSuck Shape to MouthLowerDownRight, with 0 being neutral|-1.0 - 1.0|

### Mouth Lower Down Left Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`MouthLowerDownLeftLowerInside`|MouthLowerInside to MouthLowerDownLeft, with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownLeftPuffLeft`|CheekPuffLeft to MouthLowerDownLeft, with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownLeftApe`|MouthApeShape to MouthLowerDownLeft, with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownLeftPout`|MouthPout to MouthLowerDownLeft, with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownLeftOverlay`|MouthLowerOverlay Shape to MouthLowerDownLeft, with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownLeftSuck`|CheekSuck Shape to MouthLowerDownLeft, with 0 being neutral|-1.0 - 1.0|

### Mouth Lower Down Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`MouthLowerDownLowerInside`|MouthLowerInside to MouthLowerDown (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownInside`|MouthInside (Upper/Lower) to MouthLowerDown (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownPuff`|CheekPuff (Left/Right) to MouthLowerDown (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownPuffLeft`|CheekPuffLeft to MouthLowerDown (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownPuffRight`|CheekPuffRight to MouthLowerDown (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownApe`|MouthApeShape to MouthLowerDown (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownPout`|MouthPout to MouthLowerDown (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownOverlay`|MouthLowerOverlay Shape to MouthLowerDown (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`MouthLowerDownSuck`|CheekSuck Shape to MouthLowerDown (Left/Right), with 0 being neutral|-1.0 - 1.0|

### Smile Right Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`SmileRightUpperOverturn`|MouthUpperOverturn to MouthSmileRight, with 0 being neutral|-1.0 - 1.0|
|`SmileRightLowerOverturn`|MouthLowerOverturn to MouthSmileRight, with 0 being neutral|-1.0 - 1.0|
|`SmileRightOverturn`|MouthOverturn (Upper/Lower) to MouthSmileRight, with 0 being neutral|-1.0 - 1.0|
|`SmileRightApe`|MouthApeShape to MouthSmileRight, with 0 being neutral|-1.0 - 1.0|
|`SmileRightOverlay`|MouthLowerOverlay to MouthSmileRight, with 0 being neutral|-1.0 - 1.0|
|`SmileRightPout`|MouthPout to MouthSmileRight, with 0 being neutral|-1.0 - 1.0|

### Smile Left Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`SmileLeftUpperOverturn`|MouthUpperOverturn to MouthSmileLeft, with 0 being neutral|-1.0 - 1.0|
|`SmileLeftLowerOverturn`|MouthLowerOverturn to MouthSmileLeft, with 0 being neutral|-1.0 - 1.0|
|`SmileLeftOverturn`|MouthOverturn (Upper/Lower) to MouthSmileLeft, with 0 being neutral|-1.0 - 1.0|
|`SmileLeftApe`|MouthApeShape to MouthSmileLeft, with 0 being neutral|-1.0 - 1.0|
|`SmileLeftOverlay`|MouthLowerOverlay to MouthSmileLeft, with 0 being neutral|-1.0 - 1.0|
|`SmileLeftPout`|MouthPout to MouthSmileLeft, with 0 being neutral|-1.0 - 1.0|

### Smile Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`SmileUpperOverturn`|MouthUpperOverturn to MouthSmile (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`SmileLowerOverturn`|MouthLowerOverturn to MouthSmile (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`SmileApe`|MouthApeShape to MouthSmile (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`SmileOverlay`|MouthLowerOverlay to MouthSmile (Left/Right), with 0 being neutral|-1.0 - 1.0|
|`SmilePout`|MouthLowerPout to MouthSmile (Left/Right), with 0 being neutral|-1.0 - 1.0|

### Cheek Puff Right Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`PuffRightUpperOverturn`|MouthUpperOverturn to CheekPuffRight, with 0 being neutral|-1.0 - 1.0|
|`PuffRightLowerOverturn`|MouthLowerOverturn to CheekPuffRight, with 0 being neutral|-1.0 - 1.0|
|`PuffRightOverturn`|MouthOverturn (Upper/Lower) to CheekPuffRight, with 0 being neutral|-1.0 - 1.0|

### Cheek Puff Left Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`PuffLeftUpperOverturn`|MouthUpperOverturn to CheekPuffLeft, with 0 being neutral|-1.0 - 1.0|
|`PuffLeftLowerOverturn`|MouthLowerOverturn to CheekPuffLeft, with 0 being neutral|-1.0 - 1.0|
|`PuffLeftOverturn`|MouthOverturn (Upper/Lower) to CheekPuffLeft, with 0 being neutral|-1.0 - 1.0|

### Cheek Puff Combined Parameters

|Parameter Name (**Case Sensitive**)|Description|Range|
|--|--|--|
|`PuffUpperOverturn`|MouthUpperOverturn to CheekPuffLeft, with 0 being neutral|-1.0 - 1.0|
|`PuffLowerOverturn`|MouthLowerOverturn to CheekPuffLeft, with 0 being neutral|-1.0 - 1.0|
|`PuffOverturn`|MouthOverturn (Upper/Lower) to CheekPuffLeft, with 0 being neutral|-1.0 - 1.0|