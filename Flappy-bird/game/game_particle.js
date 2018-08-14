class gameParticle extends gameImage {
    constructor(game) {
        super(game, 'particle')
        this.setup()
    }
    setup() {
        this.live = 5
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    update() {
        this.live--
        this.x += this.vx
        this.y += this.vy
        this.vx += 0.01 * this.vx
        this.vy += 0.01 * this.vy
    }
    // draw() {
    //     super.draw()
    // }
}