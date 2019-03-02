import React, { Component } from 'react';
import './Sudoku.css';

var calls = 0;

class Board {
    constructor(board){
       this.board = board;
    }

    isValidGroup(group) {
        const nums = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false}
        for(var i = 0; i < 9; i++){
            let value = group[i].value
            if(value !== null){
                if(!nums[value]){
                    nums[value] = true;
                }else{
                    return false;
                }
            }
        }
        return nums;   
    }

    isValidRow(rowNumber) {
        let row = []
        this.board.forEach(value => {
            if(value.row === rowNumber){
                row.push(value)
            }
        })
        return this.isValidGroup(row)
    }

    isValidColumn(columnNumber) {
        let column = []
        this.board.forEach(value => {
            if(value.column === columnNumber){
                column.push(value)
            }
        })
        return this.isValidGroup(column);
    }

    isValidGrid(gridNumber) {
        let grid = []
        this.board.forEach(value => {
            if(value.grid === gridNumber){
                grid.push(value)
            }
        })
        return this.isValidGroup(grid)
    }
    
    isBoardValid() {
        for(var i = 0; i < 9; i++){
            if (!(this.isValidRow(i) && this.isValidColumn(i) && this.isValidGrid(i))){
                return false;
            }
        }
        return true;
    }
    
    getFirstBlank() {
        return (this.board.find((cell) => cell.value === null))
    }

    cellPos(cell) {
        let possNums = [];
        let rowPossNums = this.isValidRow(cell.row);
        let colPossNums = this.isValidColumn(cell.column);
        let gridPossNums = this.isValidGrid(cell.grid);
        for(var i = 1; i < 10; i++){
            if(!(rowPossNums[i] || colPossNums[i] || gridPossNums[i])){
                possNums.push(i)
            }
        }
        cell.cellPos = possNums;
    }

    solve() {
        calls++;
        const cell = this.getFirstBlank()
        if(cell === undefined){
            return true
        }else{
            this.cellPos(cell)
            if(cell.cellPos === []){
                return false
            }else{
                for(var value in cell.cellPos){
                    cell.value = cell.cellPos[value];
                    if(!this.solve()){
                        cell.value = null;
                    }else{
                        return true;
                    }
                }
            }
        }
      
    }
}

class Cell {
    constructor(value, index){
        if(value === ' '){
            this.value = null;
        }else{
            this.value = value;
        }
        this.row = Math.floor(index / 9);
        this.column = index % 9;
        this.grid = Math.floor(index/27)*3 + Math.floor(this.column/3)
        this.cellPos = null;
    }
}


class Sudoku extends Component {
    
    state = {
        solved: false,
        boards: []
    }

    componentDidMount(){
        let sudokuStrings = ["1  85   9  29  53     71   3 6    8    7 6 1 4      56     5         24 8 9 1    ", "                                                                                 "];
        let boards = []
        sudokuStrings.forEach((value, index) => {
            boards.push(this.init(value))
        }) 
        this.setState({boards: boards, solved: true})
        
    }

    display(board) {
        const display = [[], [], [], [], [], [], [], [], []];
        const DOMboard = [];
        board.board.forEach((value) => {
            display[value.grid].push(<div className="Cell">{value.value}</div>)
        })
        for(var i in display){
            DOMboard.push(
                <div className='Grid'>
                    {display[i]}
                </div>
            )
        }
        return DOMboard;
        
    }

    init = (charString) => {
        let strArray = (charString.split(''))
        const grid = strArray.map((value, index) => {
            return(new Cell(parseInt(value, 10) || value, index))
        })
        return new Board(grid)    
    }


    render () {
        const sudoku = []
        this.state.boards.forEach((value,index) => {
            sudoku.push(
                <div className="Board" onClick={() => {
                    value.solve()
                    console.log('fuck')
                    this.setState({solved: true})
                    }
                }>
                    {this.display(value)}
                </div>
            )
        })
        
        
        return (
        <div className="Sudoku">
            {sudoku}
        </div>
        )
    }
}

export default Sudoku; 
