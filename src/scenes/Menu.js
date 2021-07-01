class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }

  preload() {
    //load title screen
      this.load.image('title', './assets/title.png');
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.mp3');
      this.load.audio('sfx_rocket', './assets/rocket_shot.mp3');
      this.load.audio('bgm', './assets/bgm.mp3');
  }

  create() {
      // menu text configuration
      let menuConfig = {
          fontFamily: 'Courier',
          fontSize: '28px',
          backgroundColor: '#ff6996',
          color: '#ffc4d6',
          align: 'right',
          padding: {
              top: 5,
              bottom: 5,
          },
          fixedWidth: 0
      }

      this.bgm = this.sound.add("bgm");

      var bgmConfig = {
        mute: false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
      }

      this.bgm.play(bgmConfig);
      
      // show menu text
      this.mainMenu = this.add.tileSprite(0, 0, 640, 480, 'title').setOrigin(0, 0);

      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // Novice mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // Expert mode
        game.settings = {
          spaceshipSpeed: 4,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
    }
}