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
//
// Help:
// [g] grandezza caratteri
// [finestrax] modifica larghezza
// [finestray] modifica altezza
// [b] full-screen
// [mouse.Pressed] pulisce schermo
//
// —

let parola =
  "è un pugnale, questo che vedo davanti a me? non riesco ad afferrarti. sei soltanto un pugnale della mente, una creazione falsa che nasce dal cervello oppresso dalla febbre? tu mi mostri la strada verso cui mi stavo avviando.";
let i = 0;

var x = 0; // store current x position on the grid
var y = 0; // store current y position on the grid
var g = 100; // grid size
var colore = 0; // current grid color

let w, h;

//**********************************************************************

// OGGETTO PARAMETRI
// Inserire i parametri che si vogliono modificare, e i loro valori iniziali
let parametri = {
  // Slider: inserire valore all'avvio dello sketch
  g: 100,
  finestrax: 301,
  finestray: 301,

  centrale: false, // Spunta: inserire stato iniziale
};

// FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function () {
  var gui = new dat.GUI();
  // EVENTO: Viene chiamata una funzione al variare del parametro
  var evento1 = gui.add(parametri, "g", 0, 900);
  var evento2 = gui.add(parametri, "finestrax", 301, 1920);
  var evento3 = gui.add(parametri, "finestray", 301, 1920);
};

//**********************************************************************

function setup() {
  //pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  //
  background(0);
}

function draw() {
  frameRate(21);
  translate(
    windowWidth / 2 - parametri.finestrax / 2,
    windowHeight / 2 - parametri.finestray / 2
  );
  preparaQuadretto();
  // passo alla casella a lato
  x++;
  // se sono in fondo alla riga vado a capo alla riga successiva
  if (x * parametri.g >= parametri.finestrax) {
    x = 0;
    y++;
  }
  // se sono in fondo alla pagina ricomincio con colore e griglia differente
  if (y * parametri.g >= parametri.finestray) {
    y = 0;
    colore = random(255);
  }
  


  // scrivi tutte le lettere delle parole nell'array
  if (frameCount % 1 == 0) i++;
  if (i == parola.length) i = 0;
}

function mousePressed() {
  clear();
  background(0);
}

// cancella un quadretto prima di disegnarci
function preparaQuadretto() {
 fill(0);
  stroke(255);
  strokeWeight(0);
  rect(x * parametri.g, y * parametri.g, parametri.g, parametri.g*1.2);
  textSize(parametri.g);
  fill(255);
  text(
    parola[i],
    x * parametri.g,
    y * parametri.g,
    parametri.g,
    parametri.g,
  );
}

function keyTyped() {
  if (key === "b") {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
