// var SceneEnd = function (game) {
//     var s = {
//         game: game,
//     }

//     //update
//     s.update = function () {

//     }

//     //draw
//     s.draw = function () {
//         game.context.fillText('Game Over', 100, 200)
//     }

//     return s
// }

class sceneEnd extends gameScene {
    constructor(game) {
        super(game)
        this.game = game
        this.game.registerAction('r', function () {
            var begin = new sceneBegin(game)
            game.replaceScene(begin)
        });
    }

    draw() {
        this.game.context.fillText('游戏结束，按r回到菜单', 100, 200)
    }
}