'use strict';

var express = require("express");
var cors = require('cors')
var plugins = require("./plugins");

var app = new express();
app.use(cors())

var METHODS = {
  "GET": app.get.bind(app),
  "POST": app.post.bind(app),
  "PATCH": app.patch.bind(app),
  "DELETE": app.delete.bind(app)
};

for (var plugin in plugins)
{
  const _plugin = plugins[plugin];
  const pluginName = _plugin.name;
  const pluginFeatures = _plugin.ref;
  for (var i = 0; i < pluginFeatures.length; i++)
  {
    const _feature = pluginFeatures[i];
    const featureName = _feature.name;
    const featureMethods = _feature.methods;
    const featureRef = _feature.ref;
    const requiredParams = _feature.requiredParams || [];
    for (var i = 0; i < featureMethods.length; i++)
    {
      const featureMethod = featureMethods[i].toUpperCase();
      console.log(`Serving ${featureMethod} request at /API/${pluginName}/${featureName}`);
      METHODS[featureMethod](`/API/${pluginName}/${featureName}`, featureRef);
    }
  }
}

const argv = process.argv.splice(2);
const port = argv[0] || 8001;
app.listen(port, () => {
  console.log(`Server is up at 0.0.0.0:${port}`);
  //process.exit();
});
