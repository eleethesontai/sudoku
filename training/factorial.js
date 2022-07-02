// function to calculate the factorial of n

function factorial(number) {
    if (number===1) return 1                    // base case
    else return number * factorial(number-1)    // recurive case
}

console.log(factorial(5),iterations)

// has o(n) complexity?



// recursive case needs to reduce down to base case?