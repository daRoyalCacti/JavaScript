class field2{
	constructor(){
	//constructor(id){
		//this.id = id;
		this.x = [];
		this.y = [];
		this.xl = [];
		this.yl = [];
		this.endx = [];
		this.endy = [];
	}


	setlength(id, x, y){
		this.xl[id] = x;
		this.yl[id] = y;
	}

	setendpos(id, x, y){
		this.endx[id] = this.zooms*x;
		this.endy[id] = this.zooms*y;
	}

	setPos(id, x,y){
		this.x[id] = this.zooms*x;
		this.y[id] = this.zooms*y;
	}

	zoom(z){
		this.zooms = z;
	}

	 drawvecl(id){
	 	stroke(255);
	 	line(this.x[id], this.y[id], this.x[id]+this.xl[id], this.y[id]+this.yl[id]);
	 	stroke(0,0,255);
		this.arrow2(id);
	 }

	 etol(id){
	 	this.xl[id] = this.endx[id]-this.x[id];
	 	this.yl[id] = this.endy[id]-this.y[id];
	 }
setmag2(id, mag){
		//this.etol(id);
		// this.xl[id] = this.endx[id]-this.x[id];
		// this.yl[id] = this.endy[id]-this.y[id];
		this.magn = mag;
		this.mag = sqrt(pow(this.xl[id],2)+pow(this.yl[id],2));
		this.xl[id] = this.xl[id]/this.mag*this.magn;
		this.yl[id] = this.yl[id]/this.mag*this.magn; 
		// this.endx[id] = this.x[id]+this.xl[id];
		// this.endy[id] = this.y[id] + this.yl[id];
		//this.ltoe(id);
	}
	setmag1(id, mag){
		this.etol(id);
		// this.xl[id] = this.endx[id]-this.x[id];
		// this.yl[id] = this.endy[id]-this.y[id];
		this.magn = mag;
		this.mag = sqrt(pow(this.xl[id],2)+pow(this.yl[id],2));
		this.xl[id] = this.xl[id]/this.mag*this.magn;
		this.yl[id] = this.yl[id]/this.mag*this.magn; 
		// this.endx[id] = this.x[id]+this.xl[id];
		// this.endy[id] = this.y[id] + this.yl[id];
		this.ltoe(id);
	}

	 ltoe(id){
	 	this.endx[id] = this.x[id]+this.xl[id];
	 	this.endy[id] = this.y[id] + this.yl[id];
	 }

	drawvece(id){
		//this.ltoe(id);
		stroke(255);
		line(this.x[id], this.y[id], this.endx[id], this.endy[id]);
		stroke(0,0,255);
		this.arrow1(id);
	}

	arrow1(id){
		this.etol(id);
		// this.xl[id] = this.endx[id]-this.x[id];
		// this.yl[id] = this.endy[id]-this.y[id];
		//console.log(this.ly[id])://, this.xl[id]);
		this.ang = atan((this.yl[id])/(this.xl[id]));
		this.angnew1 = this.ang+0.1;
		this.angnew2 = this.ang-0.1;
		
		this.magn=0.8*sqrt(pow(this.xl[id],2)+pow(this.yl[id],2));
		
		

		if (this.xl[id]>0){
			line((this.x[id]+this.xl[id]), (this.y[id] + this.yl[id]), (this.x[id]+this.magn*cos(this.angnew1)), (this.y[id] +this.magn*sin(this.angnew1)));
			line((this.x[id]+this.xl[id]), (this.y[id] + this.yl[id]), (this.x[id]+this.magn*cos(this.angnew2)), (this.y[id] +this.magn*sin(this.angnew2)));
		} else {
			line((this.x[id]+this.xl[id]), (this.y[id] + this.yl[id]), (this.x[id]+this.magn*-cos(this.angnew1)), (this.y[id] +this.magn*-sin(this.angnew1)));
			line((this.x[id]+this.xl[id]), (this.y[id] + this.yl[id]), (this.x[id]+this.magn*-cos(this.angnew2)), (this.y[id] +this.magn*-sin(this.angnew2)));
		}
	}

arrow2(id){
		//this.etol(id);
		// this.xl[id] = this.endx[id]-this.x[id];
		// this.yl[id] = this.endy[id]-this.y[id];
		//console.log(this.ly[id])://, this.xl[id]);
		this.ang = atan((this.yl[id])/(this.xl[id]));
		this.angnew1 = this.ang+0.1;
		this.angnew2 = this.ang-0.1;
		
		this.magn=0.8*sqrt(pow(this.xl[id],2)+pow(this.yl[id],2));
		
		

		if (this.xl[id]>0){
			line((this.x[id]+this.xl[id]), (this.y[id] + this.yl[id]), (this.x[id]+this.magn*cos(this.angnew1)), (this.y[id] +this.magn*sin(this.angnew1)));
			line((this.x[id]+this.xl[id]), (this.y[id] + this.yl[id]), (this.x[id]+this.magn*cos(this.angnew2)), (this.y[id] +this.magn*sin(this.angnew2)));
		} else {
			line((this.x[id]+this.xl[id]), (this.y[id] + this.yl[id]), (this.x[id]+this.magn*-cos(this.angnew1)), (this.y[id] +this.magn*-sin(this.angnew1)));
			line((this.x[id]+this.xl[id]), (this.y[id] + this.yl[id]), (this.x[id]+this.magn*-cos(this.angnew2)), (this.y[id] +this.magn*-sin(this.angnew2)));
		}
	}
	axes(){
		for(var i = round(-width/2); i<round(width/2); i+=1){
    		if(i==0){
      			stroke(255,100,100);
      			strokeWeight(3);
    		} else {
      			stroke(50);
      			strokeWeight(1);
    		}
    		line(this.zooms*i,-height/2,this.zooms*i,height/2);
  		}
		for (var j = round(-height/2); j< round(height/2); j+=1){
  			if(j==0){
    			stroke(255,100,100);
    			strokeWeight(3);
  			} else{
    			stroke(50);
    			strokeWeight(1);
  			}
  			line(-width/2, this.zooms*j,width/2,this.zooms*j);
		}
  
	}
	
}