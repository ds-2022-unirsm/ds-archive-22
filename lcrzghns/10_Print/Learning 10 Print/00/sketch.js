let x=0;
let y=0;
let w=20;
let h=20;

function setup() {
  createCanvas(400, 400);
  background(180);
}

function draw() {
  
if (random()<0.5){
  line(x,y,x+w,y+h);
  
}else{
  line(x+w,y,x,y+h);
}
  
  x=x+w;

  if(x>width){
  x=0;
  y=y+h;
}
  
  if(y>height){
  x=0;
  y=0;
  background(220);
}
}