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
	var movement; //tracks final move for computer player
	if(this.win() != -1){
		printOnScreen('Computer executes win');
		var win = this.win();
		for(i = 0; i <= 2; i++){
			if(b.rowArr[win][i].isEmpty()){
				b.rowArr[win][i].value = this.player;
				movement = translate(win,i);
			}
		}
	}
	else if(this.lose() != -1){
		printOnScreen('Computer blocks');
		var lose = this.lose();
		for(i = 0; i <= 2; i++){
			if(b.rowArr[lose][i].isEmpty()){
				b.rowArr[lose][i].value = this.player;
				movement = translate(lose, i);
			}
		}
	}
	else if(this.fork() != -1){
		printOnScreen('Computer executes fork');
		var fork = this.fork();
		fork.value = this.player;
		movement = retrieve(fork);
	}
	else if(this.forkBlock() != -1){
		printOnScreen('Computer executes fork block');
		var forkBlock = this.forkBlock();
		forkBlock.value = this.player;
		movement = retrieve(forkBlock);
	}
	else if(b.gridArr[b.findByType('center', 0)].isEmpty()){ //center empty
		printOnScreen('Computer plays center');
		movement = b.findByType('center', 0);
		b.gridArr[movement].value = this.player;
	}
	else if(this.findOpening('corner', 0) != -1){ //corner empty
		printOnScreen('Computer selects corner');
		movement = this.findOpening('corner', 0); 
		b.gridArr[movement].value = this.player;
	}
	else { //play edge
		printOnScreen('Computer selects edge');
		movement = this.findOpening('edge', 0); 
		b.gridArr[movement].value = this.player;
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

function retrieve(loc){ //determine cell number of given row
	for(i = 0; i < 9; i++){
		if(b.gridArr[i] == loc){
			return i;
		}
	}
}	



