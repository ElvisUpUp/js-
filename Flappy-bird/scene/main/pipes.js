class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpace = 150
        this.pipeHorizonSpace = 200
        this.colOfPipe = 3
        this.bird = new Bird(this.game)
        this.init()
    }
    init() {
        for (var i = 0; i < this.colOfPipe; i++) {
            var p1 = new gameImage(this.game, 'pipeUp')
            p1.x = 500 + i * this.pipeHorizonSpace
            var p2 = new gameImage(this.game, 'pipeDown')
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(355, 450)
        p2.y = p1.y - this.pipeSpace - p2.h
    }
    update() {
        for (var p of this.pipes) {
            p.x -= 3
            if (p.x < -p.w) {
                var temp = p.x
                temp += this.pipeHorizonSpace * this.colOfPipe
                this.pipes.splice(0, 2)
                var p3 = new gameImage(this.game, 'pipeUp')
                p3.x = temp
                var p4 = new gameImage(this.game, 'pipeDown')
                p4.x = p3.x
                this.resetPipesPosition(p3, p4)
                this.pipes.push(p3)
                this.pipes.push(p4)
            }
        }

        // if(this.collide(this.bird)) {
        //     return
        // }
    }
    draw() {
        var context = this.game.context
        for (var p of this.pipes) {
            context.drawImage(p.textture, p.x, p.y)
        }
    }
}