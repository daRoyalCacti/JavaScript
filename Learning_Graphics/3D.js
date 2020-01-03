var accuracy2 = 40; //10
var accuracy3 = 100;


class threevecta{
	constructor(x,y,z){
		this.xdil = width/x;
		this.ydil = height/y;
		this.zdil = width/z;

		this.temp;
		
		this.values = [];
		this.values2 = [];

		/*
		for (var x=round(-width/2); x<=round(width/2); x+=accuracy2){
			this.values[x.toPrecision(precision)] = [];
			
		}
		for (var x=round(-width/2); x<=round(width/2); x+=accuracy3){
		this.values2[x.toPrecision(precision)] = [];
			for (var y=round(-height/2); y<=round(height/2); y+=accuracy3){
				this.values2[x.toPrecision(precision)][y.toPrecision(precision)] = [];
			}
		}
		//*/
		this.seconds4 = false;
		this.seconds3 = false;
		this.seconds2 = false;
		this.seconds = false;
		this.firsts = true;
		this.firsts2 = true;
		this.firsts3 = true;
		this.firsts4 = true;

		this.xfirst2 = false;
		this.yfirst2 = false;

		this.times = [];
		this.rotatesij = 0;
		this.rotatesvert = 0; //broke

		this.screenpos = new matrixs(this.temp);
		this.screenpos2 = new matrixs(this.temp);
		this.vectorm = new matrixs(this.temp);

	}



	unitvect(){
		this.unit = [
			[this.xdil*cos(this.rotatesij),this.ydil*sin(this.rotatesij),0],
			[this.xdil*-sin(this.rotatesij)*cos(this.rotatesvert),this.ydil*cos(this.rotatesij)*cos(this.rotatesvert),this.zdil*-sin(this.rotatesvert)],
			[this.xdil*sin(this.rotatesvert)*cos(this.rotatesij+PI/3+0.5),this.ydil*sin(this.rotatesvert)*sin(this.rotatesij+PI/3+0.5),this.zdil*cos(this.rotatesvert)]
		];
		this.units = new matrixs(this.unit)

	}

	rotatevert(theta){
		this.rotatesvert = theta;
	}

	rotateij(theta){
		this.rotatesij = theta;
	}


	Drawx(){

		this.unitvect();
			beginShape();
    		for (var m = round(-width/2); m<=round(width/2); m+=5){
        			stroke(255,100,100);
        			strokeWeight(3);


    			this.vector = [
    				[m],
    				[0],
    				[0]
    			];
		
				
    			this.vectorm.update(this.vector);
    			this.screenpos.update(this.units.multiply(this.vectorm));
				
				
				vertex(this.screenpos.element(0,0),this.screenpos.element(1,0));
				
    		}
 
    		endShape();
	}

	Drawy(){
	
		this.unitvect();
			beginShape()
			for (var m = round(-height/2); m<=round(height/2); m+=5){
		
        			stroke(100,100,255);
        			strokeWeight(3);

    			this.vector = [
    				[0],
    				[m],
    				[0]
    			];
    			this.vectorm.update(this.vector);
    			this.screenpos.update(this.units.multiply(this.vectorm));

				vertex(this.screenpos.element(0,0),this.screenpos.element(1,0));
				 
    		}    		
    		endShape();
	}

	Drawz(){
	
		this.unitvect();
			beginShape()
			for (var m = round(-height/2); m<=round(height/2); m+=5){
		
        			stroke(100,255,100);
        			strokeWeight(3);

    			this.vector = [
    				[0],
    				[0],
    				[m]
    			];
				
				
				
    			this.vectorm.update(this.vector);
    			this.screenpos.update(this.units.multiply(this.vectorm));
				
				
				vertex(this.screenpos.element(0,0),this.screenpos.element(1,0));
				
    		}   		
    		endShape();
	}



