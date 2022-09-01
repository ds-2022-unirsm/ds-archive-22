

var foo = new p5.SpeechRec('en-US', parseResult); // new P5.SpeechRec object
	foo.continuous = true; // do continuous recognition
	foo.interimResults = true; // allow partial recognition (faster, less accurate)

foo.start(); // start listening


var x, y;
var dx, dy;
var  r = (0,255);
var g = (0,255);
var b = (0,255);
  
    




function setup() {
createCanvas(windowWidth, windowHeight);
 x = width/2;
 y = height/2;
 dx = 0;
 dy = 0;
 background(0,220);
  

}

function draw() {

  background(r,0 );
  
  // instructions:
  textSize(15);
  textAlign(LEFT);
  stroke(r,g,b);
  strokeWeight(0.1);
  fill('yellow');
  text("Up --> per andare su",110,50);
  text("Down --> per andare giù",110,70);
  text("Left --> per andare a sinistra",110,90);
  text("Right --> per andare a destra",110,110);
  text("Clear --> per cancellare",110,130);
  	circle(x, y, 20,);
	x+=dx;
	y+=dy;
	if(x<0) x = width;
	if(y<0) y = height;
	if(x>width) x = 0;
	if(y>height) y = 0;

	
}


		function parseResult()
	{
		// recognition system will often append words into phrases.
		// so hack here is to only use the last word:
		var mostrecentword = foo.resultString.split(' ').pop();
		if(mostrecentword.indexOf("left")!==-1) { dx=-1;dy=0; }
		else if(mostrecentword.indexOf("right")!==-1) { dx=1;dy=0; }
		else if(mostrecentword.indexOf("up")!==-1) { dx=0;dy=-1; }
		else if(mostrecentword.indexOf("down")!==-1) { dx=0;dy=1; }
		

       console.log(foo.resultString); // log the result
	}


