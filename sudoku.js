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

module.exports = {
    solve: solve
}