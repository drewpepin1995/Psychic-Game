
let possibleChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let computerGuess = '';
let playerWins = 0;
let playerLosses = 0;
let playerGuesses = 9;
let userGuesses = [];

function resetGame() {
  playerLosses = 0;
  playerWins = 0;
  userGuesses = [];
  playerGuesses = 0;
}

function updateComputerGuess() {
  computerGuess = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
}

updateComputerGuess();

document.onkeyup = function(event) {
    console.log(computerGuess);
    let userGuess = event.key

    if (possibleChoices.indexOf(userGuess) === -1) {
      alert('Please enter a character [a-z]!');
    } else {
      if (userGuess === computerGuess) {
        playerGuesses=9;
        playerWins++;
        userGuesses=[];
        updateComputerGuess();
        alert("Correct! You win this round!");
      } else {
        playerGuesses--
        userGuesses.push(userGuess);
      };

      if (playerGuesses === 0 ) {
          playerLosses++;
          playerGuesses=playerGuesses+9;
          userGuesses = [];
          alert("Incorrect! You lose this round!")
      };
      if (playerWins === 5) {
          alert("Game Over! You win!")
          resetGame();
      };
      if (playerLosses === 10) {
          alert("Too many losses! BOO! You lose! Game Over!")
          resetGame();
      };
    }








    document.getElementById('wins').innerHTML = 'Wins: ' + playerWins;
    document.getElementById('losses').innerHTML = 'Losses: ' + playerLosses;
    document.getElementById('guessesLeft').innerHTML = 'Guesses Remaining: ' + playerGuesses;
    document.getElementById('guessesSoFar').innerHTML = 'Guesses So Far: ' + userGuesses;
}




    
