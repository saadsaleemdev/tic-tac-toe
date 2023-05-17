function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // +"1" => 1
  playerConfigElement.style.display = "block";
  backDropelement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigElement.style.display = "none";
  backDropelement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim(); //"     saad saleem    " => "saad saleem"
  if (!enteredPlayerName) {
    // if(enteredElement === "")
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.innerText = "Please enter a valid user name";
  }
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}
