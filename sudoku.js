const GRID_SIZE = 4

function solve(grid) {

    let enumerateGrid = (callback) => {
        for(let x=0;x<GRID_SIZE;x++) {
            for(let y=0;y<GRID_SIZE;y++) {
                callback(x,y)
            }
        }
    }
    let enumerateCanidates = (callback) => {
        for(let i=1;i<=GRID_SIZE;i++) {
            callback(i)
        }
    }

    enumerateGrid((row,col) => {
        if(grid[row][col]===0) {
            enumerateCanidates(canidate => {
                if(isValid(grid,row,col,canidate)) {

                    grid[row][col] = canidate
                    
                    if(solve(grid)) {
                        return true
                    }

                    grid[row][col] = 0

                }
            })
            return false
        }
    })

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

let test = [
    [1,4,2,3],
    [3,2,0,0],
    [0,0,3,0],
    [0,0,0,0] 
]

let results = solve(test)
console.log(results)
console.table(test)