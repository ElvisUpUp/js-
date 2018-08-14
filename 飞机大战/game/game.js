class paddleGame {
    constructor(images, runCallback) {
        window.fps = 30;
        this.images = images
        this.runCallback = runCallback
        this.canvas = document.querySelector('#game-canvas')
        this.context = this.canvas.getContext('2d')
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.paused = false
        //events
        window.addEventListener('keydown', (event) => {
            this.keydowns[event.key] = true;
        });
        window.addEventListener('keyup', () => {
            this.keydowns[event.key] = false;
        });
        // window.addEventListener('input', (event) => {
        //     window.fps = event.target.value;
        // })
        this.init()
        
    }
    
    drawImage(image) {
        this.context.drawImage(image.textture, image.x, image.y);
    }
    pause() {
        this.paused = !this.paused;
    }
    //update
    update() {
        this.scene.update()
    }
    //draw
    draw() {
        this.scene.draw()
    }
    //register
    registerAction(key, callback) {
        this.actions[key] = callback;
    }
    //timer
    runloop() {
        var g = this
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
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
        //draw
        g.draw();
        setTimeout(function () {
            g.runloop();
        }, 1000 / fps);
    }

    texttureByName(name) {
        var img = this.images[name];
        return img
    }
    //开始运行
    runWithScene(scene) {
        var g = this
        g.scene = scene
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    __run() {
        this.runCallback(this);
    }
    //在游戏运行前，预先加载资源
    init() {
        var g = this
        var loads = [];
        var names = Object.keys(this.images);
        for (var i = 0; i < names.length; i++) {
            let name = names[i];
            var path = this.images[name];
            let img = new Image();
            img.src = path;
            img.onload = function () {
                // 存入g.images中
                g.images[name] = img;
                //所有图片加载完成后，调用run()
                loads.push(1)
                if (loads.length === names.length) {
                    g.__run();
                }
            }
        }
    }
}