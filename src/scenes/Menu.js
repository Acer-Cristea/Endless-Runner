class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene")
    }

    create() {

        let menuConfig = {
            fontFamily: "Comic Sans MS",
            fontSize: "35px",
            color: "#FFFFFF",
            align: "right",
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
        }

        cursors = this.input.keyboard.createCursorKeys()  
      
        this.add.text(game.config.width/2, game.config.height/2, "Dribble Master",
        menuConfig).setOrigin(0.5)

        this.add.text(game.config.width/2, game.config.height/2 + 30, "Press UP ARROW to Start",
        menuConfig).setOrigin(0.5)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(cursors.up)) {

            this.scene.start('playScene')
        }
    }
}
//scene.object.setScrollFactor(0)

//any object that's in a scene, will not scroll with the screen, like a UI
//can use numbers as well to create parrallex
