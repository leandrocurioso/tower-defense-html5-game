import { Scene } from "./scene";
import Map from '../game/map';
import { EnemyGameObject } from '../object/enemy.object';

export class MainScene extends Scene {

  constructor(options = { key: "main" }) {
    super(options);
  }

  init() {
    super.init();
    this.map = Map.map(arr => arr.slice());
    this.nextEnemy = 0;
  }

  preload() {
  }

  create() {
    this.createMap();
    this.createPath();
    this.createCursor();
    this.createGroups();
  }

  createPath() {
    this.graphics = this.add.graphics();
    this.path = this.add.path(96, -32);
    this.path.lineTo(96, 164);
    this.path.lineTo(480, 164);
    this.path.lineTo(480, 544);
    this.graphics.lineStyle(3, 0xffffff, 1);
    this.path.draw(this.graphics);
  }

  createMap() {
    this.bgMap = this.make.tilemap({ key: 'level1' });
    this.tiles = this.bgMap.addTilesetImage('terrainTiles_default');
    this.bgLayer = this.bgMap.createStaticLayer('Background', this.tiles, 0, 0);
    this.add.image(480, 480, 'base');
  }

  canPlaceTurret(i, j) {
    return this.map[i][j] === 0;
  }

  createCursor() {
    this.cursor = this.add.image(32, 32, 'cursor');
    this.cursor.setScale(2);
    this.cursor.setAlpha(0);
    this.input.on('pointermove', pointer => {
      const { x, y } = pointer;
      const i = Math.floor(y / 64);
      const j = Math.floor(x / 64);
      if (this.canPlaceTurret(i, j)) {
        this.cursor.setPosition(j * 64 + 32, i * 64 + 32);
        this.cursor.setAlpha(0.8);
      } else {
        this.cursor.setAlpha(0);
      }
    });
  }

  createGroups() {
    this.enemies = this.physics.add.group({ 
      classType: EnemyGameObject,
      runChildUpdate: true
    });
  }

  update(time, delta) {
    if (time > this.nextEnemy) {
      let enemy = this.enemies.getFirstDead();
      if (!enemy) {
        enemy = new EnemyGameObject(this, 0, 0, this.path);
        this.enemies.add(enemy);
      }

      if (enemy) {
        enemy.setActive(true);
        enemy.setVisible(true);
        enemy.startOnPath();
        this.nextEnemy += time + 2000;
      }
    }
  }

}
