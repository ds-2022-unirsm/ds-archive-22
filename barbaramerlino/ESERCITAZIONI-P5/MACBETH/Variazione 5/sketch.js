let w = 100;
let h;
let objs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < windowWidth; i += w) {
    objs.push(new ogg(i, height, w, 0,parametri.coloreSfondo));
  }
}

function draw() {
  background(parametri.coloreSfondo);
  // objs[0].h=100;
  if (parametri.Triangolo) {
    for (let oggetto of objs) {
      oggetto.forma = "triangolo";
      oggetto.w = parametri.Larghezza;
      oggetto.h = parametri.Altezza;
      oggetto.color = parametri.coloreSfondo;
      oggetto.disegna();
    }
  }
  else {
    for (let oggetto of objs) {
      oggetto.forma = "rettangolo";
      oggetto.w = parametri.Larghezza;
      oggetto.h = parametri.Altezza;
      oggetto.color = parametri.coloreSfondo;
      oggetto.disegna();
    }
  }  
}

let parametri = {
  coloreSfondo: 255,
  Larghezza: 50,
  Altezza: 500,
  Triangolo: false,
  //weird: function() {
  //  weirdStroke = 30 + random(80);
  //  weirdColor = [random(255), random(255), random(255)];
  //}
};

window.onload = function () {
  var gui = new dat.GUI();
  gui.add(parametri, "coloreSfondo", 0, 255);
  gui.add(parametri, "Larghezza", 0, w);
  gui.add(parametri, "Altezza", 0, windowHeight);

  var folder_triangolo = gui.addFolder("Triangolo");
  folder_triangolo.add(parametri, "Triangolo");

};
