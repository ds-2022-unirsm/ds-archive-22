

let arr = [];


let x = -200,
  y = -200,
  z = -200;
let w = 50,
  h = 50,
  d = 100;

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

  
  
  for (let p of arr) {
    push();
    this.tx = random(10); // x iniziale
    translate(p.x, p.y, p.z);
    rotate(millis() / 1000);

    if (p.o < 0.3) {
      box(w * noise(this.tx)*0.2, h * noise(this.tx)*0.2, d * 4);
    } else {
      sphere(w * noise(this.tx)*0.15);
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