var blobs = []

class Blob {

    constructor(x, y) {
        this.xpos = x;
        this.ypos = y;
        let angle = random(0, 2*PI);
        let speed = random(2,4);
        this.xspeed = speed*Math.cos(angle);
        this.yspeed = speed*Math.sin(angle);
        this.xaccel = 0;
        this.yaccel = 0;
        this.radius = random(120, 240);
        this.axpos = width/2;
        this.aypos = height/2;
    }

    update() {
        this.xspeed += this.xaccel;
        this.yspeed += this.yaccel;
        this.xpos += this.xspeed;
        this.ypos += this.yspeed;
        if(this.xpos+this.radius/13> width || this.xpos-this.radius/13 < 0) this.xspeed *= -1;
        if(this.ypos+this.radius/13 > height || this.ypos-this.radius/13 < 0) this.yspeed *= -1;
        if(this.xpseed>3 || this.xpseed<-3) this.xpseed = 0,this.xaccel = 0;
        if(this.ypseed>3 || this.ypseed<-3) this.ypseed = 0,this.yaccel = 0;

	
        if(this.xpos<this.axpos && this.xspeed<0) this.xaccel=14.265;
        if(this.xpos>this.axpos && this.xspeed>0) this.xaccel=-14.265;
        if(this.ypos>this.aypos && this.yspeed>0) this.yaccel=-14.265;
        if(this.ypos<this.aypos && this.yspeed<0) this.yaccel=14.265;

    }
}


function setup() {
    createCanvas(200, 200);
    colorMode(HSB);
    for(i=0; i<10; i++) blobs.push(new Blob(random(width/4, 3*width/4), random(height/4, 3*height/4)));
}

function draw() {

    loadPixels();
    for(x=0; x<width; x++) {
        for(y=0; y<height; y++) {
            let sum = 0;
            for(i=0; i<blobs.length; i++) {
                let xdif = x-blobs[i].xpos;
                let ydif = y-blobs[i].ypos;
                let d = sqrt((xdif*xdif) + (ydif*ydif));
                sum += 10 * blobs[i].radius/d;
            }
            set(x, y, color(sum, 255, 255));
        }
    }
    updatePixels();

    for(i=0; i<blobs.length; i++) {
        blobs[i].update();
    }
}