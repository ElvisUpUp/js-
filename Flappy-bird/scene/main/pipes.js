class Pipes{
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpace = 200
        this.pipeHorizonSpace = 200
        this.colOfPipe = 3
        for (var i = 0; i < this.colOfPipe; i++) {
            var p1 = new gameImage(this.game, 'pipe')
            p1.flipY = true
            p1.x = 500 + i * this.pipeHorizonSpace
            var p2 = new gameImage(game, 'pipe')
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.pipeSpace
    }
    update() {
        for (var p of this.pipes) {
            p.x -= 3
            if (p.x < 0) {
                p.x += this.pipeHorizonSpace * this.colOfPipe
            }
        }
    }
    draw() {
        var context = this.game.context
        for (var p of this.pipes) {
            context.save()
            var w2 = p.w / 2
            var h2 = p.h / 2
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)
            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)
            context.drawImage(p.textture, 0, 0)
            context.restore()
        }
    }
}