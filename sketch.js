const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var particle;

function setup() {
  createCanvas(980,800);

  engine = Engine.create();
  world = engine.world;

  bumpera1 = new Bumper(96,250,0);
  bumpera2 = new Bumper(192,250,1);
  bumpera3 = new Bumper(288,250,1);
  bumpera4 = new Bumper(384,250,0);
  
  bumperb1 = new Bumper(55,350,0);
  bumperb2 = new Bumper(144,350,1);
  bumperb3 = new Bumper(240,350,0);
  bumperb4 = new Bumper(336,350,1);
  bumperb5 = new Bumper(425,350,0);
  
  bumperc1 = new Bumper(96,450,0);
  bumperc2 = new Bumper(192,450,1);
  bumperc3 = new Bumper(288,450,1);
  bumperc4 = new Bumper(384,450,0);

  bumperd1 = new Bumper(55,550,0);
  bumperd2 = new Bumper(144,550,1);
  bumperd3 = new Bumper(240,550,0);
  bumperd4 = new Bumper(336,550,1);
  bumperd5 = new Bumper(425,550,0);
  
  leftWall = new Wall(5,400,10,800);
  rightWall = new Wall(475,400,10,800);
  topWall = new Wall(240,5,480,10);
  bottomWall = new Wall(240,795,480,10);
  
  division1 = new Wall(96,725,10,150);
  division2 = new Wall(192,725,10,150);
  division3 = new Wall(288,725,10,150);
  division4 = new Wall(384,725,10,150);

  particle = new Particle(Math.round(random(30,450)),50,10);
  particle1 = new Particle(Math.round(random(30,450)),50,10);
  particle2 = new Particle(Math.round(random(30,450)),50,10);
  particle3 = new Particle(Math.round(random(30,450)),50,10);
  particle4 = new Particle(Math.round(random(30,450)),50,10);
  particle5 = new Particle(Math.round(random(30,450)),50,10);
  particle6 = new Particle(Math.round(random(30,450)),50,10);
  particle7 = new Particle(Math.round(random(30,450)),50,10);
  particle8 = new Particle(Math.round(random(30,450)),50,10);
  particle9 = new Particle(Math.round(random(30,450)),50,10);
  particle0 = new Particle(Math.round(random(30,450)),50,10);
}


function draw() {
  background(255);  
  translate(480,0);
  fill(0);
  rect(0,0,480,800);
  
  Engine.update(engine);

  if(frameCount % 300 == 0){
    particle = new Particle(Math.round(random(30,450)),50,10);
    particle1 = new Particle(Math.round(random(30,450)),50,10);
    particle2 = new Particle(Math.round(random(30,450)),50,10);
    particle3 = new Particle(Math.round(random(30,450)),50,10);
    particle4 = new Particle(Math.round(random(30,450)),50,10);
    particle5 = new Particle(Math.round(random(30,450)),50,10);
    particle6 = new Particle(Math.round(random(30,450)),50,10);
    particle7 = new Particle(Math.round(random(30,450)),50,10);
    particle8 = new Particle(Math.round(random(30,450)),50,10);
    particle9 = new Particle(Math.round(random(30,450)),50,10);
    particle0 = new Particle(Math.round(random(30,450)),50,10);
  }

  if(particle){
    particle.display();
    particle1.display();
    particle2.display();
    particle3.display();
    particle4.display();
    particle5.display();
    particle6.display();
    particle7.display();
    particle8.display();
    particle9.display();
    particle0.display();
  }
  
  bumpera1.display();
  bumpera2.display();
  bumpera3.display();
  bumpera4.display();
  
  bumperb1.display();
  bumperb2.display();
  bumperb3.display();
  bumperb4.display();
  bumperb5 .display();
  
  bumperc1.display();
  bumperc2.display();
  bumperc3.display();
  bumperc4.display();
  
  bumperd1.display();
  bumperd2.display();
  bumperd3.display();
  bumperd4.display();
  bumperd5 .display();
  
  leftWall.display();
  rightWall.display();
  topWall.display();
  bottomWall.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();

}