import React, { Component } from 'react';
import Nav from './Nav';
import Banner from './Banner';
// import Main from './Main';
import Footer from './Footer';


class Wrapper extends Component {
    state = {
        score: 0,
        topScore: 0,
        message: 'Click an image to begin!',

    };
    render() {
        return (
            <div>
                <Nav />
                <Banner />
                <div className="Main">
                    {/* <Main /> */}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Wrapper;