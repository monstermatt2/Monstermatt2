import React, { Component } from 'react';
import Vsidebar from '../vsidebar/vsidebar';

class Videos extends Component {
  render() {
    return (
    <div className="wrapper">
      <div className="main">
      <Vsidebar />
        <div className="video-main">
          videos page
        </div>
      </div>
    </div>
    );
  }
}

export default Videos;
