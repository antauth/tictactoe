/* There are 9 cells on a board.
   This Cell object stores the cell value--c for computer or p for (human) player--and the type of cell (corner, edge, center). 
*/

function Cell(v, t) {
	this.value = v;
	this.type = t;
	this.isEmpty = isItEmpty; //determines if cell has no value
}

function isItEmpty() {
	return (this.value == "");
}

