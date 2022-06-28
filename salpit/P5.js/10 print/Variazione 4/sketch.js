//      ___      ___      ___   ___      ___     ___
//     /\  \    /\  \    /\__\ /\  \    /\  \   /\  \
//    /::\  \  /::\  \  /:/  //::\  \  _\:\  \  \:\  \
//   /\:\:\__\/::\:\__\/:/__//::\:\__\/\/::\__\ /::\__\
//   \:\:\/__/\/\::/  /\:\  \\/\::/  /\::/\/__//:/\/__/
//    \::/  /   /:/  /  \:\__\  \/__/  \:\__\  \/__/
//     \/__/    \/__/    \/__/          \/__/
//-------------------------------------------------------
//2022 © Salvo Pitingaro, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm
//github.com/ds-2022-unirsm — github.com/fupete
//Educational purposes, MIT License, 2022, San Marino

let gui = new UIL.Gui({ 
  css:'right:0; top:0;',
  bg:'#000000', 
  w:250 
} ); 

let arr = [];
let quadrato = true;
let spessore = 100; 

let x = -200,
  y = -200,
  z = -200;
let distanza = 150;
  h = 100,
  d = 100;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setupGui();
  createEasyCam();
}

function draw() {
  background(0);
  lights();
  //stroke(255);
  //noFill();
  noStroke();
  strokeWeight(2);

  
  ambientLight(60,60,60);
  rotateY(millis() / 2000);
  rotateX(millis() / 2000);
  rotateZ(millis() / 2000);

  for (let p of arr) {
    push();
    translate(p.x*2, p.y*2, p.z*10);
    rotate(millis() / 2000);
    
    if (p.o < 0.5) {
      //vertex(p.x,p.y,p.z-d);
      //vertex(p.x,p.y+h,p.z);

      sphere(distanza/8, spessore/2 , distanza*d );
      
    } else {
      stroke(255)
      strokeWeight(2)
      noFill()
      box(distanza*3, spessore*1 , distanza*20 );
    }
    pop();

  }
  

    // endShape();
if(quadrato){
  arr.push({
    x: random(),
    y: y,
    z: z,
    o: random(),
  });
  x = x + spessore;
  if (x > 400) {
    x = -200;
    y = y + h;
  }
  if (y > 500) {
    y = -200;
    z = z + d;
  }
  if (z > 300) {
    y = -200;
    x = -200;
    z = -200;
    arr = [];
  }
}
}

function setupGui() {
  gui_gr0 = gui.add('group', { name:'MONDI'});
  gui_gr0.add('bool', { name:'COLONNA', value:false, callback:cambiaquadrato});
    gui_gr0.add('slide', { name:'DIMENSIONI', value:100, min: 20, max:spessore, callback:cambiaspessore});
}

var cambiaquadrato = function(valore){
  quadrato = !quadrato;
  arr = [];
}
var cambiaspessore = function(valore){ 
  spessore = valore;
}
