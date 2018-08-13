var enableDebugMode = function (enable) {
    if (!enable) {
        return
    }
}

var loadLevel = function (game, n) {
    n -= 1;
    var level = levels[n];
    var blocks = [];
    for (let index = 0; index < level.length; index++) {
        var b = new Block(game);
        b.x = level[index][0];
        b.y = level[index][1];
        blocks.push(b);
    }
    return blocks;
}

var __main = function () {
    enableDebugMode(true)
    var images = {
        ball: 'img/ball.png',
        block: 'img/block.png',
        paddle: 'img/paddle.png',
    }

    var game = new paddleGame(images, function(game) {
        var scene = new sceneBegin(game)
        game.runWithScene(scene)
    });
}

__main();