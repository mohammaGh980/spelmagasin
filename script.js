// background-music.js

// Vent til dokumentet er fullstendig lastet før du kjører koden
document.addEventListener('DOMContentLoaded', function () {
  // Finn lydelementet med ID 'backgroundAudio'
  var audioElement = document.getElementById('backgroundAudio');

  // Skjul standard lydkontroller
  audioElement.style.display = 'none';
});

// Hent lydelementet med ID 'backgroundAudio'
var audio = document.getElementById('backgroundAudio');

// Funksjon for å bytte mellom av og på-tilstand for lyden
function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
}


// search.js

// Liste over spillobjekter
var games = [
  { title: "Hacmy PC", description: "Guess the number to hack the PC.", url: "hackmypc.html" },
  { title: "Programming Quiz", description: "Test your HTML and CSS knowledge.", url: "progproquiz.html" },
  { title: "Guess the color code ", description: "gusse the collor code.", url: "colorcode.html" },
];

// Søk etter spill basert på input
function searchGames() {
  // Hent søkeord fra inputfeltet og trim det
  var searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

  // Filtrer spill basert på søketeksten
  var searchResults = games.filter(function (game) {
    return game.title.toLowerCase().includes(searchQuery) || game.description.toLowerCase().includes(searchQuery);
  });

  // Vis søkeresultatene på siden
  displaySearchResults(searchResults);
}

// Vis søkeresultatene på siden
function displaySearchResults(results) {
  var resultContainer = document.getElementById('searchResult');

  // Tøm resultContainer før man legger til nye resultater
  resultContainer.innerHTML = '';

  // Vis resultater
  results.forEach(function (result) {
    var resultElement = document.createElement('div');
    resultElement.innerHTML = `<a href="${result.url}">${result.title}</a>`;
    resultContainer.appendChild(resultElement);
  });
}

//hackmypc game code
let targetNumber = Math.floor(Math.random() * 100) + 1; // gjett et tilfeldig tall mellom 1 og 100
let attempts = 0;

// Funksjon for å sjekke gjettet tall
function checkGuess() {
  let guess = document.getElementById("guess").value;

  // Sjekk om inputfeltet er tomt
  if (guess === "") {
    alert("Please enter a number to hack this pc!");
    return;
  }

  guess = parseInt(guess);

  // Sjekk om inntastet verdi er et gyldig tall mellom 1 og 100
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100!");
    return;
  }

  attempts++;

  // Sjekk om gjettet tall er riktig
  if (guess === targetNumber) {
    document.getElementById("status").innerText = `Hacked in ${attempts} attempts!`;
    document.getElementById("status").style.color = "#008000"; // Grønn farge for rettsvar
    document.getElementById("guess").disabled = true;
  } else {
    let message = guess < targetNumber ? "Too low. Try a higher number!" : "Too high. Try a lower number!";
    document.getElementById("status").innerText = `Not hacked. ${message}`;
    document.getElementById("status").style.color = "#FF0000"; // Rød farge for feil
  }
}

// Funksjon for å gå tilbake til hjemmesiden
function goToHome() {
  window.location.href = "index.html";
}

//"ProgProQuiz"
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlink Text Markup Language"],
    answer: 0
  },
  {
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    answer: 1
  },
  {
    question: "What is the purpose of the <p> tag in HTML?",
    options: ["Image", "Paragraph", "List", "Link"],
    answer: 1
  },
  {
    question: "Which HTML element is used to create links?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["color", "background-color", "font-color", "text-color"],
    answer: 0
  },
  {
    question: "What does the abbreviation CSS stand for?",
    options: ["Counter Strike: Source", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    answer: 1
  },
  {
    question: "Which HTML element is used to create headings?",
    options: ["<header>", "<h1>", "<heading>", "<title>"],
    answer: 1
  },
  {
    question: "What is the correct syntax for adding internal CSS in HTML?",
    options: ["<css>", "<style>", "<script>", "<design>"],
    answer: 1
  },
  {
    question: "Which CSS property is used to change font size?",
    options: ["font-size", "text-size", "font-style", "size"],
    answer: 0
  },
  {
    question: "Which HTML element is used to create a bulleted list?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    answer: 2
  },

];
// Hent spørsmål-elementet fra nettsiden ved hjelp av ID-en 'question'
const questionElement = document.getElementById('question');

