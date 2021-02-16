const p1 = {
    score: 0,
    button: document.querySelector('#p1PlusOne'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2PlusOne'),
    display: document.querySelector('#p2Display')
}

const reset = document.querySelector('#reset');
const maxScore = document.querySelector('#maxScore')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
    } if (player.score === winningScore) {
        isGameOver = true;
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

reset.addEventListener('click', resetBoard)

maxScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetBoard();
})

function resetBoard() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove('winner', 'loser');
    p2.display.classList.remove('winner', 'loser');
    p1.button.disabled = false;
    p2.button.disabled = false;
}