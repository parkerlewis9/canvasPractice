window.onload = function() {
	var canvas = document.getElementById("canvas");
	var c = canvas.getContext("2d");

	c.fillStyle = "black";
	c.fillRect(0,0,canvas.width, canvas.height);

	var whiteX = 0;
	var moveRight = true;
	
//Animation Interval
	blueCirclePosition();
	window.setInterval(function() {
		c.fillStyle = "black";
		c.fillRect(0,0,canvas.width, canvas.height);
// Red Square
		if(whiteX < canvas.width -40 && moveRight) {
		  moveRight = true;
		} else {
			moveRight = false;
		}

		if (moveRight) {
			whiteX++;
			c.fillStyle = "white";
			c.fillRect(whiteX, 30, 40,40);
		} else {
			whiteX--;
			c.fillStyle = "red"
			c.fillRect(whiteX, 30, 40, 40);
			if(whiteX < 0) {
				moveRight = true;
			}
		}
		
// Blue Circle Moving in Rectangle
		if(d === "right") {
			bposition.x++;
			// bposition.y++			
		}
		if(bposition.x === 500) {
			d ="down"
		}

		if(d === "down"){
			// var temp = randomNum();
			bposition.y += 2;
			// bposition.x -= 2
			// console.log(bposition.y)
		}

		if(bposition.y === 500) {
			d = "left"
		}

		if(d === "left") {
			bposition.x -= 1;
		}

		if(bposition.x === 100) {
			d = "up"
		}

		if(d === "up") {
			bposition.y -= 3;
			// console.log(bposition.y)
		}

		if (bposition.y <= 100 && bposition.x <= 205) {
			// console.log("hello")
			d = "right"
		}
		
		paintBlueCircle(bposition.x,bposition.y)

	}, 10)

//Other Functions
	var d = "right";

	function randomNum() {
		return Math.floor((Math.random() * 3) + 1);
	}

	function blueCirclePosition() {
		bposition = {
			x: 200,
			y: 200,
			color: "blue"
		}

	}

	function paintBlueCircle(x,y) {
		c.fillStyle = bposition.color;
		c.beginPath();
		c.arc(x,y, 40, 0, 2*Math.PI)
		c.fill();

	}

	var button = document.getElementById("button")
	button.addEventListener("click", function(e) {
		if(bposition.color === "blue") {
			bposition.color = "yellow"
		} else {
			bposition.color = "blue"
		}
		console.dir(e);
	})

	function greenTriangePosition() {
		gposition = {
			x: 700,
			y: 700,
			color: "green"
		}
	}

	function paintGreenTriangle() {
		
	}



// // Clicking Stuff

// 	// var canvas = document.getElementById('myCanvas'),
// 	    var elemLeft = canvas.offsetLeft,
// 	    elemTop = canvas.offsetTop,
// 	    // c = canvas.getContext('2d'),
// 	    elements = [];

// 	// Add event listener for `click` events.
// 	canvas.addEventListener('click', function(event) {
// 	    var x = event.pageX - elemLeft,
// 	        y = event.pageY - elemTop;
// 	    console.log(x, y);
// 	    elements.forEach(function(element) {
// 	        if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
// 	            alert('clicked an element');
// 	        }
// 	    });

// 	}, false);

// 	// Add element.
// 	elements.push({
// 	    colour: '#05EFFF',
// 	    width: 150,
// 	    height: 100,
// 	    top: 20,
// 	    left: 15
// 	});

// 	// Render elements.
// 	elements.forEach(function(element) {
// 	    c.fillStyle = element.colour;
// 	    c.fillRect(element.left, element.top, element.width, element.height);
// 	});





}










