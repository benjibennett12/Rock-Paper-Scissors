const choices = document.querySelectorAll('#rock, #paper, #scissors');
const score = document.getElementById('score');
const result = document.querySelector('.modal-text');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const subheader = document.querySelector('.sub-header');
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
    console.log(playerChoice, computerChoice, winner);
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
        return ('It is a tie!');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return ('Player Wins!');
    } else {
        return ('Computer Wins!');
    }
}


function showWinner(winner, computerChoice) {
    subheader.innerHTML = `${winner}`;

    if (winner === 'Player Wins!') {
        scoreboard.player++;
    } else if (winner === 'Computer Wins!') {
        scoreboard.computer++;
    }

    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>  
    <p>Computer: ${scoreboard.computer}</p>`;

    if (scoreboard.player === 3) {
        result.innerHTML = `<h1 class="text-win">You Win</h1>`;
        resultGif.src = 'image/113d8537c3a6e81820588da798ad73ccbc678365.gif';
        modal.style.display = 'block';
    } else if (scoreboard.computer === 3) {
        result.innerHTML = `<h1 class="text-win">Computer Win</h1>`;
        resultGif.src = 'image/copy_AB87C0CA-0C92-4323-97AC-27DFD188CD76.gif';;
        modal.style.display = 'block';
    }

}

function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>`;
    subheader.innerHTML = `Make Your Selection`;
    modal.style.display = 'none';


}

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
        restartGame();
    }
}


window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);