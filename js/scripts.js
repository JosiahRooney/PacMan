
var world = [
	[
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
		[2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,2,0,2,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,2,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,2,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,2,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,1,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,1,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
	],
	[
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
	]
];

var snake = {
	x: 1,
	y: 1
}

var score = 0;
var seg = 0;
var lives = 3;
var current_world = 0;

function displaySnake() {
	$('#snake').css('left', snake.x * 40);
	$('#snake').css('top', snake.y * 40);
}

function buildWorld() {
	var output = "";

	for (var i = 0; i < world[current_world].length; i++) {
		output += "\n<div class='row'>";
		for (var j = 0; j < world[current_world][i].length; j++) {
			
			switch( world[current_world][i][j] ) {
				case 0:
					output += "<div class='empty'></div>";
					break;
				case 1:
					output += "<div class='item'><img src='img/orb.gif'></div>";
					break;
				case 2:
					output += "<div class='brick'></div>";
					break;
				case 3:
					output += "<div class='snake'></div>";
					break;
				case 4:
					output += "<div class='ghost'></div>";
					break;
				case 5:
					output += "<div class='bonus'></div>";
					break;
				case 8:
					output += "<div class='gap'></div>";
					break;
				case 9:
					output += "<div class='segment_box'></div>";
					break;
			}

		}
		output += "\n</div>";
	}
	//console.log(output);
	document.getElementById('world').innerHTML = output;
}

function updateScore(num) {
	score += num;
	$('#score').text(score + "");
}

function updateLives(num) {
	lives += num;
	$('#lives').text(lives + "");
}

buildWorld();
displaySnake();
updateScore(0);
updateLives(0);

function grow() {
	world[current_world][snake.y][snake.x] = 9;
	$('#snake').after('<div class="segment segment'+seg+'"></div>');
	$('.segment'+seg).css('top',snake.y * 40);
	$('.segment'+seg).css('left',snake.x * 40);
	seg++;
}

function shrink(){
	if ($('.segment').length > 0) {
		// There are segments, remove the oldest one
		var left = parseInt($('.segment').last().css('left')) / 40;
		var top = parseInt($('.segment').last().css('top')) / 40;
		world[current_world][top][left] = 0;
		$('.segment').last().remove();
	}
}

function death() {
	alert("No moves left!");
	updateLives(-1);
	if ( lives == 0 ) {
		// Game over
		alert("No more lives! \n\n Game over!!");
		document.onkeydown = function(e) {
			if ( e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 ) {
				e.preventDefault();
			}
		}
		$('#snake').remove();
		$('.segment').remove();
	} else {
		// Respawn
		$('.segment').remove();
		for (var i = 0; i < world[current_world].length; i++) {
			for (var j = 0; j < world[current_world][i].length; j++) {
				if ( world[current_world][i][j] == 9 ) {
					world[current_world][i][j] = 0;
				}
			}
		}
		seg = 0;
		snake.x = 1;
		snake.y = 1;
		displaySnake();
	}
}

function win() {
	var coinsLeft = 0;
	for (var i = 0; i < world[current_world].length; i++) {
		for (var j = 0; j < world[current_world][i].length; j++) {
			if ( world[current_world][i][j] == 1 ) {
				coinsLeft += 1;
			}
		}
	}
	if (coinsLeft == 0) {
		alert("You won!");
		$('.segment').remove();
		snake.y = 1;
		snake.x = 1;
		current_world += 1;
		buildWorld();
		displaySnake();
	}
}

document.onkeydown = function(e) {
	switch (e.keyCode) {
		case 38:
			// Up
			if ( world[current_world][snake.y - 1][snake.x] != 2 && world[current_world][snake.y - 1][snake.x] != 9 ) {
				if ( world[current_world][snake.y - 1][snake.x] == 1 ) {
					// Grow
					grow();
					snake.y -= 1;
				} else {
					// Delete last segment
					grow();
					shrink();
					snake.y -= 1;
				}
			}
			break;
		case 40:
			// Down
			if ( world[current_world][snake.y + 1][snake.x] != 2 && world[current_world][snake.y + 1][snake.x] != 9 ) {
				if ( world[current_world][snake.y + 1][snake.x] == 1 ) {
					// Grow
					grow();
					snake.y += 1;
				} else {
					grow();
					shrink();
					snake.y += 1;
				}
			}
			break;
		case 37:
			// Left
			if ( world[current_world][snake.y][snake.x - 1] != 2 && world[current_world][snake.y][snake.x - 1] != 9 ) {
				if ( world[current_world][snake.y][snake.x - 1] == 1 ) {
					// Grow
					grow();
					snake.x -= 1;
				} else {
					grow();
					shrink();
					snake.x -= 1;
				}
			}
			break;
		case 39:
			// Right
			if ( world[current_world][snake.y][snake.x + 1] != 2 && world[current_world][snake.y][snake.x + 1] != 9 ) {
				if ( world[current_world][snake.y][snake.x + 1] == 1 ) {
					// Grow
					grow();
					snake.x += 1;
				} else {
					grow();
					shrink();
					snake.x += 1;
				}
			}
			break;
	}
	if ( world[current_world][snake.y][snake.x] == 1) {
		world[current_world][snake.y][snake.x] = 0;
		buildWorld();
		updateScore(100);
	}

	displaySnake();
	win();
	
	if ( 
		// Top
		(world[current_world][snake.y - 1][snake.x] == 9 || world[current_world][snake.y - 1][snake.x] == 2) &&

		// Bottom
		(world[current_world][snake.y + 1][snake.x] == 9 || world[current_world][snake.y + 1][snake.x] == 2) &&
		
		// Left
		(world[current_world][snake.y][snake.x - 1] == 9 || world[current_world][snake.y][snake.x - 1] == 2) &&
		
		// Right 
		(world[current_world][snake.y][snake.x + 1] == 9 || world[current_world][snake.y][snake.x + 1] == 2)

		) {
		console.log('top: '+world[current_world][snake.y - 1][snake.x]+'\nleft: '+world[current_world][snake.y][snake.x - 1]+'\nright: '+world[current_world][snake.y][snake.x + 1]+'\nbottom: '+world[current_world][snake.y + 1][snake.x]);
		death();
	}
}


































