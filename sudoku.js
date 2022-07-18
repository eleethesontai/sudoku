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

        if(r===index || c===index || b===index) return true

        if(grid[r]===canidate) return false
        if(grid[c]===canidate) return false
        if(grid[b]===canidate) return false

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

    if(!validate(grid,size)) return []

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

let sample = [
    1,2,3,4,
    4,3,2,1,
    2,1,4,3,
    3,4,1,2
]

console.log(valid(sample,0,2,4))