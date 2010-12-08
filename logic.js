/*Logic necessary for computer player*/
var gPlacesArray = new Array('-','-','-','-','-','-','-','-','-');
var gCenter = 4;
var gFirst = 0;

function computerMove(v){
	var opp = new Array(); //track opportunities to win
	var threat = new Array(); //track threats, possible losses
	var fork = new Array(); //track fork opportunities

	/*Cycle through possible opp, threat, fork scenarios.
	  Exit immediately if win, else if loss, else if fork.*/

	for(i = 0; i <= 6; i+3){
		var cFreq = frequency('c','h',i);
		var pFreq = frequency('p','h',i);
		if(cFreq > 1 && pFreq < 1){
			//make winning move and exit
		}
		else if(cFreq < 1 && pFreq > 1){
			//make blocking move and exit
		}
		

function frequency(player, orientation, start){
	var count = 0;
	//orientation can be vertical (v), horizontal (h), or diagonal (d)
	if(orientation == 'd'){
		if(gPlacesArray[start] == player){
			count++;
		}
		if(gPlacesArray[gCenter] == player){
			count++;
		}
		if(start == gFirst){
			if(gPlacesArray[start + 8] == player){
				count++;
			}
		else{
			if(gPlacesArray[start + 4] == player){
				count++;
			}
		}
	}
	else{
		for(i = 0; i <= 2; i++){
			if(orientation == 'v'){
				if(gPlacesArray[start] == player){
					count++;
				}	
			start = start + 3;
			}
			else if(orientation == 'h'){
				if(gPlacesArray[start] == player){
					count++;
				}
			start++;
			}
		}
	}
	
	return count;
}
