let mySound;
let fft;

function preload() {
  mySound = loadSound("suono.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fft = new p5.FFT(0.8, 128);
  fft.setInput(mySound);
  mySound.loop(0, 1, 1, 0, 4);
}


function draw() {
  background(0);
  //rect(10,10,10)
  noStroke();
  fill(255);
  const data = fft.analyze();

  for (let i = 0; i < 18; i++) {
    const x = map(i, 0, 18, 0, windowWidth);
    const y = map(data[i], 0, 255, 190, 350);
    rect(x, y, 15, 600);
    //triangle(x, y, 2, 200);
  }
}
