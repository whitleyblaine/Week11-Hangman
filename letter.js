// Import random word from game.js so we can pass it into the constructor
var randomWord = require('./game.js').randomWord;

// Constructor to control whether or not a letter appears as a "_" or as itself on-screen
var Word = function(word) {
  this.word = word;
  this.splitWord = word.split('');
  this.wordLine = '';
  this.lineArr = [];
  this.won = false;
  this.noDupeSplitWord = function() {
    var noDupeArr = [];
    for (i=0; i < this.splitWord.length; i++) {
      if(!noDupeArr.includes(this.splitWord[i])) {
        noDupeArr.push(this.splitWord[i]);
      };
    };
    return noDupeArr;
  };
  this.allDashLine = function() {
    var line = '';
    for (i=0; i < this.word.length; i++) {
      this.lineArr.push('_ ');
    }
    for (i=0; i < this.lineArr.length; i++) {
      line += this.lineArr[i];
    }
    this.wordLine = line;
  };
  this.letterReplace = function(guess) {
    var noDupeArr = this.noDupeSplitWord();
    var dashLine = this.wordLine;
    var lineArr = this.lineArr;
    var wordLine = this.wordLine;
    var wordLine2 = ''
    if (noDupeArr.includes(guess)) {
      var index = this.word.indexOf(guess);
      lineArr[index] = guess + " ";
    }
    for (i=0; i < lineArr.length; i++) {
      wordLine2 += lineArr[i];
    }
    wordLine = wordLine2;
    console.log(wordLine);
    if (wordLine.indexOf('_ ') < 0) {
      this.won = true;
    }
  }
}

// Export new constructor instance with randomWord passed in
module.exports.wordFunction = new Word(randomWord);