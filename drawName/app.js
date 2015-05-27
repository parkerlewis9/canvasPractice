$(document).ready(function() {
	var canvas = document.getElementById("name");
	var context = canvas.getContext('2d');

// Background to show canvas
	context.fillStyle = "#1c1c6b";
	context.fillRect(0,0,canvas.width,canvas.height);

//Building My Name
	
	//Picking the pen
	context.strokeStyle = "black";
	context.lineWidth = "5";

	//Putting it on paper
	context.beginPath();
	context.moveTo(100,100);

	//Writing name
		//down P
	context.lineTo(100, 300);
	context.stroke();

		//side P
	context.beginPath();
	context.moveTo(100,100);
	context.lineTo(200, 100);
	context.lineTo(200, 200);
	context.lineTo(100, 200);
	context.stroke();

		//down a
	context.beginPath();
	context.moveTo(275, 200);
	context.lineTo(275, 300);
	context.stroke();

		//side a
	context.beginPath();
	context.moveTo(275, 220);
	context.lineTo(225, 220);
	context.lineTo(225, 290);
	context.lineTo(275, 290);
	context.stroke();

		//down r
	context.beginPath();
	context.moveTo(300, 200);
	context.lineTo(300, 300);
	context.stroke();
		
		//curve r
	context.beginPath();
	context.arc(330, 225, 30, Math.PI, 0)
	context.stroke();

		//down k
	context.beginPath();
	context.moveTo(375, 300);
	context.lineTo(375, 100);
	context.stroke();

		//slant k
	context. beginPath();
	context.moveTo(425, 150);
	context.lineTo(375, 225);
	context.stroke();

		//slant k
	context. beginPath();
	context.moveTo(425, 300);
	context.lineTo(375, 225);
	context.stroke();

		//horz getElementById
	context.beginPath();
	context.moveTo(435, 255);
	context.lineTo(520, 255);
		context.arc(480, 255, 40, 0, .3*Math.PI, true)
	context.fill()
	context.stroke();

		//down r
	context.beginPath();
	context.moveTo(540, 200);
	context.lineTo(540, 300);
	context.stroke();
		
		//curve r
	context.beginPath();
	context.arc(570, 225, 30, Math.PI, 0)
	context.stroke();

		//L
	context.beginPath();
	context.moveTo(670, 100);
	context.lineTo(670, 300);
	context.lineTo(760, 300)
	context.stroke();

		//period
	context.fillStyle = "black";
	context.fillRect(770, 295, 10, 10)

		//Easy way with text
	context.fillStyle = "white";
	context.font = "50px Helvetica";
	context.fillText("Parker L.", 350, 400);
})














