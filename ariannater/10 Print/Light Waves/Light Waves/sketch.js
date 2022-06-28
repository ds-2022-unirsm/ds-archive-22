                                   
 //                                   
 //  ,---,.                            
 // '  .'  \                   ,--,    
 // /  ;    '.       __  ,-. ,--.'|    
 //:  :       \    ,' ,'/ /| |  |,     
 //:  |   /\   \   '  | |' | `--'_     
 //|  :  ' ;.   :  |  |   ,' ,' ,'|    
 //|  |  ;/  \   \ '  :  /   '  | |    
 //'  :  | \  \ ,' |  | '    |  | :    
 //|  |  '  '--'   ;  : |    '  : |_  
 //|  :  :         |  , ;    |  | '.| 
 //|  | ,'          ---'     ;  :   ; 
 //`--''                     |  ,  /  
//                            --`-'   
//                                               

//@ariannater

// Waves-10PRINT by Arianna 
// 2021 © Arianna @ariannater, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 

// Educational purposes, MIT License, 2021, San Marino
// original license: Educational purposes, MIT License, 2019, Crespina IT
//[GUI] parametri

//PARAMETRI GUI
let parametri = {
  strokeColor: 255,
  velocità:0.1,
  distaccoModuli:15,
  prospettiva:7,
  SalvaCanvas: function() {
    saveCanvas(c, 'waves.jpg');
  }
};

//-----------------------------------------------------
// FUNZIONE GUI
window.onload = function() {
  var gui = new dat.GUI();
  
  var f1 = gui.addFolder('Visual');
  f1.add(parametri, 'distaccoModuli', 0, 100);
  f1.add(parametri, 'velocità', 0, 0.5);
  f1.add(parametri, 'prospettiva', 0, 50);
  
  f1.add(parametri, 'strokeColor', 0, 255);
  
  var f0 = gui.addFolder('Settings');

  f0.add(parametri, 'SalvaCanvas');
}

//----------------------------------


let velocità=0;
let w=20;
let angolo;
let distanza;
function setup(){
  createCanvas(400,400,WEBGL);
  angolo=atan(1/sqrt(10));
  distanza=dist(0,3,20,0);//variazione
}

function draw(){
background(0);
  ortho(-300,300,300,-300,0,1000);
 


  rotateX(QUARTER_PI*parametri.prospettiva);
  rotateY(angolo);

 
  for(let z=0; z<width; z+= parametri.distaccoModuli) {
   for(let x=0; x<height;x+=parametri.distaccoModuli) { 
    push();
     let d = dist(x,z,width/2,height/2);
     let offset= map(d,0,distanza,-2,2);
   let a = velocità + offset;  
  let h=map(sin(a),-1,2,0,100);
  //fill(255);
    
    translate(x-width/2,0, z-height/2);

  fill(parametri.strokeColor);
  plane(w-2,h/5,w);
  //rect(x- width/2 + w/2,0,w-2,h);
  

    pop();
  }}  
  velocità+=parametri.velocità;
}
