let x;
let y;
let tbaFont;

function preload() {
  tbaFont = loadFont('fonts/Agrandir-F6-OversizedHeavy.otf');
  tbaFont2 = loadFont('fonts/Agrandir-WideLight.otf');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  cnv.parent('amplo-9');
  
}

function draw() {
  let h,w;
  background(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER); 
  h = height*0.7;
  w = width*0.7;
  
  if (mouseX > x && x < width-w/2-50) {
    x += 0.9; 
  } else if (mouseX < x && x > 0+w/2+50) {
    x -=0.9;
  }
  
  if (mouseY > y && y < height-h/2-50) {
    y += 0.9; 
  } else if (mouseY < y && y > (h/2)+50) {
    y -= 0.9;
  }
  rect(x,y,w,h);
  line(0,0,x-w/2,y-h/2);
  line(width,0,x+w/2,y-h/2);
  line(0,height,x-w/2,y+h/2);
  line(width,height,x+w/2,y+h/2); 
  
  textFont(tbaFont);
  textSize(40);
  textAlign(CENTER);
  text('Conceito\nda Web.', x, y);
  }

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}