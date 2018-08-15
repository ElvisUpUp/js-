class Score {
    constructor(game) {
        this.game = game
        this.score = 0
        this.x = 10
        this.y = 50
    }
    draw() {
        this.game.context.font = "bold 30px Arial"
        this.game.context.strokeStyle = "#000";
        this.game.context.lineWidth = 1;
        this.game.context.fillStyle = "#fff"
        this.game.context.fillText(this.score, this.x, this.y)
        this.game.context.strokeText(this.score, this.x, this.y)
    }
    updateScore() {
        var scoreTimer = setInterval(() => {
            this.score++
            if (this.game.over) {
                clearInterval(scoreTimer)
                this.game.gScore = this.score
                log('update score', this.game.gScore)
            }
        }, 1000)
    }
    update() {

    }
}