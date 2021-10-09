var log, coin, caveman, jungle;
var logImg, coinImg, cavemanImg, jungleImg;

function preload(){
  //logImg = loadImage('log');
  //coinImg = loadImage('coin');
  //cavemanImg = loadImage('caveman');
  //jungleImg = loadImage('jungle');
}
function setup() {
  createCanvas(1000,600);
  
  jungle = createSprite(400,200,20,10);
}

function draw() {
  background(220);
  
  
  
  drawSprites();
}