var enableDebugMode = function (enable) {
    if (!enable) {
        return
    }
}

var __main = function () {
    enableDebugMode(true)
    var images = {
        //plane war images
        bg: 'img/background.png',
        start: 'img/start.png',
        enemy0: 'img/enemy1.png',
        enemy1: 'img/enemy2.png',
        enemy2: 'img/enemy3.png',
        player: 'img/hero1.png',
        bullet: 'img/bullet.png',
    }

    var game = paddleGame.instance(images, function (game) {
        // var scene = new sceneBegin(game)
        var scene = new Scene(game)
        game.runWithScene(scene)
    });
}

__main();