var Block = function (game) {
    var img = game.imageByName('block');
    var o = {
        x: 0,
        y: 50,
        alive: true,
    }
    o.image = img.image;
    o.width = img.w;
    o.height = img.h;
    o.kill = function () {
        o.alive = false;
    }
    o.collide = function (b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    
    return o;
}