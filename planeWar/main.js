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
        enemy1: 'img/enemy1.png',
        enemy1_down1: 'img/enemy1_down1.png',
        enemy1_down2: 'img/enemy1_down2.png',
        enemy1_down3: 'img/enemy1_down3.png',
        enemy1_down4: 'img/enemy1_down4.png',
        enemy2: 'img/enemy2.png',
        enemy2_down1: 'img/enemy2_down1.png',
        enemy2_down2: 'img/enemy2_down2.png',
        enemy2_down3: 'img/enemy2_down3.png',
        enemy2_down4: 'img/enemy2_down4.png',
        enemy3: 'img/enemy3.png',
        enemy3_down1: 'img/enemy3_down1.png',
        enemy3_down2: 'img/enemy3_down2.png',
        enemy3_down3: 'img/enemy3_down3.png',
        enemy3_down4: 'img/enemy3_down4.png',
        player: 'img/hero1.png',
        bullet: 'img/bullet.png',
    }

    var game = paddleGame.instance(images, function (game) {
        var scene = new sceneBegin(game)
        // var scene = new Scene(game)
        game.runWithScene(scene)
    });
}

__main();