/********* INIZIO RILEVAMENTO VOCALE *********/
// registra, rileva lingua (it) e dai una callback

let speechRec;
let square;
let t=0;

function setup() { 
  createCanvas(400, 400);
  var foo = new p5.Speech(); // speech synthesis object
// foo.speak('hi there'); // say something 
  speechRec = new p5.SpeechRec(gotSpeech);
  
// variabile per NON far funzionare speechRec una sola volta
  let continuous = true;
  let interimResults = true;
  speechRec.start(continuous, interimResults);
  
  function gotSpeech(speech) {
    
 //     foo.speak(speech.text);
    if (speech.text.includes("avanti")) square.moveRight(speech.text.indexOf("avanti"));
    if (speech.text.includes("indietro")) square.moveLeft(speech.text.indexOf("indietro"));    
    if (speech.text.includes("vai su")) square.moveUp(speech.text.indexOf("vai su"));
    if (speech.text.includes("torna giu")) square.moveDown(speech.text.indexOf("torna giu"));
    /*if (speech.text.includes("u")) square.moveLeft(speech.text.indexOf("u"));
    if (speech.text.includes("t")) square.moveRight(speech.text.indexOf("t"));    
    if (speech.text.includes("e")) square.moveUp(speech.text.indexOf("e"));
    if (speech.text.includes("r")) square.moveDown(speech.text.indexOf("r"));*/
    
    print(speech.text);  
    }
  square = new Square();
}


function draw() { 
  background(35, 30);
  square.draw();
}

class Square {
  constructor() {
    this.x = width/2;
    this.y = height/2;
  }
  
  draw() {
    fill(noise(t+10)*255,noise(t+15)*255,noise(t+20)*255);
    t += 0.002;
    noStroke();
    rect(this.x, this.y, 75, 75);
    
  /*clear the background every 2000 frames using mod (%) operator
  if (frameCount % 2000 == 0) {
  background(100);
  }*/
    
  }
	moveLeft(n) {
    this.x -= n+20;
  }	
	moveRight(n) {
    this.x += n+20;
  }
	moveUp(n) {
    this.y -= n+20;
  }	
	moveDown(n) { //da correggere
    this.y += n-20;
  }
}