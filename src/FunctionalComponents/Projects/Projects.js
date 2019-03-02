import React, { Component } from 'react';

import TwoGame from '../../StateComponents/TwoGame/TwoGame';
import Sudoku from '../../StateComponents/Sudoku/Sudoku';
import './Projects.css';
import thumbnail from '../../images/2048.jpg'
import Modal from '../../UI/Modal';


class Projects extends Component {
    
    state = {
        twoGame: false,
        sudoku: false,
        modal: false
    }


    showTwoGame() {
        this.setState({twoGame: true, modal: true})
        document.addEventListener('keydown', this.disableScroll)
    }
    
    showSudoku() {
        this.setState({sudoku: true, modal: true})
    }

    disableScroll = (evt) => {
        if (evt.keyCode === 37 || evt.keyCode === 38 || evt.keyCode === 39 || evt.keyCode === 40){
            evt.preventDefault(evt);
        }else if(evt.keyCode === 27){
            this.hideAll();
        }
    }

    hideAll = () => {
        this.setState({twoGame: false, sudoku: false, modal: false})
        document.removeEventListener('keydown', this.disableScroll)
    }

    render() {
        return(
            <div className="projects">
                {this.state.modal?<Modal clicked={this.hideAll} />: null}
                <div className="projects-header">
                    <p>WHAT I'VE DONE<span>.</span></p>
                </div>
                    <div className="project-item" onClick={() => {this.showTwoGame()}}>
                        <p className="project-item-title">2048</p>
                        {this.state.twoGame?<TwoGame />: null}
                        <img src={thumbnail} alt="2048" className="project-image"></img>  
                    </div>
                    {/* <div className="project-item" onClick={() => {this.showSudoku()}}>
                        <p>Sudoku</p>
                        {this.state.sudoku?<Sudoku />: null}
                    </div>
                    <div className="project-item">
                        <p>MongoDB project</p>
                    </div> */}
            </div>
        )
    }
}

export default Projects;