const GRID_SIZE = 9

function isValidPlacement(grid,index,canidate) {

    let row = Math.floor(index/GRID_SIZE) 
    let col = index%GRID_SIZE
    let root = GRID_SIZE**(1/2)
    let scale = GRID_SIZE-root
    let box = (col-col%root) + (row-row%root) * GRID_SIZE

    let results = new Set()

    for(let i=0; i<GRID_SIZE; i++) {
        results.add(row*GRID_SIZE+i)
        results.add(col+i*GRID_SIZE)
        results.add(box+i+Math.floor(i/root)*scale)
    }

    results.delete(index)

    for(let result of results) {
        if(grid[result]===canidate) return false
    }

    return true

}
function getSolutions(grid) {

    let results = []
    let stack = [[...grid]]

    while(stack.length>0) {

        let current = stack.pop()
        let index = current.indexOf(0)

        if(index===-1) {
            results.push([...current])
        }
        else {
            for(let canidate=1; canidate<=GRID_SIZE; canidate++) {
                if(isValidPlacement(current,index,canidate,GRID_SIZE)) {
                    current[index]=canidate
                    stack.push([...current])
                    current[index]=0
                }
            }
        }

    }

    return results

}
function getRandomSet(size,min,max) {

    let results = new Set()

    while(results.size<size) {
        results.add(Math.floor(Math.random() * (max - min + 1) + min))
    }

    return results

}
function getRandomPuzzle() {
    
    let stack = [Array.from(Array(GRID_SIZE**2).keys()).fill(0)]

    while(stack.length>0) {

        let current = stack.pop()
        let index = current.indexOf(0)

        if(index===-1) {
            return current
        }
        else {
            let canidates = getRandomSet(GRID_SIZE,1,GRID_SIZE)
            for(let canidate of canidates) {
                if(isValidPlacement(current,index,canidate,GRID_SIZE)) {
                    current[index]=canidate
                    stack.push([...current])
                    current[index]=0                    
                }
            }
        }

    } 

}
function removeRandomClues(grid,count) {
    
    let canidates = getRandomSet(count,0,GRID_SIZE**2)

    for(let canidate of canidates) {
        grid[canidate]=0
    }

    return grid

}

function generate(blank) {
    
    let puzzle = getRandomPuzzle()

    while(1===1) {
        let current = removeRandomClues([...puzzle],blank)
        let solutions = getSolutions(current)
        if(solutions.length===1) {
            return {
                puzzle: current,
                solution: solutions
            }
        }
    }

}

module.exports.generate = generate