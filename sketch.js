
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var boy, boyImg;
var tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2, 600, width, 20);

	tree = new Tree(600, 600, 400, 500);

	boy  = createSprite(170, 510);
	boy.addImage(boyImg);
	boy.scale = 0.13;

	mango1 = new Mango(600, 550, 30, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(15, 255, 60, 1);
  Engine.update(engine);

  ground.display();
  
  tree.display();

  mango1.display();

  drawSprites();
 
}



