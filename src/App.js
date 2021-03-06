import React, { Component } from 'react';
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React, { App, View } from 'framework7-react';

import 'framework7/css/framework7.bundle.css';
import 'framework7-icons';
import './App.css';

import Home from './views/home';
import Movie from './views/movie';

const params = {
  name: 'Movie DB',
  theme: 'md',
  touch: {
    fastClicks: true,
    tapHold: true,
  },
  routes: [{
    name: 'home',
    path: '/',
    component: Home,
  }, {
    name: 'movie',
    path: '/movie/:id',
    component: Movie,
  }]
};

Framework7.use(Framework7React);

class Application extends Component {
  render() {
    return (
      <App className="App" params={params}>
        <View
          id='main-view'
          main
          url='/'
        />
      </App>
    );
  }
}

export default Application;
