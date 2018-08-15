// @TODO 结束界面
class sceneEnd extends gameScene {
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
        
        var over = new gameImage(this.game, 'over')
        over.x = 40
        over.y = 150
        this.addElement(over)

        var panel = new gameImage(this.game, 'panel')
        panel.x = 20
        panel.y = 230
        this.addElement(panel)

        var score = new Score(this.game)
        score.x = 205
        score.y = 285
        // log('end score', this.game.gScore)
        score.score = this.game.gScore
        this.addElement(score)

        var play = new gameImage(this.game, 'play')
        play.x = 20
        play.y = 370
        this.addElement(play)

        var rank = new gameImage(this.game, 'rank')
        rank.x = 135
        rank.y = 370
        this.addElement(rank)

        // this.scoreRequest()
        this.setupInputs()
    }

    scoreRequest() {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = (res) => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                res = JSON.parse(xhr.responseText)
                res.data.result.push({"grade": this.game.gScore})
                log(res.data.result)
            }
        }
        xhr.open('get', 'https://easy-mock.com/mock/5b712abe3ec6e13ce517da93/Ranking/rankingList?name=王强&grade=123#!method=GET&queryParameters=%5B%7B%22enabled%22%3Atrue%2C%22key%22%3A%22name%22%2C%22value%22%3A%22%E7%8E%8B%E5%BC%BA%22%7D%2C%7B%22enabled%22%3Atrue%2C%22key%22%3A%22grade%22%2C%22value%22%3A%22123%22%7D%5D&body=&headers=%5B%5D')
        xhr.send(null)
    }

    draw() {
        super.draw()
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

    setupInputs() {
        // this.game.canvas.onclick = (event) => {
        //     var main = new Scene(this.game, 'bg')
        //     this.game.replaceScene(main)
        //     this.game.start = true
        //     this.game.canvas.onclick = null
        //     this.game.gScore = 0
        // }
        var that = this
        this.game.canvas.addEventListener('click', function inputs(event){
            var main = new Scene(that.game, 'bg')
            that.game.replaceScene(main)
            that.game.start = true
            that.game.canvas.removeEventListener('click', inputs)
        })
    }
}