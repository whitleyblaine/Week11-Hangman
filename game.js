// This file exports a random word

var wordListString = "acres adult advice arrangement attempt august autumn border breeze brick calm canal casey cast chose claws coach constantly contrast cookies customs damage danny deeply depth discussion doll donkey egypt ellen essential exchange exist explanation facing film finest fireplace floating folks fort garage grabbed grandmother habit happily harry heading hunter illinois image independent instant january kids label Lee lungs manufacturing martin mathematics melted memory mill mission monkey Mount mysterious neighborhood norway nuts occasionally official ourselves palace pennsylvania philadelphia plates poetry policeman positive possibly practical pride promised recall relationship remarkable require rhyme rocky rubbed rush sale satellites satisfied scared selection shake shaking shallow shout silly simplest slight slip slope soap solar species spin stiff swung tales thumb tobacco toy trap treated tune university vapor vessels wealth wolf zoo"

var wordListArray = wordListString.split(' ');

var randomWord = wordListArray[Math.floor(Math.random() * wordListArray.length)];

module.exports.randomWord = randomWord;