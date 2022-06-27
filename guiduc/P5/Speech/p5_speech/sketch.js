// -
// Speech_variazione 1 by Chiara Guiducci [movimento, parole]
// 2022 © Chiara @guiduc, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —
// Credits/Thanks to: 
// @piecesofuk for https://editor.p5js.org/piecesofuk/sketches/SyBpNOJTb
// —
//
// Help:
// [key] su
// [key] giù
// [key] sinistra
// [key] destra
//
// —

let speechRec;
let square;

function setup() { 
  createCanvas(500, 400);
  var foo = new p5.Speech(); // speech synthesis object
  speechRec = new p5.SpeechRec(gotSpeech);
  let continuous = true;
  let interimResults = true;
  speechRec.start(continuous, interimResults);
  
  function gotSpeech(speech) {
    
 //     foo.speak(speech.text);
    if (speech.text.includes("sinistra")) square.moveLeft(speech.text.indexOf("sinistra"));
    if (speech.text.includes("destra")) square.moveRight(speech.text.indexOf("destra"));    
    if (speech.text.includes("su")) square.moveUp(speech.text.indexOf("su"));
    if (speech.text.includes("giù")) square.moveDown(speech.text.indexOf("giù"));
    print(speech.text);
	}
  
  square = new Square();
} 

function draw() { 
  background(225);
  square.draw();
}

class Square {
  constructor() {
    this.x = width/2;
    this.y = height/2;
  }
  
  draw() {
    fill(61, 103, 175);
    noStroke();
    rect(this.x, this.y, 60, 50, 20, 15, 10, 5);
    text("Muovi la figura dicendo: su/giù/sinistra/destra", 30, 30);
  }

	moveLeft(n) {
    this.x -= n;
  }	
	
	moveRight(n) {
    this.x += n;
  }
	moveUp(n) {
    this.y -= n;
  }	
	
	moveDown(n) {
    this.y += n;
  }
}