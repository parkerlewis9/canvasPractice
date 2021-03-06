$(document).ready(function(){
	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	
	//Lets save the cell width in a variable for easy control
	var cw = 10;
	var d;
	var food;
	var food2;
	var score;
	var foodEaten = 0;
	var eatenSolid;
	var eatenRainbow;
	var blocks = [];
	var block = {}
	
	//Lets create the snake now
	var snake_array; //an array of cells to make up the snake

	function init()
	{
		d = "right"; //default direction
		create_snake();
		create_food(); //Now we can see the food particle
		create_block();
		// createObstacles()
		//finally lets display the score
		score = 0;
		eatenRainbow = false;
		eatenSolid = false;
		foodEaten = 0;



		
		//Lets move the snake now using a timer which will trigger the paint function
		//every 60ms
		if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}
	init();
	
	function create_snake()
	{
		var length = 5; //Length of the snake
		snake_array = []; //Empty array to start with
		for(var i = length-1; i>=0; i--)
		{
			//This will create a horizontal snake starting from the top left
			snake_array.push({x: i, y:0});
		}
	}
	
	//Lets create the food now
	function create_food()
	{
		food = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};

		food2 = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};
		//This will create a cell with x/y between 0-44
		//Because there are 45(450/10) positions accross the rows and columns
	}



	function create_block()
	{
		block1 = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};

		block2 = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};

		block3 = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};

		block4 = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};

		block5 = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};

		block6 = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};

		block7 = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};
		block8 = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};
		block9 = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};
		block10 = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};
		//This will create a cell with x/y between 0-44
		//Because there are 45(450/10) positions accross the rows and columns
	}
	
	//Lets paint the snake now
	function paint()
	{


		// blocks = [];
		//Creating Blocks



		//To avoid the snake trail we need to paint the BG on every frame
		//Lets paint the canvas now
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = "black";
		ctx.strokeRect(0, 0, w, h);
		
		//The movement code for the snake to come here.
		//The logic is simple
		//Pop out the tail cell and place it infront of the head cell
		var nx = snake_array[0].x;
		var ny = snake_array[0].y;
		//These were the position of the head cell.
		//We will increment it to get the new head position
		//Lets add proper direction based movement now
		if(d == "right") nx++;
		else if(d == "left") nx--;
		else if(d == "up") ny--;
		else if(d == "down") ny++;
		
		//Lets add the game over clauses now
		//This will restart the game if the snake hits the wall
		//Lets add the code for body collision
		//Now if the head of the snake bumps into its body, the game will restart
		if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array))
		{
			//restart game
			init();
			//Lets organize the code a bit now.
			return;
		}
		
		//Lets write the code to make the snake eat the food
		//The logic is simple
		//If the new head position matches with that of the food,
		//Create a new head instead of moving the tail
		if(nx == food.x && ny == food.y || ny == food2.y && nx == food2.x) {
		    foodEaten ++
		    if(nx == food.x && ny == food.y){
		    	var tail = {x: nx, y: ny};
		    	eatenSolid = true;
		    	score++
		    }
		    if(ny == food2.y && nx == food2.x) {
		    	var tail = {x: nx, y: ny};
		    	eatenRainbow = true;
		    	score+=2
		    }

			if(foodEaten > 1) {
				// var tail = {x: nx, y: ny};
				//Create new food
				create_food();
				foodEaten = 0;
				eatenRainbow = false;
				eatenSolid = false;
				create_block();
				// createObstacles()
			} 
		} else {
			var tail = snake_array.pop(); //pops out the last cell
			tail.x = nx; tail.y = ny;
		}
		//The snake can now eat the food.
		
		snake_array.unshift(tail); //puts back the tail as the first cell
		
		for(var i = 0; i < snake_array.length; i++)
		{
			var c = snake_array[i];
			//Lets paint 10px wide cells
			paint_cell(c.x, c.y);
		}
		
		//Lets paint the food
		if(foodEaten === 0 && !eatenSolid && !eatenRainbow) {
			paint_cell(food.x, food.y);
			paint_random(food2.x, food2.y);
		} else if (foodEaten === 1 && eatenSolid) {
			paint_random(food2.x, food2.y);
			// console.log("goodbye")
		} else if (foodEaten === 1 && eatenRainbow) {
			paint_cell(food.x, food.y);
			// console.log("hello")
		}
	
		paint_black(block1.x,block1.y)
		paint_black(block2.x,block2.y)
		paint_black(block3.x,block3.y)
		paint_black(block4.x,block4.y)
		paint_black(block5.x,block5.y)
		paint_black(block6.x,block6.y)
		paint_black(block7.x,block7.y)
		paint_black(block8.x,block8.y)
		paint_black(block9.x,block9.y)
		paint_black(block10.x,block10.y)

		if(nx == block1.x && ny == block1.y || ny == block2.y && nx == block2.x|| ny == block3.y && nx == block3.x || ny == block4.y && nx == block4.x || ny == block5.y && nx == block5.x || ny == block6.y && nx == block6.x || ny == block7.y && nx == block7.x || ny == block8.y && nx == block8.x || ny == block9.y && nx == block9.x || ny == block10.y && nx == block10.x)
		{
			//restart game
			init();
			//Lets organize the code a bit now.
			return;
		}
		//Lets paint the score
		var score_text = "Score: " + score;
		ctx.fillText(score_text, 5, h-5);
	}
	// create_block();

	//Paint random color
	function paint_random(x,y) {
			var colorArr = ["blue", "purple", "orange", "yellow", "green", "teal", "red"];
			var randNum = Math.floor(Math.random() * colorArr.length);
			var color = colorArr[randNum];
			ctx.fillStyle = color;
			ctx.fillRect(x*cw, y*cw, cw, cw);
			ctx.strokeStyle = "white";
			ctx.strokeRect(x*cw, y*cw, cw, cw);

	}

	function paint_black(x, y)
	{
		ctx.fillStyle = "black";
		ctx.fillRect(x*cw, y*cw, cw, cw);
		ctx.strokeStyle = "white";
		ctx.strokeRect(x*cw, y*cw, cw, cw);
	}

	//Lets first create a generic function to paint cells
	function paint_cell(x, y)
	{
		ctx.fillStyle = "blue";
		ctx.fillRect(x*cw, y*cw, cw, cw);
		ctx.strokeStyle = "white";
		ctx.strokeRect(x*cw, y*cw, cw, cw);
	}
	
	function check_collision(x, y, array)
	{
		//This function will check if the provided x/y coordinates exist
		//in an array of cells or not
		for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y == y)
			 return true;
		}
		return false;
	}

	// function createObstacles(){
	// 	// for (var i = 0; i < 20; i++) {
	// 		// console.log(i);
	// 		// console.log(blocks)
	// 		create_block(1)
	// 		console.log(1 + ": " + block[1].x)
	// 		paint_cell(block[1].x,block[1].y)
	// 	// }
	// }
	
	//Lets add the keyboard controls now
	$(document).keydown(function(e){
		var key = e.which;
		//We will add another clause to prevent reverse gear
		if(key == "37" && d != "right") d = "left";
		else if(key == "38" && d != "down") d = "up";
		else if(key == "39" && d != "left") d = "right";
		else if(key == "40" && d != "up") d = "down";
		//The snake is now keyboard controllable
	})
	
	
	
	
	
	
	
})	