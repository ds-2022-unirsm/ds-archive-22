// ππππππππππππππ
//      _          _      __  __
//     | |        | |    / _|/ _|
//  ___| |__  _ __| |__ | |_| |_
// / __| '_ \| '__| '_ \|  _|  _|
//| (__| | | | |  | |_) | | | |
// \___|_| |_|_|  |_.__/|_| |_|
//
// ππππππππππππππ

// 10 print w/emoji b/n 0.1 by chrbff [10print, emoji]
// 2022 Β© chrbff, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm
// github.com/ds-2022-unirsm β github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// β
// Help:
// use the voice to modify:
// ['si parte'] to start
// ['in volo']
// ['arrivo']
// ['ho fame']
// [visitare]
// [cultura]
// [ciao]
//________________________________________

let x = 0;
let y = 0;
let spazio = 45;
let spessore = 0.5;
let speech;
let said;
let colore;

function setup() {
  
  colore = color(random(255), random(255), random(255));
  
  createCanvas(windowWidth, windowHeight);
  background(colore);

  //speech recognition in italiano
  speechRec = new p5.SpeechRec("it-IT", gotSpeech);
  
  //gli dico di non riconoscere solo una volta ma in loop
  let continuous = true;
  
  //se il motore di riconoscimento vocale da risultati parziali piΓΉ veloci (vero) o attenderΓ  che l'oratore si metta in pausa (falso = predefinito).
  let interimResults = false;
 
  //fa partire il riconoscimento continuo
  speechRec.start(continuous, interimResults);

  //funzione
  function gotSpeech() {
    if (speechRec.resultValue) {
      
      //metto in una variabile il riconoscimento
      said = speechRec.resultString;
      
      //stampo il risultato
      console.log(said);
    }
  }
}

function draw() {
  textAlign(CENTER);
  
  colore = color(random(255), random(255), random(255));
  
  if (said === "si parte" || said === "Si parte") {
    textSize(40);
    if (random() < 0.5) {
      text("βοΈ", x, y);
    } else {
      text("π§³", x, y);
    }

    x = x + spazio;
    spessore = spessore + 0.1;
    
  }

  if (said === "in volo" || said === "In volo") {
   textSize(40);
    if (random() < 0.5) {
      text("π₯±", x, y);
    } else {
      text("π€", x, y);
    }
    x = x + spazio;
    spessore = spessore + 0.1;

  }

  if (said === "arrivo" || said === "Arrivo") {
    textSize(40);
    if (random() < 0.5) {
      text("π―π΅", x, y);
    } else {
      text("π―", x, y);
    }

    x = x + spazio;
    spessore = spessore + 0.1;

  }

  if (said === "ho fame" || said === "Ho fame") {
    textSize(40);
    if (random() < 0.25) {
      text("π±", x, y);
    } else if(random() < 0.5){
      text("π", x, y);
    } else if (random() < 0.75) {
      text("π", x, y);
    } else {
      text("π₯", x, y);
    }

    x = x + spazio;
    spessore = spessore + 0.1;

  }

  if (said === "visitare" || said === "Visitare") {
    textSize(40);
    if (random() < 0.25) {
      text("πΌ", x, y);
    } else if (random() < 0.5){
      text("π»", x, y);
    } else if (random() < 0.75) {
      text("β©", x, y);
    } else {
      text("π", x, y);
    }

    x = x + spazio;
    spessore = spessore + 0.1;

  }

  if (said === "cultura" || said === "Cultura") {
    textSize(40);
    if (random() < 0.25) {
      text("πΉ", x, y);
    } else if (random() < 0.5){
      text("πΊ", x, y);
    } else if (random() < 0.75) {
      text("π", x, y);
    } else {
      text("π΄", x, y);
    }

    x = x + spazio;
    spessore = spessore + 0.1;

  }

if (said === "ciao" || said === "Ciao") {
  textSize(40);  
    if (random() < 0.5) {
      text("π", x, y);
    } else {
      text("βοΈ", x, y);
    }
  
    x = x + spazio;
    spessore = spessore + 0.1;
  }
    
  noStroke();
  rect(0,0,width, 100);
  
  textSize(20)
  textFont('Helvetica Neue');
  text('Fai un viaggio nel Giappone!', width/2, 50);
  text('Pronuncia: "si parte", "in volo", "arrivo", "ho fame", "visitare", "cultura", "ciao"',width/2, 80);
  
  if (x > width) {
    x = 0;
    y = y + spazio;
  }
  if (y >= height) {
    background(colore);
    y = 0;
  }
}
