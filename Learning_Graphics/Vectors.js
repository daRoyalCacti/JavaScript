class vector{
	
	constructor(x,y,lx,ly){
		this.x = x;
		this.y = y;
		this.lx = lx;
		this.ly = ly;
		
		this.i = createVector(1,0);
		this.j = createVector(0,1);
	}
	
	moverel(x,y){
		this.x=(x*this.i.x+y*this.j.x)*dilx;
		this.y=(y*this.j.y+x*this.i.y)*-dily;
	}
	
	moveefix(x,y){
		this.x=x*dilx;
		this.y=y*-dily;
	}
	
	size(x,y){
		this.lx = x*dilx;
		this.ly = y*dily;
	}
	
	seti(x,y){
		this.i.set(x,y);
	}
	
	setj(x,y){
		this.j.x = x;
		this.j.y = y;
	}
	
	vectdraw(){
		line(this.x, this.y, this.x + (this.lx*this.i.x + this.ly*this.j.x), this.y + (this.lx*this.i.y+this.ly*this.j.y));
	}
	
	vectdrawarrow(){
		this.vectdraw();
		this.arrow(); 	
	}
	
	arrow(){
		this.ang = atan((this.lx*this.i.y+this.ly*this.j.y)/(this.lx*this.i.x+this.ly*this.j.x));
		this.angnew1 = this.ang+0.1;
		this.angnew2 = this.ang-0.1;
		
		this.mag=0.8*sqrt(pow(this.lx,2)+pow(this.ly,2));
		
		

		if (this.lx*this.i.x + this.ly*this.j.x>0){
			line(this.x+this.lx*this.i.x + this.ly*this.j.x, this.y + (this.lx*this.i.y+this.ly*this.j.y), this.x+this.mag*cos(this.angnew1), this.y +this.mag*sin(this.angnew1));
			line(this.x+this.lx*this.i.x + this.ly*this.j.x, this.y + (this.lx*this.i.y+this.ly*this.j.y), this.x+this.mag*cos(this.angnew2), this.y +this.mag*sin(this.angnew2));
		} else {
			line(this.x+this.lx*this.i.x + this.ly*this.j.x, this.y + (this.lx*this.i.y+this.ly*this.j.y), this.x-this.mag*cos(this.angnew1), this.y-this.mag*sin(this.angnew1));
			line(this.x+this.lx*this.i.x + this.ly*this.j.x, this.y + (this.lx*this.i.y+this.ly*this.j.y), this.x-this.mag*cos(this.angnew2), this.y-this.mag*sin(this.angnew2));
		}
	}

	  axes(){
    for (var q = round(-height/2); q<=round(height/2); q-=dily){
    beginShape()
    for (var m = round(-width/2); m<=round(width/2); m+=1){
      if(q==0){
        stroke(255,100,100);
        strokeWeight(3);
      } else{
        stroke(100);
        strokeWeight(1);
      }
      vertex(m*this.i.x + q*this.j.x,q*this.j.y + m*this.i.y);
    }
    endShape();
  }

  for (var m = round(-width/2); m<=round(width/2); m+=dilx){
    beginShape()
    for (var q = round(-height/2); q<=round(height/2); q+=1){
      if(m==0){
        stroke(255,100,100);
        strokeWeight(3);
      } else{
        stroke(100);
        strokeWeight(1);
      }
      vertex(m*this.i.x + q*this.j.x,q*this.j.y + m*this.i.y);
    }
    endShape();
  }

}
}