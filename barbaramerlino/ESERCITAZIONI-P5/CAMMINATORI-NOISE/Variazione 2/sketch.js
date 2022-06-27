//BARBARA MERLINO

var w, h;
var d = 200;
var quanti = 2;
var c = [];
var speedMax = 0.1;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));
  noStroke();
  background(255);
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
}

function draw() {
  noStroke();
  blendMode(MULTIPLY);

  //background(255, 5);
  for (var i = 0; i < quanti; i++) {
    c[i].move();
    c[i].display();
  }
}

function Camminatore(_id) {
  background(255, 5);
  this.id = _id;
  this.x = random(w);
  this.y = random(h);

  this.speed = random(0, speedMax);
  this.noiseX = random(500);
  this.noiseY = random(500);

  // metodo move
  this.move = function () {
    this.x = w * noise(this.noiseX);
    this.y = h * noise(this.noiseY);

    this.noiseX += 0.01 * this.speed;
    this.noiseY += 0.02 * this.speed;
  };

  // metodo display
  this.display = function () {
    fill(255, 0, 0, 1);
    ellipse(this.x, this.y, 3, d);
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
