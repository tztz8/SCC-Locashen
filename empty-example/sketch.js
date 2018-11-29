var img;
var canvas_width = 700;
var canvas_hight = 511;

function preload() {
  img = loadImage("8-18-SCC-Campus-Map.jpg");
}

function setup() {
  // put setup code here
  createCanvas(canvas_width, canvas_hight);
  console.log("test");
  noLoop();
}

function draw() {
  // put drawing code here
  image(img, 0, 0, canvas_width, canvas_hight);

}

function mouseClicked(){
  console.log("(" + mouseX + "," + mouseY + ")");
  rect(mouseX, mouseY, 25, 25, 5);
  textSize(11);
  text("0", mouseX+12,mouseY+12);
}
