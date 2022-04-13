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
    console.log(playerSelection.toLowerCase());
    if (playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors"){
        alert( "valid input")
    }
    else alert("invalid input")
}

console.log(RPS("RoCk",2))