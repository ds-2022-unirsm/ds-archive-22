let gui = new UIL.Gui({ // interfaccia
  css:'right:0; top:0;',
  bg:'#000000', // to update new version
  w:250 
} ); 


let coloreSfondo = 255;
let SpessoreOrizzontale = 50; 
let SpessoreVerticale = 100; 
let Posizionex = 100;
let Posizioney = 100; 
let OrizzVert = true;
let Divisione4 = false;
let Divisione2 = false;
let Insieme = false;
let xQuadrato = 0;
let yQuadrato = 100;


function setup() {
  createCanvas(w=windowWidth, h=windowHeight);
  setupGui();
  frameRate(30);
}


function draw() {
  background(coloreSfondo);
   
  fill(0);
  if (OrizzVert) {
      rect(Posizionex, random(h), SpessoreOrizzontale, random(400));
  }
  else {
      rect(random(w), Posizioney, random(400), SpessoreVerticale);
  }
  
  if (Divisione4) {
    rect(random(0,w), 0, random(110,80), h/4);
    rect(random(0,w), h/4, random(110,80), h/4);
    rect(random(0,w), h/2, random(110,80), h/4);
    rect(random(0,w), (h/2)+h/4, random(110,80), h/4);
  } 
  
    if (Divisione2) {
    rect(random(0,w), 0, random(110,80), h/2);
    rect(random(0,w), h/2, random(110,80), h/2);
  }
  
   if (Insieme) {
       rect(Posizionex, random(800), SpessoreOrizzontale, random(400));
       rect(random(800), Posizioney, random(400), SpessoreVerticale);
  }
}


function setupGui() {
  //gui.add('fps',  { res:60 });
  //gui.add('slide', { name:'Sfondo', value:20, min:0, max:255, step:10 }).onChange( function(valore){ coloreSfondo = valore } );
 // gui.add('slide', { name:'Diametro', value:100, min: 50, max:500, callback:cambiaDiametroEllisse});
  
  // GRUPPO 
  gui_gr0 = gui.add('group', { name:'Quadrati'});
  gui_gr0.add('bool', { name:'Oriz/Vert', value:true, callback:cambiaOrizzVert});
    gui_gr0.add('bool', { name:'Insieme', value:false, callback:cambiaInsieme}); 
  gui_gr0.add('slide', { name:'Posizionex', value:100, min:0, max:w, callback:cambiaPosizionex});
  gui_gr0.add('slide', { name:'SpessoreOriz.', value:100, min: 0, max:w, callback:cambiaSpessoreOrizzontale});
    gui_gr0.add('slide', { name:'Posizioney', value:100, min:0, max:h, callback:cambiaPosizioney});
    gui_gr0.add('slide', { name:'SpessoreVert', value:100, min: 0, max:h, callback:cambiaSpessoreVerticale});

    gui.add('bool', { name:'Divisione4', value:false, callback:cambiaDivisione4});
      gui.add('bool', { name:'Divisione2', value:false, callback:cambiaDivisione2});
     
  // pulsante
  gui.add('button', { name:'Weird', fontColor:'#ffffff', h:30}).onChange(function(v){ 
    coloreSfondo = color(random(255), random(255), random(255));
  });
  
}


var cambiaSpessoreOrizzontale = function(valore){ 
  SpessoreOrizzontale = valore;
}

var cambiaSpessoreVerticale = function(valore){ 
  SpessoreVerticale = valore;
}

var cambiaPosizionex = function(valore){ 
  Posizionex = valore;
}

var cambiaPosizioney = function(valore){ 
  Posizioney = valore;
}

var cambiaDivisione4 = function(valore){
  Divisione4 = !Divisione4;
}

var cambiaDivisione2 = function(valore){
  Divisione2 = !Divisione2;
}

var cambiaInsieme = function(valore){
  Insieme = !Insieme;
}

var cambiaOrizzVert = function(valore){
  OrizzVert = !OrizzVert;
}
