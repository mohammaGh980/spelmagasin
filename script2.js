// Farger som kan gjettes i spillet
const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];

// Indeks for gjeldende farge
let currentColorIndex;

// Antall riktige og feil gjetninger
let correctGuesses = 0;
let incorrectGuesses = 0;

// Starter spillet
function startGame() {
    // Nullstiller resultatmeldingen
    document.getElementById("result").innerText = "";

    // Starter med første farge
    currentColorIndex = 0;

    // Nullstiller gjettetellingen
    correctGuesses = 0;
    incorrectGuesses = 0;

    // Viser den første fargen
    displayColor();
}

// Viser gjeldende farge i fargeboksen
function displayColor() {
    document.getElementById("color-box").style.backgroundColor = colors[currentColorIndex];
}

// Sjekker brukerens gjetning
function checkGuess() {
    // Henter brukerens gjetning fra input-feltet
    const userGuess = document.getElementById("input-field").value.toUpperCase();

    // Sjekker om gjetningen er korrekt eller ikke
    if (userGuess === colors[currentColorIndex]) {
        document.getElementById("result").innerText = "Correct! Good work!";
        correctGuesses++;
    } else {
        document.getElementById("result").innerText = "Wrong guess. Try again.";
        incorrectGuesses++;
    }
}

// Flytter til neste farge
function nextColor() {
    // Går til neste farge i sirkulær rekkefølge
    currentColorIndex = (currentColorIndex + 1) % colors.length;

    // Viser den nye fargen
    displayColor();

    // Nullstiller resultatmeldingen
    document.getElementById("result").innerText = "";
}

// Viser oppsummering av resultatene
function showSummary() {
    document.getElementById("result").innerText = `Game over\nCorrect Guesses: ${correctGuesses}\nWrong Guesses: ${incorrectGuesses}`;
}

// Starter spillet på nytt
function restartGame() {
    startGame();
}

// Starter spillet når siden lastes
window.onload = startGame;

// pil som går tilbake til hjemmesiden
function goToHome() {
    window.location.href = "index.html";
}
