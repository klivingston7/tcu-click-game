import React, { Component } from 'react';

class Nav extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: 'Click an image to begin!'
  };
  render() {
    return (
      <ul className="nav d-flex flex-column flex-md-row align-items-center">
        <a href="/">
        <img className="navImg" src="/static/media/2.3f2dd2bd.png" alt=""/>
        </a>
        <li className="begin">{this.state.message}</li>
        <li>
          Score: <span id="score">{this.state.score}</span> | 
          Top Score:{' '} <span id="top-score">{this.state.topScore}</span>
        </li>
      </ul>
    );
  }
}

export default Nav;