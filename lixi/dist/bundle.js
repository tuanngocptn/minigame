(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(i)?i:String(i)),r)}var i}function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}var r=function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)}(l,Phaser.Scene);var i,a,c,u,f=(c=l,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var t,n=o(c);if(u){var r=o(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return function(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(this,t)});function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),f.call(this,"Preload")}return i=l,(a=[{key:"editorPreload",value:function(){this.load.pack("asset-pack","assets/asset-pack.json")}},{key:"editorCreate",value:function(){var e=this.add.image(505.0120544433594,360,"guapen");e.scaleX=.32715486817515643,e.scaleY=.32715486817515643;var t=this.add.rectangle(553.0120849609375,361,256,20);t.setOrigin(0,0),t.isFilled=!0,t.fillColor=14737632,new PreloadBarUpdaterScript(t);var n=this.add.rectangle(553.0120849609375,361,256,20);n.setOrigin(0,0),n.fillColor=14737632,n.isStroked=!0;var o=this.add.text(552.0120849609375,329,"",{});o.text="Loading...",o.setStyle({color:"#e0e0e0",fontFamily:"arial",fontSize:"20px"}),this.events.emit("scene-awake")}},{key:"loadConfig",value:function(){this.load.json("mainGameConfig","src/config/mainGame.json"+"?v=".concat(window.VersionClient))}},{key:"loadAssets",value:function(){this.load.image("lixi","assets/img/lixi.jpg"+"?v=".concat(window.VersionClient)),this.load.image("lixi1","assets/img/lixi1.png"+"?v=".concat(window.VersionClient))}},{key:"preload",value:function(){var e=this;this.editorCreate(),this.editorPreload(),this.loadConfig(),this.loadAssets(),this.load.on(Phaser.Loader.Events.COMPLETE,(function(){return e.scene.start("MainGame")}))}}])&&t(i.prototype,a),Object.defineProperty(i,"prototype",{writable:!1}),l}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(l,Phaser.GameObjects.Sprite);var t,n,o,r,f=(o=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(o);if(r){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function l(e,t,n,o){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(r=f.call(this,e,t,n,"lixi1")).configs=o,r.setInteractive(),r.init(),r}return t=l,(n=[{key:"init",value:function(){var e=this;this.setScale(.4),this.on("pointerup",(function(){e.configs.onClicked(),e.shake()}))}},{key:"shake",value:function(){var e=this;this.scene.tweens.add({targets:this,duration:150,x:window.GameConfig.GAME_WIDTH/2*window.GameConfig.RESIZE,y:window.GameConfig.GAME_HEIGHT/2*window.GameConfig.RESIZE,onComplete:function(){e.scene.tweens.add({targets:e,duration:150,repeat:5,yoyo:!0,angle:20,onComplete:function(){e.scene.tweens.add({targets:e,duration:150,scale:.7,y:window.GameConfig.GAME_HEIGHT*window.GameConfig.RESIZE})}})}}),this.angle=-10,this.angle=0}},{key:"initPosition",value:function(e,t,n){this.x=e,this.y=t,this.angle=n}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===l(r)?r:String(r)),o)}var r}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,Phaser.Scene);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(o);if(r){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,"MainGame")}return t=a,(n=[{key:"preload",value:function(){this.mainGameConfig=this.cache.json.get("mainGameConfig")}},{key:"addTxtWelcome",value:function(e){this.add.text(e.x,e.y,e.text,e.configs).setOrigin(.5,.5)}},{key:"addLixies",value:function(){var e=new f(this,window.GameConfig.GAME_WIDTH/2*window.GameConfig.RESIZE,window.GameConfig.GAME_HEIGHT/2*window.GameConfig.RESIZE,{onClicked:this.onDinoClick});e.initPosition(window.GameConfig.GAME_WIDTH*window.GameConfig.RESIZE,(window.GameConfig.GAME_HEIGHT-200)*window.GameConfig.RESIZE,-20);var t=new f(this,window.GameConfig.GAME_WIDTH/2*window.GameConfig.RESIZE,window.GameConfig.GAME_HEIGHT/2*window.GameConfig.RESIZE,{onClicked:this.onDinoClick});t.initPosition(0,(window.GameConfig.GAME_HEIGHT-200)*window.GameConfig.RESIZE,20),this.add.existing(e),this.add.existing(t)}},{key:"onDinoClick",value:function(){}},{key:"editorCreate",value:function(){this.addLixies(),this.events.emit("scene-awake")}},{key:"create",value:function(){this.editorCreate()}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===b(r)?r:String(r)),o)}var r}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}window.addEventListener("load",(function(){game=new Phaser.Game({width:window.GameConfig.GAME_WIDTH,height:window.GameConfig.GAME_HEIGHT,type:Phaser.AUTO,backgroundColor:"#242424",scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH}}),game.scene.add(window.GameConfig.SCENES.Preload,r),game.scene.add(window.GameConfig.SCENES.MainGame,d),game.scene.add(window.GameConfig.SCENES.Boot,v,!0)}));var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,Phaser.Scene);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(o);if(r){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"preload",value:function(){this.load.pack("pack","assets/preload-asset-pack.json")}},{key:"create",value:function(){this.scene.start(window.GameConfig.SCENES.Preload)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}()})();