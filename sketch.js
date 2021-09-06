var sea ,seaImg;
var ship,shipAni

function preload(){
seaImg = loadImage('sea.png');
shipAni = loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png');

}

function setup(){
  createCanvas(400,400);
  

  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale =0.25;
  if(sea.x <0){
    sea.x = sea.width/2;
  }
  


  ship = createSprite(90,220,70,70);
  ship.addAnimation('movingShip',shipAni);
  ship.scale = 0.2;
  
  
}

function draw() {
  background("blue");



  
 
  drawSprites();
}