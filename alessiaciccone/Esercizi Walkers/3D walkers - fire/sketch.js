
// -
// 3D_WALKERS_FIRE 0.1 by @alessiaciccone [walkers,random,noise]
// 2022 © Alessia M.T. Cicone @alessiaciccone, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete — github.com/alessiaciccone
// Educational purposes, MIT License, 2022, San Marino
// —
// @fupete (github.com/fupete) for https://editor.p5js.org/fupete/sketches/09hWlp5A9
// original license:


let cubi = []; //array che contiene tutti i camminatori
let numeroCubi = 20;
let mondo = 700; //dimensioni del mondo o spazio entro cui cammina
let grid = mondo / numeroCubi;
let w, h;


function setup() {
  createCanvas(w = windowWidth, h = windowHeight, WEBGL);
  pixelDensity(displayDensity());
  
  let index = 0;
  for (let x = 0; x < numeroCubi; x++) {
    for (let z = 0; z < numeroCubi; z++) {
        cubi.push(new creaCubo(index));
        cubi[index].x = x;
        cubi[index].z = z;
        index++;
      }
    }
  
}


function draw() {
  background(0);
  orbitControl();
  lights();
  translate(-mondo / 2, -mondo, -mondo/2);  
  rotateX(- QUARTER_PI/2);

  push();
  translate(grid/2, mondo/2, grid/2);
   for (let i = 0; i < cubi.length; i++) {
    cubi[i].display();
    cubi[i].cammina();
  }
  pop();
  
  //push();
  //noFill();
  //stroke(255);
  //strokeWeight(2);
  //translate(mondo / 2, mondo / 2, mondo / 2);
  //box(mondo);
  //pop();
  
}

function creaCubo(_id) {
  this.id = _id;
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.t = random(100);
  this.tIncremento = random(0.05);

  this.display = function () {
    push();
    fill(255, 0, 0, 15);
    noStroke();
    translate(this.x * grid, this.y * grid, this.z * grid);
    box(grid);

    pop();
  };

  this.cammina = function () {
    this.y = noise(this.t) * 10;
    this.t += this.tIncremento;
  };
}
