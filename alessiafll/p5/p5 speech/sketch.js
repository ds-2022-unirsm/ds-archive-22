var myRec = new p5.SpeechRec('it-IT', parseResult); // new P5.SpeechRec object
	myRec.continuous = true; // do continuous recognition
	myRec.interimResults = true; // allow partial recognition (faster, less accurate)

	//var x, y;
	//var dx, dy;
    
var t;
var t1;

function setup()
	{
		// graphics stuff:
		//createCanvas(800, 600);
		//background(255, 255, 255);
		//fill(0, 0, 0, 255);
		//x = width/2;
		//y = height/2;
		//dx = 0;
		//dy = 0;
      
        createCanvas(windowWidth, windowHeight);
        background(0);
        stroke(255, 18);
        noFill();
        t = 0;
        t1 = 0;

		// instructions:
		//textSize(20);
		//textAlign(LEFT);
		//text("draw: piano, veloce, ricomincia", 20, 20);

		//myRec.onResult = parseResult; // now in the constructor
		myRec.start(); // start engine
	}

function draw()
	{
		  var x1 = width * noise(t + 15);
          var x2 = width * noise(t + 25);
          var x3 = width * noise(t + 35);
          var x4 = width * noise(t + 45);
          var y1 = height * noise(t + 55);
          var y2 = height * noise(t + 65);
          var y3 = height * noise(t + 75);
          var y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += t1;

      
      //ellipse(x, y, 5, 5);
		//x+=dx;
		//y+=dy;
		//if(x<0) x = width;
		//if(y<0) y = height;
		//if(x>width) x = 0;
		//if(y>height) y = 0;
	}

	function parseResult()
	{
		// recognition system will often append words into phrases.
		// so hack here is to only use the last word:
		//var mostrecentword = myRec.resultString.split(' ').pop();
		//if(mostrecentword.indexOf("sinistra")!==-1) { dx=-1;dy=0; }
		//else if(mostrecentword.indexOf("destra")!==-1) { dx=1;dy=0; }
		//else if(mostrecentword.indexOf("su")!==-1) { dx=0;dy=-1; }
		//else if(mostrecentword.indexOf("giù")!==-1) { dx=0;dy=1; }
		//else if(mostrecentword.indexOf("pulisci")!==-1) { background(255);
                                                        
 var mostrecentword = myRec.resultString.split(' ').pop();                                                       if(mostrecentword.indexOf("piano")!==-1) { t1 = 0.005; }
		else if(mostrecentword.indexOf("veloce")!==-1) { t1 = 1; }
      else if(mostrecentword.indexOf("ricomincia")!==-1) { background(0);
		console.log(mostrecentword);
	}
    }