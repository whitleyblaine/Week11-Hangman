var wordListString = "acres adult advice arrangement attempt August Autumn border breeze brick calm canal Casey cast chose claws coach constantly contrast cookies customs damage Danny deeply depth discussion doll donkey Egypt Ellen essential exchange exist explanation facing film finest fireplace floating folks fort garage grabbed grandmother habit happily Harry heading hunter Illinois image independent instant January kids label Lee lungs manufacturing Martin mathematics melted memory mill mission monkey Mount mysterious neighborhood Norway nuts occasionally official ourselves palace Pennsylvania Philadelphia plates poetry policeman positive possibly practical pride promised recall relationship remarkable require rhyme rocky rubbed rush sale satellites satisfied scared selection shake shaking shallow shout silly simplest slight slip slope soap solar species spin stiff swung tales thumb tobacco toy trap treated tune University vapor vessels wealth wolf zoo"

var wordListArray = wordListString.split(' ');

var randomWord = wordListArray[Math.floor(Math.random() * wordListArray.length)]

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
    console.log(wordLine.indexOf('_ '));
    if (wordLine.indexOf('_ ') < 0) {
      this.won = true;
    }
  }
}

// NEW keyword!!! Super important
module.exports.wordFunction = new Word(randomWord);