function getHouses(size) {

    let results = {}
    let root = size**(1/2)
    let scale = size-root

    for(let x=0; x<size**2; x++) {
        
        results[x] = new Set()

        let row = Math.floor(x/size)
        let col = x%size
        let box = (col-col%root)+(row-row%root)*size

        for(let y=0; y<size; y++) {
            results[x].add(row*size+y)
            results[x].add(col+y*size)
            results[x].add(box+y+Math.floor(y/root)*scale)
        }

    }

    return results

}

let houses = getHouses(4)

function valid(grid,index,canidate) {

    for(const house of houses[index]) {
        if(grid[house]===canidate) return false
    }

    return true

}

let sample = [
    1,2,3,4,
    4,3,2,1,
    0,1,0,0,
    0,0,0,0
]
