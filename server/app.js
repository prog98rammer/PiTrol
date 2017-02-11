const express = require('express');
const cors = require('cors');
const path = require("path");
const plugins = require("../plugins");

const app = express();

// Middlewear Settings
app.use(cors());
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use("/static", express.static(path.resolve(__dirname, "..", "static")));

const METHODS = {
  "GET": app.get.bind(app),
  "POST": app.post.bind(app),
  "PATCH": app.patch.bind(app),
  "DELETE": app.delete.bind(app)
};

app.get('/', (req, res) => res.status(200).render("index.html"));

for (var i = 0; i < plugins.length; i++)
{
  const plugin = plugins[i];
  const pluginName = plugin.name;
  const pluginFeatures = plugin.ref;
  for (var j = 0; j < pluginFeatures.length; j++)
  {
    const feature = pluginFeatures[j];
    const featureName = feature.name;
    const featureMethods = feature.methods;
    const featureRef = feature.ref;
    for (var k = 0; k < featureMethods.length; k++)
    {
      const method = featureMethods[k].toUpperCase();
      const subAPIURL = `/API/${pluginName}/${featureName}`;
      console.log(`Serving ${method} request @ ${subAPIURL}`);
      METHODS[method](subAPIURL, featureRef);
    }
  }
}

module.exports = app;
