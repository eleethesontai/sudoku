function generate() {

    let result = false
    let puzzle = undefined

    do {

        puzzle = getEmptyPuzzle()
        result = _generate(puzzle)
        result = solve(puzzle)

        puzzle = _randomize(puzzle)
        result = solve(puzzle)

    } while(!result)

    return puzzle

}
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

let puzzle = generate()
printPuzzle(puzzle)

/* Helper Functions */
function _randomize(puzzle, count=17) {

    

    return puzzle

}
function _generate(puzzle) {
    
    for(row=0;row<9;row++) {
        for(col=0;col<9;col++) {

            if(puzzle[row][col]===0) {

                let random = getRandom(1,9,9)
                for(n=0; n<9; n++) {
                    if(isValid(puzzle,random[n],row,col)) {
                        puzzle[row][col]=random[n]
                        if(_generate(puzzle)) {
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
function getRandom(min, max, count) {
    
    let result = []

    while (result.length<count) {
        random = Math.floor(Math.random() * (max - min + 1) + min)
        if(!result.includes(random)) {
            result.push(random)
        }
    }

    return result

}
function getEmptyPuzzle() {
    return [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
    ]
}