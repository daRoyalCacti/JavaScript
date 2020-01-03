var px = [];
var py = [];
var bslider;
var rslider;
var rad = [];
var bee = [];
var test = [];

let i = 0;
let speed = 0.1;
let size;
let theta = 0;
let j = 0;
let maxradius = 50;

function setup() {
  frameRate(10);
  textSize(15);
  noFill();
  stroke(0);
  colorMode(HSB);
  createP("Speed of rotation");
  bslider=createSlider(0.1,1,0.2, 0.1);
  createP("Radius");
  rslider=createSlider(10, maxradius, 30, 1);
  createP(" ");



}


function draw() {
  var b = bslider.value();
  var radius = rslider.value();
  size = 15* radius;

  createCanvas(15*maxradius + maxradius, 400); 

  background(0, 0, 255);
  stroke(0, 100, 0);
  strokeWeight(2);
  translate(1.5*radius, height/2);

  
  x = radius *Math.cos(-b*theta);
  y = radius *Math.sin(-b*theta);

  px[i] = 1.5*radius;
  py[i] = radius *Math.tan(-b*theta);

  line(0, 0, x, y);
  theta+= speed;
test[i] = theta%(2*PI);


  i++;

  rad[i] = radius;
  bee[i] = b;

  if(i<=size){
   for(var k = 2; k <i; k++){
	if(test[k]>((PI/2)+0.4)){ //|| test[k]>(3*PI/2)-1 || test[k]<(PI/2)+1 || test[k]<(3*PI/2)+1){
     line(px[k-1], py[k-1], px[k], py[k]);
     }
	px[k-1] += 10*speed * radius/50;
   }
    
  } else {
      for(var k = i-size; k<i; k++){
        line(px[k-1], py[k-1], px[k], py[k]);
        px[k-1] += 10*speed* radius/50;
     }
  }  

  if(radius!=rad[i-1] || bee[i-1]!=b){
    for(var k = i-size; k<i; k++){
      px[k]=1.5*radius;
      py[k]=0;
      theta=0;
    }
  }



  stroke(0, 100, 255);
  strokeWeight(1);
  
  line(1.5*radius, radius *Math.tan(-b*theta), radius,radius *Math.tan(-b*theta));
  strokeWeight(1.5);
  stroke(80, 100, 255);
  line(x,y,radius, radius *Math.tan(-b*theta));
  line(radius, 0, radius, radius *Math.tan(-b*theta));

  stroke(0, 10, 40);
  ellipse(0,0, 2*radius, 2*radius);


}