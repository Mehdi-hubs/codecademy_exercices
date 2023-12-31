console.log("Hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  switch (userInput) {
    case "rock":
    case "paper":
    case "scissors":
    case "bomb":
      return userInput;
    default:
      return null;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (!userChoice) {
    return "You haven't entered a valid choice. Please enter: rock, paper, or scissors.";
  } else if (userChoice === "bomb") {
    return "You won \u{1F608}";
  } else if (userChoice === computerChoice) {
    return "The game is a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You won! \u{1F604}";
  } else {
    return "The computer won! \u{1F621}";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log(`You threw : ${userChoice}.`);
  console.log(`The computer threw : ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

/*

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  return userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
    ? userInput
    : null;
};

const userChoice = getUserChoice("paper");
const computerChoice = getComputerChoice();

console.log(`User chose: ${userChoice}`);
console.log(`Computer chose: ${computerChoice}`);

// Utilisez les variables userChoice et computerChoice
console.log(determineWinner(userChoice, computerChoice)); // Affiche le résultat du jeu
*/
