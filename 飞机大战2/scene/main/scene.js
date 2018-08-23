class Scene extends gameScene {
    constructor(game) {
        super(game)
        this.game = game
        this.game.over = false
        this.enemyOfNum = 3

        var bg = new gameImage(this.game, 'bg')
        this.addElement(bg)

        var plane = new Plane(this.game)
        this.plane = plane
        this.addElement(plane)

        var score = new Score(this.game)
        this.s = score
        this.addElement(score)

        this.addEnemies()

        this.setupInputs()

        window.addEventListener('keydown', (event) => {
            if (event.key === 'p') {
                this.game.pause();
            }
        })
    }
    addEnemies() {
        this.es = []
        for (var i = 0; i < this.enemyOfNum; i++) {
            var enemy = new Enemy(this.game)
            this.enemy = enemy
            this.addElement(this.enemy)
            this.es.push(this.enemy)
        }
    }
    update() {
        if (this.game.paused) {
            return
        }
        // 死亡切换场景
        for (var e of this.es) {
            if (e.collide()) {
                log('end')
                var end = new sceneEnd(this.game)
                this.game.replaceScene(end)
                return
            }
        }
        super.update()
    }
    draw() {
        super.draw()
    }
    setupInputs() {
        this.game.registerAction('a', () => {
            this.plane.moveLeft()
        })
        this.game.registerAction('d', () => {
            this.plane.moveRight()
        })
        this.game.registerAction('w', () => {
            this.plane.moveUp()
        })
        this.game.registerAction('s', () => {
            this.plane.moveDown()
        })
        this.game.registerAction('f', () => {
            this.plane.fire()
        })
    }
}