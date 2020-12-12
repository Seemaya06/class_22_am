const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object1;
var ground;



function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var object1_options = {
    restitution: 5.0
  }


  object1 = Bodies.rectangle(100,100,50,50,object1_options);
  World.add(world,object1);


  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options)
  World.add(world,ground);
  
  
  
  
  //console.log(object1)
  // console.log(object1.position.x);
  // console.log(object1.position.y);



}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER)
  rect(object1.position.x,object1.position.y, 50,50)
  rect(ground.position.x,ground.position.y,400,20)

}