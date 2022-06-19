const fs = require("fs")
const sudoku = require("./sudoku")

const data = fs.readFileSync("p096_sudoku.txt", "utf8");
const results = data.match(/Grid \d{2}\n((\d{9}\n?)*)/gm)

const puzzles = results.map(result => {
    return result
        .match(/\d{9}/g)
        .map(x => {
            return x.split('')
        })
})

console.log(puzzles[0])