	Axes(){
		this.Drawx();  //red
		this.Drawy();  //blue
		this.Drawz(); //green
	}

	
sphere(r){
	this.r = r;
	for (var x=round(-width/2); x<=round(width/2); x+=accuracy2){
  		for (var y = -round(height/2); y<=round(height/2); y+=accuracy2){
    		this.generatevalues2de(x,y,this.r*sin(x/100)*sin(y/255),this.r*sin(x/100)*cos(y/255),this.r*cos(x/100));
  		}
	}
	this.draw3d2e();
}

torus(r1, r2){ //inputs can only have 1 significant figure
	this.acc1 = r1/2;
	this.acc2 = r2/100;
	for (var x=-6*r1; x<=6*r1; x+=this.acc1){
  		for (var y = -r2/2-r1/2; y<=r2/2+r1/2; y+=this.acc2){
			this.generatevalues2de(x,y, r1*cos(x/this.acc1), r1*sin(x/this.acc1)*sin(y/this.acc1)+r2*sin(y/this.acc1), r1*sin(x/this.acc1)*cos(y/this.acc1)+r2*cos(y/this.acc1));
  		}
  	}
  	this.draw3d2e();
}

	generatevalues2d(x,y,z){
		if (x-this.minx2>0 && this.firstx2){
			this.accx2 = (x-this.minx2);
			this.accx2.toPrecision(precision);
			this.firstx2 = false;
			//console.log("sg");
		}

		if (y-this.miny2>0 && this.firsty2){
			this.accy2 = (y-this.miny2);
			this.accy2.toPrecision(precision);
			this.firsty2 = false;
		}

		if (this.seconds2){
			if (x-this.minx2!=0){
				this.xfirst2 = true;
				this.yfirst2 = false;
			}

			if (y-this.miny2!=0){
				this.yfirst2 = true;
				this.xfirst2 = false;
			}
			this.seconds2 = false;
		}

		if (this.firsts2){
			this.minx2 = x;
			this.miny2 = y;
			this.firsty2 = true;
			this.firstx2 = true;
			this.firsts2 = false;
			this.seconds2 = true;
			this.firstx2a = true;
			this.firsty2a = true;
		}

		if (this.xfirst2 && this.firstx2a){
			this.values[x.toPrecision(precision)] = [];
			if (y-this.miny2>0){
				this.firstx2a = false;
			}
		}

		if (this.yfirst2 && this.firsty2a){
			this.values[y.toPrecision(precision)] = [];
			if (x-this.minx2>0){
				this.firsty2a= false;
			}
		}

		if (this.xfirst2){
			this.values[x.toPrecision(precision)][y.toPrecision(precision)] = z;
		}

		if (this.yfirst2){
			this.values[y.toPrecision(precision)][x.toPrecision(precision)] = z;
		}
		this.maxx2 = x;
		this.maxy2 = y;
	}
	
	
	generatevalues1d(time, x,y,z){
		if (this.seconds){
			this.acct = time - this.mintime;
			this.seconds = false;
		}

		if (this.firsts){
			this.mintime = time;
			this.firsts = false;
			this.seconds = true;
		}

		this.times[time] = [
			[x],
			[y],
			[z]
		]
		
		this.maxtime = time;
	}

	generatevalues2de(xi,yi, x,y,z){
		
		if (this.seconds4){
			if (xi - this.lastx != 0){
				this.xfirst = true;
			}
			if (yi - this.lasty !=0){
				this.yfirst = true;
			}

			this.seconds4 = false;
		}

		if (this.yfirst){
			if (xi - this.lastx != 0){
				this.continue = false;
				this.accx4 = xi - this.lastx;
			}

			if (yi - this.lasty !=0 && this.continue){
				this.values[yi.toPrecision(precision)] = [];
				this.accy4 = yi - this.lasty;
			}

					this.values[yi.toPrecision(precision)][xi.toPrecision(precision)] = [
																[x],
																[y],
																[z]
															]
		}

		if (this.xfirst){
			if (yi - this.lasty != 0){
				this.continue = false;
			}

			if (xi - this.lastx !=0 && this.continue){
				this.values[xi.toPrecision(precision)] = [];
			}

				this.values[xi.toPrecision(precision)][yi.toPrecision(precision)] = [
																[x],
																[y],
																[z]
															]

		}
		

		if (this.firsts4){
			this.minx4 = xi;
			this.miny4 = yi;
			this.firsts4 = false;
			this.seconds4 = true;
			this.continue = true;
			this.xfirst = false;
			this.yfirst = false;

			this.values[this.miny4] = [];
			this.values[this.miny4.toPrecision(precision)][this.minx4.toPrecision(precision)] = [
																[x],
																[y],
																[z]
															]
		}


		this.lastx = xi;
		this.lasty = yi;

		this.xmax4 = xi;
		this.ymax4 = yi;
	}

