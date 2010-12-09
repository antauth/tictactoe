/* The Board object creates the grid, an internal representation of the on screen
   board. It determines the validity of of player moves and assists the computer
   in making logical moves.
*/

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
}

function getStatus(move){
	var stats = 'c';
	//did the player win
	if(hasWon(move)){
		stats = 'w';
	}
	//did the player lose
	else if(hasLost(move){
		stats = 'l';
	}
	//can no more moves be made
	else if(hasDrawn(move){
	}
	return stats;
}
	

function findRow(cell, start){
	while(start <= 8){
	for(i = 0; i <=2; i++){
		if(gridArr[cell] == rowArr[start][i]){
			return start;
		}
	}
	start++;
	}
	return -1;
}
		 
	


