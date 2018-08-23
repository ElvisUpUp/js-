class Enemy {
    constructor(game) {
        this.game = game
        this.init()
    }
    init() {
        this.alive = true
        this.speed = randomBetween(5, 8)
        this.cooldown = 8
        this.animations = {
            boom: [],
        }
        var type = randomBetween(0, 1)
        this.enemy = new gameImage(this.game, `enemy${type}`)
        this.enemy.w = this.enemy.textture.width
        this.enemy.h = this.enemy.textture.height
        this.enemy.x = randomBetween(0, 350 - this.enemy.w)
        this.enemy.y = -randomBetween(0, 200)
    }
    over() {
        if (this.game.scene.plane.isFire) {
            for (var b of this.game.scene.plane.bullets) {
                if (b.y < this.enemy.h + this.enemy.y && b.x > this.enemy.x && b.x < this.enemy.x + this.enemy.w) {
                    this.alive = false
                    b.alive = false
                    this.game.scene.plane.bullets.pop()
                    this.game.scene.s.score++
                    this.game.gScore++
                    return true
                }
            }
        }
    }
    collide() {
        var plane = this.game.scene.plane
        if (plane.y < this.enemy.h + this.enemy.y && plane.x > this.enemy.x && plane.x < this.enemy.x + this.enemy.w) {
            plane.alive = false
            log('collide')
            return true
        }
    }
    update() {
        this.enemy.y += this.speed
        if (this.enemy.y + this.enemy.h > 852 || this.over()) {
            this.init()
        }
    }
    draw() {
        if (this.alive) {
            var context = this.game.context
            context.drawImage(this.enemy.textture, this.enemy.x, this.enemy.y)
        }
    }
}