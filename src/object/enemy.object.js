import 'phaser';

export class EnemyGameObject extends Phaser.GameObjects.Image {

    constructor(scene, x, y, path) {
        super(scene, x, y, 'enemy');
        this.scene = scene;
        this.path = path;
        this.hp = 0;
        this.enemySpped = 0;
        this.follower = { t: 0, vec: new Phaser.Math.Vector2() }
        this.scene.add.existing(this);
    }

    update(time, delta) {
        this.follower.x += this.enemySpped * delta;
        this.path.getPoint(this.follower.t, this.follower.vec);
        this.setPosition(this.follower.vec.x, this.follower.vec.y);

        if (this.follower.t >= 1) {
            this.setActive(false);
            this.setVisible(false);
        }
    }

    startOnPath() {
        this.hp = 100;
        this.enemySpped = 1 / 10000;
        this.follower.t = 0;
        this.path.getPoint(this.follower.t, this.follower.vec);
        this.setPosition(this.follower.vec.x, this.follower.vec.y);
    }

    receiveDamage(damage) {
        this.hp -= damage;
        if (this.hp <= 0) {
            this.setActive(false);
            this.setVisible(false);
        }
    }

}