function solve(puzzle) {

    for(row=0;row<9;row++) {
        for(col=0;col<9;col++) {
            
            if(puzzle[row][col]===0) {

                for(number=1;number<9;number++) {
                    if(isValid(puzzle,number,row,col)) {
                        
                        puzzle[row][col]=number
                        if(solve(puzzle)) {
                            return true
                        } else {
                            puzzle[row][col]=0 
                        }

                    }
                }

                return false

            }

        }
    }

    return true

}
function isValid(puzzle,number,row,col) {

    if (number > 9) return false;

    inRow = false
    inCol = false
    inBox = false

    for(i=0; i<9; i++) {
        if(puzzle[row][i]===number) {inRow=true}
        if(puzzle[i][col]===number) {inCol=true}
    }

    boxRow=row-row%3
    boxCol=col-col%3

    for(x=boxRow;x<boxRow+3;x++) {
        for(y=boxCol;y<boxCol+3;y++) {
            if(puzzle[x][y]===number) {inBox=true}
        }
    }

    return !inRow && !inCol && !inBox

}

let puzzle = [
    [8,0,6,0,1,0,0,0,0],
    [0,0,3,0,6,4,0,9,0],
    [9,0,0,0,0,0,8,1,6],
    [0,8,0,3,9,6,0,0,0],
    [7,0,2,0,4,0,3,0,9],
    [0,0,0,5,7,2,0,8,0],
    [5,2,1,0,0,0,0,0,4],
    [0,3,0,7,5,0,2,0,0],
    [0,0,0,0,2,0,1,0,5]
]

let result = solve(puzzle)

console.log(result)
console.log(puzzle)