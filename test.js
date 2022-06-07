_puzzle = [
    //[5,3,4,6,7,8,9,1,2],
    [5,0,0,0,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
]

function solve(puzzle) {

    for(r=0;r<9;r++) {
        for(c=0;c<9;c++) {
            
            if(puzzle[r][c]==0) {

                for(n=1;n<9;n++) {
                    if(isValid(puzzle,n,r,c)) {
                        puzzle[r][c]=n
                        if(solve(puzzle)) {
                            return true
                        } else{
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

function isValid(p,n,r,c) {

    inRow = false
    inCol = false
    inBox = false

    for(i=0; i<9; i++) {
        if(p[r][i]==n) {inRow=true}
        if(p[i][c]==n) {inCol=true}
    }

    boxRow=r-r%3
    boxCol=c-c%3

    for(x=boxRow;x<boxRow+3;x++) {
        for(y=boxCol;y<boxCol+3;y++) {
            if(p[x][y]==n) {inBox=true}
        }
    }

    return !inRow && !inCol && !inBox

}

console.log(solve(_puzzle))
console.log(_puzzle)