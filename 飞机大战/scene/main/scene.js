class Scene extends gameScene {
    constructor(game) {
        super(game)
        this.game = game
        this.setup()
        this.setupInputs()
    }
    setup() {
        this.numOfEnemy = 8
        this.bg = new gameImage(this.game, 'background')
        // this.player = new gameImage(this.game, 'player')
        this.player = new Player(this.game, 'player')
        this.player.x = 100
        this.player.y = 150
        this.addElement(this.bg)
        this.addElement(this.player)
        //
        this.addEnemies()
    }
    addEnemies() {
        var es = []
        for (var i = 0; i < this.numOfEnemy; i++) {
            var e = new Enemy(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }
    setupInputs() {
        //events
        var s = this
        s.game.registerAction('a', () => {
            s.player.moveLeft();
        });
        s.game.registerAction('d', () => {
            s.player.moveRight();
        });
        s.game.registerAction('w', () => {
            s.player.moveUp();
        });
        s.game.registerAction('s', () => {
            s.player.moveDown();
        });
        this.game.registerAction('f', () => {
            s.player.fire();
        });
    }
    update() {
        super.update()
    }
}