/* There are 9 cells on a board.
   This Cell object stores the cell value--c for computer or p for (human) player--and the type of cell (corner, edge, center). 
*/

function Cell(v, t) {
	var value = v;
	var type = t;
	this.isEmpty = isEmpty; //determines if cell has no value

	this.__defineGetter__("value", function() {
		return value;
	});

	this.__defineSetter__("value", function(v) {
		value = v;
	});

	this.__defineGetter__("type", function() {
		return type;
	});

	this.__defineSetter__("type", function(t) {
		type = t;
	});

function isEmpty() {
	return (this.value == "");
}
}
