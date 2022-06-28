//  _________ __          _____              .__
// /   _____//  |_  _____/ ____\____    ____ |__|____
// \_____  \\   __\/ __ \   __\\__  \  /    \|  \__  \
// /        \|  | \  ___/|  |   / __ \|   |  \  |/ __ \_
// _______  /|__|  \___  >__|  (____  /___|  /__(____  /
//        \/           \/           \/     \/        \/
// 10Print_Oracle 0.1 Stefania Papa by @StefaniaPapa [noise,colors,3D]
// 2022 © Stefania Papa @StefaniaPapa, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —

let arr = [];

let x = -200,
  y = -200,
  z = -200;
let w = 40,
  h = 40,
  d = 40;

let myFont;
function preload() {
  myFont = loadFont("assets/GangsterGrotesk-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam();
  pg = createGraphics(100, 100);
}

function draw() {
  background(0);
  lights();

  var r = 0 * noise(0.004 * x, 0.002 * y + 2);
  var g = 0 * noise(0.004 * x, 0.002 * y + 3);
  var b = 255 * noise(0.004 * x, 0.002 * y + 4);
  stroke(r, g, b);
  strokeWeight(0.5);

  for (let p of arr) {
    push();
    translate(p.x, p.y, p.z);

    if (p.o > 0.2) {
      rotateX(frameCount * -0.01);
      rotateY(frameCount * -0.01);
      noStroke();
      fill(20);
      
      sphere(w / 10);
      fill(255);
      textFont(myFont);
      text("Si", 14, 60);
    } else {
      fill(r, g, b);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      cone(30, 20, 2);
      fill(255);
      textFont(myFont);
      text("No", 14, 60);
    }
    pop();
  }

  arr.push({
    x: x,
    y: y,
    z: z,
    o: random(),
  });

  x = x + w;
  if (x > 200) {
    x = -200;
    y = y + h;
  }
  if (y > 200) {
    y = -200;
    z = z + d;
  }
  if (z > 200) {
    y = -200;
    x = -200;
    z = -200;

    arr = [];
  }
}
