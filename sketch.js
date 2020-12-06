var playePaddle,computerPaddle,ball,edges
function setup(){
  createCanvas(400,400);
  playerPaddle=createSprite(380,185,15,100)
computerPaddle=createSprite(10,190,15,100)
  ball=createSprite(200,200,15,15)
  edges=createEdgeSprites()
  
  
}
function draw(){
  background("white");
  playerPaddle.y=mouseY
  if(keyWentDown("space")){
    ball.velocityY=5
    ball.velocityX=3
    
  }
     computerPaddle.y=ball.y
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  if(ball.isTouching(edges[0])||ball.isTouching(edges[1])){
  ball.x=200
  ball.y=200
    ball.velocityX=0
    ball.velocityY=0}
                                 
     
  drawSprites();
}
  