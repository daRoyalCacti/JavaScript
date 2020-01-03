let x1;
let y1;
let angle1;
let speed1;
let accel1;
let initpos1=-1.5;
let resistance1;
let x2;
let y2;
let force1;

let angle2;
let speed2;
let accel2;
let force2;

let gravity = 0.01;

function setup() {
createCanvas(800,800);
angle1=0;
accel1=0;//-0.2;
speed1=initpos1;
strokeWeight(5);
frameRate(60);
angle2=0;
speed2=0;
accel2=0;
force2=0;
}
  
  


function draw() {
background(255);

resistance1 = Math.cos(angle1)/(400*abs(Math.cos(angle1))); 
force1 = gravity*Math.cos(angle1); //+ Math.sin(angle2);
 accel1 -= force1;
speed1 += accel1;
//speed1 -= resistance1;
angle1 = speed1/2;

//resistance2 = Math.cos(angle2)/(400*abs(Math.cos(angle2))); 
//force2 = Math.cos(angle2)/100 + Math.sin(angle2);
//accel2 -= force2;
//speed2 += accel2;
//speed2 -= resistance2;
//angle2 = speed2/2;


//angle2+=0.001;




x1=width/2 - 100*Math.cos(angle1);
y1 = height/3 - 100*Math.sin(angle1);
line(width/2, height/3, x1, y1);

//x2=width/2 - 100*Math.cos(angle2);
//y2=height/2 - 100*Math.sin(angle2);


//line(x1,y1,x2,y2);

}