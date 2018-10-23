import React, { Component } from 'react';
import frogs from '../frogs.json';


const shuffle = array =>
    array
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);


class Main extends Component {

    constructor(props) {
        super(props);

        // setting the state: score is at 1, pusheens is pulling in the pusheen json, and we have no selected pusheens yet
        this.state = {
            score: 1,
            frogs,
            selectedFrogs: []
        };
    }

    getFrogById = id => {
        return frogs.find(frog => frog.id === id);
    };

    handleClick = id => {
        console.log(id);
        const ID = this.getFrogById(id);

        let newFrogs = this.state.frogs;
        let oldFrogs = this.state.selectedFrogs;

        let clicked = false;

        oldFrogs.forEach(frog => {
            if (frog.id === ID) {
                clicked = true;
            }
        })
        if (clicked) {
            this.endGame();
        }
        else {
            newFrogs.forEach(frog => {
                if (frog.id === ID) {
                    this.setState({ selectedFrogs: [...this.state.selectedFrogs, frog] });
                    console.log(this.state.selectedFrogs);

                    this.updateScore();
                }
            })
        }
        this.shuffleFrogs();
    };

    shuffleFrogs = () => {
        const shuffledFrogs = shuffle(frogs);
        this.setState({ frogs: shuffledFrogs });
    };

    componentWillMount() {
        this.shuffleFrogs();
    }

    updateScore = () => {
        // set the new score
        this.setState({score: this.state.score + 1});
        // update the parent component's display
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    }

    endGame = () => {
        // push the current game score as the new top score 
        this.props.updateTopScore(this.state.score);
        // set the score back to 1 and the selected array to empty 
        this.setState({score: 1, selectedFrogs: []});
        // update the current score to 0
        this.props.updateCurrentScore(0);
    }

    render() {
        return this.state.frogs.map(frog => {
            return (
                <div
                    className="frog-div"
                    onClick={() => this.handleClick(frog.id)}
                    endGame={() => this.endGame}
                    score={() => this.state.score}
                    key={frog.id}
                    alt={frog.id}>
                    <img
                        className="frog"
                        key={frog.id}
                        src={require(`../images/${frog.img}`)} // for ease, name images after ids in frogs.json
                        alt={frog.id}
                    />
                </div>
            );
        });
    }

}

export default Main;