//your parameter variables go here!
// let rect_width  = 20;
// let rect_height = 30;
let cherry_xPos = 100;
let cherry_yPos = 100
let cherry_Size = 100;
let cherry_outSize = 110;
let leafx = 80;
let arcyPos = 200
let arcRotate = 179
let cherryxHighlight = cherry_xPos+20
let cherryyHighlight = cherry_yPos-20
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

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);
  // ellipse(18,32, 28,25);
  // square(20,20, 50,20);
  // square(12,20, 20,22)



  //cherry outline
  fill(255);
  noStroke(0);
  circle(cherry_xPos,cherry_yPos,cherry_outSize);

  if (cherryBlue) 
    fill(0,0,255)
  else 
    fill(255,15,50)
  

  //cherry main
  //fill(255,15,50)
  circle(cherry_xPos,cherry_yPos,cherry_Size);
  //cherry highlight
  fill(255)
  circle(cherryxHighlight,cherryyHighlight, 15);
  circle(cherryxHighlight,cherryyHighlight+10, 5);

  //cherry leaf
 // triangle(80, 160, 45, 120, 85, cherry_yPos)
  fill(0,200,150); //teal
  triangle(cherry_xPos-20, cherry_yPos+60, cherry_xPos-60, cherry_yPos+20, cherry_xPos-20, cherry_yPos);

  fill(255)
  arc(25, arcyPos, 40, 50, arcRotate, HALF_PI);
  arc(50, arcyPos, 40, 50, arcRotate, HALF_PI);
  arc(80, arcyPos, 40, 50, arcRotate, HALF_PI);
  arc(110, arcyPos, 40, 50, arcRotate, HALF_PI);
  arc(140, arcyPos, 40, 50, arcRotate, HALF_PI);
  arc(170, arcyPos, 40, 50, arcRotate, HALF_PI);
  arc(200, arcyPos, 40, 50, arcRotate, HALF_PI);



}
//changes