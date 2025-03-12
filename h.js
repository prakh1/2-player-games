const words = [     
    {word: "nun",hint: "part of conjuring universe"},
{word: "the conjuring",hint: "part of conjuring universe"},
{word: "annabelle",hint: "part of conjuring universe"},
{word: "insidious",hint: "horror movie"},
{word: "evil dead",hint: "horror movie directed by Sam Raimi"},
{word: "pet sematary",hint: "based on novel of Stephen King"},
{word: "rings",hint: "a remake of the 1998 Japanese horror film “Ringu”" },
{word: "the exorcism of emily rose",hint: "the haunting trial of the priest accused of negligence resulting in the death of the young girl who is believed to be possessed and the lawyer who takes on the task of defending him"},
{word: "grude",hint: "American supernatural horror film about a police detective who investigates a series of murders connected to a single house" },
{word: "sicchin",hint: "Turkish horror film about a young woman who uses black magic to win her cousin's affection"},
{word: "slenderman",hint: "horror film about a group of friends in a small Massachusetts town who try to prove that the internet urban legend Slender Man doesn't exist"},
{word: "immaculate",hint: "horror film about a young American novice nun who discovers terrifying secrets at an Italian convent"},
{word: "hereditary",hint: "film about a family that is tormented by sinister occurrences after the death of their grandmother"},
{word: "smile",hint: "At a psychiatric ward in Newark, New Jersey, therapist Rose Cotter meets graduate student Laura Weaver, who explains that she recently witnessed her professor kill himself. Laura claims to be terrorized by an invisible entity that appears and has foretold her death."},
{word: "the unholy",hint: "disgraced journalist who investigates a series of miracles in a small New England town"},
{word: "veronica",hint: "Spanish horror mystery film about a 15-year-old girl who is possessed by an evil supernatural force after playing Ouija with her friends"},
{word: "the shinning",hint: "a family who moves into a haunted hotel and descends into madness"},

];
let selectedWordObj, selectedWord, guessedLetters, attemptsLeft;

function startGame() {
    selectedWordObj = words[Math.floor(Math.random() * words.length)];
    selectedWord = selectedWordObj.word.toUpperCase();
    guessedLetters = new Set();
    attemptsLeft = 6;
    document.getElementById("hint").innerText = "Hint: " + selectedWordObj.hint;
    document.getElementById("message").innerText = "Attempts left: " + attemptsLeft;
    displayWord();
    createButtons();
}

function displayWord() {
    const display = selectedWord.split('').map(letter =>
        letter === ' ' ? ' ' : guessedLetters.has(letter) ? letter : '_'
    ).join(' ');
    document.getElementById("wordContainer").innerText = display;
    checkGameStatus();
}

function createButtons() {
    const buttonContainer = document.getElementById("buttons");
    buttonContainer.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const button = document.createElement("button");
        button.innerText = letter;
        button.onclick = () => handleGuess(letter, button);
        buttonContainer.appendChild(button);
    }
}

function handleGuess(letter, button) {
    if (selectedWord.includes(letter)) {
        guessedLetters.add(letter);
    } else {
        attemptsLeft--;
    }
    button.disabled = true;
    document.getElementById("message").innerText = "Attempts left: " + attemptsLeft;
    displayWord();
}

function checkGameStatus() {
    if (!document.getElementById("wordContainer").innerText.includes("_")) {
        document.getElementById("message").innerText = "You Win!";
        disableButtons();
         
        
    } else if (attemptsLeft === 0) {
        document.getElementById("message").innerText = "You Lose! 'The word was: ${selectedWord}'";
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}


function restartGame() {
    startGame();
}

startGame();
