/**
 * @description ECMA5 JavaScript class
 * Works on oldies version of chrome , firefox etc...
 */

function MultiTouchHandler() {
  this.X = null;
  this.Y = null;
  this.LAST_X_POSITION = null;
  this.LAST_Y_POSITION = null;
  this.MULTI_TOUCH = "NO";
  this.MULTI_TOUCH_X1 = null;
  this.MULTI_TOUCH_X2 = null;
  this.MULTI_TOUCH_X3 = null;
  this.MULTI_TOUCH_X4 = null;
  this.MULTI_TOUCH_X5 = null;
  this.MULTI_TOUCH_Y1 = null;
  this.MULTI_TOUCH_Y2 = null;
  this.MULTI_TOUCH_Y3 = null;
  this.MULTI_TOUCH_Y4 = null;
  this.MULTI_TOUCH_Y5 = null;
  this.MULTI_TOUCH_X6 = null;
  this.MULTI_TOUCH_X7 = null;
  this.MULTI_TOUCH_X8 = null;
  this.MULTI_TOUCH_X9 = null;
  this.MULTI_TOUCH_X10 = null;
  this.MULTI_TOUCH_Y6 = null;
  this.MULTI_TOUCH_Y7 = null;
  this.MULTI_TOUCH_Y8 = null;
  this.MULTI_TOUCH_Y9 = null;
  this.MULTI_TOUCH_Y10 = null;
  this.MULTI_TOUCH_INDEX = 1;
  this.SCREEN = [window.innerWidth, window.innerHeight];
  this.SCREEN.W = this.SCREEN[0];
  this.SCREEN.H = this.SCREEN[1];

  // Application general
  this.AUTOR = "Nikola Lukic";
  this.APPLICATION_NAME = "Multi touch lib for canvas";

  this.APP = {};

  this.APP.BODY = document.getElementsByTagName( "body" )[0];

  this.APP.BODY.SET_STYLE = function ( string ) {
    this.style = string;
  };

  this.APP.BODY.SET_BACKGROUND_COLOR = function ( color ) {
    this.style.backgroundColor = color;
  };

  this.APP.BODY.SET_COLOR = function ( color ) {
    this.style.Color = color;
  };

  this.APP.BODY.ADD_DIV = function ( id, style, innerHTML ) {
    var n = document.createElement( "div" );
    var divIdName = id;
    n.setAttribute( "id", divIdName );
    n.setAttribute( "style", style );
    n.innerHTML = innerHTML;
    this.appendChild( n );
  };

  this.APP.BODY.ADD_2DCANVAS = function ( id, width_, height_ ) {
    var n = document.createElement( "canvas" );
    var divIdName = id;
    n.setAttribute( "id", divIdName );
    n.setAttribute( "width", width_ );
    n.setAttribute( "height", height_ );
    //n.innerHTML = 'Element is here';
    this.appendChild( n );
  };

  function attachEvents() {

    /* Attaching events */
    document.addEventListener(
      "touchstart",
      function ( event ) {
        if ( CONTROL.MULTI_TOUCH == "NO" ) {
          var touch = event.touches[0];
          CONTROL.X = touch.pageX;
          CONTROL.Y = touch.pageY;

          console.log( "TOUCH START AT:(X" + CONTROL.X + "),(" + CONTROL.Y + ")" );
        } else if ( CONTROL.MULTI_TOUCH == "YES" ) {
          var touches_changed = event.changedTouches;

          for ( var i = 0; i < touches_changed.length; i++ ) {
            console.log(
              "multi touch : x" +
              CONTROL.MULTI_TOUCH_INDEX +
              ":(" +
              touches_changed[i].pageX +
              ")"
            );
            switch ( CONTROL.MULTI_TOUCH_INDEX ) {
              case 1:
                CONTROL.MULTI_TOUCH_X1 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y1 = touches_changed[i].pageY;
                break;
              case 2:
                CONTROL.MULTI_TOUCH_X2 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y2 = touches_changed[i].pageY;
                break;
              case 3:
                CONTROL.MULTI_TOUCH_X3 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y3 = touches_changed[i].pageY;
                break;
              case 4:
                CONTROL.MULTI_TOUCH_X4 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y4 = touches_changed[i].pageY;
                break;
              case 5:
                CONTROL.MULTI_TOUCH_X5 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y5 = touches_changed[i].pageY;
                break;
              case 6:
                CONTROL.MULTI_TOUCH_X6 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y6 = touches_changed[i].pageY;
                break;
              case 7:
                CONTROL.MULTI_TOUCH_X7 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y7 = touches_changed[i].pageY;
                break;
              case 8:
                CONTROL.MULTI_TOUCH_X8 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y8 = touches_changed[i].pageY;
                break;
              case 9:
                CONTROL.MULTI_TOUCH_X9 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y9 = touches_changed[i].pageY;
                break;
              case 10:
                CONTROL.MULTI_TOUCH_X10 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y10 = touches_changed[i].pageY;
                break;
              default:
              //code to be executed if n is different from case 1 and 2
            }
            CONTROL.MULTI_TOUCH_INDEX = CONTROL.MULTI_TOUCH_INDEX + 1;
          }
        }

        CONTROL.MULTI_TOUCH = "YES";
      },
      false
    );


    document.addEventListener(
      "touchmove",
      function ( event ) {
        var touch = event.touches[0];
        CONTROL.X = touch.pageX;
        CONTROL.Y = touch.pageY;

        console.log( "TOUCH MOVE AT:(X" + CONTROL.X + "),(" + CONTROL.Y + ")" );

        if ( CONTROL.MULTI_TOUCH == "YES" ) {
          var touches_changed = event.changedTouches;

          for ( var i = 0; i < touches_changed.length; i++ ) {
            console.log(
              "multi touch : x" +
              CONTROL.MULTI_TOUCH_INDEX +
              ":(" +
              touches_changed[i].pageX +
              ")"
            );

            switch ( i ) {
              case 1:
                CONTROL.MULTI_TOUCH_X1 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y1 = touches_changed[i].pageY;
                break;
              case 2:
                CONTROL.MULTI_TOUCH_X2 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y2 = touches_changed[i].pageY;
                break;
              case 3:
                CONTROL.MULTI_TOUCH_X3 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y3 = touches_changed[i].pageY;
                break;
              case 4:
                CONTROL.MULTI_TOUCH_X4 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y4 = touches_changed[i].pageY;
                break;
              case 5:
                CONTROL.MULTI_TOUCH_X5 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y5 = touches_changed[i].pageY;
                break;
              case 6:
                CONTROL.MULTI_TOUCH_X6 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y6 = touches_changed[i].pageY;
                break;
              case 7:
                CONTROL.MULTI_TOUCH_X7 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y7 = touches_changed[i].pageY;
                break;
              case 8:
                CONTROL.MULTI_TOUCH_X8 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y8 = touches_changed[i].pageY;
                break;
              case 9:
                CONTROL.MULTI_TOUCH_X9 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y9 = touches_changed[i].pageY;
                break;
              case 10:
                CONTROL.MULTI_TOUCH_X10 = touches_changed[i].pageX;
                CONTROL.MULTI_TOUCH_Y10 = touches_changed[i].pageY;
                break;
              default:
              //code to be executed if n is different from case 1 and 2
            }
          }
        }

        event.preventDefault();
      },
      false
    );

    document.addEventListener(
      "touchend",
      function ( event ) {
        CONTROL.LAST_X_POSITION = CONTROL.X;
        CONTROL.LAST_Y_POSITION = CONTROL.Y;
        CONTROL.MULTI_TOUCH = "NO";
        CONTROL.MULTI_TOUCH_INDEX = 1;

        CONTROL.MULTI_TOUCH_X1 = null;
        CONTROL.MULTI_TOUCH_X2 = null;
        CONTROL.MULTI_TOUCH_X3 = null;
        CONTROL.MULTI_TOUCH_X4 = null;
        CONTROL.MULTI_TOUCH_X5 = null;
        CONTROL.MULTI_TOUCH_X6 = null;
        CONTROL.MULTI_TOUCH_X7 = null;
        CONTROL.MULTI_TOUCH_X8 = null;
        CONTROL.MULTI_TOUCH_X9 = null;
        CONTROL.MULTI_TOUCH_X10 = null;
        CONTROL.MULTI_TOUCH_Y1 = null;
        CONTROL.MULTI_TOUCH_Y2 = null;
        CONTROL.MULTI_TOUCH_Y3 = null;
        CONTROL.MULTI_TOUCH_Y4 = null;
        CONTROL.MULTI_TOUCH_Y5 = null;
        CONTROL.MULTI_TOUCH_Y6 = null;
        CONTROL.MULTI_TOUCH_Y7 = null;
        CONTROL.MULTI_TOUCH_Y8 = null;
        CONTROL.MULTI_TOUCH_Y9 = null;
        CONTROL.MULTI_TOUCH_Y10 = null;

        console.log(
          "LAST TOUCH POSITION AT:(X" + CONTROL.X + "),(" + CONTROL.Y + ")"
        );
      },
      false
    );

    document.addEventListener(
      "touchcancel",
      function ( event ) {
        console.log(
          "BREAK - LAST TOUCH POSITION AT:(X" + CONTROL.X + "(,(" + CONTROL.Y + ")"
        );
      },
      false
    );
  }

  console.log( "MultiTouchCanvasHandler loaded." );

}

