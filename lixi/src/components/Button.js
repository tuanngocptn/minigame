export default class Dino extends Phaser.GameObjects.Container {
  constructor(scene, x, y, configs) {
    super(scene, x, y)
    this.configs = configs
    this.setInteractive()
    this.init()
  }

  init() {
		// const Button
	}
}
