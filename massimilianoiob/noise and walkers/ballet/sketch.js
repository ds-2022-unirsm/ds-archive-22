
var t;

function setup() {
  createCanvas(500, 500);
stroke(10, 10)
  noFill(0);
  background(255)
  t = 0;
}
 // Qui disegniamo continuamente una singola curva di Bezier sulla tela, i cui punti finali e punti di controllo vengono tutti spostati in base al noise.
//utilizzo un piccolo offset per assicurarci che i valori di noise siano diversi per ciascuna delle 8 variabili

function draw() {
  var x1 = width * noise(t - 30);
  var x2 = width * noise(t - 10);
  var x3 = width * noise(t + 0);
  var x4 = width * noise(t + 20);
  var y1 = height * noise(t + 40);
  var y2 = height * noise(t + 60);
  var y3 = height * noise(t + 80);
  var y4 = height * noise(t + 100);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;


}