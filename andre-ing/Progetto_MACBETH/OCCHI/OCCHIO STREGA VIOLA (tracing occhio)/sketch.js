// Finds eyes from webcam and draws a representation of them on
// the canvas, with random colors for the irises. Click on the
// canvas to save an image; press a key to clear the canvas.

// Starting point: https://editor.p5js.org/kylemcdonald/sketches/BJOcyD9hm 🙏

let capture = null;
let tracker = null;
let positions = null;
let w = 0, h = 0;

/////////////////////////
let angle;
let slider
let slider2
//////////////////////////

function setup() {
  w = windowWidth;
  h = windowHeight;
  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  frameRate(60);
 colorMode(HSB, 360, 150, 100, 1);
  background(0);

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
  slider = createSlider(0,255,0)
  slider2 = createSlider(6,32,100)
}

function draw() {
  background(0)
  
  // Flip the canvas so that we get a mirror image
	translate(w, 0);
  scale(-1.0, 1.0);
  // Uncomment the line below to see the webcam image (and no trail)
  //image(capture, 0, 0, w, h);
  positions = tracker.getCurrentPosition();

  if (positions.length > 0) {

    // Eye points from clmtrackr:
    // https://www.auduno.com/clmtrackr/docs/reference.html
    const eye1 = {
      outline: [23, 63, 24, 64, 25, 65, 26, 66].map(getPoint),
      center: getPoint(27),
      top: getPoint(24),
      bottom: getPoint(26)
      
      
    };
    
    const irisColor = color(255,70,200);
    drawEye(eye1, irisColor);
    drawSfondo(eye1);
  }
  
}

function getPoint(index) {
  return createVector(positions[index][0], positions[index][1]);
}

function drawSfondo(eye) {
  const irisRadius = min(eye.center.dist(eye.top), eye.center.dist(eye.bottom));
  const irisSize = irisRadius *20;
  
  translate(w / 2, h / 2);
  let val = slider.value()
  angle = slider2.value() 
  
  for (let i = 0; i < angle; i++) {
    rotate(angle)
    strokeWeight(5);
    stroke(255);
    line(eye.center.x, eye.center.y, irisSize, irisSize);

   /* push();
    scale(1, -1);
    line(eye.center.x, eye.center.y, irisSize, irisSize);
    pop();*/
  }
}

function drawEye(eye, irisColor) {

  const irisRadius = min(eye.center.dist(eye.top), eye.center.dist(eye.bottom));
  const irisSize = irisRadius *20;
  noStroke();
  fill(irisColor);
  ellipse(eye.center.x, eye.center.y, irisSize, irisSize);
  
  const pupilSize = irisSize / 3;
  fill(0);
  ellipse(eye.center.x, eye.center.y, pupilSize, pupilSize);
}

function drawEyeOutline(eye) {
	beginShape();
  const firstPoint = eye.outline[0];
  eye.outline.forEach((p, i) => {
    curveVertex(p.x, p.y);
    if (i === 0) {
      // Duplicate the initial point (see curveVertex documentation)
      curveVertex(firstPoint.x, firstPoint.y);
    }
    if (i === eye.outline.length - 1) {
      // Close the curve and duplicate the closing point
      curveVertex(firstPoint.x, firstPoint.y);
      curveVertex(firstPoint.x, firstPoint.y);
    }
  });
  endShape();
}

function keyPressed() {
  // Clear background
  background(0);
}

/*function mouseClicked() {
  const timestamp = timestampString();
  saveCanvas("eyeTrail-" + timestamp, "png");
}*/

function timestampString() {
  return year() + nf(month(), 2) + nf(day(), 2) + "-" + nf(hour(), 2) + nf(minute(), 2) + nf(second(), 2);
}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
  background(0);
}