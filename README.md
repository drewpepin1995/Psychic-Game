# Psychic-Game
The objective of the game is to guess which letter the computer is thinking.
The game will begin with the computer generating a random letter.
The user will then begin "guessing" by pressing different letter keys on the keyboard to try and match the computer guess.
The user guesses will be pushed to an array on the screen so the user can keep track of his/her guesses.
The user will have 9 guesses to try and successfully choose the correct computer letter.
If the user :
Runs out of guesses :
-He loses the round, and his losses total will increase by one.
-The computer will generate another guess before the next round begins.
-The guesses array will empty.
-The user will be alerted that he/she lost the round.
-Guesses remaining will reset to 9.
Guesses the computers guess correctly :
-He wins the round, and the wins total increases by one.
-The computer will generate another guess before the next round begins.
-The guesses array will empty.
-The user will be alerted that he/she won the round.
-Guesses remaining will reset to 9.
Guesses a key that isnt [a-z] :
-User will be alerted to please select a key [a-z]
-Guesses aray will be reset.
-Guesses remaining will be reset.
-Computer will generate another guess.

The game will reset to 0 wins and 0 losses when either the user has 5 wins, or the user has 10 losses.




