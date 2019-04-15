import React, { Component } from 'react';
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React, { App } from 'framework7-react';

import 'framework7/css/framework7.bundle.css';
import 'framework7-icons';
import './App.css';

import Routes from './Routes';

const params = {
  name: 'Movie DB',
  theme: 'md',
  touch: {
    fastClicks: true,
    tapHold: true,
  }
};

Framework7.use(Framework7React);

class Application extends Component {
  render() {
    return (
      <App className="App" params={params}>
        <Routes />
      </App>
    );
  }
}

export default Application;
