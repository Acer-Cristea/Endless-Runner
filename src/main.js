// Acer Cristea
// Game Title: Dribble Master
// Hours Spent: Approximately 16
// 

'use strict'

// define and configure main Phaser game object
let config = {
    type: Phaser.AUTO,
    height: 870,
    width: 640,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    render:{
        pixelArt:true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            //gravity: {
            //    x: 0,
            //    y: 0
            //}
        }
    },
    scene: [ Load, Menu, Play, GameOver]
}

let game = new Phaser.Game(config)


let keyLEFT, keyRIGHT, keyUP, keyDOWN, keyRESET

let { width, height } = game.config