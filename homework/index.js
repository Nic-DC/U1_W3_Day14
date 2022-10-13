// BINGO CHALLENGE!
// Create programmatically (using JS) a bingo board with 76 cells, numbered from 1 to 76.

// Create a button to randomize a number from 1 to 76.

// The cell with same number should be highlighted in some way on the bingo board.

// Creating the main elements
const container = document.createElement("div");

const bingoBoard = document.createElement("div");
const userBoard = document.createElement("div");
const buttonsDiv = document.createElement("div");
const bingoNumbers = document.createElement("div");

const currentNumberShown = document.createElement("div");
const pastNumbersShown = document.createElement("div");
const remainingNumbersShown = document.createElement("div");

const currentNumber = document.createElement("h3");
const pastNumbers = document.createElement("h3");
const remainingNumbers = document.createElement("h3");

const randomizeNumberBtn = document.createElement("button");
const chooseBoardsBtn = document.createElement("button");
const playBoardsInput = document.createElement("input");

// Manipulating the elements

container.className = "container";

bingoBoard.className = "bingoBoard";
userBoard.className = "userBoard";
buttonsDiv.className = "buttonsDiv";
bingoNumbers.className = "bingoNumbers";

currentNumberShown.className = "currentNumberShown";
pastNumbersShown.className = "pastNumbersShown";
remainingNumbersShown.className = "remainingNumbersShown";
currentNumberShown.innerText = "Current number: ";
pastNumbersShown.innerText = "Past Numbers: ";
remainingNumbersShown.innerText = "Remaining Numbers: ";

currentNumber.className = "numberHeading currentNumber";
pastNumbers.className = "numberHeading pastNumbers";
remainingNumbers.className = "numberHeading remainingNumbers";
// currentNumber.innerText = "Current number: ";
// pastNumbers.innerText = "Past Numbers: ";
// remainingNumbers.innerText = "Remaining Numbers: ";
// currentNumber.innerText = "";
// pastNumbers.innerText = "";
// remainingNumbers.innerText = "";

randomizeNumberBtn.innerText = "randomize NumberBtn";
chooseBoardsBtn.innerText = "choose Boards Btn";

randomizeNumberBtn.className = "btn randomizeNumberBtn";
chooseBoardsBtn.className = "btn chooseBoardsBtn";
playBoardsInput.className = "playBoardsInput";

// Appending the elements to the DOM
document.body.appendChild(container);

container.appendChild(buttonsDiv);
container.appendChild(bingoBoard);
container.appendChild(bingoNumbers);
container.appendChild(userBoard);

buttonsDiv.appendChild(randomizeNumberBtn);
buttonsDiv.appendChild(chooseBoardsBtn);
buttonsDiv.appendChild(playBoardsInput);

bingoNumbers.appendChild(currentNumberShown);
bingoNumbers.appendChild(pastNumbersShown);
bingoNumbers.appendChild(remainingNumbersShown);

currentNumberShown.appendChild(currentNumber);
pastNumbersShown.appendChild(pastNumbers);
remainingNumbersShown.appendChild(remainingNumbers);

// Functions
let bingoNumbersArray = [];

const createBingoBoard = function () {
  for (let i = 0; i < 76; i++) {
    const bingoSlot = document.createElement("div");
    bingoSlot.className = "bingoSlot";
    const bingoSlotContent = document.createElement("div");
    bingoSlotContent.className = "bingoSlotContent";

    bingoSlotContent.innerText = i + 1;
    bingoNumbersArray.push(bingoSlotContent.innerText);

    if (bingoSlotContent.innerText === currentNumber.innerText) {
      bingoSlot.style.backgroundColor = "orangered";
    }

    bingoBoard.appendChild(bingoSlot);
    bingoSlot.appendChild(bingoSlotContent);
  }
};
createBingoBoard();

const generateRandomNumber = function () {
  const random = Math.floor(Math.random() * 77);
  return random;
};

const showRandomNumber = function () {
  currentNumber.innerText = generateRandomNumber();
  highlight();
};
randomizeNumberBtn.addEventListener("click", showRandomNumber);

const allBingoContent = document.querySelectorAll(".bingoSlotContent");
const allBingoDivs = document.querySelectorAll(".bingoSlot");
const highlight = function () {
  //const allBingoContent = document.querySelectorAll(".bingoSlotContent");
  for (let i = 0; i < allBingoContent.length; i++) {
    if (allBingoContent[i].innerText === currentNumber.innerText) {
      allBingoDivs[i].style.backgroundColor = "orangered";
    }
  }
};
//highlight();
// EXTRA:

// – Make sure to always select a new number (eg. avoid getting the number 10 multiple times).

// – Create a user board with 24 randomized numbers that highlights as the main board does.

// – Let the user choose how many user boards he’s willing to play with and generate them before starting to play.
