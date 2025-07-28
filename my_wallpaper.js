//your parameter variables go here!

let cherry_xPos = 100;
let cherry_yPos = 100
let cherry_Size = 100;
let cherry_outSize = 110;
let leafx = 80;
let arcxPos = 20;
let arcyPos = 200;
let arcWidth = 40
let arcHeight = 80
let arcRotate = 179;
let cherryxHighlight = cherry_xPos+20;
let cherryyHighlight = cherry_yPos-20;
let cherryBlue = false;



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
    if (cherry_Size < 100)
    background(30,75,255) //royal blue
    
  

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);
  // ellipse(18,32, 28,25);
  // square(20,20, 50,20);
  // square(12,20, 20,22)



  //cherry white border
  fill(255);
  noStroke(0);
   if (cherry_outSize > 110)
    fill (255,15,50)
  circle(cherry_xPos,cherry_yPos,cherry_outSize);



  //cherry body
  //fill(255,15,50)
  if (cherryBlue) 
    fill(30,75,255) //royal blue
  else 
    fill(255,15,50)
  circle(cherry_xPos,cherry_yPos,cherry_Size);
  //cherry highlight
  fill(255)
  circle(cherryxHighlight,cherryyHighlight, 15);
  circle(cherryxHighlight+10,cherryyHighlight+10, 5);

  //cherry leaf
  fill(0,200,150); //mint green
  triangle(cherry_xPos-20, cherry_yPos+60, cherry_xPos-60, cherry_yPos+20, cherry_xPos-20, cherry_yPos);

  //white clouds
  fill(255)
  arc(arcxPos, arcyPos, arcWidth, arcHeight, arcRotate, HALF_PI);
  arc(arcxPos+30, arcyPos, arcWidth, arcHeight-30, arcRotate, HALF_PI);
  arc(arcxPos+60, arcyPos, arcWidth, arcHeight, arcRotate, HALF_PI);
  arc(arcxPos+90, arcyPos, arcWidth, arcHeight-30, arcRotate, HALF_PI);
  arc(arcxPos+120, arcyPos, arcWidth, arcHeight, arcRotate, HALF_PI);
  arc(arcxPos+150, arcyPos, arcWidth, arcHeight-30, arcRotate, HALF_PI);
  arc(arcxPos+180, arcyPos, arcWidth, arcHeight, arcRotate, HALF_PI);


}
//changes