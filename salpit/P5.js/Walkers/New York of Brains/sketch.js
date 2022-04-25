//      ___      ___      ___   ___      ___     ___
//     /\  \    /\  \    /\__\ /\  \    /\  \   /\  \
//    /::\  \  /::\  \  /:/  //::\  \  _\:\  \  \:\  \
//   /\:\:\__\/::\:\__\/:/__//::\:\__\/\/::\__\ /::\__\
//   \:\:\/__/\/\::/  /\:\  \\/\::/  /\::/\/__//:/\/__/
//    \::/  /   /:/  /  \:\__\  \/__/  \:\__\  \/__/
//     \/__/    \/__/    \/__/          \/__/
//-------------------------------------------------------

let cubes = []
let n = 12
let world
let unit
let quanticubi = n*n*n
let index = 0
let noiseScale = 0.1
let tV = 0.01
let t = 0
let angle = 0 

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(displayDensity())

  for (let i = 0; i < quanticubi; i++) 
    cubes.push(new Cubo(i))
  
  console.log(cubes.length)

  world=300
  unit = world / n

  index = 0
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      for (let z = 0; z < n; z++) {
        cubes[index].x = x
        cubes[index].y = y
        cubes[index].z = z
        index++
      };
    }
  }

}

function draw() {
  background(255)
  //lights()
  orbitControl()

  rotateY(frameCount * -0.01);
  
  translate(-world/2+unit/2, -world/2+unit/2, -world/2+unit/2)
 
  for (let i = 0; i < quanticubi; i++)
    cubes[i].display()
  t+=tV

}


function Cubo(_id) {

  this.id = _id

  this.x = 0
  this.y = 0
  this.z = 0



  this.display = function() {
    push()
    strokeWeight(1.2)
    stroke(noise(this.x*noiseScale+t,this.y*noiseScale+t,this.z*noiseScale+t)*255,100)
    fill(noise(this.x*noiseScale+t,this.y*noiseScale+t,this.z*noiseScale+t)*255)
    translate(this.x*unit+t, this.y*unit+t, this.z*unit+t)
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(unit)
    pop()
  };
}
