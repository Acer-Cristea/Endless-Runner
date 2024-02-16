class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene')
    }

    create() {

        let gameOverConfig = {
            fontFamily: "Courier",
            fontSize: "50px",
            backgroundColor: "#FFFFFF",
            color: "#FF0000",
            align: "center",
            padding: {
              top: 5,
              bottom: 5,
            },
          }

        let gameOverText = this.add.text(width/2, height/2-20, "Game Over", gameOverConfig).setOrigin(0.5)


        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)


    }

    update() {

        if(Phaser.Input.Keyboard.JustDown(keyRESET)){
            //this.backgroundMusic.stop();
            this.scene.start("playScene")
        }

        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            //this.backgroundMusic.stop();
            this.scene.start("menuScene")
        }


    }

}


