const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,iron,plane,stone,bouncyBall,rubber,canvas;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    iron = new Iron(300,500);
    stone = new Stone(1000,400);
    bouncyBall = new BouncyBall(900,450,70);
    rubber = new Rubber(600,500,55);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    bouncyBall.display();
    rubber.display();
    
 
}