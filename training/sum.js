let sample = [1,3,5,7,9,11,13,15,17,19,-21]

// let iterations = 0
// function sum(array) {
//     iterations++
//     // base case
//     if(array.length===0) return 0
//     // recursive case
//     else return array.pop()+sum(array)
// }

// console.log(sum(sample.slice()), sample, iterations)

function sum(array, index=0) {
    return array[index] + sum(array, index++)
}

console.log(sum(sample))