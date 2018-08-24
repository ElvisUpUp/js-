// @TODO 死亡动画
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
            live: [],
            boom: [],
        }

        var type = randomBetween(1, 2)
        this.enemy = new gameImage(this.game, `enemy${type}`)
        this.enemy.w = this.enemy.textture.width
        this.enemy.h = this.enemy.textture.height
        this.enemy.x = randomBetween(0, 350 - this.enemy.w)
        this.enemy.y = -randomBetween(0, 200)

        this.animations['live'].push(this.enemy.textture)
        for (var i = 1; i < 5; i++) {
            var name = `enemy${type}_down${i}`
            var t = this.game.texttureByName(name)
            this.animations['boom'].push(t)
        }
        this.animationName = 'live'
        this.enemy.textture = this.frames()[0]
        this.frameIndex = 0
        this.frameCount = 3
    }
    frames() {
        return this.animations[this.animationName]
    }
    changeAnimation(name) {
        this.animationName = name
    }
    over() {
        if (this.game.scene.plane.isFire) {
            for (var b of this.game.scene.plane.bullets) {
                if (b.y < this.enemy.h + this.enemy.y && b.x > this.enemy.x && b.x < this.enemy.x + this.enemy.w) {
                    // 动画
                    this.changeAnimation('boom')
                    this.frameCount--
                    if (this.frameCount == 0) {
                        this.frameCount = 3
                        this.frameIndex = (this.frameIndex + 1) % this.frames().length
                        this.enemy.textture = this.frames()[this.frameIndex]
                        log(this.enemy.textture)
                    }

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
        if (plane.y < this.enemy.h + this.enemy.y) {
            if (plane.x + plane.textture.width / 2 > this.enemy.x && plane.x + plane.textture.width / 2 < this.enemy.x + this.enemy.w) {
                plane.alive = false
                return true
            }
        }
    }
    draw() {
        log('over', this.alive)
        if (this.alive) {
            var context = this.game.context
            context.drawImage(this.enemy.textture, this.enemy.x, this.enemy.y)
        } else {
            log('消失')
        }
    }
    update() {
        this.enemy.y += this.speed
        // log('update')
        if (this.enemy.y + this.enemy.h > 852 || this.over()) {
            this.init()
        }
    }
}