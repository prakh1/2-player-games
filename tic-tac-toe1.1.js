const items = document.querySelectorAll(".item");
const restartBtn = document.getElementById("restartBtn");
const statusText = document.getElementById("status");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    items.forEach(item => item.addEventListener("click", itemClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    running = true;
}

function itemClicked() {
    const itemIndex = this.getAttribute("data-index");

    if (options[itemIndex] !== "" || !running) {
        return;
    }

    updateItem(this, itemIndex);
    checkWinner();
}

function updateItem(item, index) {
    options[index] = currentPlayer;
    item.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const itemA = options[condition[0]];
        const itemB = options[condition[1]];
        const itemC = options[condition[2]];

        if (itemA === "" || itemB === "" || itemC === "") {
            continue;
        }
        if (itemA === itemB && itemB === itemC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        running = false;
    } else if (!options.includes("")) {
        statusText.textContent = "It's a draw!";
       
        running = false;
    } else {
        changePlayer();
    }
}

function restartGame() {
    options = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    running = true;
    
    items.forEach(item => {
        item.textContent = "";
    });

    statusText.textContent = `Player ${currentPlayer}'s turn`;
}