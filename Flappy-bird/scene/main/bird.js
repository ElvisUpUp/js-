class Bird {
    constructor(game) {
        this.game = game
        this.x = 40
        this.y = 250
        this.animations = {
            fly: [],
        }
        for (let i = 0; i < 3; i++) {
            var name = `bird${i}`
            var t = this.game.texttureByName(name)
            this.animations['fly'].push(t)
        }
        this.animationName = 'fly'
        this.textture = this.frames()[0]
        this.w = this.textture.width
        this.h = this.textture.height
        this.frameIndex = 0
        this.frameCount = 3
        this.rotation = 0
        this.flipX = false
        this.isPass = false
        // 重力和加速度
        this.gy = 10
        this.vy = 0
    }
    frames() {
        return this.animations[this.animationName]
    }
    jump() {
        this.vy = -10
    }
    pass(p) {
        if (this.x + this.w > p.x + p.w && this.x < p.x + p.w) {
            this.isPass = true
            if (this.x > p.x + p.w - 45) {
                this.isPass = false
            }
            return true
        } else {
            this.isPass = false
            return false
        }
    }
    over(p1, p2) {
        var h = 410
        if (this.y > h || (this.x + this.w < p1.x + p1.w && this.x + this.w > p1.x + 5 && this.y < p1.y + p1.h)) {
            // 碰撞上面
            this.y = h
            this.game.over = true
            return true
        } else if (this.y > h || (this.x + this.w < p1.x + p1.w && this.x + this.w > p1.x + 5 && this.y + this.w > p2.y)) {
            // 碰撞下面
            this.y = h
            this.game.over = true
            return true
        } else {
            return false
        }
    }
    getScore() {
        if (!this.game.isOver) {
            return true
        }
    }
    update() {
        if (this.game.start) {
            // 更新受力
            this.y += this.vy
            this.vy += this.gy * 0.2

            // 更新角度
            if (this.rotation < 45) {
                this.rotation += 5
            }
        }

        var h = 420
        if (this.y > h) {
            this.y = h
        }

        this.frameCount--
            if (this.frameCount == 0) {
                this.frameCount = 3
                this.frameIndex = (this.frameIndex + 1) % this.frames().length
                this.textture = this.frames()[this.frameIndex]
            }

    }
    draw() {
        var context = this.game.context
        context.save()
        var w2 = this.w / 2
        var h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)
        context.drawImage(this.textture, 0, 0)
        context.restore()
    }
    move(y, keyStatus) {
        this.vy += y
    }
    changeAnimation(name) {
        this.animationName = name
    }
}