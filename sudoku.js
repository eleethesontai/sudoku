function valid(grid,index,canidate) {

    let houses = {
        0: [0,1,2,3,0,4,8,12,0,1,4,5],
        1: [0,1,2,3,1,5,9,13,0,1,4,5],
        2: [0,1,2,3,2,6,10,14,2,3,6,7],
        3: [0,1,2,3,3,7,11,15,2,3,6,7],
        4: [4,5,6,7,0,4,8,12,0,1,4,5],
        5: [4,5,6,7,1,5,9,13,0,1,4,5],
        6: [4,5,6,7,2,6,10,14,2,3,6,7],
        7: [4,5,6,7,3,7,11,15,2,3,6,7],
        8: [8,9,10,11,0,4,8,12,8,9,12,13],
        9: [8,9,10,11,1,5,9,13,8,9,12,13],
        10: [8,9,10,11,2,6,10,14,10,11,14,15],
        11: [8,9,10,11,3,7,11,15,10,11,14,15],
        12: [12,13,14,15,0,4,8,12,8,9,12,13],
        13: [12,13,14,15,1,5,9,13,8,9,12,13],
        14: [12,13,14,15,2,6,10,14,10,11,14,15],
        15: [12,13,14,15,3,7,11,15,10,11,14,15]
    }

    return !houses[index].map(e=>sample[e]).some(e=>e===canidate)

}

function solve(grid) {

    let results = []
    let stack = [grid]

    while(stack.length>0) {

        let current = stack.pop()
        let index = current.indexOf(0)

        if(index===-1) {
            results.push(current)
        } else {
            for(let canidate=1; canidate<=4; canidate++) {
                if(valid(current,index,canidate)) {
                    current[index] = canidate
                    stack.push(current) 
                    current[index] = 0
                }
            }
        }

    }

    return results

}

let sample = [
    1,2,3,4,
    4,3,2,1,
    3,4,0,2,
    2,1,4,3
]

let results = solve(sample) 
console.log(results)