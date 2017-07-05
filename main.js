//Variables
var textArray = ['rock', 'paper', 'scissors'];
var computerChoice = textArray[Math.floor(Math.random()*textArray.length)];
var meChoice = textArray[Math.floor(Math.random()*textArray.length)];
console.log("The Computer chose: " + computerChoice);
console.log("I chose: "+ meChoice);

if (meChoice === 'rock' && computerChoice === 'paper'){
  console.log("Computer wins!");
}
else if (meChoice === 'rock' && computerChoice === 'scissors'){
  console.log("I win!");
}
else if (meChoice === 'scissors' && computerChoice === 'paper'){
  console.log("I win!");
}
else if (meChoice === 'scissors' && computerChoice === 'rock'){
  console.log("Computer wins!");
}
else if (meChoice === 'paper' && computerChoice === 'scissors'){
  console.log("Computer wins!");
}
else if (meChoice === 'paper' && computerChoice === 'rock'){
  console.log("I win!");
}
else if (meChoice === computerChoice) {
  console.log("Looks like a tie!");
}
