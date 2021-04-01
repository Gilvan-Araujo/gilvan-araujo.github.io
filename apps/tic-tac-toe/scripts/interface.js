document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert(`[Game Over] \nWinner: Player ${playerTurn + 1} (${symbols[playerTurn]})`)
        }, 10)
    }
    updateSquare(position)
}

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class=${symbol}></div>`

}

function updateSquares() {
    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position]

        square.innerHTML = `<div class='${symbol}'></div>`

    })
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', '']
    playerTurn = 0;
    gameOver = false;

    updateSquares();
}