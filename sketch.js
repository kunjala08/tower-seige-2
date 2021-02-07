const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var polygon,polygonImage;
var sling;
var block14;
var block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block23,block24,block25;
var ground
function preload(){

 polygonImage= loadImage("polygon.png");

}
function setup(){

  var canvas = createCanvas(900,500);

  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(100,190,20)
  

  ground1 = new Ground(580,305,170,20);
  ground = new Ground(450,470,890,20)
  block14 = new Box(520,267)
  block15 = new Box(550,267)
  block16 = new Box(580,267)
  block17 = new Box(610,267)
  block18 = new Box(640,267)

  block19 = new Box(540,213)
  block20 = new Box(580,213)
  block21 = new Box(620,213)

  block22 = new Box(560,160)
  block23 = new Box(600,160)

  block24 = new Box(579,105)
   
  sling = new Slingshot(polygon,{x:100,y:176} );
  World.add(world,polygon)
}
function draw () {
    background(rgb(24,67,25));
    Engine.update(engine); 
    imageMode(CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,40,40)
    
    ground1.display();
    ground.display();
   
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
    
    sling.display();
   
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling.fly();
}
