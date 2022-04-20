class Choice extends Phaser.Scene {
    constructor() {
        super("choiceScene");
    }

    create() {
        //menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //show menu text
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, 'P1: Use A D keys to move & W to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2, 'P2: Use ←→ arrows to move & ↑ to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding, 'Press ← for 1 Player or → for 2 Player', menuConfig).setOrigin(0.5);
        
        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
 
            this.sound.play('sfx_select');
            this.scene.start('1playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
           
            this.sound.play('sfx_select');
            this.scene.start('2playScene');
        }
    }
}