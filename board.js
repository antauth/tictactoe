/* The Board object creates the grid, an internal representation of the on screen
   board. It determines the validity of of player moves and assists the computer
   in making logical moves.
*/

var center = 4;
var edge = 2;
var corner = 3;
 
function Board(){
	this.gridArr = new Array(	new Cell("","corner"),
					new Cell("","edge"),
					new Cell("","corner"),
					new Cell("","edge"),
					new Cell("","center"),
					new Cell("","edge"),
					new Cell("","corner"),
					new Cell("","edge"),
					new Cell("","corner"));
	this.statusCheck = getStatus;
	this.rowArr = new Array(	new Array(	this.gridArr[0],
							this.gridArr[1],
							this.gridArr[2]),
					new Array(	this.gridArr[3],
							this.gridArr[4],
							this.gridArr[5]),
					new Array(	this.gridArr[6],
							this.gridArr[7],
							this.gridArr[8]),
					new Array(	this.gridArr[0],
							this.gridArr[3],
							this.gridArr[6]),
					new Array(	this.gridArr[1],
							this.gridArr[4],
							this.gridArr[7]),
					new Array(	this.gridArr[2],
							this.gridArr[5],
							this.gridArr[8]),
					new Array(	this.gridArr[0],
							this.gridArr[4],
							this.gridArr[8]),
					new Array(	this.gridArr[2],
							this.gridArr[4],
							this.gridArr[6]));

	this.twoInARow = getTwoInARow;
	this.fork = getFork;
	this.threat = getThreat;
	this.validMove = checkValidity;
	this.takenCells = getCellCount;
	this.reset = resetGrid;
}

function getCellCount() {
	var count = 0;
	for(i = 0; i <= 8; i++) {
		if(this.gridArr[i] != ""){
			count++;
		}
	}
	return count;
}

function checkValidity(move){
	return this.gridArr[move].isEmpty();
}
		
function getTwoInARow(select){
	var cCount = 0;
	var pCount = 0;
	
	//determines if two of the same cell values occur in a row with an emptycell
	for(i = 0; i <= 7; i++){
		for(j = 0; j <= 2; j++){
			if (this.rowArr[i][j].value == 'p'){
				pCount++;
			}
			else if (this.rowArr[i][j].value == 'c'){
				cCount++;
			}
		}
		if(select == 'p' && pCount == 2 && cCount == 0){
			return i;
		}
		else if(select == 'c' && cCount == 2 && pCount == 0){
			return i;
		}
		else if(select == 'a' && (cCount + pCount) < 3 && (cCount == 2 || pCount == 2)){
			return i;
		}
		else {
			pCount = 0;
			cCount = 0;
		}
	}
	return -1;
}
	
function getStatus(move){
	var stats = 'c';
	if(gPlayerTurnOrder != this.takenCells()%2){
		//did the player win
		if(hasWon(move)){
			stats = 'w';
		}
	}
	//did the player lose, just hasWon with the cpu's pick instead
	else if(hasWon(move)){
		stats = 'l';
	}
	//can no more moves be made
	else if(hasDrawn()){
		stats = 'd';
	}
	return stats;
}

function hasWon(m){
	var row = 0;
	//find the rows in which the cell appears and determine if winner
	for(i = 0; i < parseInt(this.gridArr[m].type); i++){
		row = findRow(m, row);
		//check for win
		if(this.rowArr[row][0].value == this.rowArr[row][1].value && this.rowArr[row][1].value == this.rowArr[row][2]){
		return true;
		}
	}
	return false;
}
	
	
function findRow(cell, start){
	while(start <= 8){
	for(i = 0; i <=2; i++){
		if(this.gridArr[cell] == this.rowArr[start][i]){
			return start;
		}
	}
	start++;
	}
	return -1;
}

function getFork(){
	return 0;
}

function getThreat(){
	return 0;
}
		 
function resetGrid(){
	return 0;
}	


