let f = 0;
function playRound(playerScore, computerScore, i) {
    let playerChoice = prompt("Round " + (i + 1) + ": Enter rock, paper, or scissors: ").toLowerCase();
        
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        console.log("Computer chose: " + computerChoice);
        console.log("You chose: " + playerChoice);
        if (playerChoice === computerChoice) {
            console.log("It's a tie!");
        }
        else if (playerChoice === "rock" && computerChoice === "scissors" ||
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper") {
            console.log("You win this round!");
            playerScore++;
        } else if (playerChoice === "rock" && computerChoice === "paper" ||
            playerChoice === "paper" && computerChoice === "scissors" ||
            playerChoice === "scissors" && computerChoice === "rock") {
            console.log("Computer wins this round!");
            computerScore++;
        } else {
            console.log("Invalid choice! Please enter rock, paper, or scissors.");
            i--;
        }
        console.log("=================================");
        console.log("Score - You: " + playerScore + " | Computer: " + computerScore);
        console.log("=================================");

}
while (f < 1) {
    console.log("=================================");
    console.log("Welcome to Rock, Paper, Scissors!");
    console.log("=================================");
    let round = parseInt(prompt("How many rounds would you like to play? (Max 5): "));
    let playerScore = 0;
    let computerScore = 0;
    if (round > 5){
        console.log("Maximum rounds is 5. Setting rounds to 5.");
        round = 5;
    }
    for (let i = 0; i < round; i++) {
        playRound(playerScore, computerScore, i, round);
    }
    console.log("=================================");
    console.log("Final Score -- You: " + playerScore + " | Computer: " + computerScore);
    if (playerScore > computerScore) {
        console.log("You are winner!");
    } else if (computerScore > playerScore) {
        console.log("Computer is winner!");
    } else {
        console.log("The game is a tie!");
    }

    let playAgain = prompt("Do you want to play again? (yes/no): ").toLowerCase();
    if (playAgain !== "yes") {
        f = 1;
        console.log("Thanks for playing! Goodbye!");
    }

}
