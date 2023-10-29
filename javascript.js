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

    // 0 means tie
    // 1 means user wins
    // -1 means computer wins 
    if (usrChoice === comChoice) {
        return 0;
    } else if (legend[comChoice] === usrChoice) {
        return -1;
    } else if (legend[usrChoice] === comChoice) {
        return 1;
    } else {
        throw new Error("Invalid input");
    }
}

function game() {

    let usrScore = 0;
    let comScore = 0;

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {

        let comChoice = getComputerChoice();
        let usrChoice = prompt("Rock, paper or scissors?", "rock");
        let result;
        try {
            result = startRound(comChoice, usrChoice);
        } catch (error) {
            console.log(error);
            return;
        } 

        if (result === 0) {
            console.log("It's a tie!");
        } else if (result < 0) {
            console.log(`Computer wins! ${capitalize(comChoice)} beats ${usrChoice}`)
            console.log(`You: ${usrScore}, Computer: ${++comScore}`);
        } else if (result > 0) {
            console.log(`You win! ${capitalize(usrChoice)} beats ${comChoice}`)
            console.log(`You: ${++usrScore}, Computer: ${comScore}`);
        }   
    }

    // Declare the final winner 
    if (usrScore > comScore) {
        console.log(`Congrats! You beat the computer ${usrScore} to ${comScore}`);
    } else if (comScore > usrScore) {
        console.log(`Uh-oh! You lost to the computer ${comScore} to ${usrScore}`);
    } else if (usrScore === comScore) {
        console.log(`You tied! Play again?`);
    }
    
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

game();

