// @TODO 结束界面
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