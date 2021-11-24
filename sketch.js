var background,backgroundImg
var girl,girl_running
var coinsGroup,coinImg

function preload(){
  backgroundImg=loadImage("background.png")
girl_running=loadAnimation("girl1.png","girl2.png");

coinImg=loadImage("coin.png")
}


function setup() {
  createCanvas(400,400);
  background=createSprite(350,200,20,20)
background.scale=2
background.addImage("scenery",backgroundImg)
background.velocityX=-3
girl=createSprite(50,350,20,20)
girl.addAnimation("girl running",girl_running)
girl.scale=1.5

coinsGroup=new Group();
 



}

function draw() {
  
  if(background.x < 0){
    background.x=background.width/2
  }
  girl.y=World.mouseY;
  spawnCoins()
  if(coinsGroup.isTouching(girl)){
    coinsGroup.destroyEach();
  }
  drawSprites();
  
}

function spawnCoins(){
  if(frameCount % 100 === 0){
   var coin = createSprite(400,165,10,40);
    coin.y = Math.round(random(80,320));
      coin.addImage(coinImg);
      coin.velocityX=-3;
      coin.scale=0.05;
      coin.lifetime=200;
    coinsGroup.add(coin);

}
}