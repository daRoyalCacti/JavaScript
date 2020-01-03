var px = [];
var py = [];
var bslider;
var rslider;
var rad = [];
var bee = [];

let i = 0;
let speed = 0.1;
let size;
let theta = 0;
let j = 0;
let maxradius = 200;
let maxsize;

function setup() {
  background(0, 0, 255);
  stroke(0, 100, 0);
  strokeWeight(2);
  frameRate(60);
  textSize(15);
  noFill();
  stroke(0);
  colorMode(HSB);
  createP("Speed of rotation");
  bslider=createSlider(0.1,5,1, 0.1);
  createP("Radius");
  rslider=createSlider(10, maxradius, 30, 1);
  createP("test");



}


function draw() {
  var b = bslider.value();
  var radius = rslider.value();
  size = 15* radius;
  maxsize = 15* maxradius
  createCanvas(2.2*maxradius, maxsize + maxradius); 
  translate(1.5*radius, 1.1*radius);

  
  x = radius *Math.cos(-b*theta);
  y = radius *Math.sin(-b*theta);

  px[i] = x;
  py[i] = 1.5*radius;

  line(0, 0, x, y);
  theta+= speed;

  i++;

  rad[i] = radius;
  bee[i] = b;


  if(i<=size){
   for(var k = 2; k <i; k++){
     line(px[k-1], py[k-1], px[k], py[k]);
     py[k-1] += 10*speed * radius/50;
   }
    
  } else {
      for(var k = i-size; k<i; k++){
        line(px[k-1], py[k-1], px[k], py[k]);
        py[k-1] += 10*speed* radius/50;
     }
  }  

  if(radius!=rad[i-1] || bee[i-1]!=b){
    for(var k = i-size; k<i; k++){
      py[k]=1.5*radius;
      px[k]=0;
      theta=0;
    }
  }



  stroke(0, 100, 255);
  strokeWeight(1);
  line(x, 1.5*radius, x,y);
  stroke(0, 10, 40);
  ellipse(0,0, 2*radius, 2*radius);
}