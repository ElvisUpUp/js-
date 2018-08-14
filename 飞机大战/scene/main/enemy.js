class Enemy extends gameImage{
    constructor(game) {
        var type = randomBetween(1, 3)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
    }
    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
    }
    update() {
        this.y += this.speed
        if (this.y + this.h > 852) {
            this.setup()
        }
    }
}