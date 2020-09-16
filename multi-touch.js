
/**
 * @description Tradicional JavaScript class
 * Works on oldies version of chrome , firefox etc...
 */
function MOBILE_CONTROL() {

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
  //Application general
  this.AUTOR = "Nikola Lukic";
  this.APPLICATION_NAME = "TestApplication";
  this.SET_APPLICATION_NAME = function(value) {
    if (typeof value != "string") throw "APPLICATION_NAME must be a string!";
    if (value.length < 2 || value.length > 20)
      throw "APPLICATION_NAME must be 2-20 characters long!";
    this.APPLICATION_NAME = value;
  };
  this.APP = function() {
    /*construct*/
  };
  this.APP.BODY = document.getElementsByTagName("body")[0];
  this.APP.BODY.SET_STYLE = function(string) {
    this.style = string;
  };
  this.APP.BODY.SET_BACKGROUND_COLOR = function(color) {
    this.style.backgroundColor = color;
  };
  this.APP.BODY.SET_COLOR = function(color) {
    this.style.Color = color;
  };
  this.APP.BODY.ADD_DIV = function(id, style, innerHTML) {
    var n = document.createElement("div");
    var divIdName = id;
    n.setAttribute("id", divIdName);
    n.setAttribute("style", style);
    n.innerHTML = innerHTML;
    this.appendChild(n);
  };
  this.APP.BODY.ADD_2DCANVAS = function(id, width_, height_) {
    var n = document.createElement("canvas");
    var divIdName = id;
    n.setAttribute("id", divIdName);
    n.setAttribute("width", width_);
    n.setAttribute("height", height_);
    //n.innerHTML = 'Element is here';
    this.appendChild(n);
  };
  console.log("<MOBILE_CONTROL JavaScript class>");
  console.log("status:MOBILE_CONTROL FINISH LOADING");
  console.log("EASY_IMPLEMENTATION!");
}

function CANVAS_DRAW() {
  var run = true;
  var timer = null;
  window.addEventListener("touchstart", MDPORT, false);
  function MDPORT() {
    if (run) {
      clearInterval(timer);
      run = false;
    } else {
      timer = setInterval(makeHarmonograph, 1);
      run = true;
    }
  }

  var A1 = 200,
    f1 = 2,
    p1 = 1 / 16,
    d1 = 0.02;
  var A2 = 10,
    f2 = 4,
    p2 = 3 / 2,
    d2 = 0.0315;
  var A3 = 200,
    f3 = 4,
    p3 = 13 / 15,
    d3 = 0.00012;
  var A4 = 10,
    f4 = 4,
    p4 = 1,
    d4 = 0.012;
  var r = 10,
    g = 10,
    b = 0;
  var UPDOWN = 1,
    CONTROL_WIDTH = 0;
  var ctx = document.getElementById("canvas").getContext("2d");

  setInterval(randomColor, 5000);

  timer = setInterval(makeHarmonograph, 1);

  function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
  }

  function makeHarmonograph() {
    f1 = (f1 / 10) % 10;
    f2 = (f2 / 40) % 10;
    f3 = (f3 + Math.random() / 80) % 10;
    f4 = (f4 + Math.random() / 411) % 10;
    p1 += 0.5 % (Math.PI * 2);
    drawHarmonograph();
  }

  function drawHarmonograph() {
    ctx.clearRect(0, 0, 850, 450);

    ctx.save();
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
    ctx.fillRect(0, 0, 1100, 400);

    ctx.translate(511, 0);
    ctx.rotate(1.57);
    ///////////
    // Draw guides
    ctx.strokeStyle = "#09f";
    ctx.lineWidth = A1;

    ctx.translate(111, 1);
    ctx.rotate(0.01);
    if (CONTROL_WIDTH == 0) {
      UPDOWN = UPDOWN + 1;
    }
    if (UPDOWN > 51) {
      CONTROL_WIDTH = 1;
    }
    if (CONTROL_WIDTH == 0) {
      UPDOWN = UPDOWN - 0.1;
    }
    if (UPDOWN < 1) {
      CONTROL_WIDTH = 0;
    }

    // Set line styles
    ctx.strokeStyle = "#099909";
    ctx.lineWidth = UPDOWN;

    // check input
    ctx.miterLimit = UPDOWN;

    // Draw lines
    ctx.beginPath();
    ctx.moveTo(111, 100);
    for (i = 0; i < 121; i++) {
      var dy = i % 2 == 0 ? 25 : -25;
      ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
    }
    ctx.stroke();
    return false;

    ctx.translate(444, 333);
    ctx.fillStyle = "lime";
    ctx.font = "30px Arial";
    ctx.fillText("Overlapping harmonics with JavaScript, wait secund.", 5, 25);

    ctx.stroke();
  }
}

