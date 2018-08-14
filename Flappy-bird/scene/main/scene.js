class Scene extends gameScene {
    constructor(game) {
        super(game)
        this.game = game

        var bg = new gameImage(this.game, 'bg')
        this.addElement(bg)

        // 水管
        this.pipe = new Pipes(this.game)
        this.addElement(this.pipe)

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
        var b = new Bird(this.game)

        this.b = b
        this.addElement(b)

        this.setupInputs()

        window.addEventListener('keydown', (event) => {
            if (event.key === 'p') {
                this.game.pause();
            }
        })
    }
    update() {
        if (this.game.paused) {
            return
        }
        // 死亡切换场景
            // log(this.pipe.pipes[0].x, this.pipe.pipes[0].y + this.pipe.pipes[0].h, this.b.x + this.b.w==this.pipe.pipes[0].x, this.b.y < this.pipe.pipes[0].y + this.pipe.pipes[0].h)
            // @TODO 与下面柱子相撞
            if (this.b.over(this.pipe.pipes[0])) {
                log('over')
                var end = new sceneEnd(this.game, 'bg')
                this.game.replaceScene(end)
            }
        super.update()
        this.skipCounts--
            var offset = -5
        if (this.skipCounts == 0) {
            this.skipCounts = 4
            offset = 15
        }
        // 地面移动
        for (var i = 0; i < 30; i++) {
            var land = this.grounds[i]
            land.x += offset
        }
    }
    draw() {
        super.draw()
    }

    setupInputs() {
        this.game.registerAction('a', (keyStatus) => {
            // this.b.move(-10, keyStatus)
            this.b.rotation = -45
            this.b.jump()
        })
        // this.game.registerAction('p', (keyStatus) => {
        //     this.game.pause()
        //     log('pause')
        // })
    }
}