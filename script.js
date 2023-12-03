'use strict';

// // USING AN EXTERNAL GLOBAL FUNCTION DOES NOT WORK
// const test = function () {
//   console[`log`](document[`querySelector`](`.guess`)[`value`]);
// };
// document[`querySelector`](`.check`)[`addEventListener`](`click`, test());

let score = 20;
function setScore(score) {
  document[`querySelector`](`.score`)[`textContent`] = score;
}

function randomNumber() {
  return Math[`trunc`](Math[`random`]() * 20 + 1);
}
let secretNumber = randomNumber();

function setMessage(message) {
  document[`querySelector`](`.message`)[`textContent`] = message;
}

function setNumber(number) {
  document[`querySelector`](`.number`)[`textContent`] = number;
}

let highScore = 0;
function setHighScore(score) {
  document[`querySelector`](`.highscore`)[`textContent`] = score;
}

function setGuess(guess) {
  document[`querySelector`](`.guess`)[`value`] = guess;
}

function setBackgroundColor(color) {
  document[`querySelector`](`body`)[`style`][`backgroundColor`] = color;
}

function setBoxWidth(size) {
  document[`querySelector`](`.number`)[`style`][`width`] = size;
}

document[`querySelector`](`.check`)[`addEventListener`](`click`, function () {
  if (score > 1) {
    const guess = Number(document[`querySelector`](`.guess`)[`value`]);
    // console[`log`](guess, typeof guess);

    // if guess is 0 or empty
    if (!guess || guess < 0 || guess > 20) {
      setMessage(`Pick a number from 1 to 20!`);
    }
    // if guess is wrong
    else if (guess !== secretNumber) {
      score = score - 1;
      setScore(score);
      if (guess > secretNumber) {
        setMessage(`Too high!`);
      } else {
        setMessage(`Too low!`);
      }
    }
    // if guess is correct
    else {
      setMessage(`Correct guess!`);
      setNumber(secretNumber);
      setBackgroundColor(`#60b347`);
      setBoxWidth(`30rem`);
      if (score > highScore) {
        highScore = score;
        setHighScore(highScore);
      }
    }
  }
  // if score zero
  else {
    score = 0;
    setScore(score);
    setMessage(`You lost!`);
  }
});

// restart button
document[`querySelector`](`.again`)[`addEventListener`](`click`, function () {
  score = 20;
  setScore(score);
  secretNumber = randomNumber();
  setMessage(`Start guessing...`);
  setNumber(`?`);
  setBackgroundColor(`#222`);
  setBoxWidth(`15rem`);
  setGuess(``);
});
