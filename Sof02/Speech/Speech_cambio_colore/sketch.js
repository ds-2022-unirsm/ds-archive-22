var SpeechRec = new p5.SpeechRec();
let parola = "";
SpeechRec.continuous = true;
SpeechRec.interimResults = true;
let Xpos = 0,
  Xv = 0,
  Ypos = 0,
  Yv = 0,
  Stop = false;
//d = 10;
//var mic;
var r;
var g;
var b;
var tonalityR = 255;
var tonalityG = 255;
var tonalityB = 255;
var t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  SpeechRec.start();
  SpeechRec.onResult = showResult;
  SpeechRec.onStart = onStart;
 // mic = new p5.AudioIn();
 // mic.start();
}

function draw() {
  //var micLevel = mic.getLevel();
  background(r, g, b, 3);
  r = tonalityR * noise(t + 25);
  g = tonalityG * noise(t + 25);
  b = tonalityB * noise(t + 25);
  noStroke();
// ellipse(windowWidth / 2 + Xpos, windowHeight / 2 + Ypos, d );

  t = t + 0.03;

  if (Stop == false) {
    Xpos = Xpos + Xv;
    Ypos = Ypos + Yv;
  }
}

function onStart() {
  parola = SpeechRec.resultString;
}

function showResult() {
  if (SpeechRec.resultConfidence < 0.009 || parola == SpeechRec.resultString) {
    return 0;
  }

  switch (SpeechRec.resultString) {
    case "rosa":
      tonalityR = 244;
      tonalityG = 114;
      tonalityB = 208;
      break;
    case "viola":
      tonalityR = 170;
      tonalityG = 0;
      tonalityB = 255;
      break;
    case "lavanda":
      tonalityR = 220;
      tonalityG = 208;
      tonalityB = 255;
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
      background(0);
      break;
  }
  console.log(parola);
}
