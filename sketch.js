
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new Roof(width/2,height/4,width/7,20);
	bobDiameter=40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roofObject.display();
  bobObject3.display();
  rope3.display()
  drawSprites();
 
}



