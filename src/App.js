import React, { Component } from 'react';
import logo from './logo.svg';
import FixedHeader from './FunctionalComponents/FixedHeader'
import Hoc from './hoc';
import './App.css';

class App extends Component {
  render() {
    return (
      <Hoc>
        <FixedHeader />
        <div className="App">
            <div className="front-page">
              <div>
                <p className="front-text">HELLO MY NAME IS LUKE</p>
              </div>
            </div>
          </div>
      </Hoc>
    );
  }
}

export default App;
