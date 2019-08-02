import { Game as PhaserGame } from "phaser";

export class Game extends PhaserGame {

  constructor(config, scenes) {
    super(config);
    this.scenes = scenes;
    this.loadScenes();
  }

  loadScenes() {
    const { key } = this.scenes.find(scene => (scene.start));
    for (const scene of this.scenes) {
      this.scene.add(scene.key, scene.class);
    }
    this.scene.start(key);
  }

}
