/*
Kevin Khau
Modded Rocket Patrol
4/19/22
~3-4 hours

Implement a simulatneous two-player mode (30)
P1 Controls:
A = Move Left
D = Move Right
W = Fire
P2 Controls:
Left = Move Left
Right = Move Right 
Up = Fire
Create a new spaceship type that's smaller , moves faster, and is worth more points (20)
Create new artwork for all of the in-game assets (20)
Display the time remaining on the screen(10)
Implement parallax scrolling(10)
Create a new scrolling tile sprite for the background (5)
Implement the speed increase that happens after 30 seconds in the original game (5)
*/
let config = {
    type: Phaser.CANVAS,
    width: 640, 
    height: 480, 
    scene: [ Menu, Choice, onePlay, twoPlay ]
}

let game = new Phaser.Game(config);

let keyW, keyA, keyD, keyF, keyR, keyUP, keyLEFT, keyRIGHT;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
