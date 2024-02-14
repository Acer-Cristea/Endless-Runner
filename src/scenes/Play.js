class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    init() {

        this.WEAK_SHOT_X_VELOCITY = 25
        this.WEAK_SHOT_Y_VELOCITY = 25

        this.POWER_SHOT_X_VELOCITY = 15
        this.POWER_SHOT_Y_VELOCITY = 15

        this.level = 0
        this.hardMODElevel = 10
        this.extremeMODElevel = 15
        this.extremeMODE = false    
    }

    create() {
        this.beach = this.add.tileSprite(0,0,640,870,"beach").setOrigin(0)
        this.soccerBall = this.physics.add.sprite(width/2, height/2-20,"soccerBall")
        this.soccerBall.body.setCircle(this.soccerBall.width/2)
        this.soccerBall.setBounce(this.soccerBall)
        this.soccerBall.body.setDamping(true).setDrag(0.5)

        this.gameOver = false

        this.player = new Player(this, width/2, height/2,"player").setOrigin(0.5,0)
        this.player.body.setCircle(this.player.width/2)

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        
        this.physics.add.collider(this.soccerBall, this.player, (soccerBall, player) => {

            let shotDirectionX = player.x <= this.soccerBall.x ? 1 : -1 
            let shotDirectionY = player.y <= this.soccerBall.y ? 1 : -1 

            //will need an if statement here to check if shift for power shot is down
            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY)*shotDirectionY)

        })

    }

    update() {

        if (!this.gameOver) {
            this.player.update()
        }

        this.beach.tilePositionY -= 1
        this.soccerBall.y += 0.3


    }

}