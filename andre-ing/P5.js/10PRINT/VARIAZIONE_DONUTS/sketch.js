//2022 © Andrea Ingrando, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm
//github.com/ds-2022-unirsm — github.com/fupete
//Educational purposes, MIT License, 2022, San Marino

let gui = new UIL.Gui({ // interfaccia
  css:'right:0; top:0;',
  bg:'#000000', // to update new version
  w:250 
} ); 

let arr = [];
let dimensione = 30; 
let spessore = 8; 


let x = -200,
  y = -200,
  z = -200;
let w = 50,
  h = 50,
  d = 50; 

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setupGui();
  createEasyCam();
}

function draw() {
  ambientLight(140);
  background(255,255,181);
  noStroke();
  fill(255,192,203);

  let locX = mouseX - windowWidth / 2;
  let locY = mouseY - windowHeight / 2;

  for (let p of arr) {
    push();
    translate(p.x/0.8, p.y/2 , p.z/5 );

    pointLight(250, 250, 250, locX, locY, 100);

    if (p.o < 0.3) {
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      torus(dimensione, spessore);
    } else {
      fill(171, 205,239);
      rotateZ(-frameCount * 0.01);
      rotateX(-frameCount * 0.01);
      rotateY(-frameCount * 0.01);
      torus(dimensione, spessore);
    }
    pop();
    // endShape();
    
  }
  

  arr.push({
    x: x,
    y: y,
    z: z,
    o: random(),   
  });

  x = x + w;
  if (x > 150) {
    x = -200;
    y = y + h * 2;
  }
  if (y > 350) {
    y = -200;
    z = z + d * 5;
  }
  if (z > 1500) {
    y = -200;
    x = -200;
    z = -200;
    arr = [];
    
  }
  
  
}

function setupGui() {
  gui_gr0 = gui.add('group', { name:'DONUTS'});
    gui_gr0.add('slide', { name:'CIRCONFERENZA', value:30, min: 2, max:50, callback:cambiadimensione});
   gui_gr0.add('slide', { name:'SPESSORE', value:8, min: 2, max:50, callback:cambiaspessore});
}


var cambiadimensione = function(valore){ 
  dimensione = valore;
}
var cambiaspessore = function(valore){ 
  spessore = valore;
}
