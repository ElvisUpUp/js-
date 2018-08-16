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
        pipeUp: 'img/pipe_up.png',
        pipeDown: 'img/pipe_down.png',
        rank: 'img/button_score.png',
        tap: 'img/tutorial.png',
        ready: 'img/text_ready.png',
        over: 'img/text_game_over.png',
        panel: 'img/score_panel.png',
        play: 'img/button_play.png',
        // score: 'img/font_048.png',
    }

    var game = paddleGame.instance(images, function (game) {
        var scene = new sceneBegin(game)
        // var scene = new Scene(game)
        game.runWithScene(scene)
    });
}

__main();