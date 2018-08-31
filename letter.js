function Letter(char) {
  this.letter = char;
  this.isGuessed = false;
  this.letterDisp = function() {
    if (this.isGuessed) {
      return this.letter;
    };
    return '_';
  };
  this.guessCheck = function(guess) {
    if (this.letter.toLowerCase() === guess.toLowerCase()) {
      this.isGuessed = true;
    };
  };
};

module.exports = Letter;