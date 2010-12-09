//var gGrid;
//var gContext;

function Gui(){
this.grid = document.getElementById('board');
this.context = grid.getContext('2d');
this.board = drawBoard;
this.cursorPosition = getCursorPosition;
this.drawMove = drawPlayerMove;
}


//draw board on canvas
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


function getCursorPosition(m) {
    var x;
    var y;
    if (m.pageX != undefined && m.pageY != undefined) {
	x = m.pageX;
	y = m.pageY;
    }
    else {
	x = m.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	y = m.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= this.grid.offsetLeft;
    y -= this.grid.offsetTop;
    return getGridNumber(x,y);
}

//for a given mouse click event, determines the grid in which click was made
function getGridNumber(x,y){
	var gridNumber; //value of grid section (0-8)

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

			
//draw an X or O on board
function drawPlayerMove(player, gridNumber) {
	var x; //x coordinate
	var y; //y coordinate

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

	gContext.font = 'bold 30px sans-serif';
	gContext.textAlign = 'center';
	gContext.textBaseline = 'middle';
	gContext.fillText(player, x, y);
}
