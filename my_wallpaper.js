//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
let cherry_xPos = 100;
let cherry_yPos = 100
let cherry_Size = 90;
let cherry_outSize = 105
//let cherry_highlight = 
let leafx = 80
let 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  // pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

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
  fill(255)
  noStroke(0)
  circle(cherry_xPos,cherry_yPos,cherry_outSize)
  //cherry main
  fill(255,15,50)
  circle(cherry_xPos,cherry_yPos,cherry_Size)
  //cherry highlight
  fill(255)
  circle(125,80, 15)
  circle(125,90, 5)

  //cherry leaf
 // triangle(80, 160, 45, 120, 85, cherry_yPos)
  fill(0,200,150) //teal
  triangle(leafx, 160, 45, 110, leafx, 100)
  
}

function draw(){

  


}
//changes