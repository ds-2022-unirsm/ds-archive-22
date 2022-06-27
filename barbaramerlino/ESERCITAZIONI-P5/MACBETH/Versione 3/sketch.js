let mySound;
let fft;

function preload() {
  mySound = loadSound("X2Download.com-Macbeth Sound(360p).mp4");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fft = new p5.FFT(0.8, 128);
  fft.setInput(mySound);
  
  mySound.loop(0, 1, 1, 0, 50);
}


function draw() {
  background(0);
  //rect(10,10,10)
  noStroke();
  fill(255);
  const data = fft.analyze();

  for (let i = 0; i < 5; i++) {
    const x = map(i, 0, 5, 0, windowWidth);
    const y = map(data[i], 0, windowHeight/2, windowWidth, 350);
          fill(255)
    rect(x, y, 50, 500);
  }
  
    for (let i = 0; i < 5; i++) {
    const x = map(i, 0, 5, 0, windowWidth);
    const y = map(data[i], 0, windowHeight/4, windowWidth, 350);
      fill(255)
      rect(x, -y, 100, 500);
  }
  
}
