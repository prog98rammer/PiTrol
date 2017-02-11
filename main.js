'use strict';

var express = require("express");
const isValidRequest = require("./src/util").isValidRequest;
var plugins = require("./plugins");

var app = new express();

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
      METHODS[featureMethod](`/API/${pluginName}/${featureName}`, function(req, res)
      {
        if (isValidRequest(req, requiredParams, res))
        { // Note to self: if the request is invalid, isValidRequest
          // will handle the response
          console.log(`${featureName}: Enterering`);
          featureRef(req, res);
          console.log(`${featureName}: Left`);
        }
      });
    }
  }
}

const argv = process.argv.splice(2);
const port = argv[0] || 8001;
app.listen(port, () => {
  console.log(`Server is up at 0.0.0.0:${port}`);
  process.exit();
});
