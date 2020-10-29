/*var fixedRect, movingRect
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(800, 400,80,30);
  fixedRect.shapeColor = "purple"
  movingRect.shapeColor = "purple"

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "purple";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "purple";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "purple";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "purple";

}

function draw() {
background(0); 
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(isTouching(movingRect,gameObject1)){
 gameObject1.shapeColor = "lightblue"
  movingRect.shapeColor = "pink"

}
else
{
  gameObject1.shapeColor = "purple"
  movingRect.shapeColor = "purple"

}

drawSprites();
}

*/

var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounce(movingRect,fixedRect);
  drawSprites();
}

