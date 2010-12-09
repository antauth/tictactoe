/* This is the main function that controls game play. */
var gGameOver = false; //has the game ended?
var gLastPlayerMove; //the last cell where a player put their mark
var gPlayerTurnOrder; //determines which player goes first: 0 - human first

var b = new Board(); //create internal board representation
var onScreenGrid = new Gui()}; //create HTML board representation

var cpu = new Logic(); //instantiate new cpu player
var player = new Player(); //instantiate new human player

/* startGame determines which player moves first
   param:plays counts how many time the game has been played in a row */
function startGame(plays){
	var gPlayerTurnOrder = plays%2;

	if(gPlayTurnOrder == 1){ //if first move is computer 
		cpu.move(center); //always select center
	}
}

/* continueGame is triggered by the users mouse click, param:m*/
function continueGame(m){
	if(!gameOver){ //check if game hasn't ended
		player.move(onScreenGrid.cursorPosition(m));//map click to a cell
		if(gLastPlayerMove == -1){ //invalid move made by human
		document.write('Your move was invalid. Try again');
		}
		else {
		var chk = b.statusCheck(gLastPlayerMove); //check for win, lose, or draw
		if(chk == 'c'){ //continue game
			cpu.move();
			chk = b.statusCheck(gLastPlayerMove); //check for win or draw
		}	
		gGameOver = true; //flag will be reset based on following

		if(chk == 'd'){ //game is a draw
			document.write('Draw. Game over.');
		}	
		else if (chk == 'l'){ //human player loses game
			document.write('You lose...of course!');
		}
		else if (chk == 'w'){ //human player wins game
			document.write('You won???!!!!');
		else {
			gGameOver = false;
		}
	}
	else {
		onScreenGrid.grid.width = onScreenGrid.grid.width; //reset HTML board
		b.reset; //reset grid
		startGame(gPlayerTurnOrder++); //start game again
	}		
}

