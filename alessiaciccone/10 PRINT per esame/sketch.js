// -
// 10PRINT_WAVE 0.1 by @alessiaciccone [10print, noise, armonic_motion, GUI]
// 2022 © Alessia M.T. Cicone @alessiaciccone, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete — github.com/alessiaciccone
// Educational purposes, MIT License, 2022, San Marino
// —
// Credits/Thanks to: 
// @beesandbombs (twitter.com/beesandbombs) for https://twitter.com/beesandbombs/status/940639806522085376
// original license: 
// 
// @shiffman (github.com/shiffman) for https://github.com/CodingTrain/website-archive/tree/main/CodingChallenges/CC_086_beesandbombs/P5
// original license: 
//
// @fupete (github.com/fupete) for https://editor.p5js.org/fupete/sketches/Mw0ugXFno
// original license:
// —
//
// Help:
// [GUI] change visual parameters of the wave
//
// —




let maxD; 
let offset;
let angle = 0;
let time = 0;

// parametri per GUI
let p = {
  velocity : 0.07,
  noise : 0.09,
  grid : 20,
  hMinBox : 1,
  hMaxBox : 100,
  hMinCy : 1,
  hMaxCy : 100,
  blueNoise : false
  
}

// creazione GUI
var gui = new dat.GUI();

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  maxD = dist(0, 0, width, height);  // distanza massima per calcolare offset onda
  
  // aggiungere parametri alla GUI
  gui.add(p, 'velocity', 0.01, 0.5);
  gui.add(p, 'noise', 0.09, 0.5);
  gui.add(p, 'grid', 20, 60);
  gui.add(p, 'hMinBox', 1, 40);
  gui.add(p, 'hMaxBox', 100, 600);
  gui.add(p, 'hMinCy', 1, 40);
  gui.add(p, 'hMaxCy', 100, 600);
  gui.add(p, 'blueNoise');

  updateGui();
}

function updateGui() {
  for (var i in gui.__controllers) {
      gui.__controllers[i].updateDisplay();
  }
}

function draw() {
  background(0);
  translate(width/4, -100, -400);  // posizionare tutto al centro dello schermo
  rotateX(-PI / 3.5);              // avere visione dall'alto ruotata
  lights();

  //creazione griglia di solidi
  for (let z = 0; z < 800; z += p.grid) {
    for (let x = 0; x < 800; x += p.grid) {
      push();
      let d = dist(x, z, width, height);              // distanza dei punti rispetto a width e height
      let offset = map(d, 0, maxD, -PI, PI);          // distanza mappata per avere un offset per ogni solido
      let a = angle + offset;                         // aggiungere offset all'angolo del quale verrà calcolato il seno
      translate(x - width / 2, 0, z - height / 2);    // posizione per ogni solido
      let noiseVal = noise(x, z, time);               // calcoliamo il noise in base a coordinate e un valore temporale
      if (noiseVal < 0.5) {.                          // 10 Print: se noise è minore di 0.5 box, se è maggiore cylinder
        push();
        let h = floor(map(sin(a), -1, 1, p.hMinBox, p.hMaxBox));   // ogni solido ha un'altezza che segue una sinusoide
        box(p.grid/1.5, h, p.grid/1.5);
        pop();
      } else {
        push();
        let h = floor(map(sin(a), -1, 1, p.hMinCy, p.hMaxCy));
        if (!p.blueNoise) {                                     // cambiamento del blu in base al noise
          fill(0,0,255);
        } else {
          let noiseColor = map(noise(time), 0,1,0,255);
          fill(0,0,noiseColor);
        }        
        noStroke();
        cylinder(p.grid/4, h);
        pop();
      }
      pop();
    }
  }
  time += p.noise;     // incremento di tempo
  offset += 0.1;       // incremento di offset
  angle += p.velocity; // incremento velocità dell'onda
}
