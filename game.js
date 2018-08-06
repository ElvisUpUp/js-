
var paddleGame = function () {
    var canvas = document.querySelector('#game-canvas');
    var context = canvas.getContext('2d');
    var g = {
        actions: {},
        keydowns: {},
        paused: false,
    };
    g.canvas = canvas;
    g.context = context;
    //draw
    g.drawImage = function (image) {
        g.context.drawImage(image.image, image.x, image.y);
    }
    g.pause = function () {
        g.paused = !g.paused;
    }
    //events
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true;
    });
    window.addEventListener('keyup', function () {
        g.keydowns[event.key] = false;
    });
    window.addEventListener('input', function (event) {
        window.fps = event.target.value;
    })
    //register
    g.registerAction = function (key, callback) {
        g.actions[key] = callback;
    }
    //timer
    window.fps = 30;
    var runloop = function () {
        //events
        var actions = Object.keys(g.actions);
        for (let i = 0; i < actions.length; i++) {
            var key = actions[i];
            if (g.keydowns[key]) {
                g.actions[key]();
            }
        }
        //update
        g.update();
        //clear
        context.clearRect(0, 0, canvas.width, canvas.height);
        //draw
        g.draw();
        setTimeout(function () {
            runloop();
        }, 1000 / fps);
    }
    setTimeout(function () {
        runloop()
    }, 1000 / fps)
    return g;
}