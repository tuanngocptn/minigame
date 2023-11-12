export default class Lixi extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, configs) {
    super(scene, x, y, texture)
    this.configs = configs
    this.setInteractive()
    this.setScale(0.8)
    this.init()
  }

  init() {
    this.on('pointerup', () => {
      this.configs.onClicked()
      this.shake()
    })
  }

  shake() {
    const tweenToBottom = () => {
      this.scene.tweens.add({
        targets: this,
        duration: 200,
        y: (window.GameConfig.GAME_HEIGHT + 600) * window.GameConfig.RESIZE,
        onComplete: () => {
          setTimeout(() => {
            this.angle = this.initAngle
            this.x = this.positionX
            this.y = this.positionY
            this.scale = 0.8
          }, 1000)
        },
      })
    }
    const tweenShake = () => {
      this.scene.tweens.add({
        targets: this,
        duration: 180,
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
  }

  initPosition(x, y, angle) {
    this.x = x
    this.y = y
    this.positionX = x
    this.positionY = y
    this.initAngle = angle
    this.angle = angle
  }
}
