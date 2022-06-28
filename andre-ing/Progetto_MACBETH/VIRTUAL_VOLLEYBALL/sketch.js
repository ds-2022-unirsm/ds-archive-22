// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];

var myRec = new p5.SpeechRec('en-US', parseResult); // new P5.SpeechRec object
	myRec.continuous = true; // do continuous recognition
	myRec.interimResults = true; // allow partial recognition (faster, less accurate)

	var x, y;
	var dx, dy;



function setup() {
  createCanvas(windowWidth,windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
  
  
  fill(0, 0, 0, 255);
		x = width/2;
		y = height/2;
		dx = 0;
		dy = 0;

		// instructions:
		textSize(20);
		textAlign(LEFT);
		text("draw: top, down, left, right, clear", 20, 20);

		//myRec.onResult = parseResult; // now in the constructor
		myRec.start(); // start engine
  
  
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {

  rect(x, y, 40, 40);
		x+=dx;
		y+=dy;
		if(x<0) x = width;
		if(y<0) y = height;
		if(x>width) x = 0;
		if(y>height) y = 0;
  
  
  background(0,10);
 
  
  
  
  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        //fill(random(255), random(255), random(255));
        stroke(random(255), random(255), random(255))
        //noStroke();
        ellipse(pose.nose.x, pose.nose.y, 80, 80);
        noFill();
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(random(255), random(255), random(255));
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}

	function parseResult()
	{
		// recognition system will often append words into phrases.
		// so hack here is to only use the last word:
		var mostrecentword = myRec.resultString.split(' ').pop();
		if(mostrecentword.indexOf("left")!==-1) { dx=-1;dy=0; }
		else if(mostrecentword.indexOf("right")!==-1) { dx=1;dy=0; }
		else if(mostrecentword.indexOf("top")!==-1) { dx=0;dy=-1; }
		else if(mostrecentword.indexOf("down")!==-1) { dx=0;dy=1; }
		else if(mostrecentword.indexOf("clear")!==-1) { background(0); }
		console.log(mostrecentword);
	}