
# multi-touch-canvas-handler #


<b>Get touch coordinates , start/end event etc  for 10 fingers.

Hello visitors , this is small script but very interest.</b>

You can get at any time x or y position for ten fingers in canvas 2d surface.
I implement HUB button - detect when you finger get in rectangle .

```
var CONTROL = new MOBILE_CONTROL();

console.log(CONTROL.MULTI_TOUCH_X1);
```

or get ```console.log(CONTROL.MULTI_TOUCH_X10);```

If you move all finger no problem , script will handle all.

### DRAW TARGET LINES : ###

```
// In canvas draw() -->

if (CONTROL.MULTI_TOUCH_X1 !== 'undefined'){

ctx.fillRect(CONTROL.MULTI_TOUCH_X1 , CONTROL.MULTI_TOUCH_Y1-400  , 1, 2500);

ctx.fillRect(CONTROL.MULTI_TOUCH_X1 -400 , CONTROL.MULTI_TOUCH_Y1 , 2500, 1);

}

if (CONTROL.MULTI_TOUCH_X2 !== 'undefined'){

ctx.fillRect(CONTROL.MULTI_TOUCH_X2 , CONTROL.MULTI_TOUCH_Y2-400  , 1, 2500);

ctx.fillRect(CONTROL.MULTI_TOUCH_X2 -400 , CONTROL.MULTI_TOUCH_Y2 , 2500, 1);

}

if (CONTROL.MULTI_TOUCH_X3 !== 'undefined'){

ctx.fillRect(CONTROL.MULTI_TOUCH_X3 , CONTROL.MULTI_TOUCH_Y3-400  , 1, 2500);

ctx.fillRect(CONTROL.MULTI_TOUCH_X3 -400 , CONTROL.MULTI_TOUCH_Y3 , 2500, 1);

}

if (CONTROL.MULTI_TOUCH_X4 !== 'undefined'){

ctx.fillRect(CONTROL.MULTI_TOUCH_X4 , CONTROL.MULTI_TOUCH_Y4-400  , 1, 2500);

ctx.fillRect(CONTROL.MULTI_TOUCH_X4 -400 , CONTROL.MULTI_TOUCH_Y4 , 2500, 1);

}

if (CONTROL.MULTI_TOUCH_X5 !== 'undefined'){

ctx.fillRect(CONTROL.MULTI_TOUCH_X5 , CONTROL.MULTI_TOUCH_Y5-400  , 1, 2500);

ctx.fillRect(CONTROL.MULTI_TOUCH_X5 -400 , CONTROL.MULTI_TOUCH_51 , 2500, 1);

}

if (CONTROL.MULTI_TOUCH_X6 !== 'undefined'){

ctx.fillRect(CONTROL.MULTI_TOUCH_X6 , CONTROL.MULTI_TOUCH_Y6-400  , 1, 2500);

ctx.fillRect(CONTROL.MULTI_TOUCH_X6 -400 , CONTROL.MULTI_TOUCH_Y6 , 2500, 1);

}

if (CONTROL.MULTI_TOUCH_X7 !== 'undefined'){

ctx.fillRect(CONTROL.MULTI_TOUCH_X7 , CONTROL.MULTI_TOUCH_Y8-400  , 1, 2500);

ctx.fillRect(CONTROL.MULTI_TOUCH_X7 -400 , CONTROL.MULTI_TOUCH_Y8 , 2500, 1);

}

if (CONTROL.MULTI_TOUCH_X9 !== 'undefined'){

ctx.fillRect(CONTROL.MULTI_TOUCH_X9 , CONTROL.MULTI_TOUCH_Y9-400  , 1, 2500);

ctx.fillRect(CONTROL.MULTI_TOUCH_X9 -400 , CONTROL.MULTI_TOUCH_Y9 , 2500, 1);

}

if (CONTROL.MULTI_TOUCH_X10 !== 'undefined'){

ctx.fillRect(CONTROL.MULTI_TOUCH_X10 , CONTROL.MULTI_TOUCH_Y10-400  , 1, 2500);

ctx.fillRect(CONTROL.MULTI_TOUCH_X10 -400 , CONTROL.MULTI_TOUCH_Y10 , 2500, 1);

}
```

  
