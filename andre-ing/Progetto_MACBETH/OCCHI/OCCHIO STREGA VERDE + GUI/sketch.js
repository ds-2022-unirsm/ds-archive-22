// Finds eyes from webcam and draws a representation of them on
// the canvas, with random colors for the irises. Click on the
// canvas to save an image; press a key to clear the canvas.

// Starting point: https://editor.p5js.org/kylemcdonald/sketches/BJOcyD9hm 🙏

let capture = null;
let tracker = null;
let positions = null;
let w = 0,
  h = 0;

/////////////////////////
let angle;
let slider;
let slider2;


//////////////////////////

function setup() {
  w = windowWidth;
  h = windowHeight;
  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  frameRate(30);
  colorMode(RGB);
  //background(0);

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
  slider = createSlider(100, 300, 0);
  slider2 = createSlider(0, 100, 100);
  
}

function draw() {
  background(0);

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
      bottom: getPoint(26),
    };

    const irisColor = color(0, 255, 0);
    
    
    
    drawSfondo(eye1);
    drawEye2(eye1, irisColor);
    drawEye(eye1, irisColor);
    
  }
}

function getPoint(index) {
  return createVector(positions[index][0], positions[index][1]);
}

function drawSfondo(eye) {
  
  const irisRadius = min(eye.center.dist(eye.top), eye.center.dist(eye.bottom));
  const irisSize = irisRadius * 20;

  //translate(w , h );
  let val = slider.value();
  angle = slider2.value();
  
  stroke(255, 255, 255);
  strokeWeight(4)
  v1 = createVector(w,h);
  for (let i = 0; i < angle; i++) {
  v1 = v1.rotate(angle)
 
  line(v1.x, v1.y, eye.center.x, eye.center.y);

   }
/*
  //for (let i = 0; i < angle; i++) {
    rotate(PI/angle);
    strokeWeight(5);
    stroke(255);
    
    line(eye.center.x,eye.center.y,0, 0);
*/
/*
    push();
    scale(1, -1);
    line(eye.center.x, eye.center.y, irisSize, irisSize);
    pop();
    */
// }
}

function drawEye2(eye, irisColor) {
  let val = slider.value();
  //background(0)
  const irisRadius = min(eye.center.dist(eye.top), eye.center.dist(eye.bottom));
  const irisSize = irisRadius * 40;
  noStroke();
  fill(0);
  ellipse(eye.center.x, eye.center.y, 350,val);
  
  
}



function drawEye(eye, irisColor) {
  //background(0)
  const irisRadius = min(eye.center.dist(eye.top), eye.center.dist(eye.bottom));
  const irisSize = irisRadius * 10;
  noStroke();
  fill(irisColor);
  ellipse(eye.center.x, eye.center.y, irisSize, irisSize);

  const pupilSize = irisSize / 3;
  fill(0);
  ellipse(eye.center.x, eye.center.y, pupilSize, pupilSize);
  
  
}

/*function mouseClicked() {
  const timestamp = timestampString();
  saveCanvas("eyeTrail-" + timestamp, "png");
}*/
