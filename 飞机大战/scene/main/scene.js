class Scene extends gameScene {
    constructor(game) {
        super(game)
        this.game = game
        this.setup()
        this.setupInputs()
    }
    setup() {
        this.numOfEnemy = 8
        this.bg = new gameImage(this.game, 'background')
        // this.player = new gameImage(this.game, 'player')
        this.player = new Player(this.game, 'player')
        this.player.x = 100
        this.player.y = 150
        this.addElement(this.bg)
        this.addElement(this.player)
        //
        this.addEnemies()
    }
    addEnemies() {
        var es = []
        for (var i = 0; i < this.numOfEnemy; i++) {
            var e = new Enemy(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }
    setupInputs() {
        //events
        var s = this
        s.game.registerAction('a', () => {
            s.player.moveLeft();
        });
        s.game.registerAction('d', () => {
            s.player.moveRight();
        });
        s.game.registerAction('w', () => {
            s.player.moveUp();
        });
        s.game.registerAction('s', () => {
            s.player.moveDown();
        });
        this.game.registerAction('f', () => {
            s.player.fire();
        });
    }
    update() {
        super.update()
    }
}



// class Scene extends gameScene {
//     constructor(game) {
//         super(game)
//         this.game = game
//         this.paddle = new Paddle(this.game)
//         this.ball = new Ball(this.game)
//         this.level = 1
//         this.score = new Score()
//         //events
//         this.game.registerAction('a', () => {
//             this.paddle.moveLeft();
//         });
//         this.game.registerAction('d', () => {
//             this.paddle.moveRight();
//         });
//         this.game.registerAction('f', () => {
//             this.ball.fire();
//         });
//         window.addEventListener('keydown', (event) => {
//             if (event.key === 'p') {
//                 this.game.pause();
//             }
//         })
//     }

//     //update
//     update() {
//         if (this.game.paused) {
//             return;
//         }
//         this.ball.move();
//         //判断死亡
//         if (this.ball.y > this.paddle.y + this.paddle.h) {
//             var end = new sceneEnd(this.game)
//             this.game.replaceScene(end)
//             return
//         }
//         // ball和 滑板相撞
//         if (this.ball.collide(this.paddle)) {
//             this.ball.speedY *= -1;
//         }
//         // blocks 和 ball 相撞
//         for (let index = 0; index < this.blocks.length; index++) {
//             var block = this.blocks[index];
//             if (block.collide(this.ball)) {
//                 block.kill();
//                 this.ball.speedY *= -1;
//                 //update score
//                 this.score.score++;
//             }
//         }
//         // 关卡更新
//         if (this.blocks.every(function (item) {
//                 if (!item.alive) {
//                     return true
//                 }
//             })) {
//             if (this.level++ === 4) {
//                 this.level = 1;
//             }
//         }

//     }

//     //draw
//     draw() {
//         //draw
//         this.game.drawImage(this.paddle);
//         this.game.drawImage(this.ball);
//         // draw block
//         for (let index = 0; index < this.blocks.length; index++) {
//             var block = this.blocks[index];
//             if (block.alive) {
//                 this.game.drawImage(block);
//             }
//         }
//         //draw score
//         this.game.context.fillText(`score:${this.score}`, 100, 200)
//     }
// }