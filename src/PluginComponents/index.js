module.exports.PluginComponents = [
  {
    ref: require("./SystemUptime").SystemUptime,
    props: {
      loadFrom: "/API/PiStatus/SystemUptime",
      reloadEvery: 30 * 1000
    }
  },
  // More components can be added here
]
