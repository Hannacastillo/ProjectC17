
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
//var FoodGroup, obstacleGroup
var survivalTime=0;

var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,355)
  
 monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground=createSprite(400,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
  obstaclesGroup = createGroup();
  bananasGroup=createGroup();
  
  
  
  invisibleGround = createSprite(400,350,1200,5);
  invisibleGround.visible = false;
  
}


function draw() {

   background("turquoise");
  
  if(ground.x<0){
    ground.x=300
  }
  
  
  stroke("gold");
  textSize(20);
  fill("gold")
  text("Score: "+score,500,50 );
  
  stroke("coral");
  textSize(20);
  fill("coral");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,30,50)
  
  
    spawnObstacles();
  spawnBananas();
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
    
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);
  
 if  (monkey.isTouching(bananasGroup)){
   score=score+1
   bananasGroup.destroyEach()
 }
  
  if (monkey.isTouching(obstaclesGroup)){
    obstaclesGroup.setVelocityXEach(0)
    bananasGroup.setVelocityXEach(0)
    monkey.velocityY=0
    obstaclesGroup.setLifetimeEach(-1)
  }
  
  
  drawSprites();
}
  

  





function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(700,310,10,40);
   obstacle.velocityX = -6
obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   obstacle.addImage(obstaceImage)
   
   
    obstaclesGroup.add(obstacle);
 }
}
  
  
  function spawnBananas(){
 if (frameCount % 80 === 0){
   var banana = createSprite(700,180,10,40);
   banana.velocityX = -7
   banana.scale=0.2
   banana.lifetime = 300;
   
   banana.addImage( bananaImage)
   
   
    bananasGroup.add(banana);
 }
  
  
  
  
}



  
  
  



