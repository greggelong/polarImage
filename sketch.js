
// instead of an increacing theta which would move around the circle
// i am using random theta 
let r = 200;  // distance from the center
let cuko;

function preload(){

  cuko = loadImage("cuko2.jpg");

}

function setup() {
  createCanvas(400, 400);
  cuko.resize(width,height);
  imageMode(CENTER);
  cuko.loadPixels();
  strokeWeight(1);
  noStroke();

  angleMode(DEGREES);
  background(100);

  //frameRate(2);
}

function draw() {
  //background(0);
  translate(width/2,height/2);
  //image(cuko,0,0);
  for(let i = 0; i<250; i++){
    // create vector end1 at a random spot on the circle
    let theta = random(360);
    let x= cos(theta)*r;
    let y= sin(theta)*r;
    let end1 = createVector(x,y);
    // create vector end2 at a random spot on the circle
    let theta1 = random(360);
    let x1= cos(theta1)*r;
    let y1= sin(theta1)*r;  
    let end2 = createVector(x1,y1);
    // get a  random point between by lerping the 2 vectors
    let pt = p5.Vector.lerp(end1, end2, random(1));
    // get the color value at that position
    let clr = cuko.get(pt.x+200,pt.y+200); // the pixel array was offset by translate
    // set the color of the stroke to that color with some alpha
    stroke(clr[0],clr[1],clr[2],150);
    // draw the line across the circle;
    line(end1.x,end1.y,end2.x,end2.y);
    fill(clr[0],clr[1],clr[2]);
    //fill(255,0,0);
    ellipse(pt.x,pt.y,10,10);
  }
  // // plot that point
  // fill(255,0,0);
  // ellipse(pt.x,pt.y,10,10);

}