function computerPlay(){
let numberGen = Math.floor(Math.random()*3);
console.log(numberGen);
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
console.log(computerMove);
return computerMove;
}

function RPS(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
        if (playerSelection == "rock"){
            switch (computerSelection){
                case "rock":
                    alert("You chose rock, the Computer chose rock. You tie!");
                    break;
                case "paper":
                    alert("You chose rock, the Computer chose paper. You lose!");
                    break;
                case "scissors":
                    alert("You chose rock, the Computer chose scissors. You win!");
                    break;
            }
        }
        }
    else {
        alert("invalid input");
    }
}

RPS("RoCk",computerPlay());