let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameRunning = false;
const winCombinations = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonals
  [0, 4, 8],
  [2, 4, 6],
];
const statusLabel = document.querySelector("#statusLabel");
const restartButton = document.querySelector("#restartButton");
const cellContainer = document.getElementById("cellContainer");
cellContainer.addEventListener("click", handleCellClick);

initializeGame();
function initializeGame() {
  restartButton.addEventListener("click", restartGame);
  statusLabel.textContent = `Player ${currentPlayer}'s turn`;
  createCells();
  gameRunning = true;
}

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = Array.from(cellContainer.children).indexOf(cell);

  // if game is over or cell is already marked, no updates
  if (!gameRunning || board[cellIndex] != "") {
    return;
  }

  updateCell(cell, cellIndex);
  checkBoard();
}

function createCells() {
  for (let i = 0; i < 9; i++) {
    // make a cell
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // add cell to board
    cellContainer.appendChild(cell);
  }
}

function updateCell(cell, index) {
  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  changeLabel(`Player ${currentPlayer}'s turn`, false);
}

function changeLabel(content, showRestart) {
  statusLabel.textContent = content;

  if (showRestart) {
    gameRunning = false;
    document.getElementById("restartButton").removeAttribute("hidden");
  }
}

function checkStatus(roundWon, roundDraw) {
  if (roundWon) {
    changeLabel(`Player ${currentPlayer} wins!`, true);
  } else if (roundDraw) {
    changeLabel("It's a draw!", true);
  } else {
    changePlayer();
  }
}

function checkBoard() {
  let roundWon = false;
  let roundDraw = !board.includes("");

  // check all cells on board for a valid combination
  for (let i = 0; i < winCombinations.length; i++) {
    const cell1 = board[winCombinations[i][0]];
    const cell2 = board[winCombinations[i][1]];
    const cell3 = board[winCombinations[i][2]];

    // check for matching and non-empty cells
    if (cell1 == cell2 && cell1 == cell3 && cell1 != "") {
      roundWon = true;
      break;
    }
  }

  checkStatus(roundWon, roundDraw);
}

function restartGame() {
  // reset all game values
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  statusLabel.textContent = `Player ${currentPlayer}'s turn`;

  // delete all the cells inside the cellContainer
  const cellContainer = document.getElementById("cellContainer");
  cellContainer.innerHTML = "";

  // recreate all the cells
  createCells();

  // hide the restart button & start game
  document.getElementById("restartButton").setAttribute("hidden", "true");
  gameRunning = true;
}
