import "phaser";
import { MainScene } from "../scene/main.scene";

export default {
    width: 360,
    height: 640,
    type: Phaser.AUTO,
    title: "Tower Defense",
    parent: "game",
    scene: [
      MainScene
    ],
    pixelArt: false,
    backgroundColor: "#000000"
};;
