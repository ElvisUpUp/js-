class sceneBegin extends gameScene {
    constructor(game) {
        super(game)
        this.game = game

        var start = new gameImage(this.game, 'start')
        start.x = -50
        start.y = -50
        this.addElement(start)

        var score = new Score(this.game)
        this.addElement(score)

        this.setupInputs()
    }
    update() {
        super.update()
       
    }
    draw() {
        super.draw()
    }
    setupInputs() {
        var that = this
        this.game.canvas.addEventListener('click', function inputs(event){
            var main = new Scene(that.game, 'bg')
            that.game.replaceScene(main)
            that.game.start = true
            that.game.canvas.removeEventListener('click', inputs)
        })
    }
}