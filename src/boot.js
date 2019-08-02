import { Game } from "./game";
import GameConfig from "./game/game-config";
import { BootScene } from "./scene/boot.scene";
import { PreloaderScene } from "./scene/preloader.scene";
import { MainScene } from "./scene/main.scene";
import { TitleScene } from "./scene/title.scene";
import { UiScene } from "./scene/ui.scene";

try {
    
    window.onload = () => {
        const game = new Game(GameConfig, [
            { key: "boot", class: BootScene, start: true },
            { key: "preloader", class: PreloaderScene },
            { key: "main", class: MainScene },
            { key: "title", class: TitleScene },
            { key: "ui", class: UiScene }
        ]);
    };

} catch(err) {
    throw err;
}
