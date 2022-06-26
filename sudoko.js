function solve(puzzle) {
    let puzzle1 = puzzle.map(r => {return r.slice(0)})
    for(r=0;r<9;r++) {
        for(c=0;c<9;c++) {
            if(puzzle1[r][c]===0) {
                for(n=1;n<9;n++) {
                    if(isValid(puzzle1,n,r,c)) {
                        puzzle1[r][c]=n
                        if(solve(puzzle1)) {
                            return true
                        } else {
                            puzzle1[r][c]=0 
                        }
                    }
                }
                return false
            }
        }
    }
    return true
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

printPuzzle(result, puzzle)

function isValid(p,n,r,c) {

    inRow = false
    inCol = false
    inBox = false

    for(i=0; i<9; i++) {
        if(p[r][i]===n) {inRow=true}
        if(p[i][c]===n) {inCol=true}
    }

    boxRow=r-r%3
    boxCol=c-c%3

    for(x=boxRow;x<boxRow+3;x++) {
        for(y=boxCol;y<boxCol+3;y++) {
            if(p[x][y]===n) {inBox=true}
        }
    }

    return !inRow && !inCol && !inBox

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