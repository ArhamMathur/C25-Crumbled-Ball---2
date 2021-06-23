const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup()
 {
	createCanvas(1350, 650);
 engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

  ball = new Paper(60,520,15);
  dustbin1 = new Dustbin(1000,470,250,100);
 // dustbin2 = new Dustbin(870,470,20,163);
 // dustbin3 = new Dustbin(1130,470,20,163);
  ground1 = new Ground(400,600,1900,15);
  ground2 = new Ground(400,50,1900,15);
  ground3 = new Ground(50,400,15,1900);
  ground4 = new Ground(1300,400,15,1900);
  
  }

function draw()
 {
  rectMode(CENTER);
  background(180);
  
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  ball.display();
 }

function keyPressed()
{
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-45});
  }
  
}




