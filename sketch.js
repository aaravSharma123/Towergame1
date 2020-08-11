const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var ball,slingshot,ground,ground1,ground2;

var block1,block2,block3,block4,block5,block6,block7,
block8,block9,block10,block11,block12,block13,block14,block15,block16,
block17,block18,block19,block20,block21,block22,block23;

var engine,world;

function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world = engine.world; 
  block1 = new Block(330,500,30,40);
  block2 = new Block(360,500,30,40);
  block3 = new Block(390,500,30,40);
  block4 = new Block(420,500,30,40);
  block5 = new Block(450,500,30,40);
  block6 = new Block(480,500,30,40);
  block7 = new Block(510,500,30,40);
  block8 = new Block(360,460,30,40);
  block9 = new Block(390,460,30,40);
  block10 = new Block(420,460,30,40);
  block11 = new Block(450,460,30,40);
  block12 = new Block(480,460,30,40);
  block13 = new Block(390,420,30,40);
  block14 = new Block(420,420,30,40);
  block15 = new Block(450,420,30,40);
  block16 = new Block(420,380,30,40);

  block17 = new Block(750,200,30,40);
  block18 = new Block(780,200,30,40);
  block19 = new Block(810,200,30,40);
  block20 = new Block(840,200,30,40);
  block21 = new Block(870,200,30,40);
  block22 = new Block(780,160,30,40);
  block23 = new Block(810,160,30,40);
  block24 = new Block(840,160,30,40);
  block25 = new Block(810,120,30,40);

  ground1 = new Ground(420,520,270,10)
  ground2 = new Ground(810,220,200,10)


  ball = new Ball(100,200,50);
	slingshot = new SlingShot(ball.body,{x:100,y:150});

  
}

function draw() {
  background("grey");  
 Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  
  ground1.display();
  ground2.display();

  ball.display();
  slingshot.display();
 
 
 
  drawSprites();
}


function mouseDragged(){
   
	Events.on(engine, 'afterUpdate', function() { 
		Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY}); });
	}
	
	function mouseReleased() {
		engine.events = {};
		slingshot.fly();
	}