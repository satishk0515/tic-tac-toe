
const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    checkForWinOrDraw();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWinOrDraw() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            showWinner(`Player ${currentPlayer} wins!`);
            return;
        }
    }

    if (!board.includes('')) {
        gameActive = false;
        showWinner("It's a draw!");
    }
}

function showWinner(message) {
    const winnerCard = document.getElementById('winnerCard');
    const winnerText = document.getElementById('winnerText');
    winnerText.textContent = message;
    winnerCard.style.display = 'block'; // Show the winner card
    const winnerVideo = document.getElementById('winnerVideo');
    winnerVideo.play(); // Play the video
}

function resetGame() {
    board.fill('');
    gameActive = true;
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
    document.getElementById('winnerCard').style.display = 'none';
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.getElementById('resetBtn').addEventListener('click', resetGame);