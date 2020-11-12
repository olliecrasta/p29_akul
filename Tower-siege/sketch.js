const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world, stone, ground, box1 = [], box2 = [], box3 = [], box4;
gameState = "play"
function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  ground0 = new Ground(400, 390, 800, 20);
  ground1 = new Ground(400, 250, 200, 10);
  stone = new Stone(100, 240, 20, 20);
  slingshot = new Slingshot(stone.body, { x: 100, y: 240 })



  for (i = 0; i < 7; i++) {
    box1[i] = new Box(325 + i * 25, 230, 25, 30);
  }
  for (i = 0; i < 5; i++) {
    box2[i] = new Box(347 + i * 25, 198, 25, 30)
  }

  for (i = 0; i < 3; i++) {
    box3[i] = new Box(369 + i * 25, 175, 25, 30)
  }

  box4 = new Box(400, 163, 25, 30);
  //box1 = new Box(100,10,10,10);
  Engine.run(engine);



}

function draw() {
  background(129, 230, 230);


  ground0.display();
  ground1.display();

  for (i = 0; i < 7; i++) {
    if (box1[i].visibility > 0) {
      box1[i].display();
    }
  }
  for (i = 0; i < 5; i++) {
    if (box2[i].visibility > 0) {
      box2[i].display();
    }
  }
  for (i = 0; i < 3; i++) {
    if (box3[i].visibility > 0) {
      box3[i].display();
    }
  }
  if (box4.visibility > 0) {
    box4.display();
  }
  //stone.color="red";
  stone.display();



  textSize(20);
  text("Press space to try again", 100, 30);



  //box1.display();
  text(mouseX + "," + mouseY, mouseX, mouseY)

}

function mouseDragged() {
  Body.setPosition(stone.body, { x: mouseX, y: mouseY });

}

function mouseReleased() {
  slingshot.fly();
  // gameState = "reset";

}

function keyPressed() {
  if (keyCode === 32) {
    console.log("hi")
    Body.setPosition(stone.body, { x: 100, y: 240 })
    slingshot.attach();
  }
}

