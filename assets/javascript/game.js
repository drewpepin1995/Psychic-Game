
let computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let playerWins = 0;

let playerLosses = 0;

let playerGuesses = 9;


document.onkeyup = function(event) {
    console.log(event.key)

    var userGuess = event.key

    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    console.log(computerGuess);

    console.log(playerWins);

    console.log(playerLosses);

    console.log(playerGuesses);

    if (userGuess === computerGuess) {
        playerGuesses=9;
        playerWins++;

        
    
  

    } else {
        playerGuesses--

        


        
    };

    if (playerGuesses === 0 ) {
        playerLosses++;
        playerGuesses=playerGuesses+9;
    }

    document.getElementById('wins').innerHTML = 'Wins: ' + playerWins;
    document.getElementById('losses').innerHTML = 'Losses: ' + playerLosses;
    document.getElementById('guessesLeft').innerHTML = 'Guesses Remaining: ' + playerGuesses;
    document.getElementById('guessesSoFar').innerHTML = 'Guesses So Far: ' + userGuess;
}




    
