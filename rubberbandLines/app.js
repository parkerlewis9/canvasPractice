window.onload = function() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var drawingSurfaceImageData;
	var mousedown = {};
	var rubberbandRect = {};
	var dragging = false;

	//Functions

	function windowToCanvas(x, y) {
		var bbox = canvas.getBoundingClientRect();
		return {
			x: x -bbox.left * (canvas.width/bbox.width),
			y: y -bbox.top * (canvas.width/bbox.width),
		}
	};

	function saveDrawingSurface() {
		drawingSurfaceImageData = context.getImageData(0,0, canvas.width, canvas.height);
		// console.log(drawingSurfaceImageData);
	};

	function restoreDrawingSurface() {
		context.putImageData(drawingSurfaceImageData, 0, 0)
	};

	//Rubber Bands

	function updateRubberbandRectangle(loc) {
		rubberbandRect.width = Math.abs(loc.x - mousedown.x);
		rubberbandRect.height = Math.abs(loc.y - mousedown.y);

		if(loc.x > mousedown.x) rubberbandRect.left = mousedown.x;
		else					rubberbandRect.left = loc.x;

		if(loc.y > mousedown.y) rubberbandRect.top = mousedown.y;
		else					rubberbandRect.top = loc.y;
	};

	function drawRubberbandShape(loc) {
		context.beginPath();
		context.moveTo(mousedown.x, mousedown.y);
		context.lineTo(loc.x, loc.y);
		context.stroke();
	};

	function updateRubberband(loc) {
		updateRubberbandRectangle(loc);
		drawRubberbandShape(loc);
	};

	//Canvas Event Handlers

	canvas.onmousedown = function(e) {
		var loc = windowToCanvas(e.clientX, e.clientY);

		e.preventDefault();
		saveDrawingSurface();
		mousedown.x = loc.x;
		mousedown.y = loc.y;
		dragging = true;
	};

	canvas.onmousemove = function(e) {
		var loc;

		if(dragging) {
			e.preventDefault();

			loc = windowToCanvas(e.clientX, e.clientY)
			restoreDrawingSurface();
			updateRubberband(loc);
		}
	};

	canvas.onmouseup = function(e) {
		loc = windowToCanvas(e.clientX, e.clientY);
		restoreDrawingSurface();
		updateRubberband(loc);
		dragging = false;
	};


	var button = document.getElementById("button");
	button.addEventListener("click", function() {
		context.clearRect(0,0,canvas.width,canvas.height);
		saveDrawingSurface();

	})
	//Initialization
	context.strokeStyle = "black"
}










