var Block = function () {
    var image = imageFromPath('block.png');

    var o = {
        image: image,
        x: 0,
        y: 50,
        width: 48,
        height: 19,
        alive: true,
    }
    o.kill = function () {
        o.alive = false;
    }
    o.collide = function (b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    
    return o;
}