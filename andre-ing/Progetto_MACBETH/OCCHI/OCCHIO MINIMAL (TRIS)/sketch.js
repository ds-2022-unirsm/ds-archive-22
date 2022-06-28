//FARE CLICK SULLA CANVANS E POI PREMERE FRECCIA DESTRA/SINISTRA PER APRIRE E CHIUDERE L'OCCHIO

let color = (0,255,0);
let fr=60;
let p={
  hOcchio:100,
}
let altezza = 0
let rettangolo


    
function setup() {
   w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  rectMode(CENTER);
}

function draw() {
 background(0);
  frameRate(fr);
  //frameCount=(frameCount%100);

    
  //noStroke(0);
  //strokeWeight(0);

  
  //PREMERE LA FRECCIA DESTRA PER APRIRE I TRE OCCHI
  if (keyCode === RIGHT_ARROW && frameCount % 1 == 0 ) {
    altezza++;
    fill(255);
    rettagolo= rect(w/2,h/2,100,altezza,10);
    rettagolo= rect(w/3,h/2,100,altezza,10);
    rettagolo= rect(w/3*2,h/2,100,altezza,10);
    }
  
   if (altezza > 99 ) {
    altezza= 100;
    rettagolo= rect(w/2,h/2,100,altezza,10);
    rettagolo= rect(w/3,h/2,100,altezza,10);
    rettagolo= rect(w/3*2,h/2,100,altezza,10);
    }
  
  //PREMERE LA FRECCIA SINISTRA PER CHIUDERE I TRE OCCHI
  if (keyCode === LEFT_ARROW && frameCount % 1 == 0 ) {
    fill(255);
    altezza--;
    rettagolo= rect(w/2,h/2,100,altezza,10);
    rettagolo= rect(w/3,h/2,100,altezza,10);
    rettagolo= rect(w/3*2,h/2,100,altezza,10);
    }
  
   if (altezza < 1 ) {
    altezza= 0;
    rettagolo= rect(w/2,h/2,100,altezza,10);
    rettagolo= rect(w/3,h/2,100,altezza,10);
    rettagolo= rect(w/3*2,h/2,100,altezza,10);
    }
  
  //rectpupilla 
  
  fill(0);
  stroke(0);
  rectMode(CENTER);
  rect(w/2,h/2,15,15,3);
  rect(w/3,h/2,15,15,3);
  rect(w/3*2,h/2,15,15,3);


  

  
}
