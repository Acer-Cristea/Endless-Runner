class Load extends Phaser.Scene {
    constructor() {
        super("loadScene")
    }

    preload() {

        this.load.path = "./assets/"
        this.load.image("beach", "beachBackground.png")
        this.load.image("soccerBall", "soccer_ball.png")
        this.load.image("player", "kiwi.png")    
    }

    create() {
        this.scene.start("menuScene")
    }
}