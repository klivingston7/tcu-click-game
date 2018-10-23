import React, { Component } from 'react';

class Nav extends Component {
  
  state = {
    score: 0,
    topScore: 0,
    message: 'Click an image to begin!'
  };

  // update the current score count in the nav
  updateCurrentScore = (newScore) => {
    // set the new count as the count
    this.setState({count: newScore});
  }

  updateTopScore = (newTop) => {
    // if the new top score is higher than the current
    if (newTop > this.state.topScore) {
      // then set the state but you have to subtract 1
      this.setState({topScore: newTop - 1})
    }
  }

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