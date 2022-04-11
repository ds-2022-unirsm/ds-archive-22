var t;
var t1;

//speech recognition
let mySpeechRec = new p5.SpeechRec();
mySpeechRec.interimResults = true;
mySpeechRec.onResult = parseResult;
mySpeechRec.start();
mySpeechRec.onEnd = restartRec;

//computer voice


//location & speed of the brush, controls the direction of the brush
let xloc = 0,
  yloc = 0,
  xspeed = 0.5,
  yspeed = 0.5;

//drawing stuff
let brushCol = 0;
let drawAry = [];

function setup() {
  createCanvas(600, 600);
  //set the starting point to be the center of the canvas
  xloc = width / 2;
  yloc = height / 2;
  //text settings
    t = 0;
     t1 = 0;
  
}

function draw() {
t = 0;
t1 = 0;

  
var x =  noise(t + 400);    
var y =  noise(t1 + 30);
  
  background(0);
  //update the x and y locations of the brush
  xloc += xspeed+ y;
  yloc += yspeed+ x;
  //update the current location and color of the brush, put them into a temp object
  let drawingInfo = {
    x: xloc + x,
    y: yloc+ y,
    col: brushCol,
  };
  drawAry.push(drawingInfo); //push the info into the array

  for (let i = 0; i < drawAry.length; i++) {
    fill(0,255,0);
    
    rect(drawAry[i].x, drawAry[i].y, 50 );
  }

}

function parseResult() {
  let lowerStr = mySpeechRec.resultString.toLowerCase(); //turn everything to lowercase so we don't have to worry about case
  let mostRecentWord = lowerStr.split(" ").pop(); //get the most recent word by spliting the string into an array and using pop to get the last element
{
    brushCol = color(mostRecentWord);
  }
  if (mostRecentWord == "clear") {
    drawAry = []; //empty the drawing info array
  }
  if (mostRecentWord == "up") {
    xspeed = 0 ;
    yspeed = -0.5;
  }
  if (mostRecentWord == "down") {
    xspeed = 0;
    yspeed = 0.5;
  }
  if (mostRecentWord == "left") {
    xspeed = -0.5;
    yspeed = 0;
  }
  if (mostRecentWord == "right") {
    xspeed = 0.5;
    yspeed = 0;
  }
}



function restartRec() {
  mySpeechRec.start();
}
