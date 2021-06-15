var gameState;
var PLAY = 1;
var END = 0;

var canvas;
var iss, issImg;
var spaceCraft, spaceCraftImg1, spaceCraftImg2, spaceCraftImg3, spaceCraftImg4;
var font;
var bg;

gameState = PLAY;

function preload(){
  issImg = loadImage("iss.png");
  spaceCraftImg1 = loadAnimation("spacecraft1.png");
  spaceCraftImg2 = loadAnimation("spacecraft2.png");
  spaceCraftImg3 = loadAnimation("spacecraft3.png");
  spaceCraftImg4 = loadAnimation("spacecraft4.png");
  font = loadFont("AIRSTREA.TTF");
  bg = loadImage("spacebg.jpg");
}

function setup() {
  canvas = createCanvas(700,600);

  iss = createSprite(350,175,50,50);
  iss.addImage(issImg);
  iss.scale = 0.8;

  spaceCraft = createSprite(650,550,50,50);
  spaceCraft.addAnimation("spacecraft1",spaceCraftImg1);
  spaceCraft.addAnimation("spacecraft2",spaceCraftImg2);
  spaceCraft.addAnimation("spacecraft3",spaceCraftImg3);
  spaceCraft.addAnimation("spacecraft4",spaceCraftImg4);
  spaceCraft.scale = 0.215;
}

function draw() {
  background(bg);

  if(gameState === PLAY){
    if(keyDown("left")){
      spaceCraft.x -= 5;
      spaceCraft.changeAnimation("spacecraft3",spaceCraftImg3);
    }else{
      spaceCraft.changeAnimation("spacecraft1",spaceCraftImg1)
    }
  
     if(keyDown("up")){
       spaceCraft.y -= 5;
       spaceCraft.changeAnimation("spacecraft2",spaceCraftImg2);
     }
     if(keyDown("right")){
      spaceCraft.x += 5;
      spaceCraft.changeAnimation("spacecraft4",spaceCraftImg4);
    }
  }

  if(spaceCraft.x === 280 && spaceCraft.y === 300){
    spaceCraft.changeAnimation("spacecraft1",spaceCraftImg1);
    gameState = END;
  }

  if(gameState === END){
    textFont(font);
    textSize(60);
    fill(255);
    text("Docking Successful!",150,550);
  }

  console.log(spaceCraft.x);
  console.log(spaceCraft.y);

  iss.depth = spaceCraft.depth;
  iss.depth = iss.depth + 1;

  drawSprites();
}