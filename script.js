const choices = document.querySelectorAll('#rock, #paper, #scissors');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}


//Play game

function play(e) {
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
    console.log(playerChoice, computerChoice, winner)
}

//Event listeners 

choices.forEach(function (choice) {
    choice.addEventListener('click', play);
});
// Getting the computers choice in the function
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'rock'
    } else if (randomNum === 1) {
        return 'paper'
    } else if (randomNum === 2) {
        return 'scissors'
    }
}
// Get Game Winner
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return ('It is a tie');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return ('Player Wins');
    } else {
        return ('Computer Wins');
    }
}


function showWinner(winner, computerChoice) {
    if (winner === 'Player Wins') {
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <img src="" alt="Tie" width="100">
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    } else if (winner === 'Computer Wins') {
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <img src="" alt="Tie" width="100">
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    } else {
        result.innerHTML = `
        <h1 class="text-lose">It's A Draw</h1>
        <img src="" alt="Tie" width="100">
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    }

    if (winner === 'Player Wins') {
        scoreboard.player++;
    } else if (winner === 'Computer Wins') {
        scoreboard.computer++;
    }

    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>`;

    modal.style.display = 'block';
}

function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>`;
}

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}

choices.forEach(function (choice) {
    choice.addEventListener('click', play);
});
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);