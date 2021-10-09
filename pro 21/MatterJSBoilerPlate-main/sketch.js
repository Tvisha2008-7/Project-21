
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ground1, ball, leftSide,rightSide
var radius=40
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options= {
		isStatic: false,
		restitution:0.1,
		density: 1.20
	 }
	ball=Bodies.circle(200,400,40,ball_options)
	World.add(world,ball)

	//Create the Bodies Here.
 Ground1= new Ground(400,600,1500,20)
 leftSide= new Ground(600,530,20,150)
 rightSide=new Ground(800,530,20,150)
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   Ground1.display()
   leftSide.display()
   rightSide.display()
   ellipse(ball.position.x,ball.position.y,radius,radius)

 

  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball,ball.position,{x:250,y:-250})
	}
}



