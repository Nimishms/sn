const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg
var snowflake
function preload() {
  
  backgroundImg = loadImage("snow2.jpg");
}
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  snowflake = new Snowflakes(random(1,1100),random(1,300),50,50)
}

function draw() {
  background(backgroundImg);  
snowflake.display();
  
}