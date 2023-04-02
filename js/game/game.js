import { solve, generate } from "./sudoku.js"

var current

function serialize() {
    localStorage.setItem('current', JSON.stringify(current))
}
function deserialize() {
    current = JSON.parse(localStorage.getItem('current'))
}

function newGame() {

    var puzzle = generate()
    var solution = puzzle.slice()
    solve(solution)

    game = {
        cells: [],
        undo: []
    }

    for(let i=0; i<81; i++) {

        var row = Math.floor(i/9)
        var col = i%9

        game.cells[i] = {
            row: row,
            col: col,
            solution: solution[i],
            is_given: puzzle[i]!=0,
            is_active: false,
            value: puzzle[i],
            canidates: [false,false,false,false,false,false,false,false,false]
        }

    }

    current = game

}
function renderBoard() {

    var board = document.querySelector('#board')
    board.innerHTML = ''

    current.cells
        .forEach((xv, xi) => { 

            var cell = document.createElement('div')
            cell.classList = 'cell'
        
            if(xv.is_active) cell.classList.add('active')
            if(xv.is_given) cell.classList.add('given')

            if(xv.value!=0 & xv.value!=xv.solution) cell.classList.add('wrong')

            if(xv.row==2 || xv.row ==5) cell.classList.add('border1')
            if(xv.col==2 || xv.col ==5) cell.classList.add('border2')

            cell.addEventListener('click', e => {onCellClick(xv, e.shiftKey)})

            var value = document.createElement('div')
            value.classList = 'value'
            value.innerText = xv.value==0 ? '' : xv.value
        
            var canidates = document.createElement('div')
            canidates.classList = 'canidates'

            xv.canidates
                .forEach((yv, yi) => {
                    var canidate = document.createElement('div')
                    canidate.classList = 'canidate'
                    canidate.innerText = yi+1
                    if(yv) canidate.classList.add('selected')
                    canidates.append(canidate)
                })
        
            cell.append(value, canidates)
            board.append(cell)

        })

}

function active() {
    return current.cells.filter(x=>x.is_active)
}
function foo(callback, rollback=false) {
    callback()
    renderBoard()
}

function onCellClick(cell, shift) {
    foo(() => {
        if(!cell.is_given) {
            if(shift) {
                cell.is_active = !cell.is_active
            } 
            else {
                var flag = !cell.is_active
                active().forEach(x => x.is_active=false)
                cell.is_active = flag
            }
        }
    })
}
function onKeypadClick(digit,shift) {
    foo(() => {
        active()
            .forEach(cell => {
                if(shift) {
                    cell.value = digit
                    cell.canidates = [false,false,false,false,false,false,false,false,false]
                } 
                else {
                    cell.value = 0
                    cell.canidates[digit-1] = !cell.canidates[digit-1]
                }
            })
    },true)
}
function onEraseButtonClick() {
    foo(() => {
        active()
            .forEach(cell => {
               cell.value = 0
               cell.canidates = [false,false,false,false,false,false,false,false,false]
            })
    }, true)
}
function onUndoButtonClick() {}
function onNotesButtonClick() {}
function onNewButtonClick() {}

window
    .addEventListener('keypress', e => {

        if(e.code=='Digit1') onKeypadClick(1,e.shiftKey)
        if(e.code=='Digit2') onKeypadClick(2,e.shiftKey)
        if(e.code=='Digit3') onKeypadClick(3,e.shiftKey)
        if(e.code=='Digit4') onKeypadClick(4,e.shiftKey)
        if(e.code=='Digit5') onKeypadClick(5,e.shiftKey)
        if(e.code=='Digit6') onKeypadClick(6,e.shiftKey)
        if(e.code=='Digit7') onKeypadClick(7,e.shiftKey)
        if(e.code=='Digit8') onKeypadClick(8,e.shiftKey)
        if(e.code=='Digit9') onKeypadClick(9,e.shiftKey)

        if(e.code=='KeyE' && e.shiftKey) onEraseButtonClick()
        if(e.code=='KeyU' && e.shiftKey) onUndoButtonClick()

    })

console.clear()
newGame()
renderBoard()