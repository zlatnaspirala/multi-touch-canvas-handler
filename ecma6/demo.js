
import {MultiTouchHandler, visualPresentation} from "./multi-touch.js";

window.onload = () => {
  /* Create instance */
  window.mTouchHandler = new MultiTouchHandler();
  var canvas = mTouchHandler.APP.BODY.ADD_2DCANVAS("canvas_2", window.innerWidth, window.innerHeight);
  window.mTouchHandler.APP.BODY.SET_STYLE("margin: 0;padding:0;border:none;");
  window.mTouchHandler.attachEvents(canvas);

  visualPresentation();
  window.mTouchHandler.SHIT = true

  
  
  // addEventListrene("multi.touch.finger.0", function(e) {
  //   console.log('TOUCH FIRST FINGER')
  // })

  // addEventListener("multi.touch.finger.2", function(e) {
  //   console.log('TOUCH FINGER INDEX 2')
  // })

  // addEventListener("multi.touch.moving.finger.0", function(e) {
  //   console.log('TOUCH MOVE FIRST FINGER')
  // })

  // addEventListener("multi.touch.cancel", function(e) {
  //   console.log('multi.touch.cancel')
  // })

  // addEventListener("multi.touch.end", function(e) {
  //   console.log('multi.touch.end')
  // })
}
