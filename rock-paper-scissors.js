
let random = Math.floor(Math.random() * ((2-0)+1) + 0);

function getComputerChoice(random){
    if (random == 2){
        console.log("rock");
    }else if (random == 1){
        console.log("paper");
    }else{
        console.log("scissors");
    }
}

getComputerChoice(random);