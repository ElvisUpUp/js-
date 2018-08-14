class gameImage {
    constructor(game, name) {
        this.game = game
        this.textture = this.game.texttureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.textture.width
        this.h = this.textture.height
    }
    update() {}
    draw() {
        this.game.drawImage(this)
    }
}

// class Player extends gameImage{
//     constructor(game, name) {
//         super(game, name)

//     }
// }