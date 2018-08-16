class sceneEnd extends gameScene {
    constructor(game) {
        super(game)
        this.game = game
        this.bestScore = 0

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

        this.scoreRequest()
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
        // name=王强&grade=123#
        var s = this.game.gScore
        xhr.open('get', `https://easy-mock.com/mock/5b712abe3ec6e13ce517da93/Ranking/rankingList?name=elvis&grade=${s}`)
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
        var that = this
        this.game.canvas.addEventListener('click', function inputs(event) {
            var x = event.pageX - that.game.canvas.getBoundingClientRect().left;
            var y = event.pageY - that.game.canvas.getBoundingClientRect().top;
            //判断点击重玩
            that.game.context.beginPath()
            that.game.context.moveTo(0, 0)
            that.game.context.rect(20, 370, 116, 70)
            that.game.context.closePath();
            if (that.game.context.isPointInPath(x, y)) {
                var main = new Scene(that.game, 'bg')
                that.game.replaceScene(main)
                that.game.start = true
                that.game.canvas.removeEventListener('click', inputs)
            }
        })
    }
}