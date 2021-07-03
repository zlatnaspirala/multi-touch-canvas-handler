
# Multi-touch-canvas-handler
# Version 2.0

### Hello visitors , this is small script but very interest.
### Get touch coordinates , start/end event etc  for 10 fingers.
### If you move all finger's no problem, script will handle all.
### You can get at any time x or y position for ten fingers in canvas 2d surface.
### I implement HUB button - detect when you finger get in rectangle .

Note:
 - If you wanna implement it with your own canvas then you no need for `visualPresentation`

## ECMA5 Solution:

```js
var mTouchHandler = new MultiTouchHandler();

mTouchHandler.APP.BODY.ADD_2DCANVAS("canvas_2", mTouchHandler.SCREEN.W, mTouchHandler.SCREEN.H);
mTouchHandler.APP.BODY.SET_STYLE("margin: 0;padding:0;border:none;");

visualPresentation(mTouchHandler);
```


## ECMA6 Solution:

```js
import { MultiTouchHandler, visualPresentation } from "./multi-touch";

window.onload = function () {

  /* Create instance */
  var mTouchHandler = new MultiTouchHandler();
  var canvas = mTouchHandler.APP.BODY.ADD_2DCANVAS( "canvas_2", window.innerWidth, window.innerHeight );
  mTouchHandler.APP.BODY.SET_STYLE( "margin: 0;padding:0;border:none;" );
  mTouchHandler.attachEvents( canvas );

  visualPresentation(mTouchHandler);
}
```


### Draw target lines:

```javascript
// In canvas draw func call it -->

if (multiTouchInstance.MULTI_TOUCH_X1 !== 'undefined'){
  ctx.fillRect(multiTouchInstance.MULTI_TOUCH_X1 , multiTouchInstance.MULTI_TOUCH_Y1-400  , 1, 2500);
  ctx.fillRect(multiTouchInstance.MULTI_TOUCH_X1 -400 , multiTouchInstance.MULTI_TOUCH_Y1 , 2500, 1);
}

if (multiTouchInstance.MULTI_TOUCH_X2 !== 'undefined'){
  ctx.fillRect(multiTouchInstance.MULTI_TOUCH_X2 , multiTouchInstance.MULTI_TOUCH_Y2-400  , 1, 2500);
  ctx.fillRect(multiTouchInstance.MULTI_TOUCH_X2 -400 , multiTouchInstance.MULTI_TOUCH_Y2 , 2500, 1);
}

 ...

if (multiTouchInstance.MULTI_TOUCH_X10 !== 'undefined'){

ctx.fillRect(multiTouchInstance.MULTI_TOUCH_X10 , multiTouchInstance.MULTI_TOUCH_Y10-400  , 1, 2500);

ctx.fillRect(multiTouchInstance.MULTI_TOUCH_X10 -400 , multiTouchInstance.MULTI_TOUCH_Y10 , 2500, 1);

}
```