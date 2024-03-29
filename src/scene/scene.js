import Phaser from "phaser";

export class Scene extends Phaser.Scene {

    constructor(options) {
        super(options);
    }

    init() {
        this.gameWidth = this.sys.game.config.width;
        this.gameHeight = this.sys.game.config.height;
        this.cameraWidth =  this.cameras.main.width;
        this.cameraHeight = this.cameras.main.height;
        this.gameWidthMiddle = this.gameWidth  / 2;
        this.gameHeightMiddle = this.gameHeight / 2;
    }

}
