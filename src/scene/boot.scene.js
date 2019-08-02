import { Scene } from "./scene";

export class BootScene extends Scene {

  constructor(options = { key: "boot" }) {
    super(options);
  }

  init() {
    super.init();
  }

  preload() {
    this.load.image('logo', './assets/image/logo/curioso_logo.png');
  }

  create() {
    this.scene.start("preloader");
  }

  update() {
  }

}
