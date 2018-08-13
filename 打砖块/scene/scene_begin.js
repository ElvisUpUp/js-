//version 1.0
// var SceneBegin = function (game) {
//     var s = {
//         game: game,
//     }

//     game.registerAction('k', function () {
//         var main = new Scene(game)
//         game.replaceScene(main)
//     });
//     //update
//     s.update = function () {

//     }
    
//     //draw
//     s.draw = function () {
//         game.context.fillText('按k游戏开始', 100, 200)
//     }

//     return s
// }

//es6 class extend
class sceneBegin extends gameScene {
    constructor(game) {
        super(game)
        this.game = game
        this.game.registerAction('k', function () {
            var main = new Scene(game)
            game.replaceScene(main)
        });
        log(2)
    }

    draw() {
        this.game.context.fillText('按k游戏开始', 100, 200)
    }
}
