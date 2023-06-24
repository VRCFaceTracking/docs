---
description: Detailed explanation of Binary-typed parameters. 
---

# Binary Parameters

***

**Binary Parameters** refers to a parameter system that 
VRCFaceTracking uses to send tracking data through a collection 
of **Bool** parameters that represent a float parameter. 

**Binary Parameters** represent the value of a float parameter 
in the `Base-2` counting system, which is indicated by each 
**Binary Parameter** having a `Base-10` value attached
to the represented parameter. This can be thought of as the 
*resolution* of a parameter.

In the typical use case, **Binary Parameters** get converted to 
**Float Parameters** within an avatar's Animation Controller 
via parameter driving animations or VRChat parameter type casting.
This method effectively allows users to trade off tracking fidelity
and parameter space of a regular float parameter. 

### Why use Binary Parameters on an avatar?

**Binary Parameters** are primarily used for reducing the 
amount of space a face tracking parameter consumes on an avatar. 

In **VRChat**, avatars have a limited amount of Avatar Expression 
Parameter space avaliable, and using **Binary Parameters** can 
drastically reduce the footprint of a face tracking setup on an avatar
with minimal impact to the perceived quality of expressions.
Other platforms such as **ChilloutVR** can use binary parameters, 
but don't necessarily need to as there are no such limitations.

:::caution Binary Parameters require an advanced setup to use optimally 

The caveat is that avatar setup complexity will increase 
quite drastically. This can lead to issues such as animation controller bugs,
hard-to-debug avatar behavior, and even game crashes if not managed properly.

Use tools such as this [OSCmooth fork](https://github.com/Adjerry91/OSCmooth/releases/tag/V1.1.1-BETA) 
to create stable and safe **Binary Parameter** conversions in VRChat.

:::

:::tip All **VRCFaceTracking** expression parameters can be used as a **Binary Parameter**. 

**VRCFaceTracking** will dynamically detect **Binary Parameters** allocated on your avatar 
on load.

:::


### Binary Parameter Avatar Implementation

Example of a Binary Parameter compatible animation layer:

![](https://i.imgur.com/XpkB0Fp.png)

Example of a single transition from AnyState to a State (in this case: JawForward1):

![](https://i.imgur.com/15a4OmM.png)

### Binary Parameter Representation

The following table shows how Binary Parameters work.

| Naming Scheme | Base-2 | Base-10 |
| :-----------: | :----: | :-----: |
| `Parameter` `Negative` | `0 0 0 0` `1` | `+`/`-` |
|||
| `Parameter` `1` | `0 0 0 1` `0` | 2<sup>0</sup> (1) |
| `Parameter` `2` | `0 0 1 0` `0` | 2<sup>1</sup> (2) |
| `Parameter` `4` | `0 1 0 0` `0`  | 2<sup>2</sup> (4) |
| `Parameter` `8` | `1 0 0 0` `0` | 2<sup>3</sup> (8) |
|||
| `Parameter` `x` | `x` << `0 0 0 0` `0` | `x` |

The `Negative` parameter represents the sign of the parameter, whether it is 
positive or negative (`+`/`-`)

The value is normalized to a **Float** in an *Animation Controller* 
by mapping the total Base-10 value of the **Binary Parameters** from `<0 - (2^N)-1>`, 
where `N` is the number of **Binary Parameters** used, to `<0.0 - 1.0>`.
Effectively, each bit in the **Binary Parameter** set would have an effective float value
of `1/(2^N)`. 

For example, each bit of a **Binary Parameter** set consisting of Parameter1, Parameter2,
and Parameter4, would be `1 / 2^3 = 1/8 = 0.125`. 
You might be able to notice 8 discrete steps of your eyelid openness, but maybe not 8 discrete
steps in how much your nose is sneering to the left or right!