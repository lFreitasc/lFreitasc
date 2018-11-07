import React, { Component, Fragment } from 'react';
import Nav from './components/navbarFixed';
import Carousel from './components/carousel';
import Portfolio from './components/portfolio';
import News from './components/news';
import Form from './components/formContato';
import Footer from './components/footer';
import Biography from './components/biography';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav></Nav>
          <Carousel></Carousel>
          <Portfolio></Portfolio>
          <News></News>
          <Biography></Biography>
          <Form></Form>
          <Footer></Footer>
      </Fragment>
    );
  }
}

export default App;