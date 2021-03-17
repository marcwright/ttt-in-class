const moves = new Array(9)

const squares = document.querySelectorAll('#board > div')
const winMessageDiv = document.querySelector('.win-message')
const board = document.querySelector('#board')
let turnCount = 0
let turn = 'X'

function checkForWin() {
    if (moves[0] === moves[1] && moves[1] === moves[2]) {
        removeClickEventCallback()
        squares[0].classList.add('blink')
        squares[1].classList.add('blink')
        squares[2].classList.add('blink')

        winMessageDiv.innerHTML = `winner in the first row ${turn}`;
    } else {
        console.log('no winner yet')
    }
}

function removeClickEventCallback() {
    // board.classList.remove('rotate')
    squares.forEach(square => {
        (square.innerText !== turn) ? square.innerText = '' : square.classList.add('blink')
        square.removeEventListener('click', handleClickEventCallback)
    })
}

function handleClickEventCallback(event) {
    if (turnCount < 1) {board.classList.add('rotate')}
    moves[event.target.id] = turn
    checkForWin()
    event.target.innerText = turn
    turn = (turnCount % 2 === 0) ? "O" : "X";
    turnCount++
}

squares.forEach((square, index) => {
    square.setAttribute('id', `${index}`)
    square.addEventListener('click', handleClickEventCallback, {once: true})
})

