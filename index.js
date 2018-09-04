var inquirer = require('inquirer');
var Word = require('./word');
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var badGuesses = [];
var wordList = ["monkey","scumm","banana","pirate","ghost","sword","grog","island","curse","guybrush","acetone","ship","sail","skeleton","skull","accounting","mansion","meat","fish","seagull","cannibal","voodoo","prisoner","voyage","sheriff","prosthetic","rubber","chicken"]
var randomWord;
var secretWord;
var wordIsComplete = false;

function startGame() {
  guessesLeft = 10;
  badGuesses = [];
  // randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  randomWord = wordList[Math.floor(Math.random() * wordList.length)];

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
    endTurn();
  });
};

function endTurn() {
  wordIsComplete = true;
  secretWord.letters.forEach(function(letter) {
    if (!letter.isGuessed) {
      wordIsComplete = false;
    };
  });
  if (!wordIsComplete) {
    if (guessesLeft > 0) {
      promptGuess();
    }
    else {
      loseGame();
    };
  }
  else {
    winGame();
  };
};

function winGame() {
  wins++;
  console.log('You win!\nwins: ' + wins + '\nlosses: ' + losses);
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'restartYN',
      message: 'Would you like to play again?'
    }
  ]).then(function(answer) {
    if(answer.restartYN) {
      startGame();
    };
  });
};

function loseGame() {
  losses++
  console.log('You lose!\nwins: ' + wins + '\nlosses: ' + losses);
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'restartYN',
      message: 'Would you like to play again?'
    }
  ]).then(function(answer) {
    if(answer.restartYN) {
      startGame();
    };
  });
};

startGame();


// NOTES
// ----------------
// don't allow duplicate letters
// display full word once they win or lose