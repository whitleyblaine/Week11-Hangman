var requireWord = require('./game.js');
var word = requireWord.currentWord.word.toLowerCase();

var dashLine = function(word) {
  var line = '';
  for (i=0; i < word.length; i++) {
    line = line + '_ ';
  }
  console.log(line);
};

dashLine(word);