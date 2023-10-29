function getComputerChoice() {
    // Generate a random number and use it to return the choice from a list
    let choice = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    return choices[choice];
}

function startRound(comChoice, usrChoice) {
    const legend = {
        "rock" : "scissors",
        "scissors" : "paper", 
        "paper": "rock"
    }

    usrChoice = usrChoice.toLowerCase();

    if (usrChoice === comChoice) {
        return "It's a tie!";
    } else if (legend[comChoice] === usrChoice) {
        return `Computer wins! ${capitalize(comChoice)} beats ${usrChoice}`;
    } else if (legend[usrChoice] === comChoice) {
        return `You win! ${capitalize(usrChoice)} beats ${comChoice}`;
    } else {
        return "Error: Invalid input";
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(startRound(comChoice = "paper", usrChoice = "k"))