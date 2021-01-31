const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball; 


function setup() {
  createCanvas(400,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var groundOptions = {
    isStatic: true
  }

  var balloptions = {
restitution: 1.5

  }

  ground = Bodies.rectangle(200,381,350,20,groundOptions);
 ball = Bodies.circle(200,50,15,balloptions);

  World.add(myWorld,ground) ;
  World.add(myWorld,ball);
}

function draw() {
  background(0);
  Engine.update(myEngine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,350,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);
}
