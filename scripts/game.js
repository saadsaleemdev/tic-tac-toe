function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players");
    return;
  }
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  console.log(activePlayer);
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;
  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add = "disabled";
  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  switchPlayer();
}
