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

function playRound(playerSelection,computerSelection){     
    let result = "";
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
        if (playerSelection == "rock"){
            switch (computerSelection){
                case "rock":
                    alert("You chose rock, the Computer chose rock. You tie!");
                    result = tie;
                    break;
                case "paper":
                    alert("You chose rock, the Computer chose paper. You lose!");
                    result = loss;
                    break;
                case "scissors":
                    alert("You chose rock, the Computer chose scissors. You win!");
                    result = win;
                    break;
            }
        }
        else if (playerSelection == "paper"){
            switch (computerSelection){
                case "rock":
                    alert("You chose paper, the Computer chose rock. You win!");
                    result = win;
                    break;
                case "paper":
                    alert("You chose paper, the Computer chose paper. You tie!");
                    result = tie;
                    break;
                case "scissors":
                    alert("You chose paper, the Computer chose scissors. You lose!");
                    result = loss;
                    break;

            }
        }
        else if (playerSelection == "scissors"){
            switch (computerSelection){
                case "rock":
                    alert("You chose scissors, the Computer chose rock. You lose!");
                    result = loss;
                    break;
                case "paper":
                    alert("You chose scissors, the Computer chose paper. You win!");
                    result = win;
                    break;
                case "scissors":
                    alert("You chose scissors, the Computer chose scissors. You tie!");
                    result = tie;
                    break;
            }
        }
    else {
        alert("invalid input");
    }
    }
}
