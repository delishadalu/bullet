var bullet, wall,thickness
var speed=0;
var weight=0;
var def=0
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 100, 50);
  wall=createSprite(1200, 200, thickness, height/2);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet.velocityX=speed;

}

function draw()
 {
  background("black");  

  if(collision(wall,bullet))
  {
    wall.shapeColor="green";

  }
  else{
    wall.shapeColor="red";
  }
  
  console.log(def)
  drawSprites();

}
