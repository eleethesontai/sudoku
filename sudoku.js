test = [
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

function solve(puzzle) {

    for(let row=0; row<9; row++) {
        for(let col=0; col<9; col++) {

            if(puzzle[row][col]===0) {

                for(let num=1; num<=9; num++) {

                    if(isValidPlacement(puzzle, num, row, col)) {

                        puzzle[row][col]=num

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
function isValidPlacement(puzzle, number, row, col) {

    for(let i=0; i<9; i++) {
        if (puzzle[row][i]===number) return false
        if (puzzle[i][col]===number) return false
    }

    boxRow=row-row%3
    boxCol=col-col%3

    for(x=boxRow;x<boxRow+3;x++) {
        for(y=boxCol;y<boxCol+3;y++) {
            if(puzzle[x][y]===number) return false
        }
    }

    return true

}
function printPuzzle(puzzle) {
    process.stdout.write("\n")
    for(row=0;row<9;row++) {
        for(col=0;col<9;col++) {
            process.stdout.write( puzzle[row][col].toString() )
            if (col%3==2 && col!=8) process.stdout.write("|")
        } 
        process.stdout.write("\n")
        if (row%3==2 && row!=8) process.stdout.write("---+---+---\n")
    }
    process.stdout.write("\n")
}

/* main */

// test = [
//     [8,5,6,9,1,7,4,2,3],
//     [2,1,3,8,6,4,5,9,7],
//     [9,4,7,2,3,5,8,1,6],
//     [1,8,5,3,9,6,7,4,2],
//     [7,6,2,1,4,8,3,5,9],
//     [3,9,4,5,7,2,6,8,1],
//     [5,2,1,6,8,3,9,7,4],
//     [4,3,9,7,5,1,2,6,8],
//     [6,7,8,4,2,9,1,3,5]
// ]

let result = solve(test)
console.log(result)
printPuzzle(test)