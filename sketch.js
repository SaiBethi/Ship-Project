function preload(){
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  seaImg= loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea= createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale=0.5;
 ship=createSprite(130,200,30,30);
 ship.addAnimation("s1",shipImg1)
 ship.scale=0.25;
  }

function draw() {
background("blue");
sea.velocityX=-4;
if (sea.x < 0) {
  sea.x = sea.width/8;
}
drawSprites();
}

 

