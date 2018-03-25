import React, { Component } from 'react';
import $ from 'jquery';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Topbar from './components/topbar/topbar';
import Homepage from './components/pages/homepage';
import './App.css';

$(document).ready(function() {
    var $header = $("header"),
        $clone = $header.before($header.clone().addClass("clone"));

    $(window).on("scroll", function() {
        var fromTop = $(window).scrollTop();
        $("body").toggleClass("down", (fromTop > 60));
    });
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
