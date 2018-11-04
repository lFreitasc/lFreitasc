import React, { Component, Fragment } from 'react';
import Nav from './components/navbarFixed';
import Carousel from './components/carousel';
import Portfolio from './components/portfolio';
import News from './components/news';
import Form from './components/formContato';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav></Nav>
          <Carousel></Carousel>
          <Portfolio></Portfolio>
          <News></News>
          <Form></Form>
      </Fragment>
    );
  }
}

export default App;