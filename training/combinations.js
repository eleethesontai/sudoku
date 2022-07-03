// version impleneted from tutorial
// function combinations(array) {
    
//     if(array.length===0) return [[]]
    
//     let current = array.pop()
//     let exclude = combinations(array)
//     let include = exclude.map(i => [ ...i, current])

//     return [ ...exclude, ...include]

// }

// let results = combinations(['a','b'])

// results.forEach(i=>console.log(i))


// matrix version

function combinations(elements) {

    let results = []

    for(let i=0;i<Math.pow(2,elements.length);i++) {
        results.push(
            
        )
    }

    return results

}

let results = combinations(['a','b','c'])
results.map(r => console.log(r))