
let computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let playerWins = 0;

let playerLosses = 0;

let playerGuesses = 9;

let userGuesses = [];


document.onkeyup = function(event) {

    let userGuess = event.key

    let computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];


    if (userGuess === computerGuess) {
        playerGuesses=9;
        playerWins++;
        userGuesses=[];
        alert("Correct! You win this round!")

    } else {
        playerGuesses--
        userGuesses.push(userGuess);
        
    };

    if (playerGuesses === 0 ) {
        playerLosses++;
        playerGuesses=playerGuesses+9;
        userGuesses = [];
        alert("Incorrect! You lose this round!")
    }

    if (playerWins === 5) {
        alert("Game Over! You win!")
        playerLosses = 0;
        playerWins = 0;
        userGuesses = [];
        playerGuesses = 0;
    }

    if (playerLosses === 10) {
        alert("Too many losses! BOO! You lose! Game Over!")
        playerLosses = 0;
        playerWins = 0;
        userGuesses = [];
        playerGuesses = 0;
    }






    document.getElementById('wins').innerHTML = 'Wins: ' + playerWins;
    document.getElementById('losses').innerHTML = 'Losses: ' + playerLosses;
    document.getElementById('guessesLeft').innerHTML = 'Guesses Remaining: ' + playerGuesses;
    document.getElementById('guessesSoFar').innerHTML = 'Guesses So Far: ' + userGuesses;
}




    
