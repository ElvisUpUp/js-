var log = console.log.bind(console);

var imageFromPath = function (path) {
    var image = new Image();
    image.src = path;
    return image;
}

var rectIntersects = function (a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}

var loadLevel = function (n) {
    n -= 1;
    var level = levels[n];
    var blocks = [];
    for (let index = 0; index < level.length; index++) {
        var b = new Block();
        b.x = level[index][0];
        b.y = level[index][1];
        blocks.push(b);
    }

    return blocks;
}