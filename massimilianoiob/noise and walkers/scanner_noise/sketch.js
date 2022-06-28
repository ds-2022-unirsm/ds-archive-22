var t;

function setup() {
  createCanvas(500, 500);
  background(0);
  t = 0;
}

function draw() {
  // sfuma le linee dando opacità allo sfodo
  background(0, 5);
//applichiamo il noise al movimeto
  var x = width * noise(t);
  var y = height * noise(t+5);
  //creiamo le liee togliedo larghezza all'ellisse
  noStroke();
  fill(255);
  ellipse(x, y, 1, 1000);

  t = t + 0.5;
}
