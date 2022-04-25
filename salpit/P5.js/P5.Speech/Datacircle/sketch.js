let speech = new p5.SpeechRec('en-US', parseResult);
speech.continuous = true
speech.interimResults = false
var t;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(2);
  stroke(255,100);
 // noFill();
  fill(0,10)
  t = 0;
  speech.start()
  strokeWeight(1.5)
  fill(0)
  circle(windowWidth/2,windowHeight/2,200)
   fill(255)
    ellipse(windowWidth/2,windowHeight/2,100,100)
  
}

function draw() {
  
  rectMode(CENTER);
  translate(windowWidth/2, windowHeight/2);
  translate(p5.Vector.fromAngle(millis() / 1000, 200));
  
  point(0, 0);
  strokeWeight(6)
  beginShape();
  for (var i = 0; i < 100; i++) {
    var ang = map(i, 0, 4, 0, TWO_PI*2);
    var rad = 50 * noise(i * 0.05, t * 5);
    var x = rad * sin(ang);
    var y = rad * cos(ang);
    //curveVertex(x, y);
    
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
