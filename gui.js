/* The Gui object controls the HTML representation of the board, a canvas.*/

function Gui(){
this.grid = document.getElementById('board'); //connect grid to HTML canvas
this.context = this.grid.getContext('2d'); //all canvases need a context
this.board = drawBoard;
this.cursorPosition = getCursorPosition;
this.drawMove = drawPlayerMove;
this.reset = resetBoard;
}

/* drawBoard creates the familiar tic-tac-toe grid on the HTML canvas
   See online specs for HTML 5 for more information on using canvas */
function drawBoard(){
this.context.moveTo(100,0);
this.context.lineTo(100,300);
this.context.moveTo(200,0);
this.context.lineTo(200,300);
this.context.moveTo(0,100);
this.context.lineTo(300,100);
this.context.moveTo(0,200);
this.context.lineTo(300,200);
this.context.strokeStyle='#000';
this.context.stroke();
this.grid.addEventListener("click", continueGame, false);
};

/* getCursorPosition determines where on the canvas the user clicked */
function getCursorPosition(m) {
    var x; //will hold the x-coordinate of clicked area
    var y; //will hold the y-coordinate of clicked area
    if (m.pageX != undefined && m.pageY != undefined) {
	x = m.pageX;
	y = m.pageY;
    }
    else { //ie workaround
	x = m.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	y = m.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= this.grid.offsetLeft; //gets actual canvas position instead of page's
    y -= this.grid.offsetTop;
    return getGridNumber(x,y);
}

/* getGridNumber determines the grid in which the mouseclick was made
   Based on a 300x300 canvas
   param:x is x-coordinate of click relative to canvas
   param;Y is y-coordinate of click relative to canvas */
function getGridNumber(x,y){
	var gridNumber; //value of grid section (0-8) and cell

	if(x <= 100){
		if(y < 100){
			gridNumber = 0;
		}
		else if(y < 200){
			gridNumber = 3;
		}
		else{
			gridNumber = 6;
		}
	}
	else if(x <= 200){
 		if(y < 100){
			gridNumber = 1;
		}
		else if(y < 200){
			gridNumber = 4;
		}
		else{
			gridNumber = 7;
		}
	}
	else {
		if(y < 100){
			gridNumber = 2;
		}
		else if(y < 200){
			gridNumber = 5;
		}
		else{
			gridNumber = 8;
		}
	}

	return gridNumber;
}

			
/* drawPlayerMove draws an X or O on the HTML board
   param:player is the player who made the move
   param:gridNumber is the grid or cell where the mark will go
*/
function drawPlayerMove(player, gridNumber) {
	var x; //x-coordinate is the center of the grid/cell
	var y; //y-coordinate is the middle of the grid/cell
	var playerLetter; //X or O

	/*if((player == 'c' && gPlayerTurnOrder == 0) || (player == 'p' && gPlayerTurnOrder == 1)){
		playerLetter = 'O';
	}
	else {
		playerLetter = 'X';
	}*/
	
	/*workaround for player letter assignment errors
	  each player will always have a given letter*/
	if(player == 'c'){
		playerLetter = 'O';
	}
	else{
		playerLetter = 'X';
	}

	if(gridNumber == 0 || gridNumber == 3 || gridNumber == 6){
		x = 50;
	}
	else if(gridNumber == 1 || gridNumber == 4 || gridNumber == 7){
		x = 150;
	}
	else {
		x = 250;
	}

	if(gridNumber >= 0 && gridNumber < 3){
		y = 50;
	}
	else if(gridNumber >= 3 && gridNumber < 6){
		y = 150;
	}
	else{
		y = 250;
	}

	this.context.font = 'bold 30px sans-serif';
	this.context.textAlign = 'center';
	this.context.textBaseline = 'middle';
	this.context.fillText(playerLetter, x, y);
}

/* resetBoard forces the canvas to clear by resetting the width */
function resetBoard(){
	this.grid.width = this.grid.width;
}
