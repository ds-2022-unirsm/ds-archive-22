//      ___      ___      ___   ___      ___     ___
//     /\  \    /\  \    /\__\ /\  \    /\  \   /\  \
//    /::\  \  /::\  \  /:/  //::\  \  _\:\  \  \:\  \
//   /\:\:\__\/::\:\__\/:/__//::\:\__\/\/::\__\ /::\__\
//   \:\:\/__/\/\::/  /\:\  \\/\::/  /\::/\/__//:/\/__/
//    \::/  /   /:/  /  \:\__\  \/__/  \:\__\  \/__/
//     \/__/    \/__/    \/__/          \/__/
//-------------------------------------------------------

var colonne, righe;

var scala = 30;

var w = 1000;
var h = 1000;

var terrain = [];

var muovi = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //larghezza e altezza/ grandezza modulo
  colonne = w / scala;
  righe = h / scala;

  for (var x = 0; x < colonne; x++) {
    terrain[x] = [];
    for (var y = 0; y < righe; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  muovi += 0.015;

  var yoff = muovi;
  for (var y = 0; y < righe; y++) {
    var xoff = muovi;
    for (var x = 0; x < colonne; x++) {
      var variazione = noise(xoff * 2, yoff * 2);
      terrain[x][y] = map(variazione, 0, 1, -150, 150);
      xoff += 1.1;
    }
    yoff += 2.1;
  }

  // lights();

  //orbitControl();
  background(255);
  ellipseMode(CENTER);

  fill(0);
  ellipse(0, 0, 500, 500, 100);

  translate(0, 50);
  rotateX(PI / 2.2);
  rotateY(PI / 1);

  translate(-w / 2, -h / 2);
  //creo la griglia del terrain
  for (var y = 0; y < righe - 1; y++) {
    beginShape(TRIANGLE_STRIP);

    for (var x = 0; x < colonne; x++) {
      noStroke();

      stroke(255);
      strokeWeight(2);
      fill(0);
      vertex(x * scala, y * scala, terrain[x][y]);
      vertex(x * scala, y * 50 * scala, terrain[x] - [y + 1]);
    }
    endShape();
  }
}
