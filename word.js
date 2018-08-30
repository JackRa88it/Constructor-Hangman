var Letter = require('./letter');

function Word(word) {
  this.letters = word.split('').map(function(letter) {
    return new Letter(letter)
  });
  this.dispWord = function() {
    var disp = this.letters.map(function(letter) {
      return letter.dispLetter();
    });
    console.log(disp.join(' '));
  };
  this.guess = function(guess) {
    this.letters.forEach()
    // run check
  }
};

module.exports = Word;