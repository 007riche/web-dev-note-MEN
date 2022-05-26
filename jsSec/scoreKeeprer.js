const p1ScoreDisplay = document.querySelector('#p1ScoreDisplay');
const p2ScoreDisplay = document.querySelector('#p2ScoreDisplay');
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector('#reset');
const winningScoreButton = document.querySelector('#winningScore');


let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
winningScoreButton.value = winningScore;
let isGameOver = false;


p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1ScoreDisplay.classList.add('winner');
            p2ScoreDisplay.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1ScoreDisplay.textContent = p1Score;
    }
});


p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2ScoreDisplay.classList.add('winner');
            p1ScoreDisplay.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2ScoreDisplay.textContent = p2Score;
    }
});

function resetFunc() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p1ScoreDisplay.classList.remove('winner', 'loser');
    p2ScoreDisplay.classList.remove('loser', 'winner');
    p1Button.disabled = false;
    p2Button.disabled = false;
}

resetButton.addEventListener('click', resetFunc);

winningScoreButton.addEventListener('change', () => {
    winningScore = parseInt(winningScoreButton.value);
    // alert(winningScore);
    resetFunc();
})