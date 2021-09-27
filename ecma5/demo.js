
/**
 * @description Create instance in ECMA5 style
 */

var mTouchHandler = new MultiTouchHandler();

mTouchHandler.APP.BODY.ADD_2DCANVAS("canvas_2", mTouchHandler.SCREEN.W, mTouchHandler.SCREEN.H);
mTouchHandler.APP.BODY.SET_STYLE("margin: 0;padding:0;border:none;");

mTouchHandler.attachEvents();

visualPresentation(mTouchHandler);
