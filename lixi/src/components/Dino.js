export default class Dino extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, textures, configs) {
    super(scene, x, y, textures)
    this.configs = configs
    this.setInteractive()
    this.init()
  }

  init() {
    this.on('pointerup', () => {
      this.configs.onClicked()
      this.shake()
    })
  }

  shake() {
    this.angle = -10
    this.scene.tweens.add({
      targets: this,
      duration: 150,
      repeat: 5,
      yoyo: true,
      angle: 20,
    })
    this.angle = 0
  }
}