	generatevalues3d(xi, yi, zi, x,y,z){
		
		if (zi - this.lastz != 0){
			this.accz3 = zi - this.lastz;
		}
		
		if (yi - this.lasty != 0){
			this.accy3 = yi - this.lasty;
		}
		
		if (xi - this.lastx != 0){
			this.accx3 = xi - this.lastx;			
		}
		
		if (yi - this.lasty != 0){
			this.val = false;
		}
		
		if (zi - this.lastz != 0){
			this.val2 = false;
		}
		
		if (xi - this.lastx != 0 && yi - this.lasty==0 && this.val){
			this.values2[xi.toPrecision(precision)] = [];
		}

		if (xi-this.lastx !=0 && this.val2){
			this.values2[xi.toPrecision(precision)][yi.toPrecision(precision)] = [];
			//console.log('asdf');
		}
		
		if (this.firsts3){
			this.val = true;
			this.val2 = true;
			
			this.xmin3 = xi;
			this.ymin3 = yi;
			this.zmin3 = zi;
			this.firsts3 = false;
			this.values2[this.xmin3] = [];
			this.values2[this.xmin3][this.ymin3] = [];		
		}
		
		this.values2[xi.toPrecision(precision)][yi.toPrecision(precision)][zi.toPrecision(precision)] = [
			[xi+x],
			[yi+y],
			[zi+z]
		]
		this.lastx = xi;
		this.lasty = yi;
		this.lastz = zi;
		
		this.xmax3 = xi;
		this.ymax3 = yi;
		this.zmax3 = zi;

	}

	// test(){
	// 	console.log(this.values2);
	// }

	draw3d3(){
		this.unitvect();
		//console.log(this.accz3, this.accy3, this.accx3);
		//console.log(this.zmin3, this.xmin3, this.ymin3);
		//console.log(this.zmax3, this.ymax3, this.xmax3);
		for (var z = this.zmin3; z<=this.zmax3; z+=this.accz3){
  			for (var y = this.ymin3; y<=this.ymax3; y+=this.accy3){
    			for(var x = this.xmin3; x<=this.xmax3; x+=this.accx3){
  	// for (var z = -100; z<=100; z+=5){
  	// 		for (var y = -100; y<=100; y+=accuracy3+=this.accy3){
   //  			for(var x = this.xmin3; x<=this.xmax3; x+=accuracy3+=this.accx3){
    				beginShape();
    				//console.log(x,y,z);
    				//console.log(this.accz3, this.accy3, this.accx3);
					//console.log(x,y,z,this.values2[x.toPrecision(precision)][y.toPrecision(precision)][z.toPrecision(precision)]);
    					this.vectorm.update(this.values2[x.toPrecision(precision)][y.toPrecision(precision)][z.toPrecision(precision)]);
						this.screenpos.update(this.units.multiply(this.vectorm));
    					vertex(this.screenpos.element(0,0),this.screenpos.element(1,0));

    					this.initial = [
    						[x],
    						[y],
							[z]
    					]

    					this.vectorm.update(this.initial);
    					this.screenpos.update(this.units.multiply(this.vectorm));
    					vertex(this.screenpos.element(0,0),this.screenpos.element(1,0));
    					stroke(x+z/2,y-z/2,255);


    				endShape();
    			}
    		}
    	}
    	stroke(255);
	}
	
