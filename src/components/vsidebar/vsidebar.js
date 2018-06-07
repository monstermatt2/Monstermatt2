import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Vsidebar extends Component {
  render() {
    return (
        <div className="sidebar">
            <li><Link to="/video/Test1">test 1</Link></li>
            <li><Link to="/video/Test2">test 2</Link></li>
            <li><Link to="/video/Test3">test3</Link></li>
        </div>
    );
  }
}

export default Vsidebar;
