import React, { Component } from 'react';
import logo from './logo.svg';
import FixedHeader from './FunctionalComponents/FixedHeader/FixedHeader'
import Hoc from './hoc';
import './App.css';

class App extends Component {
  // componentDidMount() {
  //   document.addEventListener('scroll', (evt) => {

  //     const fixedHeaderContainer = document.querySelector('.fixed-header-container');
  //     const fixedHeader = document.querySelector('.fixed-header') || document.querySelector('.fixed-header-alt');
  //     const fixedHeaderItem = document.querySelectorAll('.fixed-header-item');
  //     const fixedHeaderItemAlt = document.querySelectorAll('.fixed-header-item-alt');

  //     if(document.documentElement.scrollTop >= 200){
  //       fixedHeaderContainer.style.backgroundColor = "white"
  //       fixedHeader.classList.add('fixed-header-alt');
  //       fixedHeader.classList.remove('fixed-header');
  //       fixedHeaderItem.forEach(element => {
  //         element.className = 'fixed-header-item-alt';
  //       })
  //     }else{
  //       fixedHeaderContainer.style.backgroundColor = 'transparent';
  //       fixedHeader.classList.add('fixed-header');
  //       fixedHeader.classList.remove('fixed-header-alt');
  //       fixedHeaderItemAlt.forEach(element => {
  //         element.className = 'fixed-header-item';
  //       })
  //     }

  //   })
  // }
  render() {
    return (
      <Hoc>
        <FixedHeader />
        <div className="App">
            {/* <div className="front-page">
              <div>
                <p className="front-text">HELLO MY NAME IS LUKE</p>
              </div>
            </div> */}
          </div>
      </Hoc>
    );
  }
}

export default App;
