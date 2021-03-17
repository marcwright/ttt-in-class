const moves = new Array(9)
// ["X","","","","","","","","O"]
console.log(moves)
const squares = document.querySelectorAll('#board > div')

squares.forEach((square, index) => {
    square.addEventListener('click', (event)=> {
        console.log(event.target, index)
        event.target.innerText = "X"
    }, {once: true})
})

