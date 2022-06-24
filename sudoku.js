function solve(puzzle) {

    for(r=0;r<9;r++) {
        for(c=0;c<9;c++) {
            
            if(puzzle[r][c]===0) {

                for(n=1;n<9;n++) {
                    if(isValid(puzzle,n,r,c)) {
                        
                        puzzle[r][c]=n
                        if(solve(puzzle)) {
                            return true
                        } else {
                            puzzle[r][c]=0 
                        }

                    }
                }

                return false

            }

        }
    }

    return true

}

function generate() {

    do {
        let puzzle = getEmptyPuzzle()
        try {
            let result = _generate(puzzle)
        } catch {
            return puzzle
        }
    } while (1==1)

}

let puzzle = generate()
printPuzzle(puzzle)

/* Helper Functions */

function _generate(puzzle) {
    
    for(row=0;row<9;row++) {
        for(col=0;col<9;col++) {

            if(puzzle[row][col]===0) {

                let random = random9()
                random.forEach(n => {
                    if(isValid(puzzle,n,row,col)) {
                        puzzle[row][col] = n
                        if(_generate(puzzle)) {
                            return true
                        } else {
                            puzzle[row][col] = 0
                        }
                    }
                })

                return false

            }

        }
    }

    return true

}
function _randomize(n) {  
}

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
function random9() {

    result = []

    while (result.length<9) {
        r = Math.floor(Math.random()*9+1)
        if(!result.includes(r)) {
            result.push(r)
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