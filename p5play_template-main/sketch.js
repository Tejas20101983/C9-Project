
var box;
function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,50,50);
  box.shapeColor = "blue"
}

function draw() 
{
  background(30);

  if (keyIsDown(LEFT_ARROW)){ 
    box.x -= 4
    background ("red")
  }
  if (keyIsDown(RIGHT_ARROW)){
    box.x += 4
    background("yellow")
  }
  if (keyIsDown(DOWN_ARROW)){
    box.y += 4
    background("grey")
  }
  if (keyIsDown(UP_ARROW)){
    box.y -= 4
    background("aqua")
  }
  drawSprites();
  
}