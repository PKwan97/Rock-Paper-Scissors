function computerPlay(){
let numberGen = Math.floor(Math.random()*3);
let computerMove = '';

if (numberGen == 0){
computerMove = "rock";
}

else if (numberGen == 1){
computerMove = "paper";
}

else if (numberGen == 2){
computerMove = "scissors";
}
return computerMove;
}

function playRound(playerSelection,computerSelection){     
    let result = "";
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
        if (playerSelection == "rock"){
            switch (computerSelection){
                case "rock":
                    alert("You chose rock, the Computer chose rock. You tie!");
                    result = "tie";
                    break;
                case "paper":
                    alert("You chose rock, the Computer chose paper. You lose!");
                    result = "loss";
                    break;
                case "scissors":
                    alert("You chose rock, the Computer chose scissors. You win!");
                    result = "win";
                    break;
            }
        }
        else if (playerSelection == "paper"){
            switch (computerSelection){
                case "rock":
                    alert("You chose paper, the Computer chose rock. You win!");
                    result = "win";
                    break;
                case "paper":
                    alert("You chose paper, the Computer chose paper. You tie!");
                    result = "tie";
                    break;
                case "scissors":
                    alert("You chose paper, the Computer chose scissors. You lose!");
                    result = "loss";
                    break;

            }
        }
        else if (playerSelection == "scissors"){
            switch (computerSelection){
                case "rock":
                    alert("You chose scissors, the Computer chose rock. You lose!");
                    result = "loss";
                    break;
                case "paper":
                    alert("You chose scissors, the Computer chose paper. You win!");
                    result = "win";
                    break;
                case "scissors":
                    alert("You chose scissors, the Computer chose scissors. You tie!");
                    result = "tie";
                    break;
            }
        }
    else {
        alert("invalid input");
    }
    }
    return result;
}
let Wins = 0;
let Ties = 0;
let Losses = 0;
for (let i = 0; i<5; i++){
    let playerSelection = prompt("Choose your move");
    let Result = playRound(playerSelection,computerPlay());
    if (Result == "win"){
        Wins++;
        }
    else if (Result == "loss"){
        Losses++;
    }
    else if (Result == "tie"){
        Ties++;
    }
}
console.log(Wins);
console.log(Ties);
console.log(Losses);
if (Wins > Losses){
    alert("You win!");
}
else if (Losses > Wins){
    alert("You lose!");
}
else if (Wins == Losses){
    alert("You tie!");
}


