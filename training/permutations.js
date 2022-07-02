function permutations(elements) {

    if(elements.length === 0) return [[]]

    let result = []

    let current = elements.pop()
    let recurse = permutations(elements)

    recurse.forEach(item => {
        for(let i=0;i<=item.length;i++) {
            result.push([...item.slice(0,i), current, ...item.slice(i)])
        }
    })

    return result

}

permutations(['a','b','c'])
    .map(r => console.log(r))