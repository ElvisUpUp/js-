




class sceneBegin extends gameScene {
    constructor(game) {
        super(game)
        this.game = game
        this.l = new gameLabel(game, '按k游戏开始')
        this.addElement(this.l)

        this.ps = new gameParticleSystem(game)
        this.addElement(this.ps)
    }

    draw() {
        super.draw()
    }
}