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
        else if (playerSelection == "paper"){
            switch (computerSelection){
                case "rock":
                    alert("You chose paper, the Computer chose rock. You win!");
                    break;
                case "paper":
                    alert("You chose paper, the Computer chose paper. You tie!");
                    break;
                case "scissors":
                    alert("You chose paper, the Computer chose scissors. You lose!");
                    break;

            }
        }
        else if (playerSelection == "scissors"){
            switch (computerSelection){
                case "rock":
                    alert("You chose scissors, the Computer chose rock. You lose!");
                    break;
                case "paper":
                    alert("You chose scissors, the Computer chose paper. You win!");
                    break;
                case "scissors":
                    alert("You chose scissors, the Computer chose scissors. You tie!");
                    break;
            }
        }
    else {
        alert("invalid input");
    }
    }
}

RPS("RoCk",computerPlay())