import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Vsidebar from "../vsidebar/vsidebar";
import Test1 from "./video test pages/test1";
import Test2 from "./video test pages/test2";
import Test3 from "./video test pages/test3";


class Videos extends Component {
  render() {
    return (
    <Router>
      <div className="wrapper">
        <div classname="main">
          <Vsidebar />
          <div className="video-list">
            <Route exact path='/video/Test1' component={Test1} />
            <Route exact path='/video/Test2' component={Test2} />
            <Route exact path='/video/Test3' component={Test3} />
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default Videos;
