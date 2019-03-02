import React, { Component } from "react";

import './TwoGame.css'

class TwoGame extends Component {
    state = {
        render: false,
        move: false,
        dir: null,
        prevGrid: [],
        nextGrid: []
    }

    componentDidMount() {
        this.ready = true;
        this.hold = false;
        document.body.addEventListener("keydown", evt => {
            console.log(evt.keyCode)
            if(evt.keyCode>=37 && evt.keyCode<=41){
                if(this.ready && !this.hold){
                    this.hold = true;
                    this.evtHandler(evt.keyCode);
                    this.ready = false;
                    setTimeout(() => {
                        this.ready = true
                    }, 320)
                }
            }
        });
        document.body.addEventListener("keyup", evt => this.hold = false)

    }

    componentWillMount() {
        this.colors = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: '12'}
        if(this.state.nextGrid.length === 0){
            this.init()
        }
    }

    shouldComponentUpdate() {
        for(var i = 0; i < 16; i++){
            if(this.state.prevGrid[i].curValue !== this.state.nextGrid[i].curValue){
                return true;
            }
        }
        return true;
    }

    evtHandler = (code) => {
        let dir = 5;
        if(code == 38){
            dir = 1;
        }else if(code == 39){
            dir = 2;
        }else if(code == 40){
            dir = 3;
        }else if(code == 37){
            dir = 4;
        }
        if(dir != 5){
            this.gameloop(dir)
        }
    }

    gameloop = (dir) => {
        const prevGrid =this.copyGrid(this.state.nextGrid);
        const nextGrid = this.copyGrid(this.state.nextGrid);
        this.setup(nextGrid)
        this.moveValues(dir, nextGrid);
        if(this.checkForMove(nextGrid)){
            this.generateRandom(nextGrid)
        }
        this.setState({nextGrid: nextGrid, prevGrid: prevGrid, dir: dir, render: true, move: true})
    }

    componentDidUpdate() {
        if(this.state.move){
            if(this.state.render){
                setTimeout(() => {
                    this.setState({render: false})
                }, 10)
            }
            setTimeout(() => {
                this.setState({move: false})
            }, 320)
        }
    }


    getInPos = (grid) => {
        grid.forEach((element, index) => {
            if(element.value != 0){
                element.initialPos = index;
            }else{
                element.initialPos = null;
            }
        })
    }

    init = () => {
        const grid = []
        for(var row = 0; row < 4; row++){
            for(var col = 0; col < 4; col++){
                grid.push({hasMerged: false, value: 0, initialPos:null, mergedPos:false, new: false})
            }
        }
        this.generateRandom(grid);
        this.generateRandom(grid);
        this.getInPos(grid);
        this.setState({prevGrid: grid})
        this.setState({nextGrid: grid})
    }

    setup = (grid) => {
        this.getInPos(grid);
        grid.forEach((element) =>{
            element.hasMerged = false;
            element.mergedPos = false;
            element.new = false;
        })
    }

    generateRandom = function (grid) {
        var open = []
        grid.forEach((element, index) => {
            if (element.value == 0){
                open.push(index)
            }
        })
        var randPos = open[Math.floor(Math.random() * open.length)]
        grid[randPos].value = 2;
        grid[randPos].new = true;
    }

    moveValues = function (dir, grid) {
        let distance, spacing, sp, ep = null;
        if(dir == 3){
            distance = -4
            spacing = -1
            sp = 15
            ep = 12
        }else if (dir == 4){
            distance = 1
            spacing = -4
            sp = 12
            ep = 0;
        }else if (dir == 1) {
            distance = 4
            spacing = -1
            sp = 3
            ep = 0
        }else if (dir == 2) {
            distance = -1
            spacing =-4
            sp = 15
            ep = 3
        }
        for(var el = sp; el >= ep; el+=spacing){
            var group = [];
            for(var i = 0; i < 4; i++){
                group.push(el+distance*i)
            }
            for(var index = 1; index < 4; index++) {
                for(var snake = index; snake > 0; snake--){
                    if(grid[group[snake-1]].value == 0){
                        grid[group[snake-1]].value = grid[group[snake]].value;
                        grid[group[snake-1]].initialPos = grid[group[snake]].initialPos;
                        grid[group[snake]].initialPos = null;
                        grid[group[snake]].value = 0;
                    }
                    else if(grid[group[snake-1]].value == grid[group[snake]].value && !grid[group[snake-1]].hasMerged && !grid[group[snake]].hasMerged){
                        grid[group[snake-1]].value *= 2;
                        grid[group[snake]].value = 0;
                        grid[group[snake-1]].mergedPos = grid[group[snake]].initialPos;
                        grid[group[snake]].initialPos = null;
                        grid[group[snake-1]].hasMerged = true;
                    }
                }
            }
        }
    }

    checkForMove = (grid) => {
        for(var i = 0; i < 16; i++){
            if(grid[i].initialPos != i && grid[i].initialPos != null || grid[i].hasMerged){
                return true
            }
        }
        return false
    }

    copyGrid = (grid) => {
        return Object.assign([], grid.map((value) => Object.assign({}, value)))
    }



    getTransitions() {
        const transitions = {};
        for(var i = 0; i < 16; i++){
            transitions[i] = {};
        }
        this.state.nextGrid.forEach((value, index) => {
            if(value.mergedPos === 0){
            } 
            if(value.mergedPos !== false){
                transitions[value.mergedPos].nextIndex = index;
            }
            if(value.initialPos !== null){
                transitions[value.initialPos].nextIndex = index;
            }
        })
        return transitions;
    }

    getStyle(transition, index) {
        const diff = transition.nextIndex-index
        if(this.state.dir%2){
            return {transform: `translateY(${diff/4*8.25}rem)`}
        }else{
            return {transform: `translateX(${diff*8.25}rem)`}
        }
    }

    render() {
        const cells = [];
        const transitions = this.getTransitions();
        for(var i = 0; i < 16; i++){
            if(this.state.move){
                if(this.state.prevGrid[i].value){
                    if(this.state.render){
                        cells.push(
                            <div>
                                <div className="cell-background" />
                                <div className={"cell " + this.colors[Math.log2(this.state.prevGrid[i].value)]}>
                                    <p className="gameNumber">{this.state.prevGrid[i].value}</p>
                                </div>
                            </div>
                        )
                    }else{
                        cells.push(
                            <div>
                                <div className="cell-background"/>
                                <div className={"cell " + this.colors[Math.log2(this.state.prevGrid[i].value)]} style={this.getStyle(transitions[i], i)}>
                                    <p className="gameNumber">{this.state.prevGrid[i].value}</p>
                                </div>
                            </div>
                        )
                    }
                }else{
                    cells.push(
                        <div>
                            <div className="cell-background">
            
                            </div>
                        </div>
                    )
                }
                
            }else{
                if(this.state.nextGrid[i].value){
                    const classes = ['cell', this.colors[Math.log2(this.state.nextGrid[i].value)]]
                    if(this.state.nextGrid[i].hasMerged){
                        classes.push('pop')
                    }else if(this.state.nextGrid[i].new){
                        classes.push('phase-in')
                    }
                    cells.push(
                        <div>
                            <div className="cell-background"/>
                            <div>
                                <div className={classes.join(' ')}>
                                    <p className="gameNumber">{this.state.nextGrid[i].value}</p>
                                </div>
                            </div>
                        </div>
                    )
                }else{
                    cells.push(
                        <div>
                            <div className="cell-background">
            
                            </div>
                        </div>
                    )
                }
            }
        }


        return (
            <div className="twogame-container">
                <div className="twogame">
                    {cells}
                </div>
            </div>
        )
    }
}

export default TwoGame;