// -
// 10Print_variazione 5 by Chiara Guiducci [suono, slider]
// 2022 © Chiara @guiduc, Daniele @Fupete and the course DS-2022 at DESIGN.unirsm 
// github.com/ds-2022-unirsm — github.com/fupete
// Educational purposes, MIT License, 2022, San Marino
// —
// Credits/Thanks to: 
// @Yiting Liu (https://yitingliu.com/) for https://openprocessing.org/sketch/926914
// —
// Help:
// [speed] : regola la velocità
// [transpose] : regola la frequenza
// [spacing] : regola la distanza
//
// —

let x = 0;
let y = 0;
let spacing;
let speed;
let polySynth;

function setup() {
	createCanvas(windowWidth, windowHeight);

  //slider speed
    speed = createSlider(1, 200, 30, 2);
  //crea un div con stringa e lo rende figlio di speed
    createDiv('speed').child(speed);
  //slider transpose
	transposeS = createSlider(0, 3, 1, 0.2);
	createDiv('transpose').child(transposeS);
  //slider spacing
	spacing = createSlider(10, 300, 20, 5);
	createDiv('spacing').child(spacing);
  //crea un array di suoni dalla libreria
	polySynth = new p5.PolySynth();
	noiseS = new p5.Noise();
	
    background(56,65,82);
}

function playSynth(freq) {
	userStartAudio();
  // dur --> durata della nota
    let dur = 1;
  //time --> variabile che stabilisce quando il suono ha inizio
	let time = 0.5;
  //vel --> velocity inteso come volume del suono da 0 a 1
	let vel = 0.1;

	let octVal = 3;
	let n = (freq % 25) + 24 * octVal;
  //transpose --> assume il valore dello slider transpose
	transpose = transposeS.value();
  //pow moltiplica un numero per se stesso tante volte quanto viene indicato nel secondo valore
	note = pow(2, (n + transpose - 49) / 12) * 440;

  //genera tre suoni con valori diversi
	// polySynth.play(note, vel, time, dur);
	polySynth.play(note / 3, vel, time += 1 / 3, dur / 2);
	polySynth.play(note / 6, vel, time, dur / 8);
	polySynth.play(note / 9, vel, time -= 1 / 3, dur / 4);
}

function draw() {

  frameRate(speed.value());
  //Mescola i pixel nella finestra di visualizzazione secondo la modalità definita --> ADD = somma di A (source pixel) e B (pixel già presenti nel canvas)
	blendMode(ADD);
	let r = random(255);
	let g = random(255);
	let b = random(255);

	if (random(1) > 0.5) {
		strokeWeight(random(3))
		stroke(r, g, b);
		noFill();
  //value fornisce il valore dell'elemento a cui si riferisce
		square(x, y, spacing.value());
  //la frequenza viene definita da 440 moltiplicata dalla x dell'elemento, il tutto diviso dal valore dato dallo splider dello spazio
		playSynth(440 * x / spacing.value());
	} else {
		//fill(r, g, b,50);
    strokeWeight(random(15));
    stroke(r, g, b,50);
    ellipse(x, y, spacing.value());
      
		playSynth(440 * y / spacing.value());
	}
	x += spacing.value();
  //se esce dalla larghezza della pagina rinizia una nuova linea
	if (x > width) {
		x = 0;
		y += spacing.value();
	}
 //se esce dalla lunghezza della pagina azzera e ricomincia dall'inizio
  if (y > height) {
		y = 0;
		x = 0;
		clear();
        background(56,65,82);
	}
}