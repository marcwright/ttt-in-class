const moves = new Array(9)

const squares = document.querySelectorAll('#board > div')
let turnCount = 0
let turn = 'X'

console.log(moves)
function checkForWin() {
    if (moves[0] === moves[1] && moves[1] === moves[2]) {
        alert('winner in the first row ' + turn)
    } else {
        console.log('no winner yet')
    }
}

squares.forEach((square, index) => {
    square.addEventListener('click', (event)=> {
        moves[index] = turn
        checkForWin()

        event.target.innerText = turn

        turn = (turnCount % 2 === 0) ? "O" : "X";

        turnCount++

    }, {once: true})
})

