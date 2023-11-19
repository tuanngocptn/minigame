// You can write more code here

/* START OF COMPILED CODE */

export default class Preload extends Phaser.Scene {
  constructor() {
    super('Preload')

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorPreload() {
    this.load.pack('asset-pack', 'assets/asset-pack.json')
  }

  /** @returns {void} */
  editorCreate() {
    // // guapen
    // const guapen = this.add.image(505.0120544433594, 360, 'guapen')
    // guapen.scaleX = 0.32715486817515643
    // guapen.scaleY = 0.32715486817515643

    // // progressBar
    // const progressBar = this.add.rectangle(553.0120849609375, 361, 256, 20)
    // progressBar.setOrigin(0, 0)
    // progressBar.isFilled = true
    // progressBar.fillColor = 14737632

    // // preloadUpdater
    // new PreloadBarUpdaterScript(progressBar)

    // // progressBarBg
    // const progressBarBg = this.add.rectangle(553.0120849609375, 361, 256, 20)
    // progressBarBg.setOrigin(0, 0)
    // progressBarBg.fillColor = 14737632
    // progressBarBg.isStroked = true

    // // loadingText
    // const loadingText = this.add.text(552.0120849609375, 329, '', {})
    // loadingText.text = 'Loading...'
    // loadingText.setStyle({ color: '#e0e0e0', fontFamily: 'arial', fontSize: '20px' })

    this.events.emit('scene-awake')
  }

  /* START-USER-CODE */
  loadConfig() {
    this.load.json('mainGameConfig', 'src/config/mainGame.json' + `?v=${window.VersionClient}`)
  }

  loadAssets() {
    this.load.image('lixiDo', 'assets/img/lixi_do.png' + `?v=${window.VersionClient}`)
    this.load.image('lixiXanh', 'assets/img/lixi_xanh.png' + `?v=${window.VersionClient}`)
    this.load.image('lixiDoOpen', 'assets/img/lixi_do_open.png' + `?v=${window.VersionClient}`)
    this.load.image('lixiXanhOpen', 'assets/img/lixi_xanh_open.png' + `?v=${window.VersionClient}`)
    this.load.image('palace', 'assets/img/palace.png' + `?v=${window.VersionClient}`)
    this.load.image('bottomPalace', 'assets/img/bottom_palace.png' + `?v=${window.VersionClient}`)
    this.load.image('dragon', 'assets/img/dragon.png' + `?v=${window.VersionClient}`)
    this.load.image('undo', 'assets/img/undo.png' + `?v=${window.VersionClient}`)
    this.load.spritesheet(
      'firework',
      'assets/animations/firework.png' + `?v=${window.VersionClient}`,
      { frameWidth: 400, frameHeight: 212, endFrame: 40 },
    )
    this.load.spritesheet(
      'firework1',
      'assets/animations/firework1.png' + `?v=${window.VersionClient}`,
      { frameWidth: 1921, frameHeight: 1080, endFrame: 49 },
    )
    this.load.spritesheet(
      'success',
      'assets/animations/success.png' + `?v=${window.VersionClient}`,
      { frameWidth: 680, frameHeight: 680, endFrame: 158 },
    )
    this.load.spritesheet('flower', 'assets/animations/flower.png' + `?v=${window.VersionClient}`, {
      frameWidth: 300,
      frameHeight: 300,
      endFrame: 210,
    })
    this.load.atlas(
      'disconnectSprites',
      'assets/atlas/disconnect.png' + `?v=${window.VersionClient}`,
      'assets/atlas/disconnect.json' + `?v=${window.VersionClient}`,
      {},
    )
  }

  // Write your code here

  preload() {
    this.editorCreate()
    this.editorPreload()
    this.loadConfig()
    this.loadAssets()
    this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start('MainGame'))
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
