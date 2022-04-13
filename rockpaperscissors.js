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
    if (playerSelection.toLowerCase !== "rock" || playerSelection.toLowerCase !== "paper" || playerSelection.toLowerCase !== "scissors"){
        alert( "Invalid input")
    }
    else alert("Valid input")
}

console.log(RPS(1,2))