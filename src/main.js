//Kelsey Melott
//Dragon patrol
//Time it took:
//Done:
//Implement a new timing/scoring mechanism that adds time to the clock for successful hits (15)
//Display the time remaining (in seconds) on the screen (10)
//Create a new title screen (e.g., new artwork, typography, layout) (10)
//Create 4 new explosion sound effects and randomize which one plays on impact (10)
//Implement parallax scrolling for the background (10)
//Add your own (copyright-free) background music to the Play scene (please be mindful of the volume) (5)

//left to do:
//Using a texture atlas, create a new animated sprite for the Spaceship enemies (10)
//Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (15)
//Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (15)

//Sources:
//Yasha Bell helped me with displaying the timer
//randomizing sound effects: Tobe Osakwe's https://gist.github.com/thosakwe/bade2c36c81f41b4a17e6482797dd598
        

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
//display
let scoreConfig = {
    fontFamily: 'Mistral',
    fontSize: '28px',
    backgroundColor: '#F3B141',
    color: '#843605',
    align: 'center',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 100
}
let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyF, keyR, keyLEFT, keyRIGHT, keyJ, keyA, keyD;
let P2canFire = true;
let P1canFire = true;