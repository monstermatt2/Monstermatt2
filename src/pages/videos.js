import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Videos extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="vcontent">
            <div className="vpanel"><Link to="/videos/colinoops"><img className="vpanel-img" src={require('../img/tmb-colinoops.png')} width="210" height="118" alt="" /></Link>
              <span className="vpanel-title"><Link to="/videos/colinoops">Colin oops</Link></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;