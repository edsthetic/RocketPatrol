// Edward Gopez, Rocket Patrol With Mods, July 1st 2021 3:03 AM, it took probably around 22-23 hours, took a lot longer than i thought.
//Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
//Create a new title screen (e.g., new artwork, typography, layout) (10)
//Display the time remaining (in seconds) on the screen (10)
//Add your own (copyright-free) background music to the Play scene (5)
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [ Menu, Play ]
}
  
let game = new Phaser.Game(config);

var timedEvent;
var text;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
