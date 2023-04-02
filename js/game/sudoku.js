import { puzzles } from "./puzzles.js"

export function solve(puzzle) {

    var isValidPlacement = (puzzle,index,canidate) => {
        var lr = Math.floor(index/9)
        var lc = index%9
        var lb = 3*Math.floor(lr/3) + Math.floor(lc/3)
        for(var i=0; i<81; i++) {
            var r = Math.floor(i/9)
            var c = i%9
            var b = 3*Math.floor(r/3) + Math.floor(c/3)
            if((lr==r || lc==c || lb==b) && canidate==puzzle[i]) return false
        }
        return true
    }

    for(var i=0; i<81; i++) {
        if(puzzle[i]==0) {
            for(var c=1; c<=9; c++) {
                if(isValidPlacement(puzzle,i,c)) {
                    puzzle[i]=c
                    if(solve(puzzle))
                        return true
                    else
                        puzzle[i]=0
                }
            }
            return false
        }
    }

    return true

}

export function generate() {
    var rand = 49
    return puzzles[rand].split('').map(x=>parseInt(x))
}