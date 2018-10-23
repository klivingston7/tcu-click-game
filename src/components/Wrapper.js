import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import frogs from '../frogs.json';

class Wrapper extends Component {
    state = {
        score: 0,
        topScore: 0,
        message: 'Click an image to begin!',
        frogs
    };

    // update the current score count in the nav
    updateCurrentScore = (newScore) => {
        // set the new count as the count
        this.setState({ count: newScore });
    }

    updateTopScore = (newTop) => {
        // if the new top score is higher than the current
        if (newTop > this.state.topScore) {
            // then set the state but you have to subtract 1
            this.setState({ topScore: newTop - 1 })
        }
    }
    render() {
        return (
            <div>
                <Nav
                    updateCurrentScore={this.updateCurrentScore}
                    updateTopScore={this.updateTopScore} />
                <Header />
                <main className="container">
                    <Main />
                </main>
                <Footer />
            </div>
        );
    }
}

export default Wrapper;