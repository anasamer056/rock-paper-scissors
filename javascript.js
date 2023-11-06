const userChoiceButton = document.querySelectorAll(".input")
const userButtonsContainer = document.querySelector(".buttons-container");
const resultsNodeList = document.querySelectorAll(".results-container > *")
const computerChoice = document.querySelector(".computer-choice")
const roundResult = document.querySelector(".round-result");
const counter = document.querySelector(".counter");
const resetButton = document.querySelector(".reset-button");
const finalResult = document.querySelector(".final-result");

let usrScore = 0;
let comScore = 0;

userButtonsContainer.addEventListener("click", (event)=>{
    
    let selectedButton = event.target;
    if (selectedButton.tagName != "BUTTON") return;
    if (selectedButton.className == "reset-button") return;

    game(userChoice = selectedButton.value);
    getRoundWinner()
});

resetButton.addEventListener("click", ()=> {
    [usrScore, comScore] = [0,0];
    resultsNodeList.forEach((elem)=> elem.textContent = "") 


});

function getRoundWinner(){
    if (usrScore < 3 && comScore < 3) return;

    // 1 means user wins
    // -1 means computer wins 
    if (usrScore > comScore){
        finalResult.textContent = "Congrats! You win!"
    }
    else if (comScore > usrScore){
        finalResult.textContent = "Uh-oh... Computer won that one."
    };

    [usrScore, comScore] = [0,0];
}

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

function game(usrChoice) {
    resultsNodeList.forEach((elem)=> elem.textContent = "")

        let comChoice = getComputerChoice();
        computerChoice.textContent = "Computer chose: " + capitalize(comChoice);
        let result;
        try {
            result = startRound(comChoice, usrChoice);
        } catch (error) {
            console.log(error);
            return;
        } 

        if (result === 0) {
            roundResult.textContent = "It's a tie";
            counter.textContent = `You: ${usrScore}, Computer: ${comScore}`;
        } else if (result < 0) {
            roundResult.textContent = `Computer wins! ${capitalize(comChoice)} beats ${usrChoice}`;
            counter.textContent = `You: ${usrScore}, Computer: ${++comScore}`;
        } else if (result > 0) {
            roundResult.textContent = `You win! ${capitalize(usrChoice)} beats ${comChoice}`;
            counter.textContent = `You: ${++usrScore}, Computer: ${comScore}`;
        }   
    

    // // Declare the final winner 
    // if (usrScore > comScore) {
    //     console.log(`Congrats! You beat the computer ${usrScore} to ${comScore}`);
    // } else if (comScore > usrScore) {
    //     console.log(`Uh-oh! You lost to the computer ${comScore} to ${usrScore}`);
    // } else if (usrScore === comScore) {
    //     console.log(`You tied! Play again?`);
    // }
    
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


