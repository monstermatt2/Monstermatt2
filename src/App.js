import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Topbar from './components/topbar/topbar';
import Homepage from './components/pages/homepage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
