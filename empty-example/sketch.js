var img;
var canvas_width = 700;
var canvas_hight = 511;
var bBoxN = ["1","5","6","7","9","15","16","18","27"];
var bBoxX = [225,315,232,317,265,132,144,453,433];
var bBoxY = [406,269,293,203,149,208,288,395,323];
var bBoxF = [255,255,255,255,255,255,255,255,255];

function preload() {
  img = loadImage("8-18-SCC-Campus-Map.jpg");
}

function setup() {
  // put setup code here
  createCanvas(canvas_width, canvas_hight);
  console.log("test");
  //noLoop();
}

function draw() {
  // put drawing code here
  image(img, 0, 0, canvas_width, canvas_hight);
  for(var i = 0; i < bBoxN.length; i++){
    fill(bBoxF[i]);
    rect(bBoxX[i], bBoxY[i], 25, 25, 5);
    fill(0);
    textSize(13);
    text(bBoxN[i], bBoxX[i]+7,bBoxY[i]+17);
  }

}

function mouseClicked(){
  for(var i = 0; i < bBoxN.length; i++){
    if(mouseX > bBoxX[i]){
      if(mouseX < bBoxX[i]+25){
        if(mouseY > bBoxY[i]){
          if(mouseY < bBoxY[i]+25){
            console.log(bBoxN[i]);
            if(bBoxF[i] == 255){
              bBoxF[i] = 125;
            }else {
              bBoxF[i]= 255;
            }
            break;
          }
        }
      }
    }
  }
}
