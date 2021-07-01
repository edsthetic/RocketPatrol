// Rocket prefab
class Honeypot extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, rocket) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // track rocket's firing status
        this.moveSpeed = 2;         // pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket')  // add rocket sfx
        this.rocket = rocket;
    }

    update() {
        // left/right movement
        this.x = this.rocket.x;
    }
}