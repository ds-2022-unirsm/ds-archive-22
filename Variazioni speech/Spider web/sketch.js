var myRec = new p5.SpeechRec('it-IT', parseResult); // new P5.SpeechRec object
	myRec.continuous = true; // do continuous recognition
	myRec.interimResults = true; // allow partial recognition (fate, less accurate)

    
var t;
var t1;

function setup()
	{
        createCanvas(windowWidth, windowHeight);
        background(37, 40, 80);
        stroke(255, 18);
        noFill();
        t = 0;
        t1 = 0;
		myRec.start(); // start engine
	}

function draw()
	{
		  var x1 = width * noise(t + 40);
          var x2 = width * noise(t + 50);
          var x3 = width * noise(t + 60);

  circle(x1, x2, x3);

  t += t1;

	}
	function parseResult()
	{
		                                            
 var mostrecentword = myRec.resultString.split(' ').pop();                                if(mostrecentword.indexOf("piano")!==-1) { t1 = 0.005; }
	else if(mostrecentword.indexOf("veloce")!==-1) { t1 = 1; }
      else if(mostrecentword.indexOf("cancella")!==-1) { background(37, 40, 80);
		console.log(mostrecentword);
	}
    }