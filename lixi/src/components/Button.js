export default class ButtonWithText extends Phaser.GameObjects.Container {
  constructor(scene, x, y, configs) {
    super(scene, x, y)
    this.configs = configs
    this.init()
  }

  init() {
    const imgBtn = this.scene.add.sprite(0, 0, 'disconnectSprites', 'Button_ThuLai')
    imgBtn.setScale(0.5)
    this.add(imgBtn)
    const txtBtn = this.scene.add.text(0, 0, this.configs.txtValue, {
      font: '20px Gilroy',
    })
    txtBtn.setOrigin(0.5, 0.5)
    this.add(txtBtn)

    this.setSize(imgBtn.width, imgBtn.height)
    this.setInteractive()
    this.on(Phaser.Input.Events.POINTER_DOWN, () => {
      this.emit(this.configs.eventName)
    })
  }
}
