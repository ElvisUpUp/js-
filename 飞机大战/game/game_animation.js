class gameAnimation {
    constructor(game) {
        this.game = game
        this.animations = {
            attack: [], 
            walk: [],
        }
        for (let i = 1; i < 10; i++) {
            var name = `w${i}`
            var t = this.game.texttureByName(name)
            this.animations['walk'].push(t)
        }
        for (let i = 1; i < 7; i++) {
            var name = `attack${i}`
            var t = this.game.texttureByName(name)
            this.animations['attack'].push(t)
        }
        this.animationName = 'attack'
        this.textture = this.frames()[0]
        this.frameIndex = 0
        this.frameCount = 3
    }
    frames() {
        return this.animations[this.animationName]
    }
    update() {
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.textture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        this.game.drawImage(this)
    }
    move(x, keyStatus) {
        this.x += x
        var animationNames = {
            down: 'walk',
            up: 'attack',
        }
        var name = animationNames[keyStatus]
        this.changeAnimation(name)
    }
    changeAnimation(name) {
        this.animationName = name
    }
}