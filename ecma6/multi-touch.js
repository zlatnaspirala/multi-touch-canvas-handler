/**
 * @description ECMA6 JavaScript class
 * Works on oldies version of chrome , firefox etc...
 */

export class MultiTouchHandler {
	constructor(attachOnDom) {
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
			return n;
		};
		console.log("<MultyTouchHandler JavaScript class instanced>");
	}

	isMobile = function() {
		var isMobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
				navigator.userAgent.toLowerCase()
			);
		return isMobile;
	}

	attachEvents = (attachOnDom) => {
		/* Attaching events */
		attachOnDom.addEventListener("touchstart", (event) => {
			event.preventDefault();
			this.MULTI_TOUCH = "YES";
			if(this.MULTI_TOUCH == "NO") {
				var touch = event.touches[0];
				this.X = touch.pageX;
				this.Y = touch.pageY;
				// console.log("TOUCH START AT:(X" + this.X + "),(" + this.Y + ")");
			} else if(this.MULTI_TOUCH == "YES") {
				var touches_changed = event.changedTouches;
				for(var i = 0;i < touches_changed.length;i++) {
					// console.log("multi touch down - index: " + this.MULTI_TOUCH_INDEX + " , coordinate: " + touches_changed[i].pageX + "," + touches_changed[i].pageY);
					dispatchEvent(new CustomEvent("multi.touch.active", {detail: {active: true}}));
					var accessKeyX = "MULTI_TOUCH_X";
					var accessKeyY = "MULTI_TOUCH_Y";
					this[accessKeyX + (i + 1)] = touches_changed[i].pageX;
					this[accessKeyY + (i + 1)] = touches_changed[i].pageY;
					var accessKeyEvent = "multi.touch.finger." + (i + 1);
					dispatchEvent(new CustomEvent(accessKeyEvent, {detail: {x: this[accessKeyX + (i + 1)], y: this[accessKeyX + (i + 1)]}}));
					this.MULTI_TOUCH_INDEX = this.MULTI_TOUCH_INDEX + 1;
				}
			}
		}, false);

		attachOnDom.addEventListener("touchmove", (event) => {
			event.preventDefault();
			var touch = event.touches[0];
			this.X = touch.pageX;
			this.Y = touch.pageY;
			// console.log("TOUCH MOVE AT:(X" + this.X + "),(" + this.Y + ")");
			var touches_changed = event.changedTouches;
			if(touches_changed.length > 0) {
				for(var i = 0;i < touches_changed.length;i++) {
					// console.log("multi touch index:" + this.MULTI_TOUCH_INDEX + " , coordinate : " + touches_changed[i].pageX + "," + touches_changed[i].pageY);
					dispatchEvent(new CustomEvent("multi.touch.moving.active", {detail: {active: true}}));
					var accessKeyX = "MULTI_TOUCH_X";
					var accessKeyY = "MULTI_TOUCH_Y";
					this[accessKeyX + (i + 1)] = touches_changed[i].pageX;
					this[accessKeyY + (i + 1)] = touches_changed[i].pageY;
					var accessKeyEvent = "multi.touch.moving.finger." + (i + 1);
					dispatchEvent(new CustomEvent(accessKeyEvent, {detail: {x: this[accessKeyX + (i + 1)], y: this[accessKeyX + (i + 1)]}}));
				}
			}
		}, false);

		attachOnDom.addEventListener("touchend", (event) => {
			event.preventDefault();
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
			dispatchEvent(new CustomEvent("multi.touch.end", {detail: {action: 'end', lastPosition: {x: this.X, y: this.Y}}}));
			console.log("touchend LAST TOUCH POSITION AT:(X" + this.X + "),(" + this.Y + ")");
		},	false);

		attachOnDom.addEventListener("touchcancel", function(event) {
			event.preventDefault();
			dispatchEvent(new CustomEvent("multi.touch.cancel", {detail: {action: 'cancel', lastPosition: {x: this.X, y: this.Y}}}));
			console.log("BREAK - LAST TOUCH POSITION AT:(X" + this.X + "(,(" + this.Y + ")");
		}, false);
	}
}

export function visualPresentation() {
	var timer = null;
	var r = 100,
		g = 10,
		b = 0;

	var ctx = document.getElementById("canvas_2").getContext("2d");
	setInterval(randomColor, 5000);
	timer = setInterval(function() {
		r1()
	}, 10);

	function randomColor() {
		r = Math.floor(Math.random() * 256);
		g = Math.floor(Math.random() * 256);
		b = Math.floor(Math.random() * 256);
	}

	function r1() {
		ctx.clearRect(0, 0, window.mTouchHandler.SCREEN.W, window.mTouchHandler.SCREEN.H);
		ctx.save();
		ctx.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, window.mTouchHandler.SCREEN.W, window.mTouchHandler.SCREEN.H);

		ctx.beginPath();

		if(window.mTouchHandler.X == null) {
			console.log('window.mTouchHandler.X =!null!!!', window.mTouchHandler)
			return;

		} else {
			console.log('window.mTouchHandler.X =???', window.mTouchHandler.X)
		}

		var x = window.mTouchHandler.X;
		var y = window.mTouchHandler.Y;
		ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";

		ctx.fillRect(x, y - 400, 1, 2500);
		ctx.fillRect(x - 400, y, 2500, 1);
		ctx.fillText(
			" ( targetX:" + window.mTouchHandler.X + " ( targetY: " + window.mTouchHandler.Y + " ) ",
			x,
			y
		);

		ctx.fillStyle = "#00FF00";
		ctx.font = "10px Arial";
		ctx.fillText(
			" JavaScript ",
			window.mTouchHandler.SCREEN.W / 3,
			window.mTouchHandler.SCREEN.H / 3.4
		);
		ctx.fillText(
			"Welcome here, canvas example with MOBILE_TOUCH()",
			window.mTouchHandler.SCREEN.W / 3,
			window.mTouchHandler.SCREEN.H / 3.2
		);
		ctx.fillText(
			"no css files need, pure js",
			x - window.mTouchHandler.SCREEN.W / 10,
			y - window.mTouchHandler.SCREEN.H / 10
		);

		if(
			window.mTouchHandler.X > window.mTouchHandler.SCREEN.W / 2.2 &&
			window.mTouchHandler.X < window.mTouchHandler.SCREEN.W / 2.2 + 300 &&
			window.mTouchHandler.Y > window.mTouchHandler.SCREEN.H / 2.2 &&
			window.mTouchHandler.Y < window.mTouchHandler.SCREEN.H / 2.2 + 100
		) {
			ctx.strokeStyle = "lime";
		} else {
			ctx.strokeStyle = "red";
		}
		ctx.strokeRect(window.mTouchHandler.SCREEN.W / 2.2, window.mTouchHandler.SCREEN.H / 2.2, 300, 100);
		ctx.fillText(" HUB DETECT ", window.mTouchHandler.SCREEN.W / 2, window.mTouchHandler.SCREEN.H / 2);

		if(window.mTouchHandler.MULTI_TOUCH_X1 !== "undefined") {
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X1,
				window.mTouchHandler.MULTI_TOUCH_Y1 - 400,
				1,
				2500
			);
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X1 - 400,
				window.mTouchHandler.MULTI_TOUCH_Y1,
				2500,
				1
			);
		}
		if(window.mTouchHandler.MULTI_TOUCH_X2 !== "undefined") {
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X2,
				window.mTouchHandler.MULTI_TOUCH_Y2 - 400,
				1,
				2500
			);
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X2 - 400,
				window.mTouchHandler.MULTI_TOUCH_Y2,
				2500,
				1
			);
		}
		if(window.mTouchHandler.MULTI_TOUCH_X3 !== "undefined") {
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X3,
				window.mTouchHandler.MULTI_TOUCH_Y3 - 400,
				1,
				2500
			);
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X3 - 400,
				window.mTouchHandler.MULTI_TOUCH_Y3,
				2500,
				1
			);
		}
		if(window.mTouchHandler.MULTI_TOUCH_X4 !== "undefined") {
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X4,
				window.mTouchHandler.MULTI_TOUCH_Y4 - 400,
				1,
				2500
			);
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X4 - 400,
				window.mTouchHandler.MULTI_TOUCH_Y4,
				2500,
				1
			);
		}
		if(window.mTouchHandler.MULTI_TOUCH_X5 !== "undefined") {
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X5,
				window.mTouchHandler.MULTI_TOUCH_Y5 - 400,
				1,
				2500
			);
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X5 - 400,
				window.mTouchHandler.MULTI_TOUCH_51,
				2500,
				1
			);
		}
		if(window.mTouchHandler.MULTI_TOUCH_X6 !== "undefined") {
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X6,
				window.mTouchHandler.MULTI_TOUCH_Y6 - 400,
				1,
				2500
			);
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X6 - 400,
				window.mTouchHandler.MULTI_TOUCH_Y6,
				2500,
				1
			);
		}
		if(window.mTouchHandler.MULTI_TOUCH_X7 !== "undefined") {
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X7,
				window.mTouchHandler.MULTI_TOUCH_Y8 - 400,
				1,
				2500
			);
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X7 - 400,
				window.mTouchHandler.MULTI_TOUCH_Y8,
				2500,
				1
			);
		}
		if(window.mTouchHandler.MULTI_TOUCH_X9 !== "undefined") {
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X9,
				window.mTouchHandler.MULTI_TOUCH_Y9 - 400,
				1,
				2500
			);
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X9 - 400,
				window.mTouchHandler.MULTI_TOUCH_Y9,
				2500,
				1
			);
		}
		if(window.mTouchHandler.MULTI_TOUCH_X10 !== "undefined") {
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X10,
				window.mTouchHandler.MULTI_TOUCH_Y10 - 400,
				1,
				2500
			);
			ctx.fillRect(
				window.mTouchHandler.MULTI_TOUCH_X10 - 400,
				window.mTouchHandler.MULTI_TOUCH_Y10,
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

