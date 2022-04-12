//──────────────╔╗╔╗
//╔═╦╗╔╗╔═╦══╦═╗║╚╣╚╗
//║═╣╚╣╚╣╬║║║║╬╚╣╔╣╔╣
//╚═╩═╩═╩═╩╩╩╩══╩═╩═╝
// cllomatt24 (Matteo Cirillo)

/********* INIZIO RILEVAMENTO VOCALE *********/
// registra, rileva lingua (it) e dai una callback
speechRec = new p5.SpeechRec("it-IT", gotSpeech);

// variabile per NON far funzionare speechRec
// una sola volta e basta
let continuous = true;
// variabile per far rilevare continuamente
// le parole pronunciate, senza pause
let interim = true;
// avvia registrazione vocale
speechRec.start(continuous, interim);
/********* FINE RILEVAMENTO VOCALE *********/

var quanti = 20; // vertici
var c = []; // array vuoto che contiene gli elementi (camminatori)
var speedMax = 0.05; // velocità movimento
var dx = 1;
var dy = 1;
var dxMax = 3;
var dyMax = 7;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));
  strokeWeight(2); // spessore linea
  strokeCap(ROUND); // estremità tonde

  // crea n oggetti di classe Camminatore
  for (var i = 0; i < quanti; i++) {
    c.push(new Camminatore(i));
  }
}

function draw() {
  background(0, 10); // trasparenza 10 per fare fade

  // per tutti i camminatori chiama i diversi metodi (metodo = funzione)
  for (var i = 0; i < quanti; i++) {
    c[i].move(); // esegue .move per gli elementi "i" dell'array "c"
    c[i].display(); // esegue .display per gli eleenti "i" dell'array "c"
  }
}

// classe
function Camminatore(_id) {
  background(0); // background qui altrimenti si passa da bianco a nero
  // costruttore
  this.id = _id; // con this mi riferisco solo a quell'elemento lì

  this.x = random(w); // x iniziale
  this.y = random(h); // y iniziale

  this.speed = random(0, speedMax); // prende un numero tra 0 e speedMax
  this.tx = random(20); // valore random che rappresenta delta/incremento
  this.ty = random(10); // valore random che rappresenta delta/incremento

  // metodo move
  this.move = function () {
    this.x = w * noise(this.tx); // si moltiplica w sennò troppo piccolo
    this.y = h * noise(this.ty); // si moltiplica h sennò troppo piccolo

    this.tx += 0.01 * this.speed * dx;
    // this.tx sarà uguale a se stesso più this.speed
    // valore cambia ad ogni frame
    // si moltiplica 0.01 per rallentare/accelerare movimento
    this.ty += 0.1 * this.speed * dy;
    // this.ty sarà uguale a se stesso più this.speed
    // valore cambia ad ogni frame
    // si moltiplica 0.01 per rallentare/accelerare movimento
  };

  // metodo display
  this.display = function () {
    this.r = map(noise(this.tx), 0, 1, 0, 255);
    this.g = map(noise(this.ty), 0, 1, 0, 255);
    this.b = map(noise(this.speed), 0, 1, 0, 255);
    stroke(this.r, this.g, this.b, 255);
    if (this.id == quanti - 1) {
      // controllo se l'oggetto in questione è l'ultimo elemento generato
      this.altro = 0;
    } else this.altro = this.id + 1; // altro è l'oggetto successivo all'oggetto in questione
    line(this.x, this.y, c[this.altro].x, c[this.altro].y);
  };
}

/********* INIZIO RILEVAMENTO VOCALE *********/
function gotSpeech() {
  // .split(" ").pop() perché così viene presa solo l'ultima parola
  var word = speechRec.resultString.split(" ").pop();
  if (word.indexOf("veloce") !== -1) {
    dx = random(0, dxMax) * noise(dx);
    dy = random(1, dyMax) * noise(dy);
  } else if (word.indexOf("meno") !== -1) {
    quanti -= 1;
  } else if (word.indexOf("triangolo") !== -1) {
    quanti = 3;
  } else if (word.indexOf("pulisci") !== -1) {
    background(0);
    quanti = 20;
  }
  console.log(word);
}

/********* FINE RILEVAMENTO VOCALE *********/
