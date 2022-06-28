                                                   
//# #####  ###### #    # ###### #####   ####    ##   
//# #    # #      #    # #      #    # #       #  #  
//# #    # #####  #    # #####  #    #  ####  #    # 
//# #####  #      #    # #      #####       # ###### 
//# #   #  #       #  #  #      #   #  #    # #    # 
//# #    # ######   ##   ###### #    #  ####  #    # 

// èNORMALEèDIVERSO➿ 0.1 by IreneBacherotti [normale, diverso]
// 2022 © IreneBacherotti @irebache, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —


let x=50;
let y=0;
let w=0;
let h=30;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  

}

function draw() {
  noStroke();
colorMode(RGB);
for (let i = 0; i < 150; i++) {
  for (let j = 0; j < 140; j++) {
   
   textSize(30);
  }
}
  
  //rect(x,y,20,20);
  let caso=random();
  

    fill(random(255));
 if (caso<0.30) {
     fill(20,255,70);
      text('diverso', x, y); 
    w=110
     

 
  }else if (caso<0.60){
    fill(random(220));
      text('è', x, y) ;
    w=30
    
  }
  else{
    fill(random(220));
       text('normale',x,y);
    w=120
    
  }
  
  x=x+w;
  if (x>width){
    x=0;
    y=y+h;
  }
  if (y>height){
    x=0;
    y=0;
   background(255);

  }
  
  
  
}