let osc;
var SpeechRec = new p5.SpeechRec();
let parola = "";
SpeechRec.continuous = true;
SpeechRec.interimResults = true;
let Xpos = 0;
(Xv = 0), (Ypos = 0);
(Yv = 0), (Stop = false);
d = 10;
var mic;
var t = 0;
let phase = 0;
let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  Xpos = windowWidth / 2;
  Ypos = windowHeight / 2;

  SpeechRec.start();
  SpeechRec.onResult = showResult;
  SpeechRec.onStart = onStart;
  mic = new p5.AudioIn();
  mic.start();

  vibrato = new p5.Oscillator();
  vibrato.freq(5);
  vibrato.amp(15);
  vibrato.disconnect();
  vibrato.start();
  osc = new p5.Oscillator();
  osc.freq(vibrato);
  osc.amp(0.5);
  osc.start();
}

function draw() {
  //fill(255,60,70);
  //noStroke();
  //ellipse(Xpos, Ypos,50);
  background(0);
  translate(Xpos, Ypos);
  stroke(255);
  noFill();
  phase += 0.01;

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.02) {
    // let xoff = map(cos(a),-1,1,0,mouseX/100);
    // let yoff = map(sin(a),-1,1,0,mouseX/100);
    // let xoff = map(cos(a),-1,1,0,2);
    // let yoff = map(sin(a+phase),-1,1,0,2);
    let xoff = map(cos(a), -1, 1, 0, 2);
    let yoff = map(sin(a), -1, 1, 0, 2);
    const r = map(noise(xoff, yoff, zoff), 0, 1, 50, 150);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }

  endShape(CLOSE);
  zoff += 0.01;

  t = t + 0.03;

  if (Stop == false) {
    Xpos = Xpos + Xv;
    Ypos = Ypos + Yv;
  }

  osc.freq(map(Xpos, 0, width, 100, 1000));
  osc.amp(map(Ypos, 0, height, 0, 1));
  if (Xpos < 0) Xpos = windowWidth;
  if (Ypos < 0) Ypos = windowHeight;
  if (Xpos > windowWidth) Xpos = 0;
  if (Ypos > windowHeight) Ypos = 0;
  
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
      d = d * 2;
      break;
    case "piccolo":
      d = d / 2;
      break;
    case "su":
      Yv = -1;
      Xv = 0;
      break;
    case "giù":
      Yv = 1;
      Xv = 0;
      break;
    case "sinistra":
      Yv = 0;
      Xv = -1;
      break;
    case "destra":
      Yv = 0;
      Xv = 1;
      break;
    case "Stop":
    case "stop":
      Stop = true;
      Xv = 0;
      Yv = 0;
      break;
    case "start":
      Stop = false;
      break;
    case "pulisci":
      background(255);
      break;
  }
  console.log(parola);
}
