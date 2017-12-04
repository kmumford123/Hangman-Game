// Start the game
	// Start game on click
	// Choose a Word
var correctAnswers = ["Wolverine", "Beast", "Professor X", "Ice Man", "Storm", "Cyclops", "Jean Grey", "Colossus"];
var chosenWord = correctAnswers[Math.floor(Math.random()*correctAnswers.length)];

//  Display a clue
var possibleClue = ["Adamantium", "Smart Blue", "Mental Baldy", "Cool Breeze", "Ororo Munroe", "4 Your Eyes Only", "Too Hot Too Fly", "Man of Steel"];
var hint = ""
var clues = document.getElementById("clues"); 
	for (var i = 0; i < correctAnswers.length; i++) {
		 if (chosenWord === correctAnswers[i]) {
		 	hint = possibleClue[i];
			}
		}
var clues = document.getElementById("clues");
		 	var newCluesDiv = document.createElement("div");
		    newCluesDiv.innerHTML = hint;
		     clues.appendChild(newCluesDiv);
		     console.log(hint);

// Display objective -- show the current number of missing letters. (which should be all of them initially)
	var puzzleDiv = document.getElementById("empty-div");
	var puzzle = [" "];
	for (var j = 0; j < chosenWord.length; j++) {
		if (chosenWord[j] === " ") {
			  	puzzle += "&nbsp;&nbsp;";
			  	}
			  	else {
			  		puzzle += "_ ";
			  	}
			  }	

// Create a element to display output in HTML
var newPuzzleDiv = document.createElement("div");
newPuzzleDiv.innerHTML = puzzle;
puzzleDiv.appendChild(newPuzzleDiv);
console.log(puzzle);
console.log(chosenWord);
// console.out;

//Issue number of Guesses -- set value of how many guesses the user has.
var numberOfGuesses = 10;
// var	guessRemain = numberOfGuesses - 1;

// allow User to make a guess
	// When a user types a letter it issues a guess
	var win = 0;
	var loss = 0;
	
	document.onkeyup = function (event) {
		var guess = event.key;
		var regexp = /[a-z]/gi;
			if (!regexp.test(guess)) {
				alert("please enter a letter");
			}
			// else if {
			// 	for (var k = 0; k < chosenWord.length; k++) {
			// 		if (chosenWord[k].toString() === guess) {
			// 			  	puzzle += guess;
			//   	}
			//   }
			// }
			  	// else if {
			  	// 	puzzle += "_ ";
			  	// 	numberOfGuesses = numberOfGuesses - 1;
			  	// 	}
			  	}
			//   }	
			// }
			// else {
			// 	loss = loss + 1;
			// 	win = win + 1;
			// 	document.getElementById("wincnt").innerHTML = win;
			// 	document.getElementById("lsscnt").innerHTML = loss;
			// }
		// }
			// for (var i = 0; i < chosenWord.length; i++) {
			// 	  if (chosenWord[i] == guess[j]) {
			// 	  	puzzle += "&nbsp;&nbsp;";
			// 	  }
			// 	  	else {
			// 	  		puzzle += chosenWord[j];
			// 	  	}
			// if (guess[j] = chosenWord[j]) {
			// 	puzzle += chosenWord[j]
			// }
		
// create a 
		//Track number of guesses -- when a user makes a guess, eliminate one available guess

		// Track already used characters -- When the user issues a guess, 
		// }