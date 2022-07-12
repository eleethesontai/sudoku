const GRID_SIZE = 4

function valid(grid,index,canidate) {

    // check column for canidate
    for(let c=index%4; c<16; c+=4) {
        if(grid[c]===canidate) return false
    }

    // check row for canidate
    for(let r=Math.floor(i/4)*4; r<16; r++) {
        if(grid[r]===canidate) return false
    }

    return true

}

// function valid(grid,row,col,canidate) {

//     for(let i=0; i<GRID_SIZE; i++) {
//         if (grid[row][i]===canidate) return false
//         if (grid[i][col]===canidate) return false
//     }

//     boxRow=row-row%2
//     boxCol=col-col%2

//     for(x=boxRow;x<boxRow+2;x++) {
//         for(y=boxCol;y<boxCol+2;y++) {
//             if(grid[x][y]===canidate) return false
//         }
//     }

//     return true

// }

// function solve(grid) {

//     let results = []
//     let stack = []

//     stack.push(grid)

//     return results

// }

let sample = [
    1,0,3,4,
    4,3,2,1,
    2,1,4,3,
    3,4,1,2
]

// let results = solve(sample)
// console.log(results)

for(let i=0; i<16; i++) {
    console.log(Math.floor(i/4)*4)
}