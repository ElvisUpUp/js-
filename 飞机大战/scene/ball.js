var Ball = function (game) {
    var o = game.imageByName('ball');
    // var o = {
    //     image: image,
    //     x: 100,
    //     y: 220,
    //     speedX: 10,
    //     speedY: 10,
    //     fired: false,
    // }
    o.x = 100;
    o.y = 220;
    o.speedX = 10;
    o.speedY = 10;
    o.fired = false;
    o.fire = function () {
        o.fired = true;
    }
    o.move = function () {
        if (o.fired) {
            if (o.x < 0 || o.x > 400) {
                o.speedX *= -1;
                o.x += o.speedX;
            } else if (o.y < 0 || o.y > 300) {
                o.speedY *= -1;
                o.y += o.speedY;
            } else {
                o.x += o.speedX;
                o.y += o.speedY;
            }
        }
    }
    
    o.collide = function (image) {
        //判断是否相撞
        if (o.y + o.h > image.y) {
            if (o.x > image.x && o.x < image.x + image.w) {
                // log('碰撞');
                return true;
            }
        } else {
            return false;
        }
    }
    o.hasPoint = function(x, y) {
        var xIn = x >= o.x && x <= o.x + o.image.width
        var yIn = y >= o.y && y <= o.y + o.image.height
        return xIn && yIn
    }
    return o;
}