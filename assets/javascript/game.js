// Start the game
	// Start game on letter
	// Choose a Word
var correctAnswers = ["wolverine", "beast", "professor x", "Ice Man", "Storm", "Cyclops", "Jean Grey", "Colossus"];
var chosenWord = correctAnswers[Math.floor(Math.random()*correctAnswers.length)];
var puzzle = [];
// var puzzle = chosenWord.split("");
// var gameword2 = chosenWord.split("");
// var gameword3 = chosenWord.length("- ");
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
		     // console.log(hint);

var composers =["bach","mozart","beethoven","debussy","stravinsky"];
var randomComposer = composers[Math.floor(Math.random() * composers.length)];
var guessComposer = [];

    // for (var i=0; i<chosenWord.length; i++){
    // puzzle[i] = "-  ";

// Display objective -- show the current number of missing letters. (which should be all of them initially)
	var puzzleDiv = document.getElementById("empty-div");
	var puzzle = [];
	var correctAnswers = ["Wolverine", "Beast", "Professor X", "Ice Man", "Storm", "Cyclops", "Jean Grey", "Colossus"];
	var chosenWord = correctAnswers[Math.floor(Math.random()*correctAnswers.length)];
	for (var j = 0; j < chosenWord.length; j++) {
		// if (chosenWord[j] === " ") {
			 //  	puzzle += "&nbsp;&nbsp;";
			 //  	}
	  	// else {
	  		puzzle[j] = "- ";
	  		// console.log(puzzle);
	  	}
	  // }	

// Create a element to display output in HTML
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
			}
			else { 
				for (var k = 0; k < chosenWord.length; k++) {
			     		if (guess === chosenWord[k]) {
			     			// var puzzle = [];
			        		puzzle[k] = chosenWord[k];
        					console.log(guess);
        					console.log(puzzle);
        					console.log(puzzle.join(""));
			        		newPuzzleDiv.innerHTML = puzzle.join("");
			        		puzzleDiv.appendChild(newPuzzleDiv);
       //      }
    // }
			        		// console.log(guess);
			    //     		newPuzzleDiv.innerHTML = puzzle;
			    //     		console.log(puzzle);
							// puzzleDiv.appendChild(newPuzzleDiv);


			        		if (puzzle.toString() == chosenWord) {
			        					 // { console.log(puzzle[k]);
			        				win = win + 1;
			        				alert("Congratulations, now you're ready for Magneto!!!");
					    			wins = wins + 1;
					    			document.getElementById("wincnt").innerHTML = wins;
						    		}
			        			}
			      			}
			      		}
			}
		  	// else {
		   //  		puzzle += '_ ';
		   //  		guessesLeft = guessesLeft - 1;
		   //  		document.getElementById("gslftcnt").innerHTML = guessesLeft;
		   //  		if (guessesLeft === 0) {
		   //  			alert("Sorry, maybe you need more time in the Danger Room");
		   //  			loss = loss + 1;
		   //  			guessesLeft = guessesLeft + 11;
		   //  			chosenWord;
		   //  			document.getElementById("lsscnt").innerHTML = loss;
		   //  			// chosenWord;
		   //  			// !break;
		   //  		}
		  	// 	}
			// };
		// console.log(numberOfGuesses);
		// console.log(puzzle);
		// console.log(event);
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
		
		//Track number of guesses -- when a user makes a guess, eliminate one available guess

		// Track already used characters -- When the user issues a guess, 
		// }