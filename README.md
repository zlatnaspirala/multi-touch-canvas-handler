# Multi-touch-canvas-handler `Version 2.0.2`

Hello visitors , this is small script but very interest.

- Get touch coordinates , start/end event etc for 10 fingers.
- If you move all finger's no problem, script will handle all.
- You can get at any time x or y position for ten fingers in canvas 2d surface.
- I implement HUB button - detect when you finger get in rectangle .

Note:

- If you wanna implement it with your own canvas then you no need for `visualPresentation`

Here is example for simple div :

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <div id="myDiv" style="background-color:cadetblue;width: 500px;height: 500px;">
      <div id="results" style="background-color: brown; width: 500px;height: 50px;"></div>
    </div>
  </body>
  <script type="module" src="multi-touch.js"></script>
  <script type="module" src="demo-div.js"></script>
</html>
```

```js
import {MultiTouchHandler} from './multi-touch.js';
/* Use on any DOM element example */
window.onload = () => {
  /* Create instance */
  window.mTouchHandler = new MultiTouchHandler();
  var myDiv = document.getElementById('myDiv');
  var myResults = document.getElementById('results');
  window.mTouchHandler.attachEvents(myDiv);

  window.mTouchHandler.SHIT = true;

  function showResults(e) {
    console.log('Type:' + e.type);
    myResults.innerText = `Type: ${e.type} X: ${e.detail.x} Y: ${e.detail.y}`;
  }

  function showResults2(e) {
    console.log('Type:' + e.type);
    myResults.innerText = `Last position : X: ${e.detail.lastPosition.x} Y: ${e.detail.lastPosition.y}`;
  }

  addEventListener('multi.touch.finger.1', function (e) {
    showResults(e);
  });

  addEventListener('multi.touch.finger.2', function (e) {
    showResults(e);
  });

  // ...
  addEventListener('multi.touch.finger.10`', function (e) {
    showResults(e);
  });

  addEventListener('multi.touch.moving.finger.1', function (e) {
    showResults(e);
  });

  addEventListener('multi.touch.moving.finger.2', function (e) {
    showResults(e);
  });

  addEventListener('multi.touch.cancel', function (e) {
    console.log('multi.touch.cancel', e.detail);
    showResults2(e);
  });

  addEventListener('multi.touch.end', function (e) {
    console.log('multi.touch.end', e.detail);
    showResults2(e);
  });
};
```

## ECMA5 Solution:

```js
var mTouchHandler = new MultiTouchHandler();

mTouchHandler.APP.BODY.ADD_2DCANVAS('canvas_2', mTouchHandler.SCREEN.W, mTouchHandler.SCREEN.H);
mTouchHandler.APP.BODY.SET_STYLE('margin: 0;padding:0;border:none;');
mTouchHandler.attachEvents();
visualPresentation(mTouchHandler);
```

###

## ECMA6 Solution:

```js
import {MultiTouchHandler, visualPresentation} from './multi-touch';

window.onload = () => {
  /* Create instance */
  var mTouchHandler = new MultiTouchHandler();
  var canvas = mTouchHandler.APP.BODY.ADD_2DCANVAS('canvas_2', window.innerWidth, window.innerHeight);
  mTouchHandler.APP.BODY.SET_STYLE('margin: 0;padding:0;border:none;');
  mTouchHandler.attachEvents(canvas);

  visualPresentation(mTouchHandler);
};
```

### Fancy way to catch event listener :

```javascript
/**
 * @description Create instance in ECMA5 style
 */

var mTouchHandler = new MultiTouchHandler();

mTouchHandler.APP.BODY.ADD_2DCANVAS('canvas_2', mTouchHandler.SCREEN.W, mTouchHandler.SCREEN.H);
mTouchHandler.APP.BODY.SET_STYLE('margin: 0;padding:0;border:none;');

mTouchHandler.attachEvents();

addEventListener('multi.touch.finger.0', function (e) {
  console.log('TOUCH FIRST FINGER');
});

addEventListener('multi.touch.finger.2', function (e) {
  console.log('TOUCH FINGER INDEX 2');
});

addEventListener('multi.touch.moving.finger.0', function (e) {
  console.log('TOUCH MOVE FIRST FINGER');
});

addEventListener('multi.touch.cancel', function (e) {
  console.log('multi.touch.cancel');
});

addEventListener('multi.touch.end', function (e) {
  console.log('multi.touch.end');
});
visualPresentation(mTouchHandler);
```
