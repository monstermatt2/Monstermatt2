import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    <header>
    <div className="wrapper">
        <div className="logo">
          <img src={require('../../img/logo.png')} width="430" height="60" alt=""></img>
        </div>
        <nav>
          <ul>
            <li>home</li>
            <li>videos</li>
            <li>gallery</li>
          </ul>
        </nav>
        </div>
    </header>
    );
  }
}

export default Header;
