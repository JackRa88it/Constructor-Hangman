var inquirer = require('inquirer');
var Word = require('./word');

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var badGuesses = [];
var wordList = ["monkey","scumm","banana","pirate","ghost","sword","grog","island","curse","guybrush","acetone","ship","sail","skeleton","skull","accounting","mansion","meat","fish","seagull","cannibal","voodoo","prisoner","voyage","sheriff","prosthetic","rubber","chicken"]
var randomWord;
var secretWord;

// tests for basic functionality
// var test = new Word('horse');
// console.log(test);
// test.wordDisp();
// test.guess('r');
// console.log(test);

function startGame() {
  guessesLeft = 10;
  badGuesses = [];
  // randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  randomWord = 'horse';

  secretWord = new Word(randomWord);
  promptGuess();
};

function promptGuess() {
  secretWord.wordDisp();
  console.log('guesses left: ' + guessesLeft + '\n' + 'letters guessed: ' + badGuesses.join(','));
  inquirer.prompt([
    {
      type: 'input',
      name: 'guess',
      message: 'Guess a letter:'
      // validation for single char only
    }
  ]).then(function(answers) {
    if (randomWord.indexOf(answers.guess) < 0) {
      badGuesses.push(answers.guess);
      guessesLeft--;
    };
    secretWord.guess(answers.guess);
    if (guessesLeft > 0) {
      promptGuess();
    };
  });
};

startGame();


// NOTES
// ----------------
// where to check if guess was correct, then update guessesLeft and badGuesses
// return to promptGuess each time
// check if whole word has been guessed, then update wins and restart
// check if guessesLeft = 0, then update losses and restart
// don't allow duplicate letters
// end game if all letters guessed