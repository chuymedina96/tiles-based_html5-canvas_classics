var canvas;
var canvasContext;

window.onload = function(){
  console.log("Loaded");
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  canvasContext.fillStyle = 'black';
  canvasContext.fillRect = (1,100,canvas.width,canvas.height);

  canvasContext.fillStyle = 'yellow';
  canvasContext.beginPath();
  canvasContext.arc(100,100,10,0,Math.PI*2, true);
  canvasContext.fill();

}
