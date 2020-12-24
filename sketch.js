const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(200,10,50,40);
    box2 = new box(215,50,60,70);
   box3 = new box(217,30,70,10);
   box4 = new box(190,5,110,120);
    ground = new Ground();
}

function draw(){
    background("green");
    Engine.update(engine);
   fill("white");
    box1.display();
   ground.display();
   fill ("brown");
   box2.display();
   fill ("orange");
   box3.display();
   fill ("yellow");
   box4.display();
}