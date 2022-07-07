const GRID_SIZE = 4
const stack = []

function solve(grid,row=0,col=0,num=0) {
    if(grid[row][col]===0) {
        if(isValid(grid,row,col,num)) {
            
        }
    }
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
