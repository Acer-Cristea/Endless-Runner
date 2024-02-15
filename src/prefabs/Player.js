class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.moveSpeed = 1

    }


    update() {
        //console.log("herrere")
        if (keyLEFT.isDown) {
            this.x -= this.moveSpeed
            //console.log("going left")
        } else if (keyRIGHT.isDown){
            this.x += this.moveSpeed    
            //console.log("going right")

        }  else if (keyUP.isDown){
            this.y -= this.moveSpeed  
        } else if (keyDOWN.isDown){
        this.y += this.moveSpeed  
        }

    }
}