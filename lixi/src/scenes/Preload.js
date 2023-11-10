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
    // guapen
    const guapen = this.add.image(505.0120544433594, 360, 'guapen')
    guapen.scaleX = 0.32715486817515643
    guapen.scaleY = 0.32715486817515643

    // progressBar
    const progressBar = this.add.rectangle(553.0120849609375, 361, 256, 20)
    progressBar.setOrigin(0, 0)
    progressBar.isFilled = true
    progressBar.fillColor = 14737632

    // preloadUpdater
    new PreloadBarUpdaterScript(progressBar)

    // progressBarBg
    const progressBarBg = this.add.rectangle(553.0120849609375, 361, 256, 20)
    progressBarBg.setOrigin(0, 0)
    progressBarBg.fillColor = 14737632
    progressBarBg.isStroked = true

    // loadingText
    const loadingText = this.add.text(552.0120849609375, 329, '', {})
    loadingText.text = 'Loading...'
    loadingText.setStyle({ color: '#e0e0e0', fontFamily: 'arial', fontSize: '20px' })

    this.events.emit('scene-awake')
  }

  /* START-USER-CODE */
  loadConfig() {
    this.load.json('mainGameConfig', 'src/config/mainGame.json' + `?v=${window.VersionClient}`)
  }

  loadAssets() {
    this.load.image('lixi', 'assets/img/lixi.jpg' + `?v=${window.VersionClient}`)
    this.load.image('lixi1', 'assets/img/lixi1.png' + `?v=${window.VersionClient}`)
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