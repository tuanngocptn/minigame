export default class LixiOpen extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, configs) {
    super(scene, x, y, texture)
    this.configs = configs
    this.setInteractive()
    this.setScale(0.68)
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
      })
    }
    const tweenShake = () => {
      this.scene.tweens.add({
        targets: this,
        duration: 130,
        ease: 'sine.inOut',
        repeat: 8,
        yoyo: true,
        angle: this.angle > 0 ? { start: 10, to: -10 } : { start: -10, to: 10 },
        x: {
          start: window.GameConfig.GAME_WIDTH / 2 - 10,
          to: window.GameConfig.GAME_WIDTH / 2 + 10,
          ease: 'circ.inOut',
        },
        onComplete: () => {
          tweenToBottom()
        },
      })
    }
    this.scene.tweens.add({
      targets: this,
      duration: 150,
      x: (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
      y: '-=80',
      onComplete: () => {
        tweenShake()
      },
    })
  }

  goOut(isLeft) {
    this.scene.tweens.add({
      targets: this,
      duration: 100,
      x: isLeft
        ? (0 - window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE
        : (window.GameConfig.GAME_WIDTH + window.GameConfig.GAME_WIDTH / 2) *
          window.GameConfig.RESIZE,
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
