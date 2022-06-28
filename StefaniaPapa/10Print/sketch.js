//  _________ __          _____              .__        
// /   _____//  |_  _____/ ____\____    ____ |__|____   
// \_____  \\   __\/ __ \   __\\__  \  /    \|  \__  \  
// /        \|  | \  ___/|  |   / __ \|   |  \  |/ __ \_
// _______  /|__|  \___  >__|  (____  /___|  /__(____  /
//        \/           \/           \/     \/        \/     
// 10Print_Variazione 0.1 Stefania Papa by @StefaniaPapa [noise,colors,3D]
// 2022 © Stefania Papa @StefaniaPapa, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —




var x = 0; 
var y = 0; 
var g = 30; // dimensione griglia
var sfondo = 255
var spessore = (g/3); //spessore linea


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(sfondo);
  strokeJoin(ROUND);
}

function draw() {
  preparaQuadretto();
  strokeWeight(spessore);
  // lancio la monetina e disegno la riga a destra o sinistra
  if (testa()) {
    line(x , y, x + g ,  y + g);
  } else {
    line(x, y + g , x + g , y);
  }
  // passo alla casella a lato
  x= x + g ;
  // se sono in fondo alla riga vado a capo alla riga successiva
  if (x >= width) {
    x = 0;
    y= y + g;
    
  }
  // se sono in fondo alla pagina ricomincio con griglia differente
  if (y >= height) {
    background(sfondo);
    x=0
    y = 0;
    g =  random(width);
    spessore= g/3;
  
  }
}

 
//premendo il mouse cambia colore di sfondo e riparte a disegnare
//divide e raddoppia lo spessore
function mousePressed() {
  x = 0;
  y = 0;

    if (sfondo == 0 ) {
    spessore= spessore/2;
    sfondo = 255;
    
    }
    else {
      sfondo = 0;
      spessore = spessore*2;
    }
    background(sfondo)
}


// lancio della monetina per probabilità
function testa() {
  if (random(3) <= 2) {
    return (true); // testa
  } else {
    return (false); // croce
  }
}


//cancella un quadretto prima di disegnarci
function preparaQuadretto() {
  
  fill(sfondo);
  noStroke();
  stroke(255, 117, 20);
  
}

