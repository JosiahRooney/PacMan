// List of features

// 1. Js display world - DONE
// 2. Pacman move

var world = [
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
	[2,1,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
	[2,1,1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,1,1,2],
	[2,2,2,2,2,2,1,2,2,2,2,0,0,2,2,0,0,2,2,2,2,1,2,2,2,2,2,2],
	[0,0,0,0,0,2,1,2,2,2,2,0,0,2,2,0,0,2,2,2,2,1,2,0,0,0,0,0],
	[0,0,0,0,0,2,1,2,2,0,0,0,0,0,0,0,0,0,0,2,2,1,2,0,0,0,0,0],
	[2,2,2,2,2,2,1,2,2,0,0,0,0,0,0,0,0,0,0,2,2,1,2,2,2,2,2,2],
	[9,0,0,0,0,0,1,0,0,0,0,2,2,2,2,2,2,0,0,0,0,1,0,0,0,0,0,9]
];

var pacman = {
	x: 1,
	y: 1
}

var score = 0;

function displayPacman() {
	$('#pacman').css('left', pacman.x * 20);
	$('#pacman').css('top', pacman.y * 20);
}

function buildWorld() {
	var output = "";

	for (var i = 0; i < world.length; i++) {
		output += "\n<div class='row'>";
		for (var j = 0; j < world[i].length; j++) {
			
			switch( world[i][j] ) {
				case 0:
					output += "<div class='empty'></div>";
					break;
				case 1:
					output += "<div class='coin'></div>";
					break;
				case 2:
					output += "<div class='brick'></div>";
					break;
				case 3:
					output += "<div class='pacman'></div>";
					break;
				case 4:
					output += "<div class='ghost'></div>";
					break;
				case 5:
					output += "<div class='cherry'></div>";
					break;
				case 9:
					output += "<div class='warp'></div>";
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

buildWorld();
displayPacman();
updateScore(0);

document.onkeydown = function(e) {
	switch (e.keyCode) {
		case 38:
			// Up
			$('#pacman img').css('transform','rotate(-90deg)');
			if ( world[pacman.y - 1][pacman.x] != 2 && world[pacman.y][pacman.x] != 9 ) {
				if ( world[pacman.y - 1][pacman.x] == 9 ) {
					pacman.y = world.length;
				} else {
					pacman.y -= 1;
				}
			}
			break;
		case 40:
			// Down
			$('#pacman img').css('transform','rotate(90deg)');
			if ( world[pacman.y + 1][pacman.x] != 2 && world[pacman.y][pacman.x] != 9 ) {
				if ( world[pacman.y + 1][pacman.x] == 9 ) {
					pacman.y = 0;
				} else {
					pacman.y += 1;
				}
			}
			break;
		case 37:
			// Left
			$('#pacman img').css('transform','rotate(-180deg)');
			if ( world[pacman.y][pacman.x - 1] != 2 && world[pacman.y][pacman.x] != 9 ) {
				if ( world[pacman.y][pacman.x - 1] == 9 ) {
					pacman.x = world[0].length - 2;
				} else {
					pacman.x -= 1;
				}
			}
			break;
		case 39:
			// Right
			$('#pacman img').css('transform','rotate(0deg)');
			if ( world[pacman.y][pacman.x + 1] != 2 && world[pacman.y][pacman.x] != 9 ) {
				if ( world[pacman.y][pacman.x + 1] == 9 ) {
					pacman.x = 1;
				} else {
					pacman.x += 1;
				}
			}
			break;
	}
	if ( world[pacman.y][pacman.x] == 1) {
		console.log(world[pacman.y][pacman.x]);
		world[pacman.y][pacman.x] = 0;
		buildWorld();
		updateScore(100);
	}
	var coinsLeft = 0;
	for (var i = 0; i < world.length; i++) {
		for (var j = 0; j < world[i].length; j++) {
			if ( world[i][j] == 1 ) {
				coinsLeft += 1;
			}
		}
	}
	displayPacman();
	if (coinsLeft == 0) {
		setTimeout(function() {
			alert("You won!");
		},180);
	}
}


































