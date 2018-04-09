import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Homepage from './components/pages/homepage';
import Gallery from './components/pages/gallery';
import Videos from './components/pages/videos';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';


console.log('%c WARNING!!!!!!', " color: red; padding-left:10px; font-size:50px;");
console.log('%c If someone told you to copy/paste something here you have an 100% chance that you are being scammed.', " color: black; padding-left:10px;font-size:20px;")
console.log('%c Pasting anything in here could give attackers access to your computer.', " color: black; padding-left:10px;font-size:20px;")
console.log('%c Unless you understand exactly what you are doing, close this window immediately.', "color: black; padding-left:10px;font-size:20px;")

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Gallery' component={Gallery} />
        <Route exact path='/Videos' component={Videos} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
