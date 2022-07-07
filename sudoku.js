const GRID_SIZE = 4
const stack = []

function solve(grid) {

    for(let row=0; row<GRID_SIZE; row++) {
        for(let col=0; col<GRID_SIZE; col++) {

            if(grid[row][col]===0) {

                for(let num=1; num<=GRID_SIZE; num++) {
                    if(isValid(grid,row,col,num)) {

                        grid[row][col]=num
                        if(solve(grid)) {
                            return true
                        }

                        grid[row][col]=0

                    }
                }

                return false

            }

        }
    }

    return true

}
function isValid(grid,row,col,num) {
        
    for(let i=0; i<4; i++) {
        if (grid[row][i]===num) return false
        if (grid[i][col]===num) return false
    }

    boxRow=row-row%2
    boxCol=col-col%2

    for(x=boxRow;x<boxRow+2;x++) {
        for(y=boxCol;y<boxCol+2;y++) {
            if(grid[x][y]===num) return false
        }
    }

    return true

}

let sample = [[1,4,2,3],[3,2,1,4],[0,0,0,0],[0,0,0,0]]
