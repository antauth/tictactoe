/* This is the main function that controls game play. */
var b; //create internal board representation
var onScreenGrid; //create HTML board representation

var cpu; //instantiate new cpu player
var player; //instantiate new human player

/* startGame determines which player moves first
   param:plays counts how many time the game has been played in a row */
function startGame(plays){
	var gPlayerTurnOrder = plays%2;

	b = new Board();
	onScreenGrid = new Gui(); //placed inside this func to occur post-load	
	onScreenGrid.board(); //draw HTML board
	cpu = new Logic();
	player = new Player();

	if(gPlayerTurnOrder == 1){ //if first move is computer 
		cpu.movement();
	}
}

/* continueGame is triggered by the users mouse click, param:m*/
function continueGame(m){
	if(!gGameOver){ //check if game hasn't ended
		player.move(onScreenGrid.cursorPosition(m));//map click to a cell
		if(gLastPlayerMove == -1){ //invalid move made by human
			document.write('Your move was invalid. Try again');
		}
		else {
			var chk = b.statusCheck(gLastPlayerMove); //check for win, lose, or draw
			if(chk == 'c'){ //continue game
				cpu.movement();
				chk = b.statusCheck(gLastPlayerMove); //check for win or draw
			}
			gGameOver = true; //flag will be reset based on following

			if(chk == 'd'){ //game is a draw
				printOnScreen('Draw. Game over.');
			}	
			else if (chk == 'l'){ //human player loses game
				printOnScreen('You lose...of course!');
			}
			else if (chk == 'w'){ //human player wins game
				printOnScreen('You won???!!!!');
			}
			else {
				gGameOver = false;
			}
		}
	}
	else {
		onScreenGrid.reset(); //reset HTML board
		b.reset(); //reset grid
		startGame(gPlayerTurnOrder++); //start game again
	}		
}

/* printOnScreen outputs game messages to user
   Messages appear directly under board
   param:text is the text of the message */
function printOnScreen(text){
	document.getElementById('messages').innerHTML = text;
}
