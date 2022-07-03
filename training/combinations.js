function combinations(array) {
    
    if(array.length===0) return [[]]
    
    let current = array.pop()
    let exclude = combinations(array)
    let include = exclude.map(i => [ ...i, current])

    return [ ...exclude, ...include]

}

let results = combinations(['a','b'])

results.forEach(i=>console.log(i))
