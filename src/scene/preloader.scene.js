import { Scene } from "./scene";

export class PreloaderScene extends Scene {

  constructor(options = { key: "preloader" }) {
    super(options);
  }

  init() {
    super.init();
    this.readyCount = 0;
  }

  ready () {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('main');
    }
  }

  preload() {
    this.timedEvent = this.time.delayedCall(1, this.ready, [], this);
    this.createLoader();
    this.loadAssets();
  }

  loadAssets() {
    this.load.image('bullet', './assets/image/level/bulletDark2_outline.png');
    this.load.image('tower', './assets/image/level/tank_bigRed.png');
    this.load.image('enemy', './assets/image/level/tank_sand.png');
    this.load.image('base', './assets/image/level/tankBody_darkLarge_outline.png');
    this.load.image('title', './assets/image/ui/title.png');
    this.load.image('cursor', './assets/image/ui/cursor.png');
    this.load.image('blueButton1', './assets/image/ui/blue_button02.png');
    this.load.image('blueButton2', './assets/image/ui/blue_button03.png');
    this.load.audio('curioso', [ './assets/audio/sfx/curioso.mp3', './assets/audio/sfx/curioso.ogg',]);

    this.load.tilemapTiledJSON('level1', './assets/image/level/level1.json');
    this.load.spritesheet('terrainTiles_default', './assets/image/level/terrainTiles_default.png', {
      frameWidth: 64,
      frameHeight: 64
    });
  }

  createLoader() {
    this.add.image(this.cameraWidth / 2, this.cameraHeight / 2 - 100, 'logo');

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(
      this.cameraWidth / 2 - 160,
      this.cameraHeight / 2 - 30,
      320,
      50
    );

    const loadingText = this.make.text({
      x: this.cameraWidth / 2,
      y: this.cameraHeight / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#FFFFFF'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentageText = this.make.text({
      x: this.cameraWidth / 2,
      y: this.cameraHeight / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#FFFFFF'
      }
    });
    percentageText.setOrigin(0.5, 0.5);

    const loadingAssetsText = this.make.text({
      x: this.cameraWidth / 2,
      y: this.cameraHeight / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#FFFFFF'
      }
    });
    loadingAssetsText.setOrigin(0.5, 0.5);

    this.load.on('progress', value => {
      percentageText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(
        this.cameraWidth / 2 - 150,
        this.cameraHeight / 2 - 20,
        300 * value,
        30
      );
    });

    this.load.on('fileprogress', file => {
      loadingAssetsText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingAssetsText.destroy();
      percentageText.destroy();
      loadingText.destroy();
      this.ready();
    }, this);
  }

  create() {
    this.curiosoSound = this.sound.add("curioso");
    // this.curiosoSound.play();
  }

  update() {
  }

}
