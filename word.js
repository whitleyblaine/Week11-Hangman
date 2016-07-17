var requireWord = require('./game.js');
var wordDasher = require('./letter.js');
var inquirer = require('inquirer');
var count = 0;

var word = requireWord.currentWord.word.toLowerCase();

console.log(word);

var letterCompare = function(letter) {
  if (word.indexOf(letter) >= 0) {
    console.log('correct!');
  } else {
    console.log('incorrect!');
  }
}


var askForLetter = function() {
  if (count < (parseInt(word.length) + parseInt(word.length)/2)) {
    inquirer.prompt([{
      type: "input",
      name: "letterInput",
      message: "Choose a letter!",
    }]).then(function(input) {
      letterCompare(input.letterInput.toLowerCase());
      count++;
      askForLetter();
    })
  } else {
    console.log('All done!')
  }
}

askForLetter();

