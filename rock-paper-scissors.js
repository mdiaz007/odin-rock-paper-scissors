function getComputerChoice(){ // Returns random computer choice for game.
    let random = Math.floor(Math.random() * ((2-0)+1) + 0);
    if (random == 2){
        return "rock";
    }else if (random == 1){
        return "paper"
    }else{
        return "scissors"
    }
}

function getHumanChoice(){ // Gets the user input for game.
    let userChoice = prompt();
    return userChoice.toLowerCase();
}

function playRound(computerChoice, humanChoice, scores){ // Logic for rock paper scissors game.

    if (humanChoice == "rock"){
        if (computerChoice == "rock"){
            console.log(humanChoice + " TIES " + computerChoice);
            return scores[2]++;
        }else if (computerChoice == "paper"){
            console.log("Computer WINS! " + computerChoice + " BEATS " + humanChoice);
            return scores[0]++;
        }else{
            console.log("Human WINS! " + humanChoice + " BEATS " + computerChoice);
            return scores[1]++;
        }
    }else if(humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("Human WINS! " + humanChoice + " BEATS " + computerChoice);
            return scores[1]++;
        }else if (computerChoice == "paper"){
            console.log(humanChoice + " TIES " + computerChoice);
            return scores[2]++;
        }else{
            console.log("Computer WINS! " + computerChoice + " BEATS " + humanChoice);
            return scores[0]++;
        }
    }else if(humanChoice == "scissors"){
        if (computerChoice == "rock"){
            console.log("Computer WINS! " + computerChoice + " BEATS " + humanChoice);
            return scores[0]++;
        }else if (computerChoice == "paper"){
            console.log("Human WINS! " + humanChoice + " BEATS " + computerChoice);
            return scores[1]++;
        }else{
            console.log(humanChoice + " TIES " + computerChoice);
            return scores[2]++;
        }
    }else{
        console.log("Please enter a valid choice. Rock, paper, or scissors.");
    }
}

function playGame(){ // Plays five rounds of the game.
    for (let x = 0; x < 5; x++){
        const computerChoice = getComputerChoice();
        console.log("What is your choice?");
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice, scores);
    }
}

let scores = [0,0,0];
console.log("Welcome to rock paper scissors");
playGame();
console.log("Human Score: " + scores[1] + " Computer Score: " + scores[0] + " Ties: " + scores[2]);