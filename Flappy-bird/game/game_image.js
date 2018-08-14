class gameImage {
    constructor(game, name) {
        this.game = game
        this.textture = this.game.texttureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.textture.width
        this.h = this.textture.height
        this.flipY = false
        this.rotation = 0
    }
    update() {}
    draw() {
        this.game.drawImage(this)
    }
}
