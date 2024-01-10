// Funksjon for å gå til hjemmesiden
function goToHome() {
  // Setter vinduslokasjonen til hjemmesiden for colorcodegame
  window.location.href = "spelmagasin.html";
}

// Lagrer kommentarer i local storage
var comments = [];

function addComment() {
  // Hent navn og kommentar fra HTML-skjemaet
  var name = document.getElementById('name').value;
  var comment = document.getElementById('comment').value;

  // Opprett et objekt for den nye kommentaren
  var newComment = { name: name, comment: comment };

  // Legg til den nye kommentaren i kommentarlisten og lagre i lokal lagring
  comments.push(newComment);
  localStorage.setItem('comments', JSON.stringify(comments));

  // Vis oppdaterte kommentarer og tøm skjemaet
  displayComments();
  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
}

// Viser lagrede kommentarer på siden
function displayComments() {
  // Hent HTML-elementet for visning av kommentarer
  var commentSection = document.getElementById('commentSection');

  // Tøm kommentarseksjonen
  commentSection.innerHTML = '';

  // Hent lagrede kommentarer fra lokal lagring
  var storedComments = JSON.parse(localStorage.getItem('comments'));

  // Oppdater kommentarlisten hvis det er lagrede kommentarer
  if (storedComments) {
    comments = storedComments;
  }

  // Vis hver kommentar på siden med slett-knapp
  comments.forEach(function (comment, index) {
    var newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerHTML = '<h3>' + comment.name + '</h3><p>' + comment.comment + '</p><button onclick="deleteComment(' + index + ')">Slett</button>';
    commentSection.appendChild(newComment);
  });
}

// Sletter kommentar basert på indeks
function deleteComment(index) {
  // Fjern kommentaren fra listen, lagre i lokal lagring og oppdater visningen
  comments.splice(index, 1);
  localStorage.setItem('comments', JSON.stringify(comments));
  displayComments();
}

// Kall displayComments når siden lastes for å vise lagrede kommentarer
window.onload = function() {
  displayComments();
};

// Søkefunksjon for spill
var games = [
  { title: "Hacmy PC", description: "Guess the number to hack the PC.", url: "hackmypc.html" },
  { title: "Programming Quiz", description: "Test your HTML and CSS knowledge.", url: "progproquiz.html" },
  { title: "Guess the color code ", description: "Guess the color code.", url: "colorcode.html" },
];

function searchGames() {
  // Hent søketeksten fra HTML-inputfeltet
  var searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

  // Filtrer spill basert på søketeksten
  var searchResults = games.filter(function (game) {
    return game.title.toLowerCase().includes(searchQuery) || game.description.toLowerCase().includes(searchQuery);
  });

  // Vis søkeresultatene på siden
  displaySearchResults(searchResults);
}

// Viser søkeresultater på siden
function displaySearchResults(results) {
  // Hent HTML-elementet for visning av søkeresultater
  var resultContainer = document.getElementById('searchResult');

  // Tøm resultContainer før man legger til nye resultater
  resultContainer.innerHTML = '';

  // Vis resultater som lenker
  results.forEach(function (result) {
    var resultElement = document.createElement('div');
    resultElement.innerHTML = `<a href="${result.url}">${result.title}</a>`;
    resultContainer.appendChild(resultElement);
  });
}
