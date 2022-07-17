function valid(grid,index,canidate,size) {

    let root = size**(1/2)
    let scale = size-root
    let row = Math.floor(index/size)
    let col = index%size
    let box = (col-col%root)+(row-row%root)*size

    for(let cell=0; cell<size; cell++) {

        let r = row*size+cell
        let c = col+cell*size
        let b = box+cell+Math.floor(cell/root)*scale

        if(grid[r]===canidate) return false
        if(grid[c]===canidate) return false
        if(grid[b]===canidate) return false

    }

    return true

}

function solve(grid,size) {

    let results = []
    let stack = [[...grid]]

    while(stack.length>0) {
        let current = stack.pop()
    }

    return results

}

let test = [
    2,2,3,4,
    4,3,2,1,
    2,1,4,3,
    3,4,1,2
]

let results = solve(test,4)
console.log(results)