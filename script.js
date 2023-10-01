const choices = document.querySelectorAll('.choice');
const resultMessage = document.getElementById('result');

// Function to generate computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a draw!';
    } else if (
        (userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (userChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (userChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// Function to update the scores and display the result
function updateScore(userChoice, computerChoice) {
    const result = determineWinner(userChoice, computerChoice);
    if (result === 'You win!') {
        userScore++;
    } else if (result === 'Computer wins!') {
        computerScore++;
    }

    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    resultMessage.textContent = result;
}

// Function to handle user's choice
function userChoiceHandler(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultMessage.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}

// Add event listeners to user's choices
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('data-choice');
        userChoiceHandler(userChoice);
    });
});
