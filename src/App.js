import React, { Component } from 'react';
import $ from 'jquery';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Topbar from './components/topbar/topbar';
import Homepage from './components/pages/homepage';
import './App.css';

console.log('%c WARNING!!!!!!', " color: red; padding-left:10px; font-size:50px;");
console.log('%c If someone told you to copy/paste something here you have an 100% chance that you are being scammed.', " color: black; padding-left:10px;font-size:20px;")
console.log('%c Pasting anything in here could give attackers access to your computer.', " color: black; padding-left:10px;font-size:20px;")
console.log('%c Unless you understand exactly what you are doing, close this window immediately.', "color: black; padding-left:10px;font-size:20px;")

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
