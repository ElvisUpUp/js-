var enableDebugMode = function (enable) {
    if (!enable) {
        return
    }
}

var __main = function () {
    enableDebugMode(true)
    var images = {
        //flappy bird images
        bg: 'img/bg_day.png',
        ground: 'img/land.png',
        bird0: 'img/bird0_0.png',
        bird1: 'img/bird0_1.png',
        bird2: 'img/bird0_2.png',
        pipe: 'img/pipe_up.png',
    }

    var game = new paddleGame(images, function (game) {
        var scene = new sceneBegin(game)
        // var scene = new Scene(game)
        game.runWithScene(scene)
    });
}

__main();