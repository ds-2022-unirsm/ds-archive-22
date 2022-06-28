//2022 © Barbara Merlino, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm
//github.com/ds-2022-unirsm — github.com/fupete
//Educational purposes, MIT License, 2022, San Marino

var SpeechRec = new p5.SpeechRec();
let parola = "";
SpeechRec.continuous = true;
SpeechRec.interimResults = true;

let gui = new UIL.Gui({
  // interfaccia
  css: "right:0; top:0;",
  bg: "#000000", // to update new version
  w: 250,
});

let arr = [];
let molecola = false;
let sfere = true;
let cubo = false;
let alfabeto = false;
let palazzo = false;
let spessore = 30;

let x = -100,
  y = -100,
  z = -100;
let w = 30,
  h = 30,
  d = 30;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  SpeechRec.start();
  SpeechRec.onResult = showResult;
  SpeechRec.onStart = onStart;
  setupGui();
  createEasyCam();
}

function draw() {
  background(0);
  ambientLight(60, 60, 60);
  rotateY(millis() / 2000);
  rotateX(millis() / 2000);
  rotateZ(millis() / 2000);

  for (let p of arr) {
    push();
    translate(p.x, p.y, p.z);
    if (p.o < 0.2) {
      noStroke();
      strokeWeight(1);
      specularColor(100, 400, 255);
      pointLight(100, 400, 255, 10, 0, 255);
      specularMaterial(255);
      ambientMaterial(255);
      if (molecola) {
        sphere(spessore);
      }
      if (cubo) {
        box(spessore, h, d);
      }
      if (sfere) {
        sphere(spessore);
      }
      if (alfabeto) {
        box(spessore, 30, 30);
      }
      if (palazzo) {
        box(spessore, 30, 30);
      }
    } else {
      noStroke();
      specularColor(25, 149, 490);
      pointLight(25, 149, 490, 10, 0, 255);
      specularMaterial(255);
      ambientMaterial(255);
      if (molecola) {
        sphere(spessore);
      }
      if (cubo) {
        box(spessore, h, d);
      }
      if (sfere) {
        sphere(spessore);
      }
      if (alfabeto) {
      }
      if (palazzo) {
      }
    }
    pop();
  }

  if (alfabeto) {
    arr.push({
      x: random(),
      y: y,
      z: z,
      o: random(),
    });

    x = x + spessore;
    if (x > 100) {
      x = -100;
      y = y + h;
    }
    if (y > 100) {
      y = -100;
      z = z + d;
    }
    if (z > 100) {
      y = -100;
      x = -100;
      z = -100;
      arr = [];
    }
  }
  if (molecola) {
    arr.push({
      x: random(x + w),
      y: random(y + h),
      z: random(z + d),
      o: random(),
    });

    x = x + spessore;
    if (x > 100) {
      x = -100;
      y = y + h;
    }
    if (y > 100) {
      y = -100;
      z = z + d;
    }
    if (z > 100) {
      y = -100;
      x = -100;
      z = -100;
      arr = [];
    }
  }
  if (sfere) {
    arr.push({
      x: x,
      y: y,
      z: z,
      o: random(),
    });

    x = x + spessore;
    if (x > 100) {
      x = -100;
      y = y + h;
    }
    if (y > 100) {
      y = -100;
      z = z + d;
    }
    if (z > 100) {
      y = -100;
      x = -100;
      z = -100;
      arr = [];
    }
  }
  if (palazzo) {
    arr.push({
      x: x,
      y: y,
      z: z,
      o: random(),
    });

    x = x + spessore;
    if (x > 100) {
      x = -100;
      y = y + h;
    }
    if (y > 100) {
      y = -100;
      z = z + d;
    }
    if (z > 100) {
      y = -100;
      x = -100;
      z = -100;
      arr = [];
    }
  }
  if (cubo) {
    arr.push({
      x: x,
      y: y,
      z: z,
      o: random(),
    });

    x = x + spessore;
    if (x > 100) {
      x = -100;
      y = y + h;
    }
    if (y > 100) {
      y = -100;
      z = z + d;
    }
    if (z > 100) {
      y = -100;
      x = -100;
      z = -100;
      arr = [];
    }
  }
}

function setupGui() {
  gui_gr0 = gui.add("group", { name: "FORME" });
  gui_gr0.add("bool", {
    name: "SFERE",
    value: true,
    callback: cambiamosfere,
  });
  gui_gr0.add("bool", {
    name: "PALAZZO",
    value: false,
    callback: cambiapalazzo,
  });
  gui_gr0.add("bool", {
    name: "MOLECOLA",
    value: false,
    callback: cambiamolecola,
  });
  gui_gr0.add("bool", { name: "CUBO", value: false, callback: cambiacubo });

  gui_gr0.add("bool", {
    name: "ALFABETO",
    value: false,
    callback: cambiaalfabeto,
  });
  gui_gr0.add("slide", {
    name: "Spessore",
    value: 100,
    min: 2,
    max: spessore,
    callback: cambiaspessore,
  });
}

var cambiamolecola = function (valore) {
  molecola = !molecola;
  arr = [];
};

var cambiamosfere = function (valore) {
  sfere = !sfere;
  arr = [];
};
var cambiacubo = function (valore) {
  cubo = !cubo;
  arr = [];
};
var cambiapalazzo = function (valore) {
  palazzo = !palazzo;
  arr = [];
};
var cambiaalfabeto = function (valore) {
  alfabeto = !alfabeto;
  arr = [];
};
var cambiaspessore = function (valore) {
  spessore = valore;
};

function onStart() {
  parola = SpeechRec.resultString;
}

function showResult() {
  if (SpeechRec.resultConfidence < 0.009 || parola == SpeechRec.resultString) {
    return 0;
  }

  switch (SpeechRec.resultString) {
    case "molecola":
      molecola = true;
      sfere = false;
      cubo = false;
      alfabeto = false;
      palazzo = false;
      break;

    case "sfere":
      molecola = false;
      sfere = true;
      cubo = false;
      alfabeto = false;
      palazzo = false;
      break;

    case "cubo":
      molecola = false;
      sfere = false;
      cubo = true;
      alfabeto = false;
      palazzo = false;
      break;

    case "alfabeto":
      molecola = false;
      sfere = false;
      cubo = false;
      alfabeto = true;
      palazzo = false;
      break;

    case "palazzo":
      molecola = false;
      sfere = false;
      cubo = false;
      alfabeto = false;
      palazzo = true;
      break;
  }
  console.log(parola);
}
