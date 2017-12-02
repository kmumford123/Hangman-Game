// Set up a group of Answers
	var correctAnswers = ["wolverine", "Beast", "Professor X", "Ice Man", "Storm", "Cyclops", "Jean Grey", "Colossus"];
	var clue = ["Adamantium", "Smart Blue", "Mental Baldy", "Cool Breeze", "Ororo Munroe", "Too Hot Too Fly", "Man of Steel"];
	var ChosenWord = Math.floor(Math.random()*correctAnswers.length);
	var puzzle = [" "]
	var guess = "c";
	var NumberOfGuesses = 0;
	var	GuessRemain = NumberOfGuesses - 1;

		var correctAnswers = ["Wolverine", "Beast", "Professor X", "Ice Man", "Storm", "Cyclops", "Jean Grey", "Colossus"];
	var clue = ["Adamantium", "Smart Blue", "Mental Baldy", "Cool Breeze", "Ororo Munroe", "Too Hot Too Fly", "Man of Steel"];
// 	var index = Math.floor(Math.random()*correctAnswers.length);
	var ChosenWord = correctAnswers[Math.floor(Math.random()*correctAnswers.length)];
	var puzzle = " "
for (var i = 0; i < ChosenWord.length; i++) {
		puzzle += "_ ";
		// console.log(puzzle);
	}
	console.log(puzzle);

// Start the game
	// Choose a Word
		var clue = ["Adamantium", "Smart Blue", "Mental Baldy", "Cool Breeze", "Ororo Munroe", "Too Hot Too Fly", "Man of Steel"];
		var ChosenWord = correctAnswers[Math.floor(Math.random()*correctAnswers.length)];

	// Display a clue
			//Use onclick function


	// Display objective -- number of letters

	//Issue number of Guesses -- set value of how many guesses the user has.



	// allow User to make a guess
		// When a user types a letter it issues a guess

		//Track number of guesses -- when a user makes a guess, eliminate one available guess





	// for (var i = 0; NumberOfGuesses < 10; i++) {
	// 	if (NumberOfGuesses < 10); {
	// 		alert(`You've used another guess, you have ${GuessRemain} remaining.`);
	// 	}
	// 		else {
	// 			alert(`You have no guesses remaining.`);
	// 		}
	// 		}
	// 	};
	// }
	for (var i = 0; i < ChosenWord.length; i++) {
		puzzle += "_";
		console.out(puzzle)

	}
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