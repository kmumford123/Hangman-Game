 var correctAnswers = ["Wolverine", "Beast", "Professor X", "Ice Man", "Storm", "Cyclops", "Jean Grey", "Colossus"];
var chosenWord = correctAnswers[Math.floor(Math.random()*correctAnswers.length)];
var gameword = chosenWord.length
//  Display a clue
var possibleClue = ["Adamantium", "Smart Blue", "Mental Baldy", "Cool Breeze", "Ororo Munroe", "4 Your Eyes Only", "Too Hot Too Fly", "Man of Steel"];
var hint = ""
var clues = document.getElementById("clues"); 


 var remainingLetters = chosenWord.length;

    // Game loop

    while (remainingLetters > 0) {
    		for (var i = 0; i < correctAnswers.length; i++) {
		 if (chosenWord === correctAnswers[i]) {
		 	hint = possibleClue[i];
			}
		}

		