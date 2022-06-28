
var w, h;
var d = 300;
var quanti = 3;
var c = [];
//var speedMax = 2;

var x;
var y;
var t;
var T;
var r;
var g;
var b;


function setup() { 
  createCanvas(w = windowWidth, h = windowHeight);
  background(0);
   strokeWeight(2);
  strokeCap(ROUND);
  
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
} 

function draw() { 
  background(0, 20);
  
   for (var i = 0; i < quanti; i++) {
    c[i].move();
    c[i].mostra();
  }
}
  
  function Camminatore(_id) {
    this.id = _id;
    this.x = random(w);
    this.y = random(h);
    this.dirX = 1;
    this.dirY = 1;
    this.qualeAltro;
    this.t = 0;
    this.T = 0;
  
    
    this.move = function() {
      
      if (random(1) >= .5) this.dirX *= -1;
      if (random(1) >= .5) this.dirY *= -1;
      
       this.x += noise(this.t) * this.dirX;
       this.y += noise(this.T) * this.dirY;
    
       this.t += 0.05;
       this.T += 0.05;
    }
    
    this.mostra = function() {
      fill(100);
        ellipse(this.x,this.y,10);
      
      if (this.id == quanti - 1) this.qualeAltro = 0;
      else this.qualeAltro = this.id+1;
      line(this.x, this.y, c[this.qualeAltro].x, c[this.qualeAltro].y);
      stroke(100);
    }
  }