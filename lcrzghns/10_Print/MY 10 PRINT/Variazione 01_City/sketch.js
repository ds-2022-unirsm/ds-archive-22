//   _                    _
//  | | ___ _ __ ______ _| |__  _ __  ___
//  | |/ __| '__|_  / _` | '_ \| '_ \/ __|
//  | | (__| |   / / (_| | | | | | | \__ \
//  |_|\___|_|  /___\__, |_| |_|_| |_|___/
//                  |___/
//
// 10Print_3D colors by Lucrezia Ghinassi [colors, points, 3D]
// 2022 © Lucrezia Ghinassi, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —

let arr = [];
let fr = 10;
let spacing = 25;
let t = 0;

let x = -200,
  y = -200,
  z = -10;

let width = 25,
  height = 25,
  pr = 50;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam();
  frameRate(fr);
}

function draw() {
  background(0);
  t = t + 0.01;

  let r = 100 * noise(t + 10);
  let g = 160 * noise(t + 15);
  let b = 255 * noise(t + 20);

  stroke(r, g, b);
  strokeWeight(1);
  noFill();

  fr = 20;
  frameRate(fr);

  for (let p of arr) {
    push();
    translate(p.x, p.y, p.z);

    //let noiseVal = noise(vx, vy, t);
    if (p.o < 0.5) {
      box(width / 2, height / 2, pr);
    } else {
      sphere(width / 5);
    }
    pop();
  }

  arr.push({
    x: x,
    y: y,
    z: z,
    o: random(),
  });

  x = x + width;
  if (x > 200) {
    x = -200;
    y = y + height;
  }

  if (y > 200) {
    y = -200;
    z = z + 100;
  }

  if (z > 500) {
    y = -200;
    x = -200;
    z = -200;
    arr = [];
  }
}

function reset() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  x = -200;
  y = -200;
  z = -10;
  draw();
}

window.onresize = reset;
