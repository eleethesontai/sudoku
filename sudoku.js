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
        let index = current.indexOf(0)

        if(index===-1) {
            results.push([...current])
        }
        else {
            for(let canidate=1; canidate<=size; canidate++) {
                if(valid(current,index,canidate,size)) {
                    current[index]=canidate
                    stack.push([...current])
                    current[index]=0
                }
            }
        }

    }

    return results

}
