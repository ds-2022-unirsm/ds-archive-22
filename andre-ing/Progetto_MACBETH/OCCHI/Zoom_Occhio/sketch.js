let vid;
let poseNet;
let poses = [];

let img;
let ciao;

function setup() {
  createCanvas(windowWidth, windowHeight);
  vid = createCapture(VIDEO);
  vid.size(800, 600);

  vid.hide();
  noStroke();

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(vid);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function (results) {
    poses = results;
  });
 
}
function draw() {
occhio();
}

  function occhio(){
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;

    background(0);
    let occhiox = pose.leftEye.x-30;
    let occhioy = pose.leftEye.y-30;

    let colorFromVideo = vid.get(occhiox, occhioy,50,50);
    img = image(colorFromVideo,0,0,windowWidth,windowHeight);
    


  }
}
