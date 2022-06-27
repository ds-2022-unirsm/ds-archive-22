//      ___      ___      ___   ___      ___     ___
//     /\  \    /\  \    /\__\ /\  \    /\  \   /\  \
//    /::\  \  /::\  \  /:/  //::\  \  _\:\  \  \:\  \
//   /\:\:\__\/::\:\__\/:/__//::\:\__\/\/::\__\ /::\__\
//   \:\:\/__/\/\::/  /\:\  \\/\::/  /\::/\/__//:/\/__/
//    \::/  /   /:/  /  \:\__\  \/__/  \:\__\  \/__/
//     \/__/    \/__/    \/__/          \/__/
//-------------------------------------------------------

let arr = [];

let x = -200,
  y = -200,
  z = -200;
let w = 50,
  h = 50,
  d = 120;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam();
}

function draw() {
  background(0);
  lights();
  stroke(255);
  noFill();
  strokeWeight(2);

  ry = -PI / 2;
  rotateX(-PI / 1);
  rotateY(map(frameCount, 0, 60, 0, ry));

  for (let p of arr) {
    push();
    translate(p.x*2, p.y*2, p.z*2);
    rotate(millis() / 10);

    if (p.o < 0.3) {
      beginShape(POINTS);
      vertex(p.x, p.y, p.z - d/2);
      vertex(p.x, p.y + h, p.z*2);

      box(x / 10, y / 20, d * 2);
      //sphere(x/20)
    } else {
      stroke(255);
      cylinder(x / 50, y / 8);
    }

    endShape();
    pop();
  }

  arr.push({
    x: x,
    y: y,
    z: z,
    o: random(),
  });

  x = x + w;
  if (x > 400) {
    x = -200;
    y = y + h;
  }
  if (y > 400) {
    y = -200;
    z = z + d;
  }
  if (z > 1000) {
    y = -200;
    x = -200;
    z = -200;
    arr = [];
  }
}
