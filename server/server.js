const express = require('express')
const app = express()
const sudoku = require('sudoku')

app.listen(3000)

app.get('/puzzle', (req, res) => {
    
    puzzle = sudoku.makepuzzle()
    solution = sudoku.solvepuzzle(puzzle)

    // clean up nulls in puzzle response
    for(i=0; i<81; i++) {
        if (puzzle[i]==null) 
            puzzle[i]=0
    }

    res.send({
        puzzle: puzzle,
        solution: solution
    }) 

})