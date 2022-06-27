//──────────────╔╗╔╗
//╔═╦╗╔╗╔═╦══╦═╗║╚╣╚╗
//║═╣╚╣╚╣╬║║║║╬╚╣╔╣╔╣
//╚═╩═╩═╩═╩╩╩╩══╩═╩═╝
// cllomatt24 (Matteo Cirillo)
// —
// shining-path 0.1 by Matteo Cirillo [linee, colori, p5speech]
// 2022 © Matteo Cirillo @cllomatt24, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —
// Credits/Thanks to: 
// @Fupete (https://twitter.com/fupete) for the course DS-2022 at DESIGN.unirsm 
// original license: Educational purpose
// —

var w, h;
var quanti = 5000; // numero elementi
var c = []; // array vuoto che contiene gli elementi (camminatori)
var speedMax = 0.01; // velocità movimento
var d = 2.5; // diametro ellisse

function setup() {
  createCanvas(w = windowWidth, h = windowHeight);
  noStroke(); // no bordi alle ellissi
  
   // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i)); // inserisco elementi "i" di classe  
    // Camminatore all'interno dell'array c
    // new significa crea un nuovo oggetto "Camminatore" grazie 
    // alla funzione "Camminatore"
  }

}

function draw() {
  background(0);
  translate(w/14, h/14);
  // per tutti i camminatori chiama i diversi metodi (metodo = funzione)
  for (var i = 0; i < quanti; i++) {
    c[i].move(); // esegue .move per gli elementi "i" dell'array "c"
    c[i].display(); // esegue .display per gli eleenti "i" dell'array "c"
  }
}

// classe: insieme di metodi (funzioni) e di variabili
// insieme di "caratteristiche" che si applicano all'oggetto
function Camminatore(_id) { 
  // _id = variabile locale che definisce il singolo elemento
  
  // costruttore
  this.id = _id; // con this mi riferisco solo a quell'elemento lì
  
  this.x = random(w); // x iniziale
  this.y = random(h); // y iniziale
  
  this.t = random(0, 500); // sparpagliamento ellissi


  // metodo move
  this.move = function() {
    this.x = w * noise(this.t);
    this.y = h * noise(this.t+50);
    this.speed = speedMax * this.t;
    this.t += 0.001 * this.speed;
  }

  // metodo display
  this.display = function() {
    fill(map(this.speed, 1, speedMax, 0, 255)); 
    // mappa la velocità del mio elemento e converti tali valori in colore
    // più l'elemento è veloce e più sarà bianco e viceversa
    ellipse(this.x, this.y, d);
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
