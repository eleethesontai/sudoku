const express = require('express')
const app = express()
const sudoku = require('sudoku')

app.listen(3000)
app.set('view engine', 'ejs')

app.get('/puzzle', (req, res) => {
    res.send(sudoku.makepuzzle())
})