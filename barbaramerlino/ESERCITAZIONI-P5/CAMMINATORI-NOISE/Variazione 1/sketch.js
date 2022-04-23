//BARBARA MERLINO

var w, h;
var quanti = 15;
var c = [];
var speedMax = 0;
let myColors = ["#B17C0033", "#E1414147"];
let randCol;
var stepX;
var stepY;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));

  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
}

function draw() {
  background(10, 23, 56);
  noStroke();
  fill("white");
  ellipse(width / 2, height / 2, 8);
  for (var i = 0; i < quanti; i++) {
    c[i].move();
    c[i].display();
  }
}

// classe
function Camminatore(_id) {
  this.tx = random(100);
  this.ty = random(100);

  this.move = function () {
    this.tx += 0.002;
    this.ty += 0.002;
  };

  // metodo display
  this.display = function () {
    randCol = random(myColors.length);
    randCol = floor(randCol);
    fill(myColors[randCol]);
    var x1 = width * noise(this.tx + 15);
    var x2 = width * noise(this.tx + 25);
    var x3 = width * noise(this.tx + 35);
    var x4 = width * noise(this.tx + 45);
    var y1 = height * noise(this.ty + 55);
    var y2 = height * noise(this.ty + 65);
    var y3 = height * noise(this.ty + 75);
    var y4 = height * noise(this.ty + 85);
    bezier(width / 2, height / 2, x2, y2, x3, y3, x4, y4);
  };
}
