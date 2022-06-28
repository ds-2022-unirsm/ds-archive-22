// -
// 10Print_variazione 4 by Chiara Guiducci [3D, slider]
// 2022 © Chiara @guiduc, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —
// Help:
// [mouse] : posso navigare nella finestra per visionare la figura 3D
// —

let arr=[];
let x=-300,y=-200,z=-300;
let w=50,h=50,d=50;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam();
}

function draw() {
  background(0);
  noFill();
  strokeWeight(1.5);
  

  for (let p of arr){
     push()
     translate(p.x,p.y,p.z);
    
  if(p.o<0.5){
    stroke(255); 
    box(w,h,d);

    }else{
      stroke(152,203,255,60); 
      sphere(w/4);
    }
         pop()
     endShape();
    }
  
  arr.push({
    x:x,y:y,z:z,o:random()
  })
  
  x=x+w;
  if (x>300){
    x=-300;
    y=y+h;
  }
  if (y>200){
    y=-200;
    z=z+d;
  }
  if (z>2){
    y=-200;
    x=-200;
    z=-200;
    arr=[];
  }
}