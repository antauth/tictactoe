/*Logic is the computer player object responsible for the logic of the computers game play*/
function Logic(){
this.move = makeMove;
this.player = 'c'; //representation of computer player on internal board
}

function makeMove(){ //complete logic for movements made by computer
	var win = b.twoInARow(this.player); //check for one move win
	var lose = b.twoInARow(player.player); //check for one move threat
	if(win != -1){
		for(i = 0; i <= 2; i++){
			if(b.rowArr[win][i].isEmpty()){
				b.rowArr[win][i].value = this.player;
			}
		}
	}
	else if(lose != -1){
		for(i = 0; i <= 2; i++){
			if(b.rowArr[lose][i].isEmpty()){
				b.rowArr[lose][i].value = this.player;
			}
		}
	}

	

