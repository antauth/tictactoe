/* The Player object represents the human player */
function Player(){
this.move = makeMove;
this.player = 'p';
}

/* makeMove marks human players desired moves */
function makeMove(cell){
	if(b.validMove(cell)){
		gLastPlayerMove = cell; //record move made in global var
		b.gridArr[cell].value = this.player; //place move on board
		onScreenGrid.drawMove(this.player, cell); //draw on canvas
	}
	else {
		gLastPlayerMove = -1; //flag invalid move
	}	
}
