import React, { Component } from 'react';

class Videos extends Component {
  render() {
    return (
    <div className="wrapper">
      <div className="main">
        <ul className="vlist">
          <li className="vgrid">
            <a href="#">
              <img src={require('../../img/img-test.webp')} width="210" alt="" />
              <div classname="vtimer">
                <span>
                  2:20
                </span>
              </div>
          </a>
          </li>
          <li className="vgrid">
          </li>
          <li className="vgrid">
          </li>
          <li className="vgrid">
          </li>
          <li className="vgrid">
          </li>
          <li className="vgrid">
          </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Videos;
