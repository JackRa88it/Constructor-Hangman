var Letter = require('./letter');

function Word(word) {
  this.letters = word.split('').map(function(letter) {
    return new Letter(letter)
  });
  this.wordDisp = function() {
    var disp = this.letters.map(function(letter) {
      return letter.letterDisp();
    });
    console.log(disp.join(' '));
  };
  this.guess = function(guess) {
    this.letters.forEach(function(letter) {
      letter.guessCheck(guess);
    });
    this.wordDisp();
  }
};

module.exports = Word;