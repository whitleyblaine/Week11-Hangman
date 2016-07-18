var inquirer = require('inquirer');
var wordDasher = require('./letter.js');
var incorrectGuesses = 0;

wordDasher.wordFunction.allDashLine();
console.log(wordDasher.wordFunction.wordLine);


var askForLetter = function() {
  if (incorrectGuesses < ((parseInt(wordDasher.wordFunction.word.length) + parseInt(wordDasher.wordFunction.word.length)/2)) && wordDasher.wordFunction.won == false) {
    inquirer.prompt([{
      type: "input",
      name: "letter",
      message: "Choose a letter!",
    }]).then(function(input) {
      wordDasher.wordFunction.letterReplace(input.letter);
      if (wordDasher.wordFunction.word.indexOf(input.letter) < 0) {
        incorrectGuesses++;
      };
      askForLetter();
    })
  } else {
    console.log('Game over! The word was ' + wordDasher.wordFunction.word);
    if (wordDasher.wordFunction.won == true) {
      console.log("YOU WON!!!!")
    } else {
      console.log("You lost.. :(");
    }
  }
}

askForLetter();