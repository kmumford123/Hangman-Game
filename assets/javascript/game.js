// Start the game
	// Start game on click
	// Choose a Word
var correctAnswers = ["Wolverine", "Beast", "Professor X", "Ice Man", "Storm", "Cyclops", "Jean Grey", "Colossus"];
var chosenWord = correctAnswers[Math.floor(Math.random()*correctAnswers.length)];

//  Display a clue -- Use onclick function
var clue = ["Adamantium", "Smart Blue", "Mental Baldy", "Cool Breeze", "Ororo Munroe", "4 Your Eyes Only", "Too Hot Too Fly", "Man of Steel"];
var clues = document.getElementById("clues"); 
	for (var i = 0; i < correctAnswers.length; i++) {
		 if (chosenWord === correctAnswers[i]) {
		 	var clues = document.getElementById("clues");
		 	var newCluesDiv = document.createElement("div");
		    newCluesDiv.innerHTML = clue[i];
		     clues.appendChild(newCluesDiv);
		     console.log(clue[i]);
			}
		}
	var newCluesDiv = document.createElement("div");
    // newCluesDiv.innerHTML = showClue;
     clues.appendChild(newCluesDiv);
	// console.log(clue);
	console.out;

// Display objective -- show the current number of missing letters. (which should be all of them initially)
	//Create a container using the 'empty-div id'
	var puzzleDiv = document.getElementById("empty-div");
	var puzzle = [" "];
	for (var j = 0; j < chosenWord.length; j++) {
		if (chosenWord[j] == " ") {
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
console.out;
// newPuzzleDiv.attr("class", "fancy");

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
				loss = loss + 1;
				win = win + 1;
				document.getElementById("wincnt").innerHTML = win;
				document.getElementById("lsscnt").innerHTML = loss;
			}
		}
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
		

		//Track number of guesses -- when a user makes a guess, eliminate one available guess

		// Track already used characters -- When the user issues a guess, 
		// }




	// for (var i = 0; numberOfGuesses < 10; i++) {
	// 	if (numberOfGuesses < 10); {
	// 		alert(`You've used another guess, you have ${GuessRemain} remaining.`);
	// 	}
	// 		else {
	// 			alert(`You have no guesses remaining.`);
	// 		}
	// 		}
	// 	};
	// }
	// for (var i = 0; i < chosenWord.length; i++) {
	// 	puzzle += "_";
	// 	console.out(puzzle)

	// }
	// 	console.log(correctAnswers[i]);
	// console.log(wordstosplit.split(""));
	// }
	// var res = correctAnswers.split(correctAnswers[0]);
	// console.out(res)
	//Choose a word
	// document.onkeyup = function(event) {

	// }


	//mozilla dev network - strings and arrays
	//use .split and .join

	//function -- sometimes has a name.
	//layout function name (argument)
	//place invocations in sequence
	//functionName(arr)
	//funcitonName(arr2)
	//functionName(arr3)

	//function has a list of arguments (could be empty) and has a return value

// 	function fullName(firstName, middleName, lastName) {
// 	... return firstName + " " + middleName " "+ " "+lastName;
// ...}