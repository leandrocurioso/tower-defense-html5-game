import { Scene } from "./scene";

export class TitleScene extends Scene {

  constructor(options = { key: "title" }) {
    super(options);
  }

  init() {
    super.init();
  }

  preload() {
  }

  create() {
    this.createTitle();
    this.createPlayButton();
  }

  createTitle() {
    this.titleImage = this.add.image(0, 0, 'title');
    this.centerObject(this.titleImage, 1);
  }

  createPlayButton() {
    this.playButton = this.add.sprite(0, 0, 'blueButton1').setInteractive();
    this.centerObject(this.playButton, -1);
    this.playButtonText = this.add.text(0, 0, 'Play', {
      font: '32px',
      fill: '#fff'
    });
    Phaser.Display.Align.In.Center(
      this.playButtonText,
      this.playButton
    );
    this.playButton.on('pointerdown', pointer => {
      this.scene.start('main');
    }, this);

    this.playButton.on('pointerover', pointer => {
      this.playButton.setTexture('blueButton2');
    }, this);

    this.playButton.on('pointerout', pointer => {
      this.playButton.setTexture('blueButton1');
    }, this);
  }

  centerObject(gameObject, offset = 0) {
    gameObject.x = this.cameraWidth / 2;
    gameObject.y = this.cameraHeight / 2 - offset * 100;
  }

  update() {
  }

}
