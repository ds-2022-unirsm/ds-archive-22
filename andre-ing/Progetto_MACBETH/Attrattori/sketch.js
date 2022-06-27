// Benedikt Groß
// Example for matter-attractors an attractors plugin for matter.js
// https://github.com/liabru/matter-attractors

Matter.use('matter-attractors');

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
const Composites = Matter.Composites;

const drawBody = Helpers.drawBody;
const drawBodies = Helpers.drawBodies;

let engine;
let attractor;
let attractor2;
let attractor3;
let boxes;
let boxes2;
let boxes3;



function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);

  // create an engine
  engine = Engine.create();

  // no gravity
  engine.world.gravity.scale = 0;

  // add attractor
  attractor = Bodies.circle(windowWidth*0.25, windowHeight*0.5, 50, {

    isStatic: true,
    plugin: {
      attractors: [
        function(bodyA, bodyB) {
          if ( bodyB.collisionFilter.group==1)
          return {
            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
          };
          else
          return {
            x: 0,
            y: 0,
          };

        }
      ]
    }
  });

  // add attractor
  attractor2 = Bodies.circle(windowWidth*0.5, windowHeight*0.5, 50, {
    isStatic: true,
    plugin: {
      attractors: [
        function(bodyA, bodyB) {
          if ( bodyB.collisionFilter.group==2)
          return {
            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
          };
          else
          return {
            x: 0,
            y: 0,
          };
        }
      ]
    }
  });

  attractor3 = Bodies.circle(windowWidth*0.75, windowHeight*0.5, 50, {
    isStatic: true,
    plugin: {
      attractors: [
        function(bodyA, bodyB) {
          if ( bodyB.collisionFilter.group==3)
          return {
            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
          };
          else
          return {
            x: 0,
            y: 0,
          };
        }
      ]
    }
  });

  World.add(engine.world, attractor);
  World.add(engine.world, attractor2);
  World.add(engine.world, attractor3);

  // add boxes
  // xx, yy, columns, rows, columnGap, rowGap
  boxes = Composites.stack(width/2, 0, 3, 20, 10, 3, function(x, y) {
    let b=Bodies.circle(x, y, 8, 10);
    b.collisionFilter.group=1
    //console.log(b);
    return b;
  });
  boxes2 = Composites.stack(width/2, 0, 3, 20, 10, 3, function(x, y) {
    let b=Bodies.circle(x, y, 8, 10);
    b.collisionFilter.group=2
    //console.log(b);
    return b;
  });
  boxes3 = Composites.stack(width/2, 0, 3, 20, 10, 3, function(x, y) {
    let b=Bodies.circle(x, y, 8, 10);
    b.collisionFilter.group=3
    //console.log(b);
    return b;
  });
  World.add(engine.world, boxes);
    World.add(engine.world, boxes2);
    World.add(engine.world, boxes3);

  // setup mouse
  const mouse = Mouse.create(canvas.elt);
  const mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05}
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);

  // run the engine
  Engine.run(engine);
}

function draw() {
  background(0);

// attractor3.onclick= Body.translate(attractor, {
//    x: (mouseX - attractor.position.x) * 0.25,
//  y: (mouseY - attractor.position.y) * 0.25
//  });


  // attractor.mouseClicked();

    // smoothly move the attractor body towards the mouse

    if (mouseIsPressed===true){

      if (Math.pow(mouseX-attractor.position.x,2)+Math.pow(mouseY-attractor.position.y,2)<=2500)
      Body.translate(attractor, {
      x: (mouseX - attractor.position.x) * 0.5,
      y: (mouseY - attractor.position.y) * 0.5
    });

    else if (Math.pow(mouseX-attractor2.position.x,2)+Math.pow(mouseY-attractor2.position.y,2)<=2500)
    Body.translate(attractor2, {
    x: (mouseX - attractor2.position.x) * 0.5,
    y: (mouseY - attractor2.position.y) * 0.5
  });

  else if (Math.pow(mouseX-attractor3.position.x,2)+Math.pow(mouseY-attractor3.position.y,2)<=2500)
  Body.translate(attractor3, {
  x: (mouseX - attractor3.position.x) * 0.5,
  y: (mouseY - attractor3.position.y) * 0.5
});
  }
  else if (mouseIsPressed===true){
    /*Body.translate(attractor2, {
    x: (mouseX - attractor2.position.x) * 0.5,
    y: (mouseY - attractor2.position.y) * 0.5
  });*/
}

  else{
  /*  Body.translate(attractor3, {
    x: (mouseX - attractor3.position.x) * 0.1,
    y: (mouseY - attractor3.position.y) * 0.1
  });*/
}


  stroke(128);
  strokeWeight(1);
  fill(25,90,30);
  drawBodies(boxes.bodies);
  drawBody(attractor);

  stroke(128);
  strokeWeight(1);
  fill(0);
  drawBodies(boxes2.bodies);
  drawBody(attractor2);

  stroke(128);
  strokeWeight(1);
  fill(40,50,20);
  drawBodies(boxes3.bodies);
  drawBody(attractor3);
};


