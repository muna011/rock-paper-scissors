const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;
    } else {
      console.log("Error! Please input Rock, Paper, or Scissors");
    }
  }
  
  
  const getComputerChoice = () => {
   let randomNumber = Math.floor(Math.random() * 3)
   switch (randomNumber) {
     case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default: 
      return "Error, try again"
      break;
   }
  }
  
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (userChoice === "bomb") {
      return "YOU WON! Nice."
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
          return "The computer won!";
        } else {
          return "You won!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
          return "You won!";
        } else {
          return "The computer won!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
          return "You won!";
        } else {
          return "The computer won!";
        }
    } else {
      return "Error, please try again";
    }
  }
  
  
  const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
