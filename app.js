play(); // This is your main function that runs when the page loads

function play() {
  let tries = 1;
  let keepPlaying = true;
  let number = 100;
  let GenerateNumber = () => Math.floor(Math.random() * number);
  let secretNumber = GenerateNumber();
  let playerGuesses = [];
  let playerName = prompt("Input your name!");
  while (keepPlaying) {
    let playerGuess = parseInt(prompt("What is your guess?"));
    playerGuesses.push(playerGuess);
    tries++;
    switch (true) {
      case playerGuess === secretNumber:
        alert(
          `Correct ${playerName}! Your previous guesses we're ${playerGuesses.join(
            ", "
          )}.`
        );
        alert(`It only took you ${tries} tries.`);
        let keepPlayingQuestion = prompt(
          `keep playing ${playerName}?`
        ).toLocaleLowerCase();
        if (keepPlayingQuestion === "y" || keepPlayingQuestion === "yes") {
          secretNumber = GenerateNumber();
          tries = 1;
          playerGuesses = [];
          continue;
        } else {
          keepPlaying = false;
        }
        break;
      case playerGuess > secretNumber:
        alert("Sorry bro too high.");
        break;
      case playerGuess < secretNumber:
        alert("Sorry bro too low");
        break;
      default:
        alert("Sorry man try again");
        break;
    }
  }
}

function playAgain() {}
