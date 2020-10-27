const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// adding variables
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 650);

	engine = Engine.create();
	world = engine.world;

	// creating the ball
	ball = new Paper(100,300);

	//creating the ground
	ground = new Ground(800,620,1600,20);

	boxPosition = width/2 + 50;
	boxY = height-50;

	// creating the box 
	left = createSprite(1250, 560, 20,100); 
    right = createSprite(1050, 560, 20, 100);
    base = createSprite(1150, 600,200,20);

	leftBody = Bodies.rectangle(boxPosition, boxY, 20,100,{isStatic:true});
	rightBody = Bodies.rectangle(boxPosition+200, boxY, 20,100,{isStatic:true});
	baseBody = Bodies.rectangle(boxPosition+100, boxY+45, 200,20,{isStatic:true});

	
	Engine.run(engine);
  
}


function draw() {
	
	rectMode(CENTER);
	background(0);

	// calling the function
	keyPressed();

    //display function
	ball.display();
	ground.display();
	
	
	// display the sprites
    drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:130, y:-140});
	}
}

