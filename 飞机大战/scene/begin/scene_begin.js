class sceneBegin extends gameScene {
    constructor(game) {
        super(game)
        this.game = game

        // var bg = new gameImage(this.game, 'bg')
        // this.addElement(bg)
        
        // var w = new gameAnimation(this.game)
        // w.x = 100
        // w.y = 200
        // this.w = w
        // this.addElement(w)

        this.setupInputs()
    }

    draw() {
        super.draw()
    }

    setupInputs() {
        this.game.registerAction('a', (keyStatus) => {
            this.w.move(-2, keyStatus)
        })
        this.game.registerAction('d', (keyStatus) => {
            this.w.move(2, keyStatus)
        })
    }
}