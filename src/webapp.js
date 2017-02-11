import React, { Component } from 'react';
import {SystemUptime} from './PluginComponents';

export default class WebApp extends Component
{
  render()
  {
    return (
      <div className="fluid-container">
        <div className="row">
          <div className="col-md-3">
            <SystemUptime loadFrom={"/API/PiStatus/SystemUptime"} reloadEvery={5000} />
          </div>
        </div>
      </div>
    );
  }
}
