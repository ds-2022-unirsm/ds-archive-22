                                                   
//# #####  ###### #    # ###### #####   ####    ##   
//# #    # #      #    # #      #    # #       #  #  
//# #    # #####  #    # #####  #    #  ####  #    # 
//# #####  #      #    # #      #####       # ###### 
//# #   #  #       #  #  #      #   #  #    # #    # 
//# #    # ######   ##   ###### #    #  ####  #    # 

// -
// chidecidecosaènormale 0.1 by IreneBacherotti [normale, diverso]
// 2022 © IreneBacherotti @irebache, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —





let x=0;
let y=0;
let w=200;
let h=40;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(random(255));
  
  colorMode(RGB);
}

function draw() {
  noStroke();
colorMode(RGB);

   textSize(45);
  
   


  
  //rect(x,y,20,20);
  let caso=random();
  
  if (caso<0.10){
    fill (255);
      textSize(20);
    textStyle(ITALIC);
       text('chi decide cosa è', x, y);
    w= 200
  
  }else if (caso<0.30) {
      textStyle(BOLD);
     fill(0,255,0);
  
      text('DIVERSO', x, y); 
  
w= 400
  }//else if (caso<0.45){
      //rect(x, y, 100, 20);
  //}
else if (caso<0.60){
    textStyle(ITALIC);
  fill (255);
      text('NORMALE', x, y);

  w= 250
  }
  else{
       text('',x,y);
  }
  
  x=x+w;
  if (x>width){
    x=0;
    y=y+h;
  }
  if (y>height){
    x=0;
    y=0;
   background(0);;

  }
  
  
}