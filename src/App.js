import React, { Component, Fragment } from 'react';
import Nav from './components/navbarFixed';
import Carousel from './components/carousel';
import Portfolio from './components/portfolio';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav></Nav>
          <Carousel></Carousel>
          <Portfolio></Portfolio>
      </Fragment>
    );
  }
}

export default App;