function visualPresentation(multiTouchInstance) {
  var timer = null;
  var r = 10,
    g = 10,
    b = 0;

  var ctx = document.getElementById( "canvas_2" ).getContext( "2d" );
  setInterval( randomColor, 5000 );
  timer = setInterval( t, 1 );

  function randomColor() {
    r = Math.floor( Math.random() * 256 );
    g = Math.floor( Math.random() * 256 );
    b = Math.floor( Math.random() * 256 );
  }

  function t() {
    r1();
  }

  function r1() {
    ctx.clearRect( 0, 0, multiTouchInstance.SCREEN.W, multiTouchInstance.SCREEN.H );
    ctx.save();
    ctx.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
    ctx.fillStyle = "#000000";
    ctx.fillRect( 0, 0, multiTouchInstance.SCREEN.W, multiTouchInstance.SCREEN.H );

    ctx.beginPath();

    var x = multiTouchInstance.X;
    var y = multiTouchInstance.Y;
    ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";

    ctx.fillRect( x, y - 400, 1, 2500 );
    ctx.fillRect( x - 400, y, 2500, 1 );
    ctx.fillText(
      " ( targetX:" + multiTouchInstance.X + " ( targetY: " + multiTouchInstance.Y + " ) ",
      x,
      y
    );

    ctx.fillStyle = "#00FF00";
    ctx.font = "10px Arial";
    ctx.fillText(
      " JavaScript ",
      x - multiTouchInstance.SCREEN.W / 3,
      y - multiTouchInstance.SCREEN.H / 3.4
    );
    ctx.fillText(
      "Welcome here, canvas example with MOBILE_TOUCH()",
      x - multiTouchInstance.SCREEN.W / 3,
      y - multiTouchInstance.SCREEN.H / 3.2
    );
    ctx.fillText(
      "no css files need, pure js",
      x - multiTouchInstance.SCREEN.W / 10,
      y - multiTouchInstance.SCREEN.H / 10
    );

    if (
      multiTouchInstance.X > multiTouchInstance.SCREEN.W / 2.2 &&
      multiTouchInstance.X < multiTouchInstance.SCREEN.W / 2.2 + 300 &&
      multiTouchInstance.Y > multiTouchInstance.SCREEN.H / 2.2 &&
      multiTouchInstance.Y < multiTouchInstance.SCREEN.H / 2.2 + 100
    ) {
      ctx.strokeStyle = "lime";
    } else {
      ctx.strokeStyle = "red";
    }
    ctx.strokeRect( multiTouchInstance.SCREEN.W / 2.2, multiTouchInstance.SCREEN.H / 2.2, 300, 100 );
    ctx.fillText( " HUB DETECT ", multiTouchInstance.SCREEN.W / 2, multiTouchInstance.SCREEN.H / 2 );

    if ( multiTouchInstance.MULTI_TOUCH_X1 !== "undefined" ) {
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X1,
        multiTouchInstance.MULTI_TOUCH_Y1 - 400,
        1,
        2500
      );
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X1 - 400,
        multiTouchInstance.MULTI_TOUCH_Y1,
        2500,
        1
      );
    }
    if ( multiTouchInstance.MULTI_TOUCH_X2 !== "undefined" ) {
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X2,
        multiTouchInstance.MULTI_TOUCH_Y2 - 400,
        1,
        2500
      );
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X2 - 400,
        multiTouchInstance.MULTI_TOUCH_Y2,
        2500,
        1
      );
    }
    if ( multiTouchInstance.MULTI_TOUCH_X3 !== "undefined" ) {
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X3,
        multiTouchInstance.MULTI_TOUCH_Y3 - 400,
        1,
        2500
      );
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X3 - 400,
        multiTouchInstance.MULTI_TOUCH_Y3,
        2500,
        1
      );
    }
    if ( multiTouchInstance.MULTI_TOUCH_X4 !== "undefined" ) {
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X4,
        multiTouchInstance.MULTI_TOUCH_Y4 - 400,
        1,
        2500
      );
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X4 - 400,
        multiTouchInstance.MULTI_TOUCH_Y4,
        2500,
        1
      );
    }
    if ( multiTouchInstance.MULTI_TOUCH_X5 !== "undefined" ) {
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X5,
        multiTouchInstance.MULTI_TOUCH_Y5 - 400,
        1,
        2500
      );
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X5 - 400,
        multiTouchInstance.MULTI_TOUCH_51,
        2500,
        1
      );
    }
    if ( multiTouchInstance.MULTI_TOUCH_X6 !== "undefined" ) {
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X6,
        multiTouchInstance.MULTI_TOUCH_Y6 - 400,
        1,
        2500
      );
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X6 - 400,
        multiTouchInstance.MULTI_TOUCH_Y6,
        2500,
        1
      );
    }
    if ( multiTouchInstance.MULTI_TOUCH_X7 !== "undefined" ) {
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X7,
        multiTouchInstance.MULTI_TOUCH_Y8 - 400,
        1,
        2500
      );
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X7 - 400,
        multiTouchInstance.MULTI_TOUCH_Y8,
        2500,
        1
      );
    }
    if ( multiTouchInstance.MULTI_TOUCH_X9 !== "undefined" ) {
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X9,
        multiTouchInstance.MULTI_TOUCH_Y9 - 400,
        1,
        2500
      );
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X9 - 400,
        multiTouchInstance.MULTI_TOUCH_Y9,
        2500,
        1
      );
    }
    if ( multiTouchInstance.MULTI_TOUCH_X10 !== "undefined" ) {
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X10,
        multiTouchInstance.MULTI_TOUCH_Y10 - 400,
        1,
        2500
      );
      ctx.fillRect(
        multiTouchInstance.MULTI_TOUCH_X10 - 400,
        multiTouchInstance.MULTI_TOUCH_Y10,
        2500,
        1
      );
    }

    // Draw lines
    ctx.fillStyle = "lime";
    ctx.font = "30px Arial";
    ctx.fillText( "MOBILE_TOUCH example ", 5, 25 );
  }
}
