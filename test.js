// script to test the 50 puzzles in the pe96 to make sure the solve method is working

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

puzzles.forEach(puzzle => {
    console.log(sudoku.solve(puzzle))
})