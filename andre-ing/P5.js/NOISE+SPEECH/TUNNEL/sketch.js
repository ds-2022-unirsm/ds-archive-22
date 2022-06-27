let speech = new p5.SpeechRec('en-US', parseResult);
speech.continuous = true
speech.interimResults = false
var t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //ckground(0);
  stroke(255);
 // noFill();
  fill(0)
  t = 0;
  speech.start()
}

function draw() {
  rectMode(CENTER);
  translate(windowWidth/2, windowHeight/2);
  translate(p5.Vector.fromAngle(millis() / 1000, 200));
  rect(0, 0, 20, 20);
  beginShape();
  for (var i = 0; i < 200; i++) {
    var ang = map(i, 0, 200, 0, TWO_PI);
    var rad = 200 * noise(i * 0.01, t * 0.008);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
 }
  endShape(CLOSE);

  t +=1;

  // clear the background every 600 frames using mod (%) operator
  //if (frameCount % 600 == 0) {
	//background(255);
 // }

}

const colors = []

function parseResult() {
  if (speech.resultValue) {
    const color = speech.resultString.split(' ').pop().toUpperCase()
    colors.push(color)
    stroke(color)
    console.log(colors)
  }
}