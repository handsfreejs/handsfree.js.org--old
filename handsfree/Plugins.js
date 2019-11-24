/**
 * Adds a callback (we call it a plugin) to be called after every tracked frame
 * @param {String} name The plugin name
 * @param {Function} callback The callback to run
 */
const Handsfree = window.Handsfree

Handsfree.use = function(name, opts = {}) {
  // Make sure we have an options object
  if (typeof opts === 'function') {
    opts = {
      onFrame: opts
    }
  }

  Handsfree.plugins[name] = Object.assign(
    {
      // Whether the plugin is enabled by default
      enabled: true,
      // (instance) => Called on every frame
      onFrame: null,
      // (instace) => Called when the plugin is first used
      onUse: null,
      // (instance) => Called when the plugin is enabled
      onEnable: null,
      // (instance) => Called when the plugin is disabled
      onDisable: null
    },
    opts
  )

  // Run onUse callbacks
  if (Handsfree.instances.length) {
    Object.keys(Handsfree.instances).forEach((instance) => {
      !Handsfree.plugins[name].wasOnUseCalled &&
        Handsfree.plugins[name].onUse &&
        Handsfree.plugins[name].onUse(instance)
    })
    Handsfree.plugins[name].wasOnUseCalled = true
  }
}

/**
 * Enable plugins
 * - Calls onEnable for each instance
 */
Handsfree.enable = function(name) {
  Handsfree.plugins[name].enabled = true

  Handsfree.instances.forEach((instance) => {
    Handsfree.plugins[name].onEnable &&
      Handsfree.plugins[name].onEnable(instance)
  })
}

/**
 * Disable plugins
 * - Calls onDisable for each instance
 */
Handsfree.disable = function(name) {
  Handsfree.plugins[name].enabled = false

  Handsfree.instances.forEach((instance) => {
    Handsfree.plugins[name].onDisable &&
      Handsfree.plugins[name].onDisable(instance)
  })
}

require('./plugins/head/vertScroll')
require('./plugins/head/click')
require('./plugins/head/morphs')
require('./plugins/head/pointer')