function solve(puzzle) {

    for(let row=0; row<9; row++) {
        for(let col=0; col<9; col++) {
            if (puzzle[row][col]===0) {
                for(let num=1; num<=9; num++) {
                    if(isValidPlacement(puzzle,num,row,col)) {
                        puzzle[row][col]=num
                        if(solve(puzzle)) {
                            return true
                        } else {
                            puzzle[row][col]=0
                        }
                    }
                    return false
                }
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
function format(puzzle) {
    let result = 
        puzzle
            .map(m => { 
                return m.join('').replace(/0/g, '.')
            })
            .join('')       
    return result
}

// this is the puzzle with 66 sols
// let puzzle = [
//     [9,0,0,5,8,0,1,2,0],
//     [8,7,1,0,0,0,0,0,0],
//     [0,0,0,0,4,3,0,8,7],   
//     [0,1,8,0,9,0,0,0,0],
//     [4,6,0,3,2,0,8,0,9],
//     [0,0,0,7,0,8,6,0,0],  
//     [7,0,0,0,0,0,0,6,0],
//     [5,0,0,0,0,0,2,0,0],
//     [0,8,0,0,0,0,7,0,4]
// ]

let puzzle = [
    [3,0,0,2,0,0,0,0,0],
    [0,0,0,1,0,7,0,0,0],
    [7,0,6,0,3,0,5,0,0],
    [0,7,0,0,0,9,0,8,0],
    [9,0,0,0,2,0,0,0,4],
    [0,1,0,8,0,0,0,5,0],
    [0,0,9,0,4,0,3,0,1],
    [0,0,0,7,0,2,0,0,0],
    [0,0,0,0,0,8,0,0,6]   
]

let result = solve(puzzle)
let formatted = format(puzzle)
console.log('\n'+result, formatted)