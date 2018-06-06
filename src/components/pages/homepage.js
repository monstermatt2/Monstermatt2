import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main">
         <div className="news-box">
           <div className="news-title">from wordpress to node js</div>
           <div className="news-date">April 29, 2018</div>
           <div className="news-content">re-designing my website using Node JS lots of stuff are going to be put in later on.</div>
        </div>
        <div className="news-box">
         <div className="news-title">new website</div>
         <div className="news-date">January 3, 2017</div>
            <div className="news-content">after 6 years of using a custom templete for my whole site, i decided to switch to a full wordpress website. a few stuff have been removed and re-aranged:
                <ul>
                <li>forum has been removed</li>
                <li>"other" sub-menu has been removed</li>
                <li>random page has been removed</li>
                <li>inception page has been removed</li>
                <li>changelog has been removed</li>
                <li>subnet calculator has been removed</li>
                <li>javascript solitar has been removed</li>
                <li>videos, gallery, armory, blog is stil on my nav bar</li>
                <li>matt's social media links can now be found on the very top of my website</li>
               </ul>
             </div>
          </div>
          </div>
        </div>
    );
  }
}

export default Homepage;
