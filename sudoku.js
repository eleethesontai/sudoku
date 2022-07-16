function getHouses(size) {

    let results = {}
    let root = size**(1/2)
    let scale = size-size1

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

let houses = getHouses(9)
console.log(houses)