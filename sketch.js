
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var sky; 
var inv;
var Survival_Time = 0;
var rock;
var bananas;

function preload(){
  
   monkey_running=loadAnimation ( "sprite_0.png", "sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");      
                                   
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  
  
 monkey = createSprite(50,350,60,60)
monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  monkey.setCollider("circle",30,30,40)
ground = createSprite(50,390,400,30)
  ground.x = ground.width/2;
  sky = createSprite(200,200,400,1)
  sky.visible = false
  inv = createSprite(50,355,400,1)
  inv.visible = false;

  
  
}


function draw() {
background("white")
  if(ground.x<0){
  ground.x = ground.width/2;
  } 
  
  if(keyDown("space")&& monkey.y >= 50){
  monkey.velocityY = -10
  }
monkey.bounceOff(sky)
  
  stroke("black");
  textSize(20);
  fill("black");
  Survival_Time = Math.ceil(frameCount/frameRate())
  text("Survival Time = "+Survival_Time,100,50);
  
  
 
  
  monkey.collide(inv);
  banana();
  rocks();
  drawSprites();
}

function rocks() {
  
  if(frameCount % 100===0){
     rock = createSprite(400,350,100,100)
    rock.addImage(obstacleImage);
    rock.velocityX=-6
    rock.scale=0.15
     }  
  
 
//  rock.lifetime = 400
}

function banana() {
  
  if(frameCount % 80===0){
     bananas=createSprite(350,350,10,10)
    bananas.addImage(bananaImage)
     bananas.y = Math.round(random(80,120));
  bananas.velocityX=-5
    bananas.scale=0.1
     }
 
  //bananas.lifetime=400                 
  
  
}



