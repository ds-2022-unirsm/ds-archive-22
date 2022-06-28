let allOscs = [];
let x = 100;
let y = 100;
let minFreq = 100;
let maxFreq = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  startButton = createButton("1");
  startButton.mousePressed(Nota1);
  stopButton = createButton("2");
  stopButton.mousePressed(Nota2);
  startButton = createButton("3");
  startButton.mousePressed(Nota3);
  stopButton = createButton("4");
  stopButton.mousePressed(Nota4);
}

function Nota1() {
  let osc = new p5.Oscillator();
  osc.setType("square");
  osc.freq(random(10, 200));
  osc.amp(0.05);
  osc.start();
  allOscs.push(osc);
  
}

function Nota2() {
  let osc = new p5.Oscillator();
  osc.setType("square");
  osc.freq(random(10, 400));
  osc.amp(0.05);
  osc.start();
  allOscs.push(osc);
}

function Nota3() {
  let osc = new p5.Oscillator();
  osc.setType("square");
  osc.freq(random(10, 600));
  osc.amp(0.05);
  osc.start();
  allOscs.push(osc);
}

function Nota4() {
  let osc = new p5.Oscillator();
  osc.setType("square");
  osc.freq(random(10, 1000));
  osc.amp(0.05);
  osc.start();
  allOscs.push(osc);
}

function draw() {
  background(255);
  stroke(50);
  fill(0);
  for (var i = 0; i < allOscs.length; i++) {
  strokeWeight(8000/allOscs[i].f);
let drawY = map(
      allOscs[i].f, minFreq, maxFreq, 0, height);
    line(0, drawY, width, drawY);  
  }
  
  
}