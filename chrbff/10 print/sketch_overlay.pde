// Works best in Processing 2.0 JavaMode

int w = 400; // canvas size
int n = 10;  // number of grid cells
int d = w/n; // diameter of a grid cell
float depth = 0.5; // relative cell depth

void setup() {
  size(400, 400, P3D);
  rectMode(CENTER);
  background(255);
  fill(0, 0, 255);
  noStroke();
}

void draw() {

  // get coordinates
  int xy = frameCount % (n*n);

  // shift image in z-direction
  if (xy == 0) {
    PImage img = get();
    background(255); 
    pushMatrix(); 
    translate(0, 0, -d * depth);
    tint(255, 127);
    image(img, 0, 0);
    popMatrix();
  }

  // scale and rotate the square
  scale(d);
  translate(xy%n + .5, xy/n + .5, -depth * .5 );
  rotate(QUARTER_PI - HALF_PI *int(random(2)));
  rotateX(HALF_PI);
  
  // draw the square
  rect(0, 0, sqrt(2), depth);
  
}
