import Preload from './scenes/Preload.js'
import MainGame from './scenes/MainGame.js'
import { colors } from './common/index.js'

window.addEventListener('load', function () {
  game = new Phaser.Game({
    width: window.GameConfig.GAME_WIDTH,
    height: window.GameConfig.GAME_HEIGHT,
    type: Phaser.AUTO,
    backgroundColor: colors.background,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  })

  game.scene.add(window.GameConfig.SCENES.Preload, Preload)
  game.scene.add(window.GameConfig.SCENES.MainGame, MainGame)
  game.scene.add(window.GameConfig.SCENES.Boot, Boot, true)
})

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack('pack', 'assets/preload-asset-pack.json')
  }

  create() {
    this.scene.start(window.GameConfig.SCENES.Preload)
  }
}
