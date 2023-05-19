function createInputFields() {
  var totalPlayers = document.getElementById("totalPlayers").value;
  var inputFieldsContainer = document.getElementById("inputFieldsContainer");
  inputFieldsContainer.innerHTML = "";

  for (var i = 1; i <= totalPlayers; i++) {
    var inputField = document.createElement("div");
    inputField.innerHTML =
      '<label class="mt-3" for="player' +
      i +
      '">Player ' +
      i +
      ":</label>" +
      '<input class="rounded" type="text" id="player' +
      i +
      '">';
    inputFieldsContainer.appendChild(inputField);
  }
}

function generateTeams() {
  var totalPlayers = document.getElementById("totalPlayers").value;
  var players = [];
  var team1 = [];
  var team2 = [];

  // Get all the player names from the input elements
  for (var i = 1; i <= totalPlayers; i++) {
    var input = document.getElementById("player" + i);
    players.push(input.value);
  }

  // Randomly assign players to teams
  while (players.length > 0) {
    var randomIndex = Math.floor(Math.random() * players.length);
    team1.push(players[randomIndex]);
    players.splice(randomIndex, 1);

    if (players.length > 0) {
      randomIndex = Math.floor(Math.random() * players.length);
      team2.push(players[randomIndex]);
      players.splice(randomIndex, 1);
    }
  }

  // Display the teams on the web page
  var team1Element = document.getElementById("team1");
  var team2Element = document.getElementById("team2");

  team1Element.innerHTML =
    '<div class="team-title">Team 1:</div>' + team1.join("<br>");
  team2Element.innerHTML =
    '<div class="team-title">Team 2:</div>' + team2.join("<br>");
}
