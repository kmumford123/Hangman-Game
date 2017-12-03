	// var correctAnswers = ["wolverine", "Beast", "Professor X", "Ice Man", "Storm", "Cyclops", "Jean Grey", "Colossus"];
	// var puzzle = [" "]
	// var guess = "c";

// Start the game
	// Start game on click
	// Choose a Word
		var puzzle = " ";
		var correctAnswers = ["wolverine", "Beast", "Professor X", "Ice Man", "Storm", "Cyclops", "Jean Grey", "Colossus"];
		var chosenWord = correctAnswers[Math.floor(Math.random()*correctAnswers.length)];

	//  Display a clue -- Use onclick function
		var clue = ["Adamantium", "Smart Blue", "Mental Baldy", "Cool Breeze", "Ororo Munroe", "Too Hot Too Fly", "Man of Steel"];

	// Display objective -- show the current number of missing letters. (which should be all of them initially)
		//Create a container using the 'empty-div id'
		var puzzleDiv = document.getElementById("empty-div");
		for (var i = 0; i < chosenWord.length; i++) {
				  if (chosenWord[i] == " ") {
				  	puzzle += "&nbsp;&nbsp;";
				  }
				  	else {
				  		puzzle += "_ ";
				  	}
			}
	// Create a element to display output in HTML
	var newDiv = document.createElement("div");
    newDiv.innerHTML = puzzle;
     puzzleDiv.appendChild(newDiv);
	console.log(puzzle);
	console.log(chosenWord);
	console.out;

	//Issue number of Guesses -- set value of how many guesses the user has.
	var numberOfGuesses = 10;
	var	guessRemain = numberOfGuesses - 1;


	// allow User to make a guess
		// When a user types a letter it issues a guess
		var win = 0;
		var loss = 0;
		
		document.onkeyup = function (event) {
			var guess = event.key;
			var regexp = /[a-z]/gi;
			if (!regexp.test(guess)) {
				// console.log("Success");
				console.log("please enter a letter");
			}
			else {
				win = win + 1;
			document.getElementById("wincnt").innerHTML = win;
			console.log(guess);
			console.log(win);
			}