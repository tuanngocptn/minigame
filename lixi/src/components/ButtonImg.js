export default class ButtonImage extends Phaser.GameObjects.Container {
  constructor(scene, x, y, configs) {
    super(scene, x, y)
    this.configs = configs
    this.init()
  }

  init() {
    const imgBtn = this.scene.add.sprite(0, 0, this.configs.imgName)
    imgBtn.setScale(0.1)
    this.add(imgBtn)
    this.setSize(imgBtn.width, imgBtn.height)
    this.setInteractive()
    this.on(Phaser.Input.Events.POINTER_DOWN, () => {
      this.emit(this.configs.eventName)
    })
  }
}
