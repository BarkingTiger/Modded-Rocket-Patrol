//Spaceship prefab
class Spaceship2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   //add to existing scene
        this.points = pointValue;   //store pointValue
        this.scale = (0.5, 0.5);
        this.moveSpeed = game.settings.spaceshipSpeed * 3;        //pixels per frame
        
    }

    update() {
        //move spaceship left
        this.x -= this.moveSpeed;
        
        //wrap around from left edge to right edge
        if (this.x <= 0 - this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}