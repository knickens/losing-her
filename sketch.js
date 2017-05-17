var theSound;
var r,g,b;
var pg;
var x = 200;
var y = 200;
var speedx = 4;
var speedy = 5;


function preload(){
    theSound = loadSound('js/losingher.mp3');
}



function setup(){
    createCanvas(800,900);
    pg = createGraphics(500,300);
    background(0);
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    theSound.setVolume(0.1);
}


function draw(){
  fill(0,12);
  rect(0, 0, width, height);
  fill(r,g,b);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(0);
  pg.noFill();
  pg.stroke(r,g,b);
  pg.ellipse(mouseX-150, mouseY-75, 60, 60);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 150, 75);
  
  move();
}
  


function mouseClicked(){
  if(theSound.isPlaying()){
   theSound.pause();
   
   
  }
  else{
   theSound.play();
  }
}
    
//function mouseReleased(){
 //   theSound.pause();
//}

function move(){
   y = y + speedy;
    x = x + speedx;
  if(y > height || y < 0){
        y = 50 - random(height);
         r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  }
 if(x > width || x<0){
   x = 50 - random(width);  
    r = random(0,255);
    g = random(0,50);
    b = random(0,100);
   
 } 
}
