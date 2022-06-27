function solve(puzzle) {

    for(let row=0; row<9; row++) {
        for(let col=0; col<9; col++) {
           
            if (puzzle[row][col]===0) {
                
                for(let num=1; num<=9; num++) {
                    if(isValidPlacement(puzzle,num,row,col)) {

                        puzzle[row][col]=num

                        if (solve(puzzle)) {
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
// why is solve return puzzles with more than 1 solution?
function testSolveFor1Solution() {

    let puzzle = [
        [9,0,0,5,8,0,1,2,0],
        [8,7,1,0,0,0,0,0,0],
        [0,0,0,0,4,3,0,8,7],   
        [0,1,8,0,9,0,0,0,0],
        [4,6,0,3,2,0,8,0,9],
        [0,0,0,7,0,8,6,0,0],  
        [7,0,0,0,0,0,0,6,0],
        [5,0,0,0,0,0,2,0,0],
        [0,8,0,0,0,0,7,0,4]
    ]

    let result = solve(puzzle)
    console.log(result)
    printPuzzle(puzzle)

}

testSolveFor1Solution()