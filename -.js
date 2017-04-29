You're definitely on the right track. With web dev it helps to think about your program flow in a specific way and stick to that. All web apps are about three things:
1. Keeping track of the app's current state.
2. Changing the app's state.
3. Displaying the app's state.

The way this would be translated to this program would be something along the lines of:

KEY PRESS -> GAME LOGIC -> DISPLAY RESULTS

And it would be circular, in that once results are displayed, we'll wait for another key press. So your app's entry point is already in the code on line 81.

With this user input we'd call function and handle it differently. You could put it all in 1 gargantuan function or you can break it out to a few modular functions. Normally the second approach is easier to build and test.

It really helps to think about what your app state will look like. Imagine it as a single variable:

var appState = {};

Somethings we need to keep track of are the current word to be guessed, the number of wins, and the guesses the user has already made:

var appState = {
	word: 'Black Sabbath',
	wins: 0,
	guesses: []
};

So as an example of some game logic, we'll write out a function to check the current input.

We'll declare the function:

function checkAlreadyGuessed(guessLetter) {}

"guessLetter" is the most recent user input. We'll get that in from our document.onkeyup function (it's event.key)

And then we need to handle the two possibilities: this is a new guess or it isn't:

function checkAlreadyGuessed(guessLetter) {
	if(appState.word.includes(guessLetter)) {
		// It's a not a new guess
		// Display error to user
	} else {
		// It is a new guess
		// Store in appState
		appState.guesses.push(guessLetter);
		// Continue game logic
	}
}

And that's how you write the most web apps. Break out your app into what info you need to store and actions you need to take.

Some function names to get you thinking:

resetGame()
checkAlreadyGuessed()
checkCorrectGuess()
checkWinOrLose()
displayGuesses()
displayError()