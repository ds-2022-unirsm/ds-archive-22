let cerchi = [];
let numeroCerchi = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  for (let i = 0; i < numeroCerchi; i++) {
    cerchi.push(new disegna_cerchio(i));
  }
}

function draw() {
  
  for (let i = 0; i < cerchi.length; i++) {
    cerchi[i].display();
  }
  //noLoop();
}

function disegna_cerchio(_id) {
  this.id = _id;
  this.x = 120;
  this.y = 0;
  this.spazio = 20;
  this.numero = 20;
  this.tx1 = 200 * noise(random(5));
  this.tx2 = 400 * noise(random(6));

  this.display = function () {
    for (var i = 0; i < this.numero; i++) {
      push();
      rectMode(CENTER);
      ellipseMode(CENTER);
      translate(width / 2, height / 2);
      rotate((TWO_PI * i) / this.spazio);
      if (random(1) < 0.5) {
        push();
		translate(this.tx1, 0);
        rotate(millis() / 1000);
        fill(255, 166, 82);
        noStroke();
        ellipse(this.x, this.y, 4);
        pop();
      } else {
        push();
        translate(this.tx2, 0);
        rotate(millis() / 1000);
        fill(193, 255, 103)
        noStroke();
        rect(this.x, this.y, 2);
        pop();
      }
      pop();
    }
  };
}
