const GRID_SIZE = 4

function solve(grid) {

    let isValid =(grid,row,col,num) => {
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

}

let result = solve([
    [1,2,3,4],
    [4,3,2,1],
    [0,0,0,0],
    [0,0,0,0]
])

/*

1234
4321
2100
0000

*/

/* 

    1,
    2,
    3,
    4,
    4,
    3,
    2,
    1,
    0,
        2,
            1,

            4
        3,
    0,


*/
