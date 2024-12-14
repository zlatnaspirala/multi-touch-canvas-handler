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

	this.attachEvents = function() {

		/* Attaching events */
		document.addEventListener("touchstart", (event) => {
			if(event.touches.length == 1) {
				var touch = event.touches[0];
				this.X = touch.pageX;
				this.Y = touch.pageY;

				this.MULTI_TOUCH_X1 = touch.pageX;
				this.MULTI_TOUCH_Y1 = touch.pageY;

				var accessKeyEvent = "multi.touch.finger.0";
				dispatchEvent(new CustomEvent(accessKeyEvent, {detail: {x: this[accessKeyX + i], y: this[accessKeyX + i]}}));
				console.log("TOUCH START AT:(X" + this.X + "),(" + this.Y + ")");

			} else if(event.touches.length > 1) {
				var touches_changed = event.changedTouches;

				for(var i = 0;i < touches_changed.length;i++) {
					console.log("multi touch down - index: " + this.MULTI_TOUCH_INDEX + " , coordinate: " + touches_changed[i].pageX + "," + touches_changed[i].pageY);
					dispatchEvent(new CustomEvent("multi.touch.active", {detail: {active: true}}));
					var accessKeyX = "MULTI_TOUCH_X";
					var accessKeyY = "MULTI_TOUCH_Y";
					this[accessKeyX + (i + 1)] = touches_changed[i].pageX;
					this[accessKeyY + (i + 1)] = touches_changed[i].pageY;
					var accessKeyEvent = "multi.touch.finger." + (i + 1);
					dispatchEvent(new CustomEvent(accessKeyEvent, {detail: {x: this[accessKeyX + i], y: this[accessKeyX + i]}}));
					this.MULTI_TOUCH_INDEX = this.MULTI_TOUCH_INDEX + 1;
				}
			}

			this.MULTI_TOUCH = "YES";
		}, false);

		document.addEventListener("touchmove", (event) => {
			// event.preventDefault();
			var touch = event.touches[0];
			this.X = touch.pageX;
			this.Y = touch.pageY;
			// console.log( "TOUCH MOVE AT:(X" + this.X + "),(" + this.Y + ")" );
			var touches_changed = event.changedTouches;
			if(touches_changed.length > 0) {
				for(var i = 0;i < touches_changed.length;i++) {
					console.log("multi touch index:" + this.MULTI_TOUCH_INDEX + " , coordinate : " + touches_changed[i].pageX + "," + touches_changed[i].pageY);
					dispatchEvent(new CustomEvent("multi.touch.moving.active", {detail: {active: true}}));
					var accessKeyX = "MULTI_TOUCH_X";
					var accessKeyY = "MULTI_TOUCH_Y";
					this[accessKeyX + (i + 1)] = touches_changed[i].pageX;
					this[accessKeyY + (i + 1)] = touches_changed[i].pageY;
					var accessKeyEvent = "multi.touch.moving.finger." + i;
					dispatchEvent(new CustomEvent(accessKeyEvent, {detail: {x: this[accessKeyX + i], y: this[accessKeyX + i]}}));
				}
			}
		},	false);

		document.addEventListener("touchend", (event) => {
			this.LAST_X_POSITION = this.X;
			this.LAST_Y_POSITION = this.Y;
			this.MULTI_TOUCH = "NO";
			this.MULTI_TOUCH_INDEX = 1;
			this.MULTI_TOUCH_X1 = null;
			this.MULTI_TOUCH_X2 = null;
			this.MULTI_TOUCH_X3 = null;
			this.MULTI_TOUCH_X4 = null;
			this.MULTI_TOUCH_X5 = null;
			this.MULTI_TOUCH_X6 = null;
			this.MULTI_TOUCH_X7 = null;
			this.MULTI_TOUCH_X8 = null;
			this.MULTI_TOUCH_X9 = null;
			this.MULTI_TOUCH_X10 = null;
			this.MULTI_TOUCH_Y1 = null;
			this.MULTI_TOUCH_Y2 = null;
			this.MULTI_TOUCH_Y3 = null;
			this.MULTI_TOUCH_Y4 = null;
			this.MULTI_TOUCH_Y5 = null;
			this.MULTI_TOUCH_Y6 = null;
			this.MULTI_TOUCH_Y7 = null;
			this.MULTI_TOUCH_Y8 = null;
			this.MULTI_TOUCH_Y9 = null;
			this.MULTI_TOUCH_Y10 = null;
			dispatchEvent(new CustomEvent("multi.touch.end", {detail: {action: 'end'}}));
			console.log("BREAK - touchend - LAST TOUCH POSITION AT:(X" + this.X + "),(" + this.Y + ")");
		},
			false
		);

		document.addEventListener("touchcancel",	function(event) {
				console.log("BREAK - touchcancel- LAST TOUCH POSITION AT:(X" + this.X + "(,(" + this.Y + ")");
				dispatchEvent(new CustomEvent("multi.touch.cancel", {detail: {action: 'cancel', position: {x: this.X, y: this.Y}}}));
			},	false);
	}
	console.log("MultiTouchCanvasHandler loaded.");
}

