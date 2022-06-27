//BARBARA MERLINO

var SpeechRec = new p5.SpeechRec();
let parola = "";
SpeechRec.continuous = true;
SpeechRec.interimResults = true;
var w, h;
var quanti = 10;
var c = [];
var speedMax = 0.1;
d = 10;
var r, g, b;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));
  noStroke();
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
  r = 0;
  g = 0;
  b = 0;
  SpeechRec.start();
  SpeechRec.onResult = showResult;
  SpeechRec.onStart = onStart;
}

function draw() {
  for (var i = 0; i < quanti; i++) {
    c[i].move();
    c[i].display();
  }
}

function Camminatore(_id) {
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
    noStroke();
    blendMode(MULTIPLY);
    background(255);
    fill(r, g, b, 1);
    ellipse(this.x, this.y, d);
  };
}

function onStart() {
  parola = SpeechRec.resultString;
}

function showResult() {
  if (SpeechRec.resultConfidence < 0.009 || parola == SpeechRec.resultString) {
    return 0;
  }

  switch (SpeechRec.resultString) {
    case "grande":
      d = d + 10;
      break;
    case "piccolo":
      d = d - 10;
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  r = random(256);
  g = random(256);
  b = random(256);
}
