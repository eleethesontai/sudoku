const GRID_SIZE = 4;
 
function valid(grid,index,canidate) {
 
    // check row
    for(let r=Math.floor(index/GRID_SIZE)*GRID_SIZE; r<Math.floor(index/GRID_SIZE)*GRID_SIZE+GRID_SIZE; r++) {
        if(grid[r]===canidate) return false
    }
    // check col
    for(let c=index%GRID_SIZE; c<GRID_SIZE**2; c+=4) {
        if(grid[c]===canidate) return false
    }
 
    // check box
 
    return true
 
}
function solve(grid) {
 
    let results = []
    let stack = [[...grid]]
 
    while(stack.length>0) {
 
        let current = stack.pop()
        let index = current.indexOf(0)
 
        if(index===-1) {
            results.push([...current])
        } else {
            for(let canidate=1; canidate<=GRID_SIZE; canidate++) {
                if(valid(current,index,canidate)) {
                    current[index] = canidate
                    stack.push([...current])
                    current[index] = 0
                }
            }
        }
 
    }
 
    return results
 
}
 
let sample = [
    4,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0
]
 
let results = solve(sample)
console.log(results)