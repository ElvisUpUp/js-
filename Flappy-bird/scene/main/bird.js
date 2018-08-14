class Bird {
    constructor(game) {
        this.game = game
        this.x = 80
        this.y = 200
        this.animations = {
            fly: [],
            flyUp: [],
            flyDown: [],
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
    over(unity) {
        var h = 400
        if (this.y > h || (this.x + this.w > unity.x && this.y < unity.y + unity.h)) {
            this.y = h
            return true
        }else {
            return false
        }
    }
    update() {
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.2
        
        var h = 420
        if(this.y > h) {
            this.y = h
        }

        // 更新角度
        if (this.rotation < 45) {
            this.rotation += 5
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
        // var animationNames = {
        //     down: 'flyUp',
        //     up: 'flyDown',
        // }
        // var name = animationNames[keyStatus]
        // this.changeAnimation(name)
    }
    changeAnimation(name) {
        this.animationName = name
    }
}