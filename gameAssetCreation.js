$(document).ready(function() {
  rollDiceButton = document.getElementById('btnRollDice');
  redDie = {
    sides: 6,
    elem: document.getElementById('redDie'),
  };
  blueDie = {
    sides: 6,
    elem: document.getElementById('blueDie'),
  };
  blackDie = {
    sides: 20,
    elem: document.getElementById('blackDie'),
  };
  resourceCards = [];
  elemNumberOfResourceCards = document.getElementById('numberOfResourceCards');
  elemGameInfo = document.getElementById('gameInfo');
  createResourceCards();
});

function rollDie(die) {
  var randomNumber = Math.floor(Math.random() * die.sides) + 1;
  die.elem.innerHTML = randomNumber;
}

function rollDice() {
  rollDie(redDie);
  rollDie(blueDie);
  rollDie(blackDie);
}

function createResourceCards() {
  for (var i = 0; i < 25; i ++) {
    resourceCards.push('wood');
    resourceCards.push('wheat');
  }
  for (var j = 0; j < 20; j++) {
    resourceCards.push('stone');
    resourceCards.push('fish');
  }
  for (var x = 0; x < 9; x++) {
    resourceCards.push('gold');
  }
  resourceCards.push('diamond');
  elemNumberOfResourceCards.innerHTML = resourceCards.length;
}

function drawResourceCard() {
  randomCardIndex = Math.floor(Math.random() * resourceCards.length);
  elemGameInfo.innerHTML += "You drew a " + resourceCards[randomCardIndex] + " card.<br />"
  resourceCards.splice(randomCardIndex, 1);
  elemNumberOfResourceCards.innerHTML = resourceCards.length;
}
