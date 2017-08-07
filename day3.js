var compOptions = ["rock", "paper", "scissors"];
function scramble(){
 return compOptions[Math.floor(Math.random() * compOptions.length)];
}

function game(){
  var userChoice = prompt("Rock, paper, or scissors?").toLowerCase();
  var compChoice = scramble();
  if (userChoice === "gun" || userChoice === "pistol"){
    return "You selected " + userChoice + ". The computer selected " + compChoice + ". You've won, I guess, but isn't that cheating?";
  } else if (userChoice === compChoice) {
    return "You selected " + userChoice + ". The computer selected " + compChoice + ". It's a tie.";
  } else if (compChoice === "rock" && userChoice != "paper"){
    return "You selected " + userChoice + ". The computer selected " + compChoice + ". You've lost :(";
  } else if (compChoice === "paper" && userChoice != "scissors"){
    return "You selected " + userChoice + ". The computer selected " + compChoice + ". The computer has won. Try again!";
  } else if (compChoice === "scissors" && userChoice != "rock"){
    return "You selected " + userChoice + ". The computer selected " + compChoice + ". That's a loss. Want to play again?";
  } else {
    return "You selected " + userChoice + ". The computer selected " + compChoice + ". Congratulations, you've won!!";
  }


}

function print(){
   document.getElementById("outcome").innerHTML = game();
}
