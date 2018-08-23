class sceneEnd extends gameScene {
    constructor(game) {
        super(game)
        this.game = game
        this.bestScore = 0

        var score = new Score(this.game)
        score.x = 180
        score.y = 260
        score.score = this.game.gScore
        this.addElement(score)

        
        // this.scoreRequest()
        this.setupInputs()
    }

    scoreRequest() {
        var xhr = new XMLHttpRequest()
        var arr
        xhr.onreadystatechange = (res) => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                res = JSON.parse(xhr.responseText)
                arr = res.data.result
                arr.sort((item1, item2) => {
                    return Number(item2.grade) - Number(item1.grade)
                })
                this.bestScore = arr[0].grade
                var bs = new Score(this.game)
                bs.x = 200
                bs.y = 330
                bs.score = this.bestScore
                this.addElement(bs)
            }
        }
        var s = this.game.gScore
        xhr.open('get', `https://easy-mock.com/mock/5b712abe3ec6e13ce517da93/Ranking/rankingList?name=elvis&grade=${s}`)
        xhr.send(null)
    }

    draw() {
        super.draw()
        this.game.context.fillStyle = 'black';
        this.game.context.fillText('游戏结束', 100, 200)
        this.game.context.fillText('分数：', 100, 260)
        log('end draw', )
    }

    update() {
        super.update()
    }

    setupInputs() {
        // this.game.canvas.addEventListener('click', function inputs(event) {
            
        // })
    }
}