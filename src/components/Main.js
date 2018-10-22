import React, { Component } from 'react';
import frogs from '../frogs.json';


const shuffle = array =>
  array
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);


export default class Main extends Component {
  state = {
    frogs
  };

  getFrogById = id => {
    return frogs.find(frog => frog.id === id);
  };

  handleClick = id => {
    console.log(id);
    const frog = this.getFrogById(id);
    let newFrogs = this.state.frogs;
    newFrogs.forEach((f, index) => {
      if (f.id === frog.id) {
        f.clicked = true;
      }
    });
    this.setState({
      frogs: newFrogs
    })
    this.shuffleFrogs();
  };

  shuffleFrogs = () => {
    const shuffledFrogs = shuffle(frogs);
    this.setState({ frogs: shuffledFrogs });
  };

  componentWillMount() {
    this.shuffleFrogs();
  }

  render() {
    return this.state.frogs.map(frog => {
      return (
        <img
          className="frog"
          key={frog.id}
          src={require(`../images/${frog.img}`)} // for ease, name images after ids in frogs.json
          alt={frog.id}
          onClick={() => this.handleClick(frog.id)}
        />
      );
    });  
  }

}