function visualPresentation(multiTouchInstance) {
	var timer = null;
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
		ctx.clearRect(0, 0, multiTouchInstance.SCREEN.W, multiTouchInstance.SCREEN.H);
		ctx.save();
		ctx.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, multiTouchInstance.SCREEN.W, multiTouchInstance.SCREEN.H);

		ctx.beginPath();

		var x = multiTouchInstance.X;
		var y = multiTouchInstance.Y;
		ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";

		ctx.fillRect(x, y - 400, 1, 2500);
		ctx.fillRect(x - 400, y, 2500, 1);
		ctx.fillText(
			" ( targetX:" + multiTouchInstance.MULTI_TOUCH_X1 + " ( targetY: " + multiTouchInstance.MULTI_TOUCH_Y1 + " ) ",
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

		if(
			multiTouchInstance.X > multiTouchInstance.SCREEN.W / 2.2 &&
			multiTouchInstance.X < multiTouchInstance.SCREEN.W / 2.2 + 300 &&
			multiTouchInstance.Y > multiTouchInstance.SCREEN.H / 2.2 &&
			multiTouchInstance.Y < multiTouchInstance.SCREEN.H / 2.2 + 100
		) {
			ctx.strokeStyle = "lime";
		} else {
			ctx.strokeStyle = "red";
		}
		ctx.strokeRect(multiTouchInstance.SCREEN.W / 2.2, multiTouchInstance.SCREEN.H / 2.2, 300, 100);
		ctx.fillText(" HUB DETECT ", multiTouchInstance.SCREEN.W / 2, multiTouchInstance.SCREEN.H / 2);

		if(multiTouchInstance.MULTI_TOUCH_X1 != null) {
			ctx.fillRect(
				multiTouchInstance.MULTI_TOUCH_X1 - 400,
				multiTouchInstance.MULTI_TOUCH_Y1,
				1,
				2500
			);
			ctx.fillRect(
				multiTouchInstance.MULTI_TOUCH_X1,
				multiTouchInstance.MULTI_TOUCH_Y1 - 400,
				2500,
				1
			);
		}
		if(multiTouchInstance.MULTI_TOUCH_X2 != null) {
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
		if(multiTouchInstance.MULTI_TOUCH_X3 != null) {
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
		if(multiTouchInstance.MULTI_TOUCH_X4 != null) {
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
		if(multiTouchInstance.MULTI_TOUCH_X5 != null) {
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
		if(multiTouchInstance.MULTI_TOUCH_X6 != null) {
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
		if(multiTouchInstance.MULTI_TOUCH_X7 != null) {
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
		if(multiTouchInstance.MULTI_TOUCH_X9 != null) {
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
		if(multiTouchInstance.MULTI_TOUCH_X10 != null) {
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
		ctx.fillText("MOBILE_TOUCH example ", 5, 25);
	}
}
