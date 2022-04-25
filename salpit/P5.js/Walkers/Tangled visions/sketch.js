var w, h;
var quanti = 180;
var d = 650;
var c = [];
var speedMax = 3;
var value;
var canvas;
var state = 0;

function setup() {
  canvas = createCanvas((w = windowWidth), (h = windowHeight));
  
  canvas.mouseClicked(changeState);
  // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
}

function draw() {
  background(0, 20);
  // per tutti i camminatori chiama i diversi metodi utili
  for (var i = 0; i < quanti; i++) {
    c[i].move();
    c[i].display();
  }
}

// classe
function Camminatore(_id) {
  // costruttore
  this.id = _id;
  this.x = 0;
  this.y = 0;
  this.speedX = random(0, speedMax);
  this.speedY = random(0, speedMax);
  this.noiseX = random(100);
  this.noiseY = random(100);

  // metodo move
  this.move = function () {
    //if (random(1) >= 0.5) this.dirX *= -1;
    //if (random(1) >= 0.5) this.dirY *= -1;
    this.x = noise(this.noiseX) * w;
    this.y = noise(this.noiseY) * h;
    this.noiseX += 0.01 * this.speedX;
    this.noiseY += 0.005 * this.speedY;
  };

  // metodo display
  this.display = function () {
    fill(
      1000,
      255 + noise(this.noiseX),
      255,
      0 * noise(this.noiseX + 10),
      255 * noise(this.noiseX + 30)
    );
    stroke(255,100);
    strokeWeight(1);
    if(state == 0){
    ellipseMode(CENTER);
    ellipse(this.x, this.y, d);
    }
    else{
    rectMode(CENTER);
    rect(this.x, this.y, d,d); 
    }
  
  };

  
}

function changeState(){
  if(state == 0){
    state = 1;
  }
  else{
    state = 0;
  }
}
