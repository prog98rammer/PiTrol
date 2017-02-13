import React, { Component } from 'react';
import {PluginComponents} from './PluginComponents'

export default class WebApp extends Component
{
  render()
  {
    return (
      <div className="fluid-container">
        { PluginComponents.map(function(e, i) {
          const component = PluginComponents[i];
          if ((i + 1) % 2 === 0) {
            return (
              <div className="row">
                <div className="col-md-4">
                  <component.ref {...component.props} />
                </div>
              </div>
            )
          }
          else {
            return (
              <div className="col-md-4">
                <component.ref {...component.props} />
              </div>
            )
          }
        })}
      </div>
    );
  }
}
