export default class Lixi extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, configs) {
    super(scene, x, y, 'lixi1')
    this.configs = configs
    this.setInteractive()
    this.init()
  }

  init() {
    this.setScale(0.4)
    this.on('pointerup', () => {
      this.configs.onClicked()
      this.shake()
    })
  }

  shake() {
    const tweenToBottom = () => {
      this.scene.tweens.add({
        targets: this,
        duration: 150,
        scale: 0.7,
        y: window.GameConfig.GAME_HEIGHT * window.GameConfig.RESIZE,
      })
    }
    const tweenShake = () => {
      this.scene.tweens.add({
        targets: this,
        duration: 150,
        repeat: 5,
        yoyo: true,
        angle: 20,
        onComplete: () => {
          tweenToBottom()
        },
      })
    }
    this.scene.tweens.add({
      targets: this,
      duration: 150,
      x: (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
      y: (window.GameConfig.GAME_HEIGHT / 2) * window.GameConfig.RESIZE,
      onComplete: () => {
        tweenShake()
      },
    })
    this.angle = -10
    this.angle = 0
  }

  initPosition(x, y, angle) {
    this.x = x
    this.y = y
    this.angle = angle
  }
}
