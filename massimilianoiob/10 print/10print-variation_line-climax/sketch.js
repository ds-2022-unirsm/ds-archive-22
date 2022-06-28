//bomdimax
//10print_line climax
//---------------------------------------------



function setup() {
  
  createCanvas(800, 800);
  background(0);
}

//dichiaro la gradezza delle varie griglie
let x = 0;
let y = 0;
let grid = 20;


let spessore_linea = grid / 10000;

function draw() {
 
  fill(255);
  stroke(255);
  strokeWeight(spessore_linea);

  //se il risultato della funzione che lancia la monetina è vero
  // verrà disegnato un quadrato
  // se è falso verrà disegnata una linea
  if (testaCroce()) {
    push();

    noStroke();
    rect(x * grid, y * grid, grid, grid);

    pop();
  } else {
    line(x * grid + grid, y * grid, x * grid, y * grid + grid);
  }

  //disegnamo quadrati e linee in sequenza
  x++;

 
  if (x * grid >= width) {
    x = 0;
    y++;
  }

  // quando fiisce il ffoglio ricomincia da capo
  if (y * grid >= height) {
    background(0);
    y = 0;
  }
}


// estrae un numero random 
function testaCroce() {
  if (random(2) < 1) {
    return true; // testa
  } else {
    return false; // croce
  }
}

function mousePressed() {


  spessore_linea++;
}


