import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    <header>
     <div className="wrapper">
        <div className="logo">
          <img src={require('../../img/logo.png')} width="430" height="60" alt="" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
            <li><Link to="/Videos">videos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    );
  }
}

export default Header;
