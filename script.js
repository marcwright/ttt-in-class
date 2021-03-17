const moves = new Array(9)

const squares = document.querySelectorAll('#board > div')
let turnCount = 0
let turn = 'X'

squares.forEach((square, index) => {
    square.addEventListener('click', (event)=> {
        moves[index] = turn
        console.log(moves)
        event.target.innerText = turn

        turn = (turnCount % 2 === 0) ? "O" : "X";

        turnCount++
    }, {once: true})
})
