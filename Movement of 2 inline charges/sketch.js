var strength = [];
var weight = [];
var force = [];
var accel = [];
var vel = [];
var dis = [];

var dot1 = new p5.Vector;	
var dot2 = new p5.Vector;

var disance1;
var disance2;
var k = 0.01;//9*10^9;

function setup() {
  frameRate(60);
  textSize(15);
  fill(255,255,255);
  stroke(0);
  colorMode(HSB);
  createCanvas(500, 400); 
  strokeWeight(2);
  disance1 = 200;
  disacne2 = 200;  
  strength[1]=10;
  strength[2]=100;
  weight[1]=10;
  weight[2]=100;
  
for(var j = 1; j<3; j++) {
  force[j]=0;
  accel[j]=0;
  vel[j]=0;
  dis[j]=0;
}
 
  }


function draw() {
  stroke(0, 0, 0);
  background(100, 100, 100);
  
  
  dot1.set(width/2 - disance1/2 - dis[1], height/2);
  dot2.set(width/2 + disance1/2 + dis[2], height/2);
 
  
  ellipse(dot1.x, dot1.y, abs(strength[1]), abs(strength[1]));
  ellipse(dot2.x, dot2.y, abs(strength[2]), abs(strength[2]));
  
  for( var h=1; h<3; h++){
	force[h]=k*strength[1]*strength[2]/(disance2^2);
	accel[h]=force[h]/abs(weight[h]);
	vel[h] += accel[h];
	dis[h] += vel[h];
	disance2 += dis[h];
	}
  }