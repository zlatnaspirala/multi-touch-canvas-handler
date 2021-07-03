
import { MultiTouchHandler, visualPresentation } from "./multi-touch";

window.onload = function () {

  /* Create instance */
  var mTouchHandler = new MultiTouchHandler();
  var canvas = mTouchHandler.APP.BODY.ADD_2DCANVAS( "canvas_2", window.innerWidth, window.innerHeight );
  mTouchHandler.APP.BODY.SET_STYLE( "margin: 0;padding:0;border:none;" );
  mTouchHandler.attachEvents( canvas );

  visualPresentation(mTouchHandler);
}