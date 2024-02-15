class Load extends Phaser.Scene {
    constructor() {
        super("loadScene")
    }

    preload() {

        this.load.path = "./assets/"
        this.load.image("beach", "beachBackground.png")
        this.load.image("soccerBall", "soccer_ball.png")
        this.load.image("crab", "kiwi.png")    
        //this.load.image("sprite", "spritesheet.png")
        this.load.atlas("player", "spritesheet.png", "walking.json")

        this.load.audio("hit1", "hit1.wav")
        this.load.audio("hit2", "hit2.wav")
        this.load.audio("selection", "selection.wav")

    }


    create() {


        this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNames("player", {
                prefix: "player",
                start: 1,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'idle',
            defaultTextureKey: 'player',
            frames: [
                { frame: 'player2' }
            ],
            repeat: -1
        })



        this.scene.start("menuScene")
    }
}