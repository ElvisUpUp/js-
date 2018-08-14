var enableDebugMode = function (enable) {
    if (!enable) {
        return
    }
}

var __main = function () {
    enableDebugMode(true)
    var images = {
        bullet: 'img/bullet.png',
        player: 'img/player.png',
        background: 'img/background.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        particle: 'img/particle.png',
    }

    var game = new paddleGame(images, function(game) {
        var scene = new sceneBegin(game)
        // var scene = new Scene(game)
        game.runWithScene(scene)
    });
}

__main();