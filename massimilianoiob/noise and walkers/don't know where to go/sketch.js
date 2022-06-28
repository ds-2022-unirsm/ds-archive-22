//bomdimax
//radom noise stuff
//--------------------------------------------------------------------------------



var t;

function setup() {
  createCanvas(500, 500);
  background(0);
  t = 0;
}

function draw() {
  // sfuma le linee dando opacità allo sfodo
  background(0, 10);
//applichiamo il noise al movimeto lungo gli assi
  var x = width * noise(t+20);
  var y = height * noise(t+10);

  
  
  noStroke();
  //creo l'effetto strobo alterado i colori radomicaete 
fill(random(255), random(500) ); 
  ellipse(x, y, 100, 100);

  t = t + 0.008
}
