/* There are 9 cells on a board.
   Cell object stores value of cell (c or p) and type of cell (corner, edge, center). 
*/

function Cell(v, t) {
	var value = v;
	var type = t;
	this.isEmpty = isEmpty;

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
