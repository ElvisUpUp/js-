class gameParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }
    setup() {
        this.duration = 60
        this.x = 150
        this.y = 200
        this.numOfParticles = 20
        this.particles = []
    }
    update() {
        this.duration--
            //添加火花
            if (this.particles.length < this.numOfParticles) {
                var p = new gameParticle(this.game)
                var vx = randomBetween(-10, 10)
                var vy = randomBetween(-10, 10)
                p.init(this.x, this.y, vx, vy)
                this.particles.push(p)
            }
        // 更新火花
        for (var p of this.particles) {
            p.update()
        }
        // 删除死掉的火花
        this.particles = this.particles.filter(p => {
            return p.live > 0
        })
    }
    draw() {
        if (this.duration < 0) {
            return
        }
        for (var p of this.particles) {
            p.draw()
        }
    }
}