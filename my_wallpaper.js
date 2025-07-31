//your parameter variables go here!


//cherry
let cherry_xPos = 100;
let cherry_yPos = 100;
let cherry_Size = 100;
//if cherry size is set at a value LESS than 100, the entire design executes the Cherry Blue Variant.
//if cherry size is set at a value MORE than 100, the entire design executes the Cherry Pink Variant.
//to change the cherry only, change color parameters below.
let cherry_outSize = cherry_Size+10; //og:10
let cherry_xHighlight = cherry_xPos+20; //og:20
let cherry_yHighlight = cherry_yPos-20; //og:20
let cherry_sizeHighlight = 20; //og:20

//background motifs
let showDiamond = true; //og: true
let diamondStrokeWeight = 5; //og:5
let diamond1Line = 1;
let diamond2Line = 200;

//mountains
let show_Mountains = false;
let noOutline = true;
let arcxPos = 10;
let arcyPos = 200;
let arcWidth = 40;
let arcHeight = 100;
let arcPi = 179;

//color parameters
let cherryBlue = false;
let cherryPink = false;
//changes only the main cherry color (automatically becomes true when either varients are running).



function setup_wallpaper(pWallpaper) {
//pWallpaper.output_mode(DEVELOP_GLYPH);
pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(128, 9, 56); //burgundy red
    if (cherry_Size < 90)
    background(60,80,250) //royal blue
  if (cherry_Size > 110)
    background(245, 100, 197);
    

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  

//  noStroke(0);
//  fill(156, 26, 78);
//   circle(150,130, 125);

   //clouds
   fill(255);
   noStroke(0);
  ellipse(35,25, 28,25);
  square(35,25, 50,20);
  ellipse(180,150, 28,25);
  square(135,100, 50,20);

  //diamond
  if (showDiamond){
    stroke(255);
    strokeWeight(diamondStrokeWeight);
    line(diamond1Line,diamond1Line, diamond2Line,diamond2Line);
    line(diamond1Line,diamond2Line, diamond2Line,diamond1Line);
  }
  

  //triangle: centre point, lowest point, highest point
  stroke(255);
  fill(255)
  triangle(80,100, 1,20, 1,180); //left
  //triangle(100,80, 180,1, 20,1); //top
  if (!showDiamond){
    noFill(0);
  }
  
  

  //cherry white border
  fill(255);
  noStroke(0);
  circle(cherry_xPos,cherry_yPos,cherry_outSize);

 //Cherry Blue Variant
  if (cherry_Size < 100){
  cherryBlue = true
 }

 //Cherry Pink Variant
 if (cherry_Size > 100){
  cherryPink = true
 }

  //cherry body
  if (cherryBlue) {
    fill(30,75,255) //royal blue
  } else if (cherryPink) {
    fill(245, 100, 197); //bubblegum pink
  } else {
    fill(255,15,50); //cherry red
  }
    circle(cherry_xPos,cherry_yPos,cherry_Size);


  //cherry highlight
  fill(255)
  circle(cherry_xHighlight,cherry_yHighlight, cherry_sizeHighlight); //big highlight
  circle(cherry_xHighlight+10,cherry_yHighlight+10, cherry_sizeHighlight-10); //small highlight

  //cherry leaf
  fill(02,200,150); //mint green
  triangle(cherry_xPos-20, cherry_yPos+60, cherry_xPos-60, cherry_yPos+20, cherry_xPos-20, cherry_yPos);


  //mountains
    fill(43, 107, 59); //forest green

    if (noOutline){
      stroke(255);
      strokeWeight(2);
    }

    if (arcHeight-30){
      fill(121, 224, 146);
    }

    if(show_Mountains){
    arc(arcxPos, arcyPos, arcWidth, arcHeight, arcPi, HALF_PI);
    arc(arcxPos+30, arcyPos, arcWidth, arcHeight-30, arcPi, HALF_PI);
    arc(arcxPos+60, arcyPos, arcWidth, arcHeight, arcPi, HALF_PI);
    arc(arcxPos+90, arcyPos, arcWidth, arcHeight-30, arcPi, HALF_PI);
    arc(arcxPos+120, arcyPos, arcWidth, arcHeight, arcPi, HALF_PI);
    arc(arcxPos+150, arcyPos, arcWidth, arcHeight-30, arcPi, HALF_PI);
    arc(arcxPos+180, arcyPos, arcWidth, arcHeight, arcPi, HALF_PI);


  }
}