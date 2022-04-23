//BARBARA MERLINO

var w, h;
var x = 0;
var y = 0;
var z = 0;
var size = 10;
var noisex = 0;
var noisey = 0;
var noisez = 0;
var pallino;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight), WEBGL);
  background(255);
}

function draw() {
  strokeWeight(mouseX / 80); //MOUSEX
  stroke("black");
  //lights();
  rotateX(-PI / 2);
  rotateY(map(frameCount, 200, 10, 0, 40 * PI));

  translate(0, -h / 2, -h / 2);
  rotateY(20 * PI);
  pallino = random(2);
  if (pallino < 1) {
    fill("black");
    translate(x, y, 0);
    sphere(2);
  } else if (pallino > 1) {
    fill("black");
    translate(x, y, 0);
    sphere(2);
  }

  x += size;
  noisex += 0.3;

  if (x > w / 4) {
    x = 0;
    y += size;
    noisex = 0;
    noisey += 0.3;
    z += size;
    noisez += 0.05;
  }
}
