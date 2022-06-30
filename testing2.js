function solve(puzzle) {

    let solutions = []

    for(let row=0;row<9;row++) {
        for(let col=0;col<9;col++) {
            if(puzzle[row][col]===0) {
                for(let num=1;num<=9;num++) {
                    if(isValidPlacement(puzzle,num,row,col)) {

                    }
                }
            }
        }
    }

    return solutions

}
function _solve() {

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
function format(puzzle) {
    let result = 
        puzzle
            .map(m => { 
                return m.join('').replace(/0/g, '.')
            })
            .join('')       
    return result
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

let test = [
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

let result = solve(test,0,1)
console.log(result)