var w, h;
walkers = [];
walkersNumber = 1;

let phase = 0;
let zoff = 0;
let noiseMax = 0;

var myRec = new p5.SpeechRec("en-US", parseResult);
myRec.continuous = true;
myRec.interimResults = true;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));
  background(0);

  for (var i = 0; i < walkersNumber; i++) {
    walkers.push(new walker(i));
  }

  myRec.start(); // start engine
  
    textSize(20);
  textAlign(LEFT);
  fill(255);
  text("Pronuncia MORE o LESS per cambiare la forma", 20, 20); 
}

function draw() {
  for (var i = 0; i < walkers.length; i++) {
    walkers[i].move();
    walkers[i].display();
  }
}

function walker(_id) {
  this.id = _id;

  this.xoff = 0;
  this.yoff = 0;
  this.r = 0;
  this.x = 0;
  this.y = 0;

  this.move = function () {
    phase += 0.003;
    zoff += 0.01;
  };

  this.display = function () {
    push();
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(0.5);
    noFill();

    beginShape();
    for (let a = 0; a < TWO_PI; a += radians(5)) {
      this.xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
      this.yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
      this.r = map(
        noise(this.xoff, this.yoff, this.zoff),
        0,
        1,
        100,
        height / 2
      );
      this.x = this.r * cos(a);
      this.y = this.r * sin(a);
      vertex(this.x, this.y);
    }
    endShape(CLOSE);
    pop();
  };
}

function parseResult() {
  var mostrecentword = myRec.resultString.split(" ").pop();
  if (mostrecentword.indexOf("More") !== -1) {
    noiseMax = noiseMax + 1;
  } else if (mostrecentword.indexOf("Less") !== -1) {
    noiseMax = noiseMax - 1;
  } else if (mostrecentword.indexOf("Clear") !== -1) {
    background(0);
  }
   
  console.log(mostrecentword);
}
