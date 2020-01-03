
var avsde = 0;
var badsbs = 0;

var tv;
//var tb;



var precision=3;
var gads = 0;

function setup() {
  
  //frameRate(60);
  createCanvas(800,800);
  fill(100);

tv = new threevecta(width,height, width);
//tb = new threevecta(width,height);

// for (var z = -round(width/2); z<=round(width/2); z+=accuracy3){
//   for (var y = -round(height/2); y<=round(height/2); y+=accuracy3){
//     for(var x = -round(width/2); x<=round(width/2); x+=accuracy3){
  /*
  for (var z = -100; z<=100; z+=20){
    for (var y = -100; y<=100; y+=20){
      for(var x = -100; x<=100; x+=20){
      tv.generatevalues3d(x,y,z,50*sin(x)*sin(y)*cos(z), 50*sin(y)*cos(x)*sin(z), 50*cos(z)*sin(x)*cos(y));
    }
  }
}
//*/

}


function draw() {
 gads+=0.001;
 avsde+=0.01;
 badsbs+=0.001;

 background(0);

 translate(width/2,height/2);

 stroke(255);
 strokeWeight(2);

 noFill();
 //fill(50);

/*
var nbla = 160;
for (var k=0; k<=nbla;k++){
  stroke(255,0,0);
  point(k*2, -3000*bindis((gads+0.8)%1, nbla, k));
  stroke(0,255,0);
  point(k*2, -3000*bindis((gads+0.5)%1,nbla,k));
  stroke(0,0,255);
  point(k*2, -3000*bindis((gads+0.2)%1,nbla,k))
}
stroke(255);
line(160*((gads+0.8)%1)*2, -height/2, 160*((gads+0.8)%1)*2, height/2);

//*/

/*
for (var k = 0; k<=20; k++){
  stroke(255,0,0);
  point(k*10, -1500*bindis(0.5, 20, k));
}
for (var k = 0; k<=40; k++){
  stroke(0,255,0);
  point(k*10, -1500*bindis(0.5, 40, k));
}
for (var k = 0; k<=80; k++){
  stroke(0,0,255);
  point(k*10, -1500*bindis(0.5, 60, k));
}
//*/

/*
for (var k = 0; k<=20; k++){
  stroke(255,0,0);
  point(k*20, -1500*bindis(0.5, 20, k));
}
for (var k = 0; k<=40; k++){
  stroke(0,255,0);
  point(k*10, -1500*bindis(0.5, 40, k));
}
for (var k = 0; k<=80; k++){
  stroke(0,0,255);
  point(k*5, -1500*bindis(0.5, 80, k));
}
//*/

/*
  if (frameCount<260){
    this.ahgblskjad = frameCount/300;
  } 
//for (var x=round(-width/2); x<=round(width/2); x+=accuracy2){
  for (var x=round(-width/2); x<=123.6; x+=17.8){
  for (var y = -round(height/2); y<=206.9; y+=19.6){

    tv.generatevalues2d(x,y,50*sin(this.ahgblskjad*0.0001*(pow(x,2)+pow(y,2))));
    //tv.generatevalues2d(x,y,50*sin(5*x+pow(5*y,2)));
  }
}

 //*/

 /*
var r=50;
var r2 = 300;
var ac = 100;
var theta = 1;

//*
 for (var x=round(-width/2); x<=round(width/2); x+=accuracy2){
  for (var y = -round(height/2); y<=round(height/2); y+=accuracy2){
 //tv.generatevalues2de(x,y,r*sin(x/100)*sin(y/(255)),r*sin(x/100)*cos(y/(255)),r*cos(x/100));
     //tv.generatevalues2de(x,y,r*sin(x/100),y,r*cos(x/100));
    //tv.generatevalues2de(x,y,r2*sin(y/ac), r*sin(x/ac), r*cos(x/ac)+r2*cos(y/ac));
    //tv.generatevalues2de(x,y, r*cos(x/ac)*sin(y/ac), r2*sin(y/ac)+r*sin(y/ac), r*sin(x/ac)+r2*cos(y/ac));
    // tv.generatevalues2de(x,y, r2*cos(x/ac), r2*sin(x/ac)*sin(theta), r2*sin(x/ac)*cos(theta));

    tv.generatevalues2de(x,y, r*cos(x/ac), r*sin(x/ac)*sin(y/ac)+r2*sin(y/ac), r*sin(x/ac)*cos(y/ac)+r2*cos(y/ac));
    //tb.generatevalues2de(x,y,  r*sin(x/ac)*sin(y/ac)+r2*sin(y/ac),r*cos(x/ac), r*sin(x/ac)*cos(y/ac)+r2*cos(y/ac));
  }
}
//*/


tv.rotatevert(PI/2+badsbs);
tv.rotateij(PI/2+avsde);

 // tb.rotatevert(PI/2+badsbs);
 // tb.rotateij(PI/2+avsde);
/*
for (var t=0; t<=31.6; t+=0.013){
	tv.generatevalues1d(t,100*sin(t), 100*cos(t), 10*t);
	//tv.generatevalues1d(t,100*sin(t/100), 100*cos(t/100), 100*sin(t/900));
}
//*/
//*

//*/

//tv.Axes(); 
stroke(255);
 strokeWeight(2);
 tv.sphere(300,2,3,1);
 //tv.draw3d3();
 //tv.draw3d1();
 //tv.draw3d2();
 
 //tv.draw3d2e();
 // tb.draw3d2e();
 //tv.torus(70,200);

 //tv.sphere(200);
//*/
//console.log(factorial(70));
//console.log(bincoe(6,0));
//console.log(bindis(0.2, 15, 3));
//noLoop();
}