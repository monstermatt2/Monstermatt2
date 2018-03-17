import React, { Component } from 'react';
import $ from 'jquery';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Topbar from './components/topbar/topbar';
import Homepage from './components/pages/homepage';
import './App.css';

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.topbar').fadeOut();
     }
    else
     {
      $('.topbar').fadeIn();
     }
 });

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
