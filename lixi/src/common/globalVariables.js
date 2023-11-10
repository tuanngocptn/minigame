// Define our 'global' variable
window.MQ = {}
window.GameConfig = {}
window.GameConfig.GAME_WIDTH = 640
window.GameConfig.GAME_HEIGHT = 1136
window.GameConfig.RESIZE = 1
window.GameConfig.SCENES = {
  Boot: 'Boot',
	Preload: 'Preload',
	MainGame: 'MainGame',
}

var game = null
window.VersionClient = "1.0.8";
Array.prototype.sortOn = function () {
  var dup = this.slice()
  if (!arguments.length) return dup.sort()
  var args = Array.prototype.slice.call(arguments)
  return dup.sort(function (a, b) {
    var props = args.slice()
    var prop = props.shift()
    while (a[prop] == b[prop] && props.length) prop = props.shift()
    return a[prop] == b[prop] ? 0 : a[prop] > b[prop] ? -1 : 1
  })
}

LogConsole = {
  log(data) {
    console.log(data)
  },
}
