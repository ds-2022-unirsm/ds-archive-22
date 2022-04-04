//──────────────╔╗╔╗
//╔═╦╗╔╗╔═╦══╦═╗║╚╣╚╗
//║═╣╚╣╚╣╬║║║║╬╚╣╔╣╔╣
//╚═╩═╩═╩═╩╩╩╩══╩═╩═╝
// cllomatt24 (Matteo Cirillo)

let x = 0;
let y = 0;
let spazio = 0.1;
let d = 10;
t = 0;
let angolo = 5;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));
  background(0);
  ellipseMode(CORNER);
}

function draw() {
  //background (0, 15);
  translate(w / 2, h / 2);
  rotate(angolo *(frameCount));

  var r = 255 * noise(t + 10);
  var g = 255 * noise(t + 15);
  var b = 255 * noise(t + 20);
  noStroke();
  fill(r, g, b);
  t = t + 0.01;

  if (random(1) < 0.5) {
    ellipse(x, y, d);
  } else {
    ellipse(x, y, d);
  }

  // separa line l'una dall'altra
  x = x + spazio;

  // se si raggiunge la larghezza max pulire lo sfondo e riniziare da capo
  if (x > w/2) {
    x = 0;
    y = y + spazio;
  }
  if (y >= h/2) {
    y = 0;
  }
  //drawingContext.filter = 'blur(3px)';
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
    angolo = 5;
    spazio = 0;
  } else if (keyCode === RIGHT_ARROW) {
    angolo = 35;
    spazio = 0.1;
  }
}
