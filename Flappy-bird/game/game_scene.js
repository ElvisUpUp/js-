//es6 class
class gameScene {
    constructor(game) {
        this.game = game
        this.elements = []
        this.gScore = 0
    }
    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }
    draw() {
        for (var e of this.elements) {
            // this.game.drawImage(e)
            e.draw()
        }
    }
    update() {
        for (var i = 0; i <this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }
    }
}