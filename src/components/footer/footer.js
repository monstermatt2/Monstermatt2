import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    <footer>
      <div className="wrapper">
        <p>This footer will always be positioned at the bottom of the page, but <strong>not fixed</strong>.</p>
      </div>
    </footer>
    );
  }
}

export default Footer;
