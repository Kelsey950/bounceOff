  
  
  
  function setup() { createCanvas(1200,800); 
    fixedRect=createSprite(200,200,50,80); 
    fixedRect.shapeColor="green"; 
    movingRect=createSprite(400,200,80,30); 
    movingRect.shapeColor="green"; 
    movingRect.velocityY = -5; 
    fixedRect.velocityY = +5;

  }

var fixedRect, movingRect
function draw() {
  background(255,255,255);  
  bounceOff(movingRect,fixedRect);



 /* movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY;

  if (isTouching())
  { 
    movingRect.shapeColor="red"; fixedRect.shapeColor="red"; 
  } 
  else{ 
    movingRect.shapeColor="green"; fixedRect.shapeColor="green"; 
  } */

  drawSprites();
  
}

function bounceOff(object1,object2)
{ if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2) 
  { object1.velocityX = object1.velocityX * (-1); 
    
    object2.velocityX = object2.velocityX * (-1); 
  
  } 
  
  if (object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object2.y < object2.height/2 + object1.height/2) 
  
  { object1.velocityY = object1.velocityY * (-1); 

    object2.velocityY = object2.velocityY * (-1); } 
  }

/*function isTouching() {
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
  {
    return true;
  
  }

else{
  return false;

  }

}*/