function CANVAS_DRAW_1() {

  var run = true;
  var timer = null;

  timer = setInterval(makeHarmonograph, 1);
  run = true;

  var A1 = 200,
    f1 = 2,
    p1 = 1 / 16,
    d1 = 0.02;
  var A2 = 10,
    f2 = 4,
    p2 = 3 / 2,
    d2 = 0.0315;
  var A3 = 200,
    f3 = 4,
    p3 = 13 / 15,
    d3 = 0.00012;
  var A4 = 10,
    f4 = 4,
    p4 = 1,
    d4 = 0.012;
  var r = 10,
    g = 10,
    b = 0;
  var UPDOWN = 1,
    CONTROL_WIDTH = 0;
  var ctx = document.getElementById("canvas_1").getContext("2d");

  setInterval(randomColor, 5000);

  timer = setInterval(makeHarmonograph, 1);

  function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
  }

  function makeHarmonograph() {
    f1 = (f1 / 10) % 10;
    f2 = (f2 / 40) % 10;
    f3 = (f3 + Math.random() / 80) % 10;
    f4 = (f4 + Math.random() / 411) % 10;
    p1 += 0.5 % (Math.PI * 2);
    drawHarmonograph();
  }

  function drawHarmonograph() {
    ctx.clearRect(0, 0, 850, 450);
    ctx.save();
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
    ctx.fillRect(0, 0, 800, 400);
    ctx.translate(0, 250);
    ctx.beginPath();
    if (A1 > 100) {
    }
    for (var t = 0; t < 100; t += 0.1) {
      var x =
        A1 * Math.sin(f1 * t + Math.PI * p1) * Math.exp(-d1 * t) +
        A2 * Math.sin(f2 * t + Math.PI * p2) * Math.exp(-d2 * t);
      var y =
        A3 * Math.sin(f3 * t + Math.PI * p1) * Math.exp(-d3 * t) +
        A4 * Math.sin(f4 * t + Math.PI * p4) * Math.exp(-d4 * t);

      ctx.lineTo(x * x + 1, y + 1 / x);
    }

    ctx.stroke();
    ctx.translate(A1, 0);
    ctx.rotate(1.57);
    ctx.beginPath();

    for (var t = 0; t < 100; t += 0.1) {
      var x =
        A1 * A3 * Math.sin(f1 * t + Math.PI * p1) * Math.exp(-d1 * t) +
        A2 * Math.sin(f2 * t + Math.PI * p2) * Math.exp(-d2 * t);
      var y =
        A3 * Math.sin(f3 * t + Math.PI * p1) * Math.exp(-d3 * t) +
        A4 * Math.sin(f4 * t + Math.PI * p4) * Math.exp(-d4 * t);

      ctx.lineTo(x * x + 1, y + 1 / x);
    }

    ctx.stroke();

    ctx.restore();

    // Draw guides
    ctx.strokeStyle = "#09f";
    ctx.lineWidth = A1;

    if (CONTROL_WIDTH == 0) {
      UPDOWN = UPDOWN + 1;
    }
    if (UPDOWN > 51) {
      CONTROL_WIDTH = 1;
    }
    if (CONTROL_WIDTH == 0) {
      UPDOWN = UPDOWN - 0.1;
    }
    if (UPDOWN < 1) {
      CONTROL_WIDTH = 0;
    }

    // Set line styles
    ctx.strokeStyle = "#099909";
    ctx.lineWidth = UPDOWN;

    // check input
    ctx.miterLimit = 5;

    // Draw lines
    ctx.beginPath();
    ctx.moveTo(0, 100);
    for (i = 0; i < 124; i++) {
      var dy = i % 2 == 0 ? 25 : -25;
      ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
    }
    ctx.stroke();
    return false;

    ctx.translate(A1, 210);
    ctx.fillStyle = "lime";
    ctx.font = "30px Arial";
    ctx.fillText("Overlapping harmonics with JavaScript, wait secund.", 5, 25);
  }
}

