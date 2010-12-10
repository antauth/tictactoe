/*Logic is the computer player object responsible for the logic of the computers game play*/
function Logic(){
this.movement = move;
this.player = 'c'; //representation of computer player on internal board
this.win = ifWin;
this.lose = ifLose;
this.fork = ifFork;
this.forkBlock = ifBlock;
this.findOpening = opening;
}

function ifWin(){ //check for one move win
	return b.twoInARow(this.player);
}

function ifLose(){ //check for one move threat
	return b.twoInARow(player.player);
}

function ifFork(){ //check for fork opportunity
	return b.fork(this.player);
}

function ifBlock(){ //check for fork threat
	return b.fork(player.player);
}

function opening(type, start){ 
	var flag = false; //have you found an empty cell
	while(!flag && start < 9){
		var cell = b.findByType(type, start);
		if(b.gridArr[cell].isEmpty()){
			flag = true;
			return cell;
		}
		else {
			start++;
		}
	}
	return -1;
}
	
function move(){
	var movement = 4; //tracks final move for computer player
	if(this.win() != -1){
		var win = this.win();
		for(i = 0; i <= 2; i++){
			if(b.rowArr[win][i].isEmpty()){
				b.rowArr[win][i].value = this.player;
				movement = translate(win,i);
			}
		}
	}
	else if(this.lose() != -1){
		var lose = this.lose();
		for(i = 0; i <= 2; i++){
			if(b.rowArr[lose][i].isEmpty()){
				b.rowArr[lose][i].value = this.player;
				movement = translate(lose, i);
			}
		}
	}
	else if(this.fork() != -1){
		var fork = this.fork();
		for(i = 0; i <= 2; i++){
			if(b.rowArr[fork][i].isEmpty()){
				b.rowArr[fork][i].value = this.player;
				movement = translate(fork, i);
			}
		}
	}
	else if(this.forkBlock() != -1){
		var forkBlock = this.forkBlock();
		for(i = 0; i <= 2; i++){
			if(b.rowArr[forkBlock][i].isEmpty()){
				b.rowArr[forkBlock][i].value = this.player;
				movement = translate(forkBlock, i);
			}
		}
	}
	else if(b.gridArr[b.findByType('center', 0)].isEmpty()){ //center empty
		b.gridArr[b.findByType('center', 0)].value = this.player;
		movement = b.findByType('center', 0);
	}
	else if(this.findOpening('corner', 0) != -1){ //corner empty
		b.gridArr[this.findOpening('corner', 0)].value = this.player;
		movement = this.findOpening('corner', 0); 
	}
	else { //play edge
		b.gridArr[this.findOpening('edge', 0)].value = this.player;
		movement = this.findOpening('edge', 0); 
	}

	gLastPlayerMove = movement;
	onScreenGrid.drawMove(this.player, movement); //put move on board
}


function translate(row, index){ //returns the cell number for a row location
	var flag = false; //have we found the cell?
	var i = 0;
	while(!flag){
		if(b.rowArr[row][index] == b.gridArr[i]){
			flag = true;
			return i;
		}
		i++;
	}
}
	



