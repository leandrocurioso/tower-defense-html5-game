import "phaser";

export default {
    width: 640,
    height: 512,
    type: Phaser.AUTO,
    title: "Tower Defense",
    parent: "game",
    pixelArt: false,
    backgroundColor: "#000000",
    pixelArt: true,
    roundPixels: true,
    physics: {
        default: 'arcade',
        debug: true,
        gravity: { y: 0 }
    }
};;
