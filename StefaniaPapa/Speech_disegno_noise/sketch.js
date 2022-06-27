var w, h;

//speech recognition
let mySpeechRec = new p5.SpeechRec();
mySpeechRec.interimResults = true;
mySpeechRec.onResult = parseResult;
mySpeechRec.start();
mySpeechRec.onEnd = restartRec;


//computer voice
let computerVoice = new p5.Speech();

//location & speed of the brush, controls the direction of the brush
let xloc = 0,
  yloc = 0,
  xspeed = 0
  yspeed = 0 


let instruction =
  "Pronuncia Red, White, Green o Pink per selezionare il pennello. Clear per cancellare tutto. Up, Down, Left, Right per cambiare direzione.";
//drawing stuff
let brushCol = 0;
let drawAry = [];

function setup() {
  createCanvas(w = windowWidth, h = windowHeight);
  //set the starting point to be the center of the canvas
  xloc = width / 2;
  yloc = height / 2;
  //text settings
  textAlign(CENTER);
  textSize(9);
  noStroke();
  //first, ask user what color they would want to draw in and which direction to go
  computerVoice.speak(
    "Ciao, scegli il colore del pennello e la sua direzione"
  );
}

function draw() {
 
  background(0);
  //update the x and y locations of the brush
  xloc += xspeed;
  yloc += yspeed;
 
  //update the current location and color of the brush, put them into a temp object
  let drawingInfo = {
    x: xloc,
    y: yloc,
    col: brushCol ,
  };
  drawAry.push(drawingInfo); //push the info into the array
  //draw circles based on info stored in the info array
  for (let i = 0; i < drawAry.length; i++) {
    fill(drawAry[i].col);
    circle(drawAry[i].x, drawAry[i].y, 30);
  }
  //instruction text
  fill(255);
  text(instruction, width / 2, height / 2);
}

function parseResult() {
  let lowerStr = mySpeechRec.resultString.toLowerCase(); //turn everything to lowercase so we don't have to worry about case
  let mostRecentWord = lowerStr.split(" ").pop(); //get the most recent word by spliting the string into an array and using pop to get the last element
  print(mostRecentWord);
  //execute code based on the status of the program
  if (
    mostRecentWord == "red" ||
    mostRecentWord == "white" ||
    mostRecentWord == "green" ||
    mostRecentWord == "pink"
  ) {
    brushCol = color(mostRecentWord);
  
  }
  if (mostRecentWord == "clear") {
    drawAry = []; //empty the drawing info array
  }
  if (mostRecentWord == "up") {
    xspeed = 0;
    yspeed = -0.5;
  }
  if (mostRecentWord == "down") {
    xspeed = 0;
    yspeed = 0.5;
  }
  if (mostRecentWord == "left") {
  
    this.noisex = random(30);
    this.x = noise(this.noisex) * w;
    this.noisex += 10 * xspeed;
    
    fill(65 * noise(this.noisex), 30 * noise(this.noisex + 10), 105 * noise(this.noisex+10));
    
    //xspeed = 0.5;
    yspeed = 0;
      
    
  }
  if (mostRecentWord == "right") {
    xspeed = 1;
    yspeed = 0;
  }
}

function restartRec() {
  mySpeechRec.start();
}