function CANVAS_DRAW_2() {

  var timer = null;

  var A1 = 200,
    f1 = 2,
    p1 = 1 / 16,
    d1 = 0.02;
  var A2 = 10,
    f2 = 4,
    p2 = 3 / 2,
    d2 = 0.0315;
  var A3 = 200,
    f3 = 4,
    p3 = 13 / 15,
    d3 = 0.00012;
  var A4 = 10,
    f4 = 4,
    p4 = 1,
    d4 = 0.012;
  var r = 10,
    g = 10,
    b = 0;

  var ctx = document.getElementById("canvas_2").getContext("2d");
  setInterval(randomColor, 5000);
  timer = setInterval(t, 1);

  function randomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
  }

  function t() {
    r1();
  }

  function r1() {

    ctx.clearRect(0, 0, CONTROL.SCREEN.W, CONTROL.SCREEN.H);
    ctx.save();
    ctx.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, CONTROL.SCREEN.W, CONTROL.SCREEN.H);

    ctx.beginPath();

    var x = CONTROL.X;
    var y = CONTROL.Y;
    ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";

    ctx.fillRect(x, y - 400, 1, 2500);
    ctx.fillRect(x - 400, y, 2500, 1);
    ctx.fillText(" ( targetX:" + CONTROL.X + " ( targetY: " + CONTROL.Y + " ) ", x, y);

    ctx.fillStyle = "#00FF00";
    ctx.font = "10px Arial";
    ctx.fillText(" JavaScript ", x - CONTROL.SCREEN.W / 3, y - CONTROL.SCREEN.H / 3.4);
    ctx.fillText(
      "Welcome here, canvas example with MOBILE_TOUCH()",
      x - CONTROL.SCREEN.W / 3,
      y - CONTROL.SCREEN.H / 3.2
    );
    ctx.fillText(
      "no css files need, pure js",
      x - CONTROL.SCREEN.W / 10,
      y - CONTROL.SCREEN.H / 10
    );

    if (
      CONTROL.X > CONTROL.SCREEN.W / 2.2 &&
      CONTROL.X < CONTROL.SCREEN.W / 2.2 + 300 &&
      CONTROL.Y > CONTROL.SCREEN.H / 2.2 &&
      CONTROL.Y < CONTROL.SCREEN.H / 2.2 + 100
    ) {
      ctx.strokeStyle = "lime";
    } else {
      ctx.strokeStyle = "red";
    }
    ctx.strokeRect(CONTROL.SCREEN.W / 2.2, CONTROL.SCREEN.H / 2.2, 300, 100);
    ctx.fillText(" HUB DETECT ", CONTROL.SCREEN.W / 2, CONTROL.SCREEN.H / 2);

    if (CONTROL.MULTI_TOUCH_X1 !== "undefined") {
      ctx.fillRect(CONTROL.MULTI_TOUCH_X1, CONTROL.MULTI_TOUCH_Y1 - 400, 1, 2500);
      ctx.fillRect(CONTROL.MULTI_TOUCH_X1 - 400, CONTROL.MULTI_TOUCH_Y1, 2500, 1);
    }
    if (CONTROL.MULTI_TOUCH_X2 !== "undefined") {
      ctx.fillRect(CONTROL.MULTI_TOUCH_X2, CONTROL.MULTI_TOUCH_Y2 - 400, 1, 2500);
      ctx.fillRect(CONTROL.MULTI_TOUCH_X2 - 400, CONTROL.MULTI_TOUCH_Y2, 2500, 1);
    }
    if (CONTROL.MULTI_TOUCH_X3 !== "undefined") {
      ctx.fillRect(CONTROL.MULTI_TOUCH_X3, CONTROL.MULTI_TOUCH_Y3 - 400, 1, 2500);
      ctx.fillRect(CONTROL.MULTI_TOUCH_X3 - 400, CONTROL.MULTI_TOUCH_Y3, 2500, 1);
    }
    if (CONTROL.MULTI_TOUCH_X4 !== "undefined") {
      ctx.fillRect(CONTROL.MULTI_TOUCH_X4, CONTROL.MULTI_TOUCH_Y4 - 400, 1, 2500);
      ctx.fillRect(CONTROL.MULTI_TOUCH_X4 - 400, CONTROL.MULTI_TOUCH_Y4, 2500, 1);
    }
    if (CONTROL.MULTI_TOUCH_X5 !== "undefined") {
      ctx.fillRect(CONTROL.MULTI_TOUCH_X5, CONTROL.MULTI_TOUCH_Y5 - 400, 1, 2500);
      ctx.fillRect(CONTROL.MULTI_TOUCH_X5 - 400, CONTROL.MULTI_TOUCH_51, 2500, 1);
    }
    if (CONTROL.MULTI_TOUCH_X6 !== "undefined") {
      ctx.fillRect(CONTROL.MULTI_TOUCH_X6, CONTROL.MULTI_TOUCH_Y6 - 400, 1, 2500);
      ctx.fillRect(CONTROL.MULTI_TOUCH_X6 - 400, CONTROL.MULTI_TOUCH_Y6, 2500, 1);
    }
    if (CONTROL.MULTI_TOUCH_X7 !== "undefined") {
      ctx.fillRect(CONTROL.MULTI_TOUCH_X7, CONTROL.MULTI_TOUCH_Y8 - 400, 1, 2500);
      ctx.fillRect(CONTROL.MULTI_TOUCH_X7 - 400, CONTROL.MULTI_TOUCH_Y8, 2500, 1);
    }
    if (CONTROL.MULTI_TOUCH_X9 !== "undefined") {
      ctx.fillRect(CONTROL.MULTI_TOUCH_X9, CONTROL.MULTI_TOUCH_Y9 - 400, 1, 2500);
      ctx.fillRect(CONTROL.MULTI_TOUCH_X9 - 400, CONTROL.MULTI_TOUCH_Y9, 2500, 1);
    }
    if (CONTROL.MULTI_TOUCH_X10 !== "undefined") {
      ctx.fillRect(CONTROL.MULTI_TOUCH_X10, CONTROL.MULTI_TOUCH_Y10 - 400, 1, 2500);
      ctx.fillRect(CONTROL.MULTI_TOUCH_X10 - 400, CONTROL.MULTI_TOUCH_Y10, 2500, 1);
    }

    // Draw lines
    ctx.fillStyle = "lime";
    ctx.font = "30px Arial";
    ctx.fillText("MOBILE_TOUCH example ", 5, 25);
  }
}

