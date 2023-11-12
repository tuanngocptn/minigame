// You can write more code here

import TextButton from '../components/Button.js'
import Lixi from '../components/Lixi.js'

/* START OF COMPILED CODE */

export default class MainGame extends Phaser.Scene {
  constructor() {
    super('MainGame')

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  preload() {
    this.mainGameConfig = this.cache.json.get('mainGameConfig')
  }

  addTxtWelcome(configs) {
    // text_1
    const text_1 = this.add.text(configs.x, configs.y, configs.text, configs.configs)
    text_1.setOrigin(0.5, 0.5)
  }

  addLixies() {
    const lixiRight = new Lixi(
      this,
      (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
      (window.GameConfig.GAME_HEIGHT / 2) * window.GameConfig.RESIZE,
      'lixiDo',
      { onClicked: this.onDinoClick },
    )
    lixiRight.initPosition(
      window.GameConfig.GAME_WIDTH * window.GameConfig.RESIZE,
      (window.GameConfig.GAME_HEIGHT - 200) * window.GameConfig.RESIZE,
      -20,
    )

    const lixiLeft = new Lixi(
      this,
      (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
      (window.GameConfig.GAME_HEIGHT / 2) * window.GameConfig.RESIZE,
      'lixiXanh',
      { onClicked: this.onDinoClick },
    )
    lixiLeft.initPosition(0, (window.GameConfig.GAME_HEIGHT - 200) * window.GameConfig.RESIZE, 20)

    this.add.existing(lixiRight)
    this.add.existing(lixiLeft)
  }

  onDinoClick() {}

  /** @returns {void} */
  editorCreate() {
    this.addLixies()
    this.events.emit('scene-awake')
  }

  /* START-USER-CODE */
  addPalace() {
    this.palaceSprite = this.add.sprite(
      (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
      (window.GameConfig.GAME_HEIGHT / 2 - 200) * window.GameConfig.RESIZE,
      'palace',
    )
    this.palaceSprite.setScale(0.3)
  }

  addFirework() {
    const config = {
      key: 'fireworkAnimation',
      frames: this.anims.generateFrameNumbers('firework', { start: 0, end: 23, first: 23 }),
      frameRate: 20,
      repeat: -1,
    }
    this.anims.create(config)
    this.add
      .sprite(
        (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
        (window.GameConfig.GAME_HEIGHT / 2 - 300) * window.GameConfig.RESIZE,
        'firework',
      )
      .play('fireworkAnimation')
  }
  // Write more your code here

  create() {
    this.addPalace()
    this.addFirework()
    this.editorCreate()
    this.textFPS = this.add.text(20, 20, '')
  }

  update() {
    this.textFPS.setText(`FPS: ${parseInt(this.sys.game.loop.actualFps)}`)
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
