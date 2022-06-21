function _generate(puzzle) {
    
    for(row=0;row<9;row++) {
        for(col=0;col<9;col++) {

            if(puzzle[row][col]===0) {

                let random = r9()
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

function isValid(puzzle,number,row,col) {

    let inRow = false
    let inCol = false
    let inBox = false

    for(i=0; i<9; i++) {
        if(puzzle[row][i] === number) {inRow=true}
        if(puzzle[i][col] === number) {inCol=true}
    }

    let boxRow = row-row%3
    let boxCol = col-col%3

    for(r=boxRow;r<boxRow+3;r++) {
        for(c=boxCol;c<boxCol+3;c++) {
            if(puzzle[r][c] === number ) {inBox=true}
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
function r9() {

    let result = []

    while (result.length<9) {
        r = Math.floor(Math.random()*9+1)
        if(!result.includes(r)) {
            result.push(r)
        }
    }

    return result

}
function emptyPuzzle() {
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

function generate() {
    do {
        let puzzle = emptyPuzzle()
        try {
            let result = _generate(puzzle)
        } catch {
            return puzzle
        }
    } while (1==1)
}

let puzzle = generate()
printPuzzle(puzzle)

//so it works when it fails and not when it succeeds and it fails when it succeeds? #wtf