var requests = require('./requesthandler')
var ui = require('./uicomponent')

module.exports = {
  uiComponent: {
    props: {
      loadFrom: '/API/PiStatus/SystemUptime', // required field
      reloadEvery: 30 * 1000 // required field
    },
    ref: ui.PiStatusComponent
  },
  features: [
    {
      name: 'SystemUptime', // required field
      methods: ['GET'], // required field
      ref: requests.systemUptime // required field
    }
    // More features can be added to the list
  ]
}
