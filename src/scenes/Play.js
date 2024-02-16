class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    init() {

        this.WEAK_SHOT_X_VELOCITY = 100
        this.WEAK_SHOT_Y_VELOCITY = -600

        this.POWER_SHOT_X_VELOCITY = 15
        this.POWER_SHOT_Y_VELOCITY = 15

        this.PLAYER_VELOCITY = 120

        this.player_collision = false

        this.score = 0
        this.scoreText

        this.level = 0
        this.hardMODElevel = 10
        this.extremeMODElevel = 15
        this.extremeMODE = false    
    }

    create() {
        this.beach = this.add.tileSprite(0,0,640,870,"beach").setOrigin(0)

        this.crab1 = this.physics.add.sprite(width, 650, "crab")
        this.crab1.setVelocityX(-100)
        this.crab1.body.setCircle(this.crab1.width/2)
        this.crab1.body.setImmovable(true)

//Phaser.Math.Between(500, 810)
        this.crab2 = this.physics.add.sprite(width, Phaser.Math.Between(500, 810), "crab")
        this.crab2.setVelocityX(-150)
        this.crab2.body.setCircle(this.crab2.width/2)
        this.crab2.body.setImmovable(true)

        this.crab3 = this.physics.add.sprite(width, Phaser.Math.Between(500, 810), "crab")
        this.crab3.setVelocityX(-200)
        this.crab3.body.setCircle(this.crab3.width/2)
        this.crab3.body.setImmovable(true)


        this.soccerBall = this.physics.add.sprite(width/2, height-100,"soccerBall")
        this.soccerBall.body.setCircle(this.soccerBall.width/2)
        this.soccerBall.body.setBounce(0.5)
        this.soccerBall.body.setCollideWorldBounds(true) //why doesn't this work
        this.soccerBall.body.setDamping(true).setDrag(0.3)

        this.gameOver = false

        this.player = this.physics.add.sprite(width/2, height - 50,"player", "player3")
        this.player.setCollideWorldBounds(true)
        this.player.body.setCircle(this.player.width/2, 0,30)

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)

        let scoreConfig = {
            fontFamily: "Courier",
            fontSize: "28px",
            backgroundColor: "#FFFFFF",
            color: "#843605",
            align: "right",
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 100
          }


        this.backgroundMusic = this.sound.add('backgroundMusic', { volume: 0.2, loop: true })
        this.backgroundMusic.play()

        this.scoreText = this.add.text(16,16,"Score: 0" + this.score, scoreConfig)
        
        this.physics.add.collider(this.soccerBall, this.player, (soccerBall, player) => {

            let shotDirectionX = player.x <= this.soccerBall.x ? 1 : -1 
            //let shotDirectionY = player.y <= this.soccerBall.y ? 1 : -1 
            //will need an if statement here to check if shift for power shot is down
            this.score+=50
            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY))

            let hitSounds = ["hit1", "hit2"]

            let randomIndex = Math.floor(Math.random()*2)
            let randomHit = hitSounds[randomIndex]
      
            this.sound.play(randomHit)

        })


        this.physics.add.collider(this.soccerBall, this.crab1, (soccerBall, crab) => {
            let shotDirectionX = crab.x <= this.soccerBall.x ? 1 : -1 
            let shotDirectionY = crab.y <= this.soccerBall.y ? -1 : 1 

            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY)*shotDirectionY)

        })

        this.physics.add.collider(this.soccerBall, this.crab2, (soccerBall, crab) => {
            let shotDirectionX = crab.x <= this.soccerBall.x ? 1 : -1 
            let shotDirectionY = crab.y <= this.soccerBall.y ? -1 : 1 

            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY)*shotDirectionY)

        })

        this.physics.add.collider(this.soccerBall, this.crab3, (soccerBall, crab) => {
            let shotDirectionX = crab.x <= this.soccerBall.x ? 1 : -1 
            let shotDirectionY = crab.y <= this.soccerBall.y ? -1 : 1 

            this.soccerBall.body.setVelocityX((this.WEAK_SHOT_X_VELOCITY)*shotDirectionX)
            this.soccerBall.body.setVelocityY((this.WEAK_SHOT_Y_VELOCITY)*shotDirectionY)

        })



    }

    update() {
        
        this.player.anims.play("run", true)

        if(keyLEFT.isDown) {
            this.player.setVelocityX(-this.PLAYER_VELOCITY)
            
        } else if (keyRIGHT.isDown) {
            this.player.setVelocityX(this.PLAYER_VELOCITY)

        } else {
            this.player.body.velocity.x = 0
        }


        this.scoreText.text = this.score

        this.beach.tilePositionY -= 2
        this.soccerBall.y += 0.5


        if (this.crab1.x <= 0) {
            this.crab1.x = width
            this.crab1.y = Phaser.Math.Between(500, 730)
        }

        if (this.crab2.x <= 0) {
            this.crab2.x = width
            this.crab2.y = Phaser.Math.Between(500, 730)
        }        
        
        if (this.crab3.x <= 0) {
            this.crab3.x = width
            this.crab3.y = Phaser.Math.Between(500, 730)
        }

        if (this.soccerBall.y >= 860) {
            //Game Over
            this.backgroundMusic.stop()
            this.scene.start("gameOverScene")

        }


    }

}