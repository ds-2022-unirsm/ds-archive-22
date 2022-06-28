//2022 © alericciardo, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm
//github.com/ds-2022-unirsm — github.com/fupete
//Educational purposes, MIT License, 2022, San Marino

let gui = new UIL.Gui({ // interfaccia
  css:'right:0; top:0;',
  bg:'#000000', // to update new version
  w:250 
} ); 

let arr = [];
let d1 = 2; 
let d2 = 200; 
let d3 = 2;

let x = -200;
let y = -200;
let z = -200;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setupGui();
  createEasyCam();
}

function draw() {
  //ambientLight(255,200,20);
  background(255);
  noStroke();
  //fill(255,192,203);

  let locX = mouseX - windowWidth / 2;
  let locY = mouseY - windowHeight / 2;

  for (let p of arr) {
    push();
    translate(p.x/0.8, p.y/2 , p.z/5 );
    pointLight(250, 250, 250, locX, locY, 100);
    noFill()
    if (p.o < 0.3) {
      fill(0);
      //stroke(0.001)
      rotateZ(frameCount * 0.009);
      rotateX(frameCount * 0.009);
      //rotateY(frameCount * 0.01);
      box(d1,d3, d2);
    } else {
      fill(0);
      //stroke(0.001)
      //rotateZ(-frameCount * 0.01);
      rotateX(-frameCount * 0.009);
      rotateY(-frameCount * 0.009);
      box(d3, d2, d1);
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

  x = x + 50;
  if (x > 150) {
    x = -200;
    y = y + 100;
  }
  if (y > 350) {
    y = -200;
    z = z + 50 * 10;
  }
  if (z > 1000) {
    y = -200;
    x = -200;
    z = -200;
    arr = [];
    
  }
  
  
}

function setupGui() {
  gui_gr0 = gui.add('group', { name:'COSTRUZIONI'});
    gui_gr0.add('slide', { name:'d1', value:10, min: 2 , max:30, callback:cambiad1});
   gui_gr0.add('slide', { name:'d2', value:10, min: 5, max:200, callback:cambiad2});
     gui_gr0.add('slide', { name:'d3', value:10, min: 2, max:30, callback:cambiad3});
}


var cambiad1 = function(valore){ 
  d1 = valore;
}
var cambiad2 = function(valore){ 
  d2 = valore;
}
var cambiad3 = function(valore){ 
  d3 = valore;
}
