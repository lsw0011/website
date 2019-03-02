// const original = `  6     4   86 73  4 35   217 4  6   9     8   8  6 172   81 4  67 43   8     3  `
// const str = `123456789456789123789123456234567891567891234891234567345678912678912345912345678`

// var calls = 0

// class Cell {
//     constructor(value, index){
//         if(value === ' '){
//             this.value = null;`                                                                                 `
//         }else{
//             this.value = value;
//         }
//         this.row = Math.floor(index / 9);
//         this.column = index % 9;
//         this.grid = Math.floor(index/27)*3 + Math.floor(this.column/3)
//         this.cellPos = null;
//     }
// }

// class Board {
//     constructor(board){
//        this.board = board;
//     }

//     isValidGroup(group) {
//         const nums = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false}
//         for(var i = 0; i < 9; i++){
//             let value = group[i].value
//             if(value !== null){
//                 if(!nums[value]){
//                     nums[value] = true;
//                 }else{
//                     return false;
//                 }
//             }
//         }
//         return nums;   
//     }

//     isValidRow(rowNumber) {
//         let row = []
//         this.board.forEach(value => {
//             if(value.row === rowNumber){
//                 row.push(value)
//             }
//         })
//         return this.isValidGroup(row)
//     }

//     isValidColumn(columnNumber) {
//         let column = []
//         this.board.forEach(value => {
//             if(value.column === columnNumber){
//                 column.push(value)
//             }
//         })
//         return this.isValidGroup(column);
//     }

//     isValidGrid(gridNumber) {
//         let grid = []
//         this.board.forEach(value => {
//             if(value.grid === gridNumber){
//                 grid.push(value)
//             }
//         })
//         return this.isValidGroup(grid)
//     }
    
//     isBoardValid() {
//         for(var i = 0; i < 9; i++){
//             if (!(this.isValidRow(i) && this.isValidColumn(i) && this.isValidGrid(i))){
//                 return false;
//             }
//         }
//         return true;
//     }
    
//     getFirstBlank() {
//         return (this.board.find((cell) => cell.value === null))
//     }

//     cellPos(cell) {
//         let possNums = [];
//         let rowPossNums = this.isValidRow(cell.row);
//         let colPossNums = this.isValidColumn(cell.column);
//         let gridPossNums = this.isValidGrid(cell.grid);
//         for(var i = 1; i < 10; i++){
//             if(!(rowPossNums[i] || colPossNums[i] || gridPossNums[i])){
//                 possNums.push(i)
//             }
//         }
//         cell.cellPos = possNums;
//     }
//     solve(gridNumber) {
//         calls++;
//         const cell = this.getFirstBlank()
//         if(cell === undefined){
//             return true
//         }else{
//             this.cellPos(cell)
//             if(cell.cellPos === []){
//                 return false;
//             }else{
//                 for(var value in cell.cellPos){
//                     cell.value = cell.cellPos[value];
//                     if(!this.solve(cell.gridNumber)){
//                         cell.value = null;
//                     }else{
//                         return true;
//                     }
//                 }
//             }
//         }
//     }
// }

// const init = () => {
//     let strArray = (original.split(''))
//     const grid = strArray.map((value, index) => {
//         return(new Cell(parseInt(value, 10) || value, index))
//     })
//     const board = new Board(grid)
//     board.solve()
    
// }

let x = "24  6        3 64     159 8 9       436   1     37     981 7 3 5    6   7       "
console.log(x.split('').length)