/* The Board object creates the grid, an inteayer moves and assists the computer
   in making logical moves.
*/

function Board(){
	var cell = new Cell("","corner");
	var cell2 = new Cell("","edge");
	var cell3 = new Cell("","corner");
	var cell4 = new Cell("","edge");
	var cell5 = new Cell("","center");
	var cell6 = new Cell("","edge");
	var cell7 = new Cell("","corner");
	var cell8 = new Cell("","edge");
	var cell9 = new Cell("","corner");

	this.gridArr = new Array();
	this.gridArr[0] = cell;
	this.gridArr[1] = cell2;
	this.gridArr[2] = cell3;
	this.gridArr[3] = cell4;
	this.gridArr[4] = cell5;
	this.gridArr[5] = cell6;
	this.gridArr[6] = cell7;
	this.gridArr[7] = cell8;
	this.gridArr[8] = cell9;

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
	this.validMove = checkValidity;
	this.takenCells = getCellCount;
	this.reset = resetGrid;
	this.won = hasWon;
	this.drawn = hasDrawn;
	this.findByType = findType;
	this.printGrid = printOutGrid;
}

function printOutGrid(){
	var output = '';
	for(i = 0; i <= 8; i++){
		output += i + '-' + this.gridArr[i].value + ' '; 
	}	
	return output;
}

/* getCellCount counts how many cells are occupied */
function getCellCount() {
	var count = 0;
	for(i = 0; i <= 8; i++) {
		if(!this.gridArr[i].isEmpty()){
			count++;
		}
	}
	return count;
}

function findType(t, start){ //find a cell by type
	for(i = start; i <= 8; i++){
		if(this.gridArr[i].type == t){
			return i;
		}
	}
}
	
/* checkValidity checks the human player's desired mark position
   param:move is the target cell */
function checkValidity(move){
	return this.gridArr[move].isEmpty();
}

/* getTwoInARow determines if there is the possibility for a win/loss
   param:select narrows the selection of rows we're interested in
       a - all (c & p) c - computer p - human player */		
function getTwoInARow(select){
	var cCount = 0; //count of c in row
	var pCount = 0; //count of p in row
	
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

/* getStatus checks for events that would cause a game to end
   param:move is the last move made and forms the basis for which rows to check
*/	
function getStatus(move){
	var stats = 'c';
	//if(gPlayerTurnOrder != this.takenCells()%2){ //did the player win
		if(this.won() == 'p'){
			stats = 'w';
		}
	//}
	else if(this.won() == 'c'){ //did the player lose aka computer won
		stats = 'l';
	}
	else if(this.drawn()){ //can no more moves be made
		stats = 'd';
	}
	return stats;
}

/* hasWon checks for a win/loss
   param:m is the last movement (cell selected) by a player */
/*function hasWon(m){
	var counter = 0;
	for(i = 0; i < parseInt(this.gridArr[m].type); i++){
		row = findRow(m, counter);
		if(this.rowArr[row][0].value == this.rowArr[row][1].value && this.rowArr[row][1].value == this.rowArr[row][2]){
		return true;
		}
		counter++;
	}
	return false;
}*/

/* hasWon alternate */
function hasWon(){
	for(row=0; row < 8; row++){
		 if(this.rowArr[row][0].value == this.rowArr[row][1].value && this.rowArr[row][1].value == this.rowArr[row][2]){
		return this.rowArr[row][0].value;
		}
	}
}

/* hasDrawn checks to see if any win opportunities for either player still exist */	
function  hasDrawn(){
	if(this.twoInARow('a') == -1 && this.takenCells() > 7){
		return true;
	}
	else {
		return false;
	}
}

/* findRow finds the row(s) in which a cell appears
   param:cell is the cell number
   param:start is where to start looking*/	
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

function getFork(select){
	var opportunities = new Array(); //an array of possible forks
	var j = 0; //index for new array
	for(i = 0; i < 8; i++){//get rows where only one desired mark exists
		if((this.rowArr[i][0].isEmpty() && this.rowArr[i][1].isEmpty && this.rowArr[i][2].value == select)){
		opportunities[j] = this.rowArr[i][0];
		j++;
		opportunities[j] = this.rowArr[i][1];
		j++;
		}
		else if((this.rowArr[i][0].isEmpty() && this.rowArr[i][2].isEmpty && this.rowArr[i][1].value == select)){
		opportunities[j] = this.rowArr[i][0];
		j++;
		opportunities[j] = this.rowArr[i][2];
		j++;
		}
		else if((this.rowArr[i][1].isEmpty() && this.rowArr[i][2].isEmpty && this.rowArr[i][0].value == select)){
		opportunities[j] = this.rowArr[i][1];
		j++;
		opportunities[j] = this.rowArr[i][2];
		j++;
		}
	}
	while(opportunities.length != 0){ //find possible forks by iterating through opportunities array
		for(k = 0; k <= opportunities.length - 1; k++){ //take an item off array
			var compareRow = opportunities.pop();
			for(j = 0; j < opportunities.length; j++){ //compare that row to the remaining rows
				if(compareRow == opportunities[j]){
					return compareRow;
				}
			}
		}
	}
	return -1;
}

function resetGrid(){
	for(i = 0; i <= 8; i++) {
		this.gridArr[i] = "";
	}
}	


