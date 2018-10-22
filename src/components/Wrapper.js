import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
// import Main from './Main';
import Footer from './Footer';
import frogs from '../frogs.json';

class Wrapper extends Component {
    state = {
        score: 0,
        topScore: 0,
        message: 'Click an image to begin!',
        frogs
    };
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <div className="Main">
                    {/* <Main /> */}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Wrapper;