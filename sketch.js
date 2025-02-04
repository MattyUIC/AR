// create a variable to hold our world object
var world;

// create variables to hold our markers
var markerHiro;

// where our player is current hanging out at
var playerX, playerY;

// artwork for our player
var playerArtwork;

// a bunch of coins
var coins = [];

// points
var points = 0;

// this is a major hack, but if you plan on using getScreenPosition on a mobile device you have to load an image or other media file here
// the reason has to do with the fact that the AR.js camera system takes some time to initialize, and this process pauses while the user
// is providing their consent to turn on their camera via a pop-up box.  however, p5 will continue executing behind the scenes and will set
// up its end of the AR world wtihout AR.js.  using 'preload' will pause p5's startup routine until after the user clicks to allow access to
// their camera, thus bringing the system back into balance.
// as mentioned, this is a hack, but I'm working on fixing it for the next version of the library!
function preload() {
  loadImage('images/player.png');
}

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to our two markers that we set up on the HTML side (connect to it using its 'id')
  markerHiro = world.getMarker('hiro');

  // place the player in the middle of the screen
  playerX = width/2;
  playerY = height/2;
}


function rainbow(x, y){

  fill(0)

  stroke(255,0,0)
  bezier(x, y, x+25, y - 50,  x + 75, y - 50, x + 100, y);
  stroke(100,100,100)
  bezier(x+5, y, x+30, y - 45,  x + 70, y - 45, x + 95, y);
  stroke(0,255,0)
  bezier(x+10, y, x+35, y - 40,  x + 65, y - 40, x + 90, y);
  stroke(0,100,100)

  bezier(x+15, y, x+40, y - 35,  x + 60, y - 35, x + 85, y);
  stroke(0,0,255)

  bezier(x+20, y, x+45, y - 30,  x + 55, y - 30, x + 80, y);

  // bezier(x, y, x+25, y - 50,  x + 75, y - 50, x + 100, y);
  // bezier(x, y, x+25, y - 50,  x + 75, y - 50, x + 100, y);

}

function draw() {
  // erase the background
  world.clearDrawingCanvas();

  // use the markers as positional controllers
  if (markerHiro.isVisible() == true) {
    // get the position of this marker
    var hiroPosition = markerHiro.getScreenPosition();
    var x = hiroPosition.x;
    var y = hiroPosition.y;
    

    stroke(255);

    rainbow(x,y)

  }

}