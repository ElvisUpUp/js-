class Bullet extends gameImage{
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
        this.speed = 3
    }
    update() {
        this.y -= this.speed
    }
}