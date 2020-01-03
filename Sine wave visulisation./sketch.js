var px = [];
var py = [];

let i = 0;
let speed = 0.1;
let size = 300;
let radius = 30;
let theta = 0;

function setup() {
  stroke(0);
  createCanvas(1000, 300); 
}


function draw() {
  background(175);
  stroke(0);
  strokeWeight(2);
  translate(100, 100);
  
  x = radius *Math.cos(theta);
  y = radius *Math.sin(theta);

  px[i] = 1.5*radius;
  py[i] = y;

  line(0, 0, x, y);
  theta-= speed;

  
  i++;


  if(i<=size){
   for(var k = 2; k <i; k++){
     line(px[k-1], py[k-1], px[k], py[k]);
     px[k-1] += 10*speed;
   }
    
  } else {
      for(var k = i-size; k<i; k++){
        line(px[k-1], py[k-1], px[k], py[k]);
        px[k-1] += 10*speed;
     }
  }  
}