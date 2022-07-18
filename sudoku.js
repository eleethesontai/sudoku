function valid(grid,index,canidate,size) {

    let row = Math.floor(index/size) 
    let col = index%size
    let root = size**(1/2)
    let scale = size-root
    let box = (col-col%root) + (row-row%root) * size

    let results = new Set()

    for(let i=0; i<size; i++) {
        results.add(row*size+i)
        results.add(col+i*size)
        results.add(box+i+Math.floor(i/root)*scale)
    }

    results.delete(index)

    for(let result of results) {
        if(grid[result]===canidate) return false
    }

    return true

}

function generate(size) {

    let getCanidates = () => {
        let results = new Set
        while(results.size<size) 
            results.add(Math.floor(Math.random() * size + 1))
        return results
    }
    let stack = [Array.from(Array(size**2).keys()).fill(0)]

    while(stack.length>0) {

        let current = stack.pop()
        let index = current.indexOf(0)

        if(index===-1) {
            return current
        }
        else {
            let canidates = getCanidates(size)
            for(let canidate of canidates) {
                if(valid(current,index,canidate,size)) {
                    current[index]=canidate
                    stack.push([...current])
                    current[index]=0                    
                }
            }
        }

    }

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

/*

    0,   1,  2,  3,
    4,   5,  6,  7,
    8,   9, 10, 11,
    12, 13, 14, 15

*/

let sample = [
    1,2,3,4,
    4,3,2,1,
    2,1,4,3,
    3,4,1,2
]

console.log(valid(sample,10,2,4))