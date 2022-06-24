function fillRandom(min, max, count) {
    
    let result = []

    while (result.length<count) {
        random = Math.floor(Math.random() * (max - min + 1) + min)
        if(!result.includes(random)) {
            result.push(random)
        }
    }

    return result

}

console.log(fillRandom(1,9,9)) 