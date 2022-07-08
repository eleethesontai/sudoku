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
    [1,2,3,4],
    [4,3,2,1],
    [3,4,1,2],
    [2,1,0,0]  
]

/*
   
    solve([1,2,3,4],[4,3,2,1],[3,4,1,2],[2,1,4,3])
    solve([1,2,3,4],[4,3,2,1],[3,4,1,2],[2,1,4,0])
    solve([1,2,3,4],[4,3,2,1],[3,4,1,2],[2,1,0,0])
    solve([1,2,3,4],[4,3,2,1],[3,4,1,2],[2,0,0,0])
    solve([1,2,3,4],[4,3,2,1],[3,4,1,2],[0,0,0,0])
    solve([1,2,3,4],[4,3,2,1],[3,4,1,0],[0,0,0,0])
    solve([1,2,3,4],[4,3,2,1],[3,0,1,0],[0,0,0,0])

    solve([1,2,3,4],[4,3,2,1],[2,4,1,3],[3,1,4,2])
    solve([1,2,3,4],[4,3,2,1],[2,4,1,3],[3,1,4,0])
    solve([1,2,3,4],[4,3,2,1],[2,4,1,3],[3,1,0,0])
    solve([1,2,3,4],[4,3,2,1],[2,4,1,3],[3,0,0,0])
    solve([1,2,3,4],[4,3,2,1],[2,4,1,3],[0,0,0,0])
    solve([1,2,3,4],[4,3,2,1],[2,4,1,0],[0,0,0,0])
    solve([1,2,3,4],[4,3,2,1],[2,0,1,0],[0,0,0,0])

    solve([1,2,3,4],[4,3,2,1],[0,0,1,0],[0,0,0,0])
    
*/

function solve(grid) {

    let results = []
    let _solve = () => {

        for(let row=0; row<4; row++) {
            for(let col=0; col<4; col++) {
                if(grid[row][col]===0) {
                    for(let num=1; num<=4; num++) {
                        if(isValid(grid,row,col,num)) {
                            grid[row][col]=num

                            grid[row][col]=0
                        }
                    }
                }
            }
        }

        // base case should only get here if no zeros.
        results.push(grid)
    
    }

    _solve()
    return results

}

let results = solve(test)
console.log(results)