	draw3d1(){
		noFill();
		this.unitvect();
		this.taws = new matrixs(this.times[0]);
		this.gaws = new matrixs(this.times[0]);
		beginShape();
		
		for (var i = this.mintime; i<=this.maxtime; i+=this.acct){
			this.gaws.update(this.times[i]);
			this.taws.update(this.units.multiply(this.gaws));
			vertex(this.taws.element(0,0), this.taws.element(1,0));
		}

	endShape();
	}

	draw3d2e(){
		this.acc2 = accuracy2;
		noFill();
		this.unitvect();
		// console.log(this.minx4, this.xmax4, this.accx4);
		// console.log(this.miny4, this.ymax4, this.accy4);
	for (var x=this.minx4; x<=this.xmax4; x+=this.accx4){
		beginShape();
  		for (var y = this.miny4; y<=this.ymax4; y+=this.accy4){
		   	//console.log(x.toPrecision(precision),y.toPrecision(precision),this.values[x.toPrecision(precision)][y.toPrecision(precision)])
		   	if (this.yfirst){
				this.vectorm.update(this.values[y.toPrecision(precision)][x.toPrecision(precision)]);
		   	}

		   	if (this.xfirst){
    			this.vectorm.update(this.values[x.toPrecision(precision)][y.toPrecision(precision)]);
    			console.log('a');
    		}
    		//console.log(this.values[y.toPrecision(precision)][x.toPrecision(precision)]);
    		//console.log(this.vectorm.returnmatrix());

    		this.screenpos.update(this.units.multiply(this.vectorm));

    		vertex(this.screenpos.element(0,0),this.screenpos.element(1,0));


    	}
    	endShape();
    }
	
	for (var y = this.miny4; y<=this.ymax4; y+=this.accy4){

		beginShape();
  		for (var x=this.minx4; x<=this.xmax4; x+=this.accx4){
  		
    		if (this.yfirst){
				this.vectorm.update(this.values[y.toPrecision(precision)][x.toPrecision(precision)]);
		   	}

		   	if (this.xfirst){
    			this.vectorm.update(this.values[x.toPrecision(precision)][y.toPrecision(precision)]);
    		}
    		this.screenpos.update(this.units.multiply(this.vectorm));

    		vertex(this.screenpos.element(0,0),this.screenpos.element(1,0));

    	}
    	endShape();
    }

}

  draw3d2(){
		this.acc2 = accuracy2;
		noFill();
		this.unitvect();

		for (var x=this.minx2; x<=this.maxx2; x+=this.accx2){
		beginShape();
  			for (var y = this.miny2; y<=this.maxy2; y+=this.accy2){
  			if (this.xfirst2){
			this.vector = [
				[x],
				[y],
				[this.values[x.toPrecision(precision)][y.toPrecision(precision)]]
			];
			}

			if (this.yfirst2){
				this.vector = [
				[x],
				[y],
				[this.values[y.toPrecision(precision)][x.toPrecision(precision)]]
			];
			}
		   			
    		this.vectorm.update(this.vector);
    		this.screenpos.update(this.units.multiply(this.vectorm));

    		vertex(this.screenpos.element(0,0),this.screenpos.element(1,0));

    	}
    	endShape();
    }
	
	for (var y = this.miny2; y<=this.maxy2; y+=this.accy2){

		beginShape();
  		for (var x=this.minx2; x<=this.maxx2; x+=this.accx2){
  		
  			if (this.xfirst2){
			this.vector = [
				[x],
				[y],
				[this.values[x.toPrecision(precision)][y.toPrecision(precision)]]
			];
			}

			if (this.yfirst2){
				this.vector = [
				[x],
				[y],
				[this.values[y.toPrecision(precision)][x.toPrecision(precision)]]
			];
			}
		   			
		
				
    		this.vectorm.update(this.vector);
    		this.screenpos.update(this.units.multiply(this.vectorm));

    		vertex(this.screenpos.element(0,0),this.screenpos.element(1,0));

    	}
    	endShape();
    }

}

}