                                   
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
//[click] tasto destro per azionare la musica

let arr=[];

let x=-200, y=-200,z=-200;
let w=20, h=20,p=20;

let sound, amplitude;

function preload(){
  sound = loadSound('1-minute-happy-background-music.mp3');
}
function setup() {
  
  
  let cnv = createCanvas(800,800,WEBGL);
  createEasyCam();
  cnv.mouseClicked(togglePlay);
  amplitude = new p5.Amplitude();
}

function draw() {
 
  background(0);
  rectMode(RADIUS)

  text('tap to play or stop', 100, 100);

    let level = amplitude.getLevel();
   let size = map(level, 0, 1, 0, 200);
  var r = size*(55 * noise(0.004 * x, 0.002 * y + 70));
  var g = size*(5 * noise(0.004 * x, 0.004 * y + 85));
  var b = size*(10 * noise(0.004 * x, 0.004 * y + 90));

  stroke(255);
  fill(r,g,b);
  rotateX(70)
  
  box(p.x,p.y,size+20);
   
  x=x+w;
  if (x>100){
    x=-200;
    y=y+size;
  } 
  if(y>100){
    y=-200;
    z=z;
  }
  
  
  

  
  //let level = amplitude.getLevel();
 //let size = map(level, 0, 1, 0, 200);
  //ellipse(width/2, height/2, size, size);
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}