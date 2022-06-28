let vid;
let poseNet;
let poses = [];

function setup() {
  createCanvas(800, 600);
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
    vid.loadPixels();
    let occhiox = Math.ceil(pose.leftEye.x);
    let occhioy = Math.ceil(pose.leftEye.y);

    for (let y = occhioy - 30; y < pose.leftEye.y + 30; y += 1) {
      for (let x = occhiox - 30; x < pose.leftEye.x + 30; x += 1) {
        let colorFromVideo = vid.get(x, y);
        let b = brightness(colorFromVideo);
        if (b > 40) fill("white");
        else fill("black");

        rect(x, y, 8, 8);
        
        
      }
    }
  }
}