// @TODO 开场界面
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
        var b = new Bird(this.game)

        this.b = b
        this.addElement(b)

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
        this.game.registerAction('k', () => {
            var main = new Scene(this.game, 'bg')
            this.game.replaceScene(main)
        });
    }
}



























// class sceneBegin extends gameScene {
//     constructor(game) {
//         super(game)
//         this.game = game

//         var bg = new gameImage(this.game, 'bg')
//         this.addElement(bg)

//         // 水管
//         this.pipe = new Pipes(this.game)
//         this.addElement(this.pipe)
//         // 循环移动的地面
//         this.skipCounts = 4
//         this.grounds = []
//         for (var i = 0; i < 30; i++) {
//             var land = new gameImage(this.game, 'ground')
//             land.x = i * 32
//             land.y = this.game.canvas.height - land.h / 2
//             this.addElement(land)
//             this.grounds.push(land)
//         }
//         var b = new gameAnimation(this.game)

//         this.b = b
//         this.addElement(b)

//         this.setupInputs()
//     }
//     update() {
//         super.update()
//         this.skipCounts--
//             var offset = -5
//         if (this.skipCounts == 0) {
//             this.skipCounts = 4
//             offset = 15
//         }
//         // 地面移动
//         for (var i = 0; i < 30; i++) {
//             var land = this.grounds[i]
//             land.x += offset
//         }
//     }
//     draw() {
//         super.draw()
//     }

//     setupInputs() {
//         this.game.registerAction('a', (keyStatus) => {
//             // this.b.move(-10, keyStatus)
//             this.b.rotation = -45
//             this.b.jump()
//         })
//     }
// }