/* Create instance */
var CONTROL = new MOBILE_CONTROL();
CONTROL.APP.BODY.ADD_2DCANVAS("canvas_2", CONTROL.SCREEN.W, CONTROL.SCREEN.H);
CONTROL.APP.BODY.SET_STYLE("margin-left:-10px;padding:0;border:none;");
CANVAS_DRAW_2();

/* Attaching events */
document.addEventListener(
  "touchstart",
  function(event) {
    if (CONTROL.MULTI_TOUCH == "NO") {
      var touch = event.touches[0];
      CONTROL.X = touch.pageX;
      CONTROL.Y = touch.pageY;

      console.log("TOUCH START AT:(X" + CONTROL.X + "),(" + CONTROL.Y + ")");

    } else if (CONTROL.MULTI_TOUCH == "YES") {

      var touches_changed = event.changedTouches;

      for (var i = 0; i < touches_changed.length; i++) {

        console.log(
          "multi touch : x" + CONTROL.MULTI_TOUCH_INDEX + ":(" + touches_changed[i].pageX + ")"
        );
        switch (CONTROL.MULTI_TOUCH_INDEX) {
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
  function(event) {
    var touch = event.touches[0];
    CONTROL.X = touch.pageX;
    CONTROL.Y = touch.pageY;

    console.log("TOUCH MOVE AT:(X" + CONTROL.X + "),(" + CONTROL.Y + ")");

    if (CONTROL.MULTI_TOUCH == "YES") {
      var touches_changed = event.changedTouches;

      for (var i = 0; i < touches_changed.length; i++) {

        console.log(
          "multi touch : x" + CONTROL.MULTI_TOUCH_INDEX + ":(" + touches_changed[i].pageX + ")"
        );

        switch (i) {
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
  function(event) {

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

    console.log("LAST TOUCH POSITION AT:(X" + CONTROL.X + "),(" + CONTROL.Y + ")");

  },
  false
);


document.addEventListener(
  "touchcancel",
  function(event) {
    console.log("BREAK - LAST TOUCH POSITION AT:(X" + CONTROL.X + "(,(" + CONTROL.Y + ")");
  },
  false
);
