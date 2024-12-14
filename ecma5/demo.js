
/**
 * @description Create instance in ECMA5 style
 */

var mTouchHandler = new MultiTouchHandler();

mTouchHandler.APP.BODY.ADD_2DCANVAS("canvas_2", mTouchHandler.SCREEN.W, mTouchHandler.SCREEN.H);
mTouchHandler.APP.BODY.SET_STYLE("margin: 0;padding:0;border:none;");

mTouchHandler.attachEvents();

addEventListener("multi.touch.finger.0", function(e) {
  console.log('TOUCH FIRST FINGER')
})

addEventListener("multi.touch.finger.2", function(e) {
  console.log('TOUCH FINGER INDEX 2')
})

addEventListener("multi.touch.moving.finger.0", function(e) {
  console.log('TOUCH MOVE FIRST FINGER')
})

addEventListener("multi.touch.cancel", function(e) {
  console.log('multi.touch.cancel')
})

addEventListener("multi.touch.end", function(e) {
  console.log('multi.touch.end')
})
visualPresentation(mTouchHandler);
