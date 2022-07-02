function fibbonacci(term) {
    if (term===1 || term===2) return 1
    else return fibbonacci(term-1) + fibbonacci(term-2)
}

console.log(fibbonacci(13))