//10PRINT STEFANIA PAPA
//VARIAZIONE ELLIPSE

var x = 0; 
var y = 0; 
var g = 30; // dimensione griglia
var spessore = (g/10); //spessore linea


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(255,53,184);
 
}

function draw() {
  
  strokeWeight(spessore);
  // lancio la monetina e disegno 
  if (testa()) {
    stroke(119, 221, 119);
    fill (189, 236, 182);
    ellipse(x + g/10 + g/2, y+ g/10+g/2, g)
  } else {
    stroke(119, 221, 119);
    fill (0, 143, 57);
    ellipse(x + g/10+g/2, y + g/10+g/2, g)
  }
  // passo alla casella a lato
  x= x + g ;
  // se sono in fondo alla riga vado a capo alla riga successiva
  if (x >= width) {
    x = 0;
    y= y + g;
    
  }
  // se sono in fondo alla pagina ricomincio con spessore minore
  if (y >= height) {
    background(255,53,184);
    x=0;
    y = 0;
    spessore= g/30;
  
  }
}

 
//premendo il mouse cambia colore di sfondo e riparte a disegnare
//divide e raddoppia lo spessore
function mousePressed() {
  x = 0;
  y = 0;

    spessore = spessore*2;
   background(255,192,203);
    }
    

// lancio della monetina per probabilità
function testa() {
  if (random(3) <= 2) {
    return (true); // testa
  } else {
    return (false); // croce
  }
}


