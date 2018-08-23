class Plane {
    constructor(game) {
        this.game = game
        this.init()
    }
    init() {
        this.textture = this.game.texttureByName('player')
        this.w = this.textture.width
        this.h = this.textture.height
        this.x = (this.game.canvas.width - this.w) / 2
        this.y = this.game.canvas.height - this.h
        this.speed = 5
        this.cooldown = 8
        this.isFire = false
        this.bullets = []
        this.alive = true
        this.animations = {
            boom: [],
        }
    }
    frames() {
        return this.animations[this.animationName]
    }
    over() {

    }
    getScore() {

    }
    move(x, y) {
        if (x < 0) {
            this.x = 0;
        }
        if (x > 350 - this.w) {
            this.x = 350 - this.w;
        }
        if (y < 0) {
            this.y = 0
        } else if (y > 612 - this.h) {
            this.y = 612 - this.h
        }
    }
    moveLeft() {
        this.move(this.x, this.y)
        this.x -= this.speed
    }
    moveRight() {
        this.move(this.x, this.y)
        this.x += this.speed
    }
    moveUp() {
        this.move(this.x, this.y)
        this.y -= this.speed
    }
    moveDown() {
        this.move(this.x, this.y)
        this.y += this.speed
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = 8
            this.bullet = new Bullet(this.game)
            this.bullet.x = this.x + this.w / 2
            this.bullet.y = this.y
            this.game.scene.addElement(this.bullet)
            this.isFire = true
            this.bullets.push(this.bullet)
        }
    }
    update() {
        if (this.cooldown > 0) {
            this.cooldown--
        } 
    }
    draw() {
        var context = this.game.context
        context.drawImage(this.textture, this.x, this.y)
    }
    changeAnimation(name) {
        this.animationName = name
    }
}