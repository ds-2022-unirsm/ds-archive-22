var w, h;
walkers = [];
walkersNumber = 8;

function setup() {
  createCanvas((w = windowWidth), (h = windowHeight));
  background(0);

  for (var i = 0; i < walkersNumber; i++) {
    walkers.push(new walker(i));
  }
}

function draw() {
  for (var i = 0; i < walkers.length; i++) {
    walkers[i].move();
    walkers[i].display();
  }
}

function walker(_id) {
  this.id = _id;
  this.x = random(w);
  this.y = random(h);
  this.delta = random(100);
  this.deltaIncremento = random(0.5, 3) * 0.005;
  this.prossimo;
  this.prossimo2 = int(random(walkersNumber));
  this.prossimo3 = int(random(walkersNumber));

  this.move = function () {
    this.x = noise(this.delta) * width;
    this.y = noise(this.delta + 5) * height;
    this.delta += this.deltaIncremento;
  };

  this.display = function () {
    var r = map(noise(this.delta + 5), 0, 1, 0, 255);
    var g = map(noise(this.delta + 10), 0, 1, 0, 255);
    var b = map(noise(this.delta + 15), 0, 1, 0, 255);

    noStroke();
    fill(r, g, b);
    ellipse(this.x, this.y, 3);

    if (this.id == walkersNumber - 1) {
      this.prossimo = 0;
    } else {
      this.prossimo = this.id + 1;
    }
    push();
    fill(r, g, b, 10);
    stroke(r, g, b, 50);
    beginShape();
    vertex(this.x, this.y);
    vertex(walkers[this.prossimo].x, walkers[this.prossimo].y);
    vertex(walkers[this.prossimo2].x, walkers[this.prossimo2].y);
    vertex(walkers[this.prossimo3].x, walkers[this.prossimo3].y);
    endShape(CLOSE);
    pop();
  };
}
