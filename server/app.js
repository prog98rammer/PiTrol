const express = require('express')
const cors = require('cors')
const path = require('path')
const plugins = require('../plugins')

const app = express()

// Middleware Settings
app.use(cors())
app.use(express.static(path.resolve(__dirname, "..", "build")))
app.use("/public", express.static(path.resolve(__dirname, "..", "static")))

// Allowed HTTP methods
const METHODS = {
  'GET': app.get.bind(app),
  'POST': app.post.bind(app),
  'PATCH': app.patch.bind(app),
  'DELETE': app.delete.bind(app)
}

// Main UI Page Rendered
app.get('/', (req, res) => res.status(200).render('index.html'))

// Plugin Handler
for (var i = 0; i < plugins.length; i++) {
  /* Each plugin is expected to have a name and a reference to a list of features.
     We iterate through this list and handle each feature seperately and according
     to its specifications.
  */
  const plugin = plugins[i]
  const pluginName = plugin.name
  const pluginFeatures = plugin.ref
  for (var j = 0; j < pluginFeatures.length; j++) {
    /* Each feature is expected to have a name, a list of HTTP methods, and a reference
       to the function that's responsible for providing this feature.
    */
    const feature = pluginFeatures[j]
    const featureName = feature.name
    const featureMethods = feature.methods
    const featureRef = feature.ref
    for (var k = 0; k < featureMethods.length; k++) {
      const method = featureMethods[k].toUpperCase()
      const subAPIURL = `/API/${pluginName}/${featureName}`
      console.log(`Serving ${method} request @ ${subAPIURL}`)
      METHODS[method](subAPIURL, featureRef)
    }
  }
}

module.exports = app
