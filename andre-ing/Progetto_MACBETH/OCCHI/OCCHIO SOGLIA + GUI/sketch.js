let parametri = {

  analisiSfondo: 19, // Slider: inserire valore all'avvio dello sketch 
  effettoSoglia:68,
  effettoSoglia2:25,

};


window.onload = function() {

  var gui = new dat.GUI();
  gui.add(parametri, 'analisiSfondo', 0, 100);
  gui.add(parametri, 'effettoSoglia', 0, 100);
  
}




























let vid;
let poseNet;
let poses = [];

let img

function setup() {
  createCanvas(windowWidth, windowHeight);
  vid = createCapture(VIDEO);
  //vid.size(800, 600);

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

  
    
    background(255);
  fill(0);
    c.loadPixels();
    for (let y = 0; y < c.height; y += 15) {
      for (let x = 0; x < c.width; x += 6) {
      let offset = ((y*c.width)+x)*4;
      let xpos = (x / c.width) * width;
      let ypos = (y / c.height) * height;
      rect(xpos, ypos, parametri.analisiSfondo, parametri.effettoSoglia * (c.pixels[offset+1]/255));
      }
    }

  }
}

