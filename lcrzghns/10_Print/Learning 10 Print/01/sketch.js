let x=0;
let y=0;
let w=20;
let h=20;

function setup() {
  createCanvas(400, 400);
  background(250);
  ellipseMode(CORNER);
}

function draw() {
  
let caso=random();
  
  if (caso<0.15){
  line(x,y,x+w,y+h); //diagonale 1
  
  }else if(caso<0.30){
  line(x+w,y,x,y+h); //diagonale 2
    
  }else if(caso<0.45){
  line(x,y+h,x+w,y+h); //base
    
  }else if(caso<0.60){
    line(x,y,x,y+h) //lato destro
    
  }else if(caso<0.75){
    line(x+w,y,x+w,y+h) //lato sx
  
  }else{
    line(x,y,x+w,y) //base
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