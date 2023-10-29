function getComputerChoice() {
    // Generate a random number and use it to return the choice from a list
    let choice = Math.floor(Math.random() * 3);
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[choice];
}

//& console.log("Computer choice: " + getComputerChoice());