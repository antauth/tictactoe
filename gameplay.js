var gGrid;
var gContext;

function startGame(){
//draw board
grid = document.getElementById('board');
gGrid = grid;
gContext = grid.getContext('2d');
gContext.moveTo(100,0);
gContext.lineTo(100,300);
gContext.moveTo(200,0);
gContext.lineTo(200,300);
gContext.moveTo(0,100);
gContext.lineTo(300,100);
gContext.moveTo(0,200);
gContext.lineTo(300,200);
gContext.strokeStyle='#000';
gContext.stroke();
};

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
