// You can write more code here

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

  // Write more your code here

  create() {
    this.editorCreate()
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