// Hent svaralternativ-elementet fra nettsiden ved hjelp av ID-en 'options'
const optionsElement = document.getElementById('options');

// Hent knappen for å sende inn svar fra nettsiden ved hjelp av ID-en 'submit'
const submitButton = document.getElementById('submit');

// Hent elementet som viser resultatet av spillet fra nettsiden ved hjelp av ID-en 'result'
const resultElement = document.getElementById('result');

// Hent knappen for å starte spillet på nytt fra nettsiden ved hjelp av ID-en 'restart'
const restartButton = document.getElementById('restart');

// Sett den gjeldende spørsmålsindeksen til 0
let currentQuestion = 0;

// Sett poengsummen til 0 når spillet starter
let score = 0;

// Funksjon for å laste inn og vise et spørsmål fra quizData
function loadQuestion() {
  // Hent data for det gjeldende spørsmålet fra quizData
  const currentQuizData = quizData[currentQuestion];

  // Sett teksten til spørsmålselementet basert på gjeldende spørsmål i quizData
  questionElement.innerText = currentQuizData.question;

  // Tøm innholdet i svaralternativene for å legge til nye
  optionsElement.innerHTML = "";

  // Gå gjennom hvert svaralternativ i gjeldende spørsmål og legg til knapper for dem
  currentQuizData.options.forEach((option, index) => {
    // Opprett en HTML-knapp for hvert svaralternativ
    const optionElement = document.createElement('button');

    // Sett teksten til knappen som svaralternativet
    optionElement.innerText = option;

    // Legg til en CSS-klasse 'option' til knappen for styling
    optionElement.classList.add('option');

    // Legg til en klikk-lytter til knappen for å sjekke svaret når den klikkes
    optionElement.addEventListener('click', () => checkAnswer(index));

    // Legg til knappen til svaralternativene på nettsiden
    optionsElement.appendChild(optionElement);
  });
}


// Funksjonen som sjekker om det valgte svaret er riktig eller galt
function checkAnswer(selectedOption) {

  // Sjekker om det valgte svaret er det samme som svaret på gjeldende spørsmål
  if (selectedOption === quizData[currentQuestion].answer) {

    // Øker poengsummen hvis svaret er riktig
    score++;

    // Viser "Correct!"-melding og endrer utseendet til riktig
    resultElement.innerText = "Correct!";
    resultElement.classList.add('correct');

  } else {

    // Viser "Wrong!"-melding og endrer utseendet til feil
    resultElement.innerText = "Wrong!";
    resultElement.classList.add('incorrect');
  }

  // Går til neste spørsmål i rekken
  currentQuestion++;

  // Sjekker om det er flere spørsmål igjen
  if (currentQuestion < quizData.length) {

    // Hvis det er flere spørsmål, last dem inn
    loadQuestion();

  } else {

    // Hvis alle spørsmål er besvart, viser poengsummen og skjuler innsendingsknappen, viser restart-knappen
    resultElement.innerText = `You got ${score} out of ${quizData.length} questions correct.`;
    submitButton.style.display = 'none';
    restartButton.style.display = 'block';
  }
}


// Funksjon for å starte spillet på nytt
function restartQuiz() {
  // Nullstiller spørsmålsindeksen og poengsummen
  currentQuestion = 0;
  score = 0;

  // Tømmer resultatteksten og fjerner eventuelle fargeklasser
  resultElement.innerText = "";
  resultElement.classList.remove('correct');
  resultElement.classList.remove('incorrect');

  // Viser send-knappen og skjuler start-på-nytt-knappen
  submitButton.style.display = 'block';
  restartButton.style.display = 'none';

  // Last inn det første spørsmålet
  loadQuestion();
}

// Funksjon for å vise knappen for å starte spillet på nytt
function showRestartButton() {
  restartButton.style.display = 'block';
}

// Last inn det første spørsmålet når siden lastes
loadQuestion();

// Legg til en hendelseslytter på send-knappen
submitButton.addEventListener('click', () => {
  // Hent det valgte svaralternativet
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  
  // Sjekk om brukeren har valgt et alternativ
  if (!selectedOption) {
    alert("Please select an option.");
    return;
  }

  // Hent indeksen til svaret og sjekk om det er riktig
  const answerIndex = parseInt(selectedOption.value);
  checkAnswer(answerIndex);
});

// Legg til en hendelseslytter på start-på-nytt-knappen
restartButton.addEventListener('click', restartQuiz);


 
