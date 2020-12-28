
var astronaut
var alien

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  alien = createSprite(200,200,50,50);
}


function draw() {
  background(255,255,255);  
  drawSprites();
}