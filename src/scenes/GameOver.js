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



        this.add.text(game.config.width/2, game.config.height/2 + 30, "Press (R) to Restart",
        menuConfig).setOrigin(0.5)

        this.add.text(game.config.width/2, game.config.height/2 + 100, "Press UP ARROW to Main Menu",
        menuConfig).setOrigin(0.5)

        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)


    }

    update() {

        if(Phaser.Input.Keyboard.JustDown(keyRESET)){
            this.sound.play("selection")

            this.scene.start("playScene")
        }

        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.sound.play("selection")

            this.scene.start("menuScene")
        }


    }

}


