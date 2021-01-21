
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;


function setup(){

    
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 200, 800, 20)
    ball1 = new Ball(300, 750, 50)
    ball2 = new Ball(400, 750, 50)
    ball3 = new Ball(500, 750, 50)
    ball4 = new Ball(600, 750, 50)
    ball5 = new Ball(700, 750, 50)

    slingshot = new Slingshot(ball1.body,{x:300,y:200},500, 0.01);
    slingshot1 = new Slingshot(ball2.body,{x:400,y:200},500,0.01);
    slingshot2 = new Slingshot(ball3.body,{x:500,y:200},500,0.01);
    slingshot3 = new Slingshot(ball4.body,{x:600,y:200},500,0.01);
    slingshot4 = new Slingshot(ball5.body,{x:700,y:200},500,0.01);

}
function draw(){
    Engine.update(engine);
    background(22)
    ground.display()
    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
    ball5.display()

    slingshot.display()
    slingshot1.display()
    slingshot2.display()
    slingshot3.display()
    slingshot4.display()

}
function mouseDragged(){
   
    Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY})
    
}
