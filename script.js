let targetNumber = Math.floor(Math.random() * 100) + 1; // Genererer et tilfeldig tall mellom 1 og 100
let attempts = 0;

function checkGuess() {
    let guess = document.getElementById("guess").value;

    if (guess === "") {
        alert("Please enter a number!");
        return;
    }

    guess = parseInt(guess);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100!");
        return;
    }

    attempts++;

    if (guess === targetNumber) {
        document.getElementById("status").innerText = `Hacked in ${attempts} attempts!`;
        document.getElementById("status").style.color = "#4CAF50"; // Green color for success
        document.getElementById("guess").disabled = true;
    } else {
        let message = guess < targetNumber ? "Too low. Try a higher number!" : "Too high. Try a lower number!";
        document.getElementById("status").innerText = `Not hacked. ${message}`;
        document.getElementById("status").style.color = "#000000"; // Red color for failure
    }
}
