class Bullet extends gameImage{
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
        this.speed = 5
        this.alive = true
    }
    draw() {
        if (this.alive) {
            super.draw()
        }
    }
    update() {
        this.y -= this.speed
    }
}