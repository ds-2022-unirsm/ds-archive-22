let vid;
let poseNet;
let poses = [];

let img

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

    
    
    let occhiox = pose.leftEye.x-30;
    let occhioy = pose.leftEye.y-30;

    let porzioneocchio = vid.get(occhiox, occhioy,50,50);
    let ciao = image(porzioneocchio,0,0,windowWidth,windowHeight);
    let c = get ();

  
    
    
    loadPixels();
    for (let y = 0; y < c.height; y += 8) {
      for (let x = 0; x < c.width; x += 8) {
        let colorFromVideo = c.get(x, y);
        let b = brightness(colorFromVideo);
        if (b > 35) fill("white");
        else fill("black");
        rect(x, y, 10, 10); 
      }
    }

    
  }
}