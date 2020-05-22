var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bolck1, block2, block3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = "black";

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	block1 = Bodies.rectangle(width/2, height-25, 300, 30, {isStatic:true});
	World.add(world,block1);
	block2 = Bodies.rectangle(250, height-85, 30, 150, {isStatic:true});
	World.add(world,block2);
	block3 = Bodies.rectangle(550,height-85,30,150, {isStatic:true});
	World.add(world,block3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  fill("red");
  rect(block1.position.x, block1.position.y, 300,30);
  rect(block2.position.x, block2.position.y, 30,150);
  rect(block3.position.x, block3.position.y, 30,150);

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



