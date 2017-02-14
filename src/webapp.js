import React, { Component } from 'react';
var plugins = require('./plugins')

const componentList = []

for (var i = 0; i < plugins.length; i++)
{
  const plugin = plugins[i]
  const uiComponent = plugin.ref.uiComponent
  componentList.push(uiComponent)
}

export default class WebApp extends Component
{
  render()
  {
    return (
      <div className="fluid-container">
        <div className="row">
          <div className="col-md-4">
            { componentList.map((e, i) => <e.ref {...e.props} />) }
          </div>
        </div>
      </div>
    );
  }
}
