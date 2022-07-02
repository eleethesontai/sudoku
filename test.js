// script to generate all possible 4x4 sudoku puzzles
// what is the base case for the recursion?

function solve(puzzle) {
    for(let r=0;r<4;r++) {
        for(let c=0;c<4;c++) {
            if(puzzle[r][c]===0) {
                for(let n=1;n<=4;n++) {
                    if(isValid(puzzle,n,r,c,)) {
                        puzzle[r][c]=n
                        if(solve(puzzle)) return true
                        puzzle[r][c]=0
                    }
                }
                return false
            }
        }
    }
    return true
}
function isValid(puzzle,num,row,col) {
    for(let i=0;i<4;i++) {
        
    }
    return true
}

let test = [
    [1,2,3,4],
    [4,3,2,1],
    [2,1,4,3],
    [3,4,1,2]
] 

let result = solve(test)
console.log(result,test.map(r=>r.join('')).join(''))