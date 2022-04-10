//provare a mettere il noise

let Xpos = 0, Xv = 0, Ypos = 0, Yv =0,Stop = false


var SpeechRec = new p5.SpeechRec()
SpeechRec.continuous = true;
SpeechRec.interimResults = true;


function setup() {
 createCanvas(800,800);
  stroke(255, 0, 100);
    strokeWeight(15);
  background(255)
  SpeechRec.start();
  SpeechRec.onResult = showResult
}


function draw() {
  point (width/2 + Xpos, height/2 + Ypos)
  if (Stop == false){
Xpos = Xpos + Xv
Ypos = Ypos + Yv   
}
}


function showResult (){
 switch (SpeechRec.resultString){
   case "alto":
   Yv = -1
   Xv = 0
   break
   case "basso":
   Yv = 1
   Xv = 0
   break
   case "destra":
   Yv = 0
   Xv = 1
   break
   case "sinistra":
   Yv = 0
   Xv = -1 
   break
 }
}