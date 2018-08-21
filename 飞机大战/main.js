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
        bg: 'img/animation/BG.png',
        //多状态动画
        //attack
        attack1: 'img/animation/a1.png',
        attack2: 'img/animation/a2.png',
        attack3: 'img/animation/a3.png',
        attack4: 'img/animation/a4.png',
        attack5: 'img/animation/a5.png',
        attack6: 'img/animation/a6.png',
        //walk
        w1: 'img/animation/w1.png',
        w2: 'img/animation/w2.png',
        w3: 'img/animation/w3.png',
        w4: 'img/animation/w4.png',
        w5: 'img/animation/w5.png',
        w6: 'img/animation/w6.png',
        w7: 'img/animation/w7.png',
        w8: 'img/animation/w8.png',
        w9: 'img/animation/w9.png',
    }

    var game = new paddleGame(images, function (game) {
        // var scene = new sceneBegin(game)
        var scene = new Scene(game)
        game.runWithScene(scene)
    });
}

__main();