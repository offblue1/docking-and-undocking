var iss, spaceCraft;
var bg, issImg, spaceCraftImg;
var hasDocked = false;

function preload(){
  bg= loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  spaceCraftImg = loadImage("spacecraft1.png");
  spaceCraftImg1 = loadImage("spacecraft2.png");
  spaceCraftImg2= loadImage("spacecraft3.png");
  spaceCraftImg3= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(800, 500);
  iss = createSprite(400,170);
  iss.addImage(issImg);
  iss.scale = 0.8;
  
  spaceCraft = createSprite(350,300);
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale = 0.2;
}
function draw() {
  background(bg);
  
  spaceCraft.addImage(spaceCraftImg);
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spaceCraft.y = spaceCraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(spaceCraftImg3);
    spaceCraft.x = spaceCraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(spaceCraftImg2);
    spaceCraft.x = spaceCraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(spaceCraftImg1);
  }
}
  if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}