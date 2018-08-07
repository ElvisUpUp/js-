var paddleGame = function (images, runCallback) {
    // images是一个对象，里面是图片的名字和路径
    // 游戏会在所有图片加载完成后运行
    var canvas = document.querySelector('#game-canvas');
    var context = canvas.getContext('2d');
    var g = {
        actions: {},
        keydowns: {},
        paused: false,
        images: {},
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
    //在游戏运行前，预先加载资源
    var loads = [];
    var names = Object.keys(images);
    for (var i = 0; i < names.length; i++) {
        let name = names[i];
        var path = images[name];
        let img = new Image();
        img.src = path;
        img.onload = function () {
            // 存入g.images中
            g.images[name] = img;
            log('img', img.src)
            //所有图片加载完成后，调用run()
            loads.push(1)
            if(loads.length === names.length) {
                log('image load', g.images)
                g.run();
            }
        }
    }
    g.imageByName = function(name) {
        var img = g.images[name];
        log('image by name', g.images)
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    //开始运行
    g.run = function () {
        runCallback(g);
        setTimeout(function () {
            runloop()
        }, 1000 / fps)
    }
    return g;
}