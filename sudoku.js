const GRID_SIZE = 4

function valid(grid,row,col,canidate) {

    for(let i=0; i<GRID_SIZE; i++) {
        if (grid[row][i]===canidate) return false
        if (grid[i][col]===canidate) return false
    }

    boxRow=row-row%2
    boxCol=col-col%2

    for(x=boxRow;x<boxRow+2;x++) {
        for(y=boxCol;y<boxCol+2;y++) {
            if(grid[x][y]===canidate) return false
        }
    }

    return true

}

function solve(grid) {

    let results = []
    let stack = []

    stack.push(grid)

    while(stack.length>0) {

        let current = stack.pop()

    }

    return results

}

let sample = [
    [1,0,3,4],
    [4,3,2,1],
    [2,1,4,3],
    [3,4,1,2]
]

let results = solve(sample)
console.log(results)