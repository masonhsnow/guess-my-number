"use strict";

//! .score .number .guess .label-score .highscore
//! NOTES = we selected what we wanted to manipulate, and we added an event listener. the first argument passed in the event listener was what we wanted to listen for, and the second argument is what we wanted the listener to do once the event has fired. we do that with a FUNCTION EXPRESSION (anonymous), and we do not call that function elsewhere. it auto calls as soon as the event is fired.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highscore = 0;
function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}

function displayScore(number) {
  document.querySelector(`.score`).textContent = number;
}

//`check` button event listener
document.querySelector(`.check`).addEventListener(`click`, function () {
  //this is saving their guess number to a variable on click
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // when player has no input
  if (!guess) {
    displayMessage(`No number selected 😢`);

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number! 🎉`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    //highscore
    if (scoreValue > highscore) {
      highscore = scoreValue;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  }

  //when `guess` is wrong
  else if (guess !== secretNumber) {
    if (scoreValue > 1) {
      displayMessage(
        guess > secretNumber
          ? `Number too high! Try again.`
          : `Number too low! Try again.`
      );
      scoreValue = scoreValue - 1;
      displayScore(scoreValue);
    } else {
      displayMessage(`💥You lose!`);
      displayScore(0);
    }
  }
});

//`again` button event listener
document.querySelector(`.again`).addEventListener(`click`, function () {
  scoreValue = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  displayScore(scoreValue);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
