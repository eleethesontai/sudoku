function solve(puzzle) {

    for(let row=0;row<4;row++) {
        for(let col=0;col<=4;col++) {

            if(puzzle[row][col]===0) {
                for(let num=1;num<=4;num++) {  
                    if(isValid(puzzle,num,row,col)) {

                        puzzle[row][col]=num

                        if(solve(puzzle)==1) {
                            return 1 // wtf over?
                        } else {
                            puzzle[row][col]=num
                        }

                    }
                }
            }

        }
    }

    return 1

}

function isValid(puzzle,num,row,col) {
    
    for(let i=0; i<4; i++) {
        if (puzzle[row][i]===num) return false
        if (puzzle[i][col]===num) return false
    }

    boxRow=row-row%2
    boxCol=col-col%2

    for(x=boxRow;x<boxRow+2;x++) {
        for(y=boxCol;y<boxCol+2;y++) {
            if(puzzle[x][y]===num) return false
        }
    }

    return true

}

let test = [
    [1,0,0,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
]
console.log(solve(test))

