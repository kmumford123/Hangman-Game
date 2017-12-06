// Start the game
	// Start game on letter
	// Choose a Word
var correctAnswers = ["wolverine", "beast", "professorx", "iceman", "storm", "cyclops", "jeangrey", "colossus"];
var chosenWord = correctAnswers[Math.floor(Math.random()*correctAnswers.length)];
var puzzle = [];

//  Display a clue
var possibleClue = ["Adamantium", "Smart Blue", "Mental Baldy", "Cool Breeze", "Ororo Munroe", "4 Your Eyes Only", "Too Hot Too Fly", "Man of Steel"];
var hint = ""
var clue = document.getElementById("clues"); 
	for (var i = 0; i < correctAnswers.length; i++) {
		 if (chosenWord === correctAnswers[i]) {
		 	hint = possibleClue[i];
			}
		}
var clues = document.getElementById("clues");
		 	var newCluesDiv = document.createElement("div");
		    newCluesDiv.innerHTML = hint;
		     clues.appendChild(newCluesDiv);
		     // console.log(hint);

// Display objective -- show the current number of missing letters. (which should be all of them initially)
	var puzzleDiv = document.getElementById("empty-div");
	for (var j = 0; j < chosenWord.length; j++) {
	  		puzzle[j] = "- ";
	  	}	

// Create an element to display output in HTML
var newPuzzleDiv = document.createElement("div");
newPuzzleDiv.innerHTML = puzzle.join("");
puzzleDiv.appendChild(newPuzzleDiv);


//Issue number of Guesses -- set value of how many guesses the user has.
var guessesLeft = 10;
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
				console.log(guess);
			}
			// (regexp.test(guess))
			else  { 
			//Choose a letter
				for (var k = 0; k < chosenWord.length; k++) {
			     		if (guess === chosenWord[k]) {
					        		puzzle[k] = chosenWord[k];
		        					console.log(guess);
		        					console.log(puzzle);
		        					console.log(puzzle.join(""));
					        		newPuzzleDiv.innerHTML = puzzle.join("");
					        		puzzleDiv.appendChild(newPuzzleDiv);
					        		// guessesLeft = guessesLeft + 1;

						        		if (puzzle.join("") === chosenWord) {
						        				win = win + 1;
						        				alert("Congratulations, now you're ready for Magneto!!!");
								    			wins = wins + 1;
								    			document.getElementById("wincnt").innerHTML = wins;
									    		}
									    	}
			    		else {
						//Issue number of Guesses -- set value of how many guesses the user has.
						guessesLeft = guessesLeft --;
						document.getElementById("gslftcnt").innerHTML = guessesLeft;
							if (guessesLeft < 0) {
								alert("Sorry, maybe you need more time in the Danger Room");
								loss = loss + 1;
								guessesLeft = guessesLeft + 11;
								chosenWord;
								document.getElementById("lsscnt").innerHTML = loss;
						
								}
						}
			      	}
			      }
		      };