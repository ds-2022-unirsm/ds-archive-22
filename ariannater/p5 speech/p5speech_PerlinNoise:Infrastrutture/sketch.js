

var foo = new p5.SpeechRec('it', parseResult); // new P5.SpeechRec object
	foo.continuous = true; // do continuous recognition
	foo.interimResults = true; // allow partial recognition (faster, less accurate)

foo.start(); // start listening


	var x, y;
	var dx, dy;
  var  r ;
  var g ;
 var b ;
var t;
  
    




function setup() {
  createCanvas(windowWidth, windowHeight);
 x = width/2;
 y = height/2;
dx = 0;
 dy = 0;
    t = 0;
  background(0,220);
  

}

function draw() {

  background(220,0);
  var r = 255 * noise(t+5);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);

  
  
  // instructions:
  textSize(20);
  textAlign(LEFT);
  fill(255,255,255);
  noStroke();
  text("Comandi: su, giù, sinistra, destra,veloce, pulisci",30,50);
  noStroke();
  fill(r,g,b);
  rect(x, y, 40, 40);
  noFill();
  stroke(r,g,b);
  rect(x+20, y-15, 40, 40);
  
  

  
		x+=dx;
		y+=dy;
		if(x<0) x = width;
		if(y<0) y = height;
		if(x>width) x = 0;
		if(y>height) y = 0;
      t = t + 0.03;
}


		function parseResult()
	{
		// recognition system will often append words into phrases.
		// so hack here is to only use the last word:
		var mostrecentword = foo.resultString.split(' ').pop();
		if(mostrecentword.indexOf("sinistra")!==-1) { dx=-1;dy=0; }
		else if(mostrecentword.indexOf("destra")!==-1) { dx=1;dy=0; }
		else if(mostrecentword.indexOf("su")!==-1) { dx=0;dy=-1; }
		else if(mostrecentword.indexOf("giù")!==-1) { dx=0;dy=1; }
      else if(mostrecentword.indexOf("veloce")!==1) { dx=1+t;dy=0;}
		else if(mostrecentword.indexOf("pulisci")!==-1) { background(0,220); }

       console.log(foo.resultString); // log the result
	}


  





