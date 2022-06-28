

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
  textSize(20);
  textAlign(LEFT);
  stroke(r,g,b);
  strokeWeight(0.5);
  noFill();
  text("draw: up, down, left, right, clear",30,50);
  		rect(x, y, 20, 20);
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
		else if(mostrecentword.indexOf("clear")!==-1) { background(0,220); }

       console.log(foo.resultString); // log the result
	}


  
function mousePressed() {
  r = r-40;
  g = g-40;
  b = b-40;
  if (r <= 0){
    r=255;
    g=255;
    b=255;
    console.log(r)
  }

}
