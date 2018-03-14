import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    <header>
      <div className="logo">
        logo
      </div>
      <nav>
        <ul>
          <li>home</li>
          <li>videos</li>
          <li>gallery</li>
        </ul>
      </nav>
    </header>
    );
  }
}

export default Header;
