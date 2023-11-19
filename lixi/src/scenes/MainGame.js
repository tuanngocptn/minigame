// You can write more code here

// import ButtonWithText from '../components/Button.js'
import ButtonImage from '../components/ButtonImg.js'
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
    this.lixiRight = new Lixi(
      this,
      (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
      (window.GameConfig.GAME_HEIGHT / 2) * window.GameConfig.RESIZE,
      'lixiDo',
      {
        onClicked: () => {
          this.onRutLiXi(false)
        },
      },
    )
    this.lixiRight.initPosition(
      window.GameConfig.GAME_WIDTH * window.GameConfig.RESIZE,
      (window.GameConfig.GAME_HEIGHT - 200) * window.GameConfig.RESIZE,
      -20,
    )

    this.lixiLeft = new Lixi(
      this,
      (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
      (window.GameConfig.GAME_HEIGHT / 2) * window.GameConfig.RESIZE,
      'lixiXanh',
      {
        onClicked: () => {
          this.onRutLiXi(true)
        },
      },
    )
    this.lixiLeft.initPosition(
      0,
      (window.GameConfig.GAME_HEIGHT - 200) * window.GameConfig.RESIZE,
      20,
    )

    this.add.existing(this.lixiRight)
    this.add.existing(this.lixiLeft)
  }

  onRutLiXi(isLeftLixi) {
    if (isLeftLixi) {
      this.lixiRight.goOut(false)
    } else {
      this.lixiLeft.goOut(true)
    }
  }

  /** @returns {void} */
  editorCreate() {
    this.addLixies()
    this.events.emit('scene-awake')
  }

  /* START-USER-CODE */
  addPalace() {
    this.palaceContainer = this.add.container(
      (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
      (window.GameConfig.GAME_HEIGHT / 2 - 200) * window.GameConfig.RESIZE,
    )
    const palace = new Phaser.GameObjects.Sprite(this, 0, 0, 'palace')
    const bottomPalace = new Phaser.GameObjects.Sprite(
      this,
      0,
      250 * window.GameConfig.RESIZE,
      'bottomPalace',
    )
    const txtRutLixi = new Phaser.GameObjects.Text(
      this,
      0,
      -130 * window.GameConfig.RESIZE,
      'RÚT LÌ XÌ',
      {
        font: '28px GilroyBold',
      },
    )
    txtRutLixi.setOrigin(0.5)
    palace.setScale(0.28)
    bottomPalace.setScale(0.28)
    this.palaceContainer.add(palace)
    this.palaceContainer.add(bottomPalace)
    this.palaceContainer.add(txtRutLixi)
  }

  addFirework() {
    let config = this.anims.get('fireworkAnimation')
    if (!config) {
      config = {
        key: 'fireworkAnimation',
        frames: this.anims.generateFrameNumbers('firework', { start: 0, end: -1, first: 0 }),
        frameRate: 30,
        repeat: -1,
      }
      this.anims.create(config)
    }
    let configFirework1 = this.anims.get('fireworkAnimation1')
    if (!configFirework1) {
      configFirework1 = {
        key: 'fireworkAnimation1',
        frames: this.anims.generateFrameNumbers('firework1', { start: 0, end: -1, first: 0 }),
        frameRate: 30,
        repeat: -1,
      }
      this.anims.create(configFirework1)
    }
    let configSuccess = this.anims.get('successAnimation')
    if (!configSuccess) {
      configSuccess = {
        key: 'successAnimation',
        frames: this.anims.generateFrameNumbers('success', { start: 0, end: -1, first: 0 }),
        frameRate: 30,
        repeat: -1,
      }
      this.anims.create(configSuccess)
    }
    //
    this.add
      .sprite(
        (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
        (window.GameConfig.GAME_HEIGHT / 2 - 300) * window.GameConfig.RESIZE,
        'firework',
      )
      .play('fireworkAnimation')
    this.add
      .sprite(
        (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
        (window.GameConfig.GAME_HEIGHT / 2 - 300) * window.GameConfig.RESIZE,
        'firework1',
      )
      .setScale(0.3)
      .play('fireworkAnimation1')
    this.add
      .sprite(
        (window.GameConfig.GAME_WIDTH / 2) * window.GameConfig.RESIZE,
        (window.GameConfig.GAME_HEIGHT / 2 - 300) * window.GameConfig.RESIZE,
        'success',
      )
      .setScale(0.6)
      .play('successAnimation')
  }

  addBtn() {
    const btnRestart = new ButtonImage(this, 50, 100, { imgName: 'undo', eventName: 'restart' })
    btnRestart.on('restart', () => {
      this.scene.restart()
    })
    this.add.existing(btnRestart)
  }

  create() {
    this.addPalace()
    this.addFirework()
    this.editorCreate()
    this.textFPS = this.add.text(20, 20, '')
    this.addBtn()
  }

  update() {
    this.textFPS.setText(`FPS: ${parseInt(this.sys.game.loop.actualFps)}`)
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
