window.addEventListener('load', function () {
//draw board
var grid = document.getElementById('board');
var context = grid.getContext('2d');
context.moveTo(100,0);
context.lineTo(100,300);
context.moveTo(200,0);
context.lineTo(200,300);
context.moveTo(0,100);
context.lineTo(300,100);
context.moveTo(0,200);
context.lineTo(300,200);
context.strokeStyle='#000';
context.stroke();
}, false);
