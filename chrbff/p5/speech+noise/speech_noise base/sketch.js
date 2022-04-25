//    ___       ___       ___       ___       ___       ___   
//   /\  \     /\__\     /\  \     /\  \     /\  \     /\  \  
//  /::\  \   /:/__/_   /::\  \   /::\  \   /::\  \   /::\  \ 
// /:/\:\__\ /::\/\__\ /::\:\__\ /::\:\__\ /::\:\__\ /::\:\__\
// \:\ \/__/ \/\::/  / \;:::/  / \:\::/  / \/\:\/__/ \/\:\/__/
//  \:\__\     /:/  /   |:\/__/   \::/  /     \/__/     \/__/ 
//   \/__/     \/__/     \|__|     \/__/                      
// Chiara Boffa
//________________________________________

let incr1 = 0;
let incr2 = 0;
let incr3 = 0;

var myRec = new p5.SpeechRec("it-ITA", parseResult); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

var x, y;
var dx, dy;

function setup() {
  createCanvas(800, 600);
  background(255, 255, 255);
  fill(0, 0, 0, 255);
  x = width / 2;
  y = height / 2;
  dx = 0;
  dy = 0;

  // instructions:
  textSize(20);
  textAlign(LEFT);
  text("Per disegnare pronuncia: su, giù, destra, sinistra", 50, 30);
  text("Per cancellare pronuncia: cancella", 50, 50);

  //myRec.onResult = parseResult; // now in the constructor
  myRec.start(); // start engine
}

function draw() {
  ellipse(x, y, 15, 15);
  noStroke();
  fill(map(noise(incr1), 0, 1, 0, 255), 
         map(noise(incr2), 0, 1, 0, 255),
         map(noise(incr3), 0, 1, 0, 255));
  incr1 += 0.03;
  incr2 += 0.03;
  incr3 += 0.03;
  
  x += dx;
  y += dy;
  if (x < 0) x = width;
  if (y < 0) y = height;
  if (x > width) x = 0;
  if (y > height) y = 0;
}

function parseResult() {
  // recognition system will often append words into phrases.
  // so hack here is to only use the last word:
  var mostrecentword = myRec.resultString.split(" ").pop();
  if (mostrecentword.indexOf("sinistra") !== -1) {
    dx = -1 * map(noise(incr1), 0, 1, 0, 10);
    incr1 += 0.01;
    dy = 0;
  } else if (mostrecentword.indexOf("destra") !== -1) {
    dx = 1 * map(noise(incr1), 0, 1, 0, 10);
    incr1 += 0.01;
    dy = 0;
  } else if (mostrecentword.indexOf("su") !== -1) {
    dx = 0;
    dy = - 1 * map(noise(incr1), 0, 1, 0, 10);
    incr1 += 0.01;
  } else if (mostrecentword.indexOf("giù") !== -1) {
    dx = 0;
    dy = 1 * map(noise(incr1), 0, 1, 0, 10);
    incr1 += 0.01;
  } else if (mostrecentword.indexOf("cancella") !== -1) {
    background(255);
    textSize(20);
    textAlign(LEFT);
    text("Per disegnare pronuncia: su, giù, destra, sinistra", 50, 30);
    text("Per cancellare pronuncia: cancella", 50, 50);
  }
  console.log(mostrecentword);
}
