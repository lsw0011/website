import React, { Component } from 'react';
import './App.css';
import Hoc from './hoc';

import Skills from './FunctionalComponents/Skills/Skills';
import Summary from './FunctionalComponents/Summary/Summary';
import Projects from './FunctionalComponents/Projects/Projects';
import FixedHeader from './FunctionalComponents/FixedHeader/FixedHeader';


class App extends Component {
  state = {
    word: '',
  }
  componentWillMount() {
    this.init = true;
  }

  componentDidMount() {
    document.addEventListener('scroll', (evt) => {
      const fixedHeaderContainer = document.querySelector('.fixed-header-container');
      const fixedHeader = document.querySelector('.fixed-header') || document.querySelector('.fixed-header-alt');
      const fixedHeaderItem = document.querySelectorAll('.fixed-header-item');
      const fixedHeaderItemAlt = document.querySelectorAll('.fixed-header-item-alt');
      console.log(document.documentElement.scrollTop)
      if(document.documentElement.scrollTop >= 200){
        fixedHeaderContainer.style.backgroundColor = "white"
        fixedHeader.classList.add('fixed-header-alt');
        fixedHeader.classList.remove('fixed-header');
        fixedHeaderItem.forEach(element => {
          element.className = 'fixed-header-item-alt';
        })
      }else{
        fixedHeaderContainer.style.backgroundColor = 'transparent';
        fixedHeader.classList.add('fixed-header');
        fixedHeader.classList.remove('fixed-header-alt');
        fixedHeaderItemAlt.forEach(element => {
          element.className = 'fixed-header-item';
        })
      }

    })
  }

  scrollDoc = (targetPosition, currentPosition) => {
    let i = 1;
    const step = Math.floor((targetPosition - currentPosition) / 30);
    console.log(step)
    const scrollInterval = setInterval(() => {
      console.log(i)
      document.documentElement.scrollTop += step; 
      i++; 
      if(i === 30){
        document.documentElement.scrollTop = targetPosition
        clearInterval(scrollInterval)
      }
    }, 10)
  }

  delayStyle = (add) => {
    if(add) {
      setTimeout(() => {
        document.querySelectorAll('.fixed-header-item-alt').forEach(item => {
        })
      }, 200)
    }else{
      document.querySelectorAll('.fixed-header-item').forEach(item => {
        item.style.backgroundImage = 'none';
      })
    }

  }



  loadAnimation = () => {
    const bars = [];
    for(var i = 0; i < 6; i++){
      bars.push(<span className='loadbar' style={{animation: 'load 2s ease-in   ' + i*2 +'00ms infinite'}}></span>)
    }
    return bars;
  }

  render() {
    // const word = "Developer"
    if(this.init){
      this.init = false;
    }

    let bars = this.loadAnimation();
    return (
      <Hoc>
        <FixedHeader scrollDoc = {this.scrollDoc} />
        <div className="front-page">
          <div>
            <p className="front-text">HELLO MY NAME IS LUKE</p>
          </div>
        </div>
        <div className="down-arrow-container" onClick={() => this.scrollDoc(575, document.documentElement.scrollTop)}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139 129" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 139" className="down-arrow">
            <g fill="#666666">
              <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
            </g>
          </svg>
        </div>
        <div className="website-content">
          <Summary />
          <Skills />
          <Projects />
        </div>
      </Hoc>
    )
  }
}
export default App;