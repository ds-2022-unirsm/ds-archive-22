let walker = [];
let totalWalkers = 50;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  for (let i = 0; i < totalWalkers; i++){
    walker[i] = new Walker();  
  }
  
  background(255);
}

function draw() {
  for (let i = 0; i < totalWalkers; i++){

    walker[i].step();
    walker[i].render();
  }
}

class Walker {
  constructor(){
    this.x = random(width);//width/2;
    this.y = random(height);//height/2;
    this.s = random(5,25);
    this.c = color(random(255),random(255),random(255));
  }

  render() {
    noStroke();
    fill(this.c);
    ellipse(this.x,this.y,this.s,this.s);
  }

  step() {
    let xStep = round(random(-1,1));
    let yStep = round(random(-1,1));
    this.s+=random(-3,3);
    
    let move = random(1);
    if (move < 0.1){
     xStep+=round(random(-10,10));
     yStep+=round(random(-10,10));
    }
    this.x += xStep; //this means x = x + xStep
    this.y += yStep; //y = y + yStep
   // print("x: "+ this.x + " y: "+this.y);
  }
}