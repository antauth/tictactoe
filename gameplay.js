var gGameOver = false;
var gLastPlayerMove;
var gPlayerTurnOrder;

//draw board
var b = new Board();
var onScreenGrid = new Gui()};

//instantiate new cpu player
var cpu = new Logic();

//instantiate new human player
var player = new Player();

function startGame(plays){
//determine who goes first
var gPlayerTurnOrder = plays%2; //if 0, human player goes first

	//if first move is computer 
	if(gPlayTurnOrder == 1){
		cpu.move(center); //if first player, computer will always select center
	}
}

function continueGame(m){
	//check if game hasn't ended
	if(!gameOver){
		//determine position of human players click
		player.move(onScreenGrid.cursorPosition(m));

		if(gLastPlayerMove == -1){
		//invalid move made by human
		document.write('Your move was invalid. Try again');
		}
		else {
		//get game status to check for win, loss, or draw
		var chk = b.statusCheck(gLastPlayerMove);
		if(chk == 'c'){
		//if((playerTurnOrder == 0 && board.Taken()%2 == 1) || (PlayerTurnOrder == 1 && board.Taken()%2 == 0)){
		cpu.move();
			//}
	
		//get game status to check for win, loss or draw
		chk = b.statusCheck(gLastPlayerMove);
		}	
		gGameOver = true; //flag will be reset based on following

		if(chk == 'd'){
			document.write('Draw. Game over.');
		}	
		else if (chk == 'l'){
			document.write('You lose...of course!');
		}
		else if (chk == 'w'){
			document.write('You won???!!!!');
		else {
			gGameOver = false;
		}
	}
	else {
		//redraw on screen board
		onScreenGrid.grid.width = onScreenGrid.grid.width;
		//reset grid

		startGame(gPlayerTurnOrder++;);
	}		
}

