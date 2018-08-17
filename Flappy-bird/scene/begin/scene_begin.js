class sceneBegin extends gameScene {
    constructor(game) {
        super(game)
        this.game = game

        var bg = new gameImage(this.game, 'bg')
        this.addElement(bg)

        // 循环移动的地面
        this.skipCounts = 4
        this.grounds = []
        for (var i = 0; i < 30; i++) {
            var land = new gameImage(this.game, 'ground')
            land.x = i * 32
            land.y = this.game.canvas.height - land.h / 2
            this.addElement(land)
            this.grounds.push(land)
        }

        var ready = new gameImage(this.game, 'ready')
        ready.x = 40
        ready.y = 150
        this.addElement(ready)

        var b = new Bird(this.game)
        this.b = b
        this.addElement(b)

        var tap = new gameImage(this.game, 'tap')
        tap.x = 100
        tap.y = 230
        this.addElement(tap)

        var score = new Score(this.game)
        this.addElement(score)

        this.setupInputs()
    }
    update() {
        super.update()
        // 地面移动
        this.skipCounts--
            var offset = -5
        if (this.skipCounts == 0) {
            this.skipCounts = 4
            offset = 15
        }
        for (var i = 0; i < 30; i++) {
            var land = this.grounds[i]
            land.x += offset
        }
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