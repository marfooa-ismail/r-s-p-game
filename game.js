
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    let resultText = `You chose ${userChoice}, computer chose ${computerChoice}. `;

    if (winner === 'draw') {
        resultText += "It's a draw!";
    } else if (winner === 'user') {
        resultText += "You win!";
        userScore++;
    } else {
        resultText += "Computer wins!";
        computerScore++;
    }

    document.getElementById('result').innerText = resultText;
    document.getElementById('score').innerText = `Score: You ${userScore} - Computer ${computerScore}`;
}

function resetGame() {
    alert(`Final Scores:\nYou: ${userScore}\nComputer: ${computerScore}`);
    userScore = 0;
    computerScore = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('score').innerText = '';
}