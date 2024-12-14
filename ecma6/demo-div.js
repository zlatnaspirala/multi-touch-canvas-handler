
import {MultiTouchHandler, visualPresentation} from "./multi-touch.js";
/* Use on any DOM element example */
window.onload = () => {
	/* Create instance */
	window.mTouchHandler = new MultiTouchHandler();
	var myDiv = document.getElementById('myDiv');
	var myResults = document.getElementById('results');
	window.mTouchHandler.attachEvents(myDiv);

	window.mTouchHandler.SHIT = true

	function showResults(e) {
		console.log('Type:'+ e.type)
		myResults.innerText = `Type: ${e.type} - X: ${e.detail.x} Y: ${e.detail.y}`;
	}

	function showResults2(e) {
		console.log('Type:'+ e.type)
		myResults.innerText = `Last position : X: ${e.detail.lastPosition.x} Y: ${e.detail.lastPosition.y}`;
	}

	addEventListener("multi.touch.finger.1", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.finger.2", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.moving.finger.1", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.moving.finger.2", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.moving.finger.3", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.moving.finger.4", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.moving.finger.5", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.moving.finger.6", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.moving.finger.7", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.moving.finger.8", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.moving.finger.9", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.moving.finger.10", function(e) {
		showResults(e)
	})

	addEventListener("multi.touch.cancel", function(e) {
		console.log('multi.touch.cancel', e.detail)
		showResults2(e)
	})

	addEventListener("multi.touch.end", function(e) {
		console.log('multi.touch.end' , e.detail)
		showResults2(e)
	})
}
