$(document).ready(function() {
  playerHand = {
    "gold" : 0,
    "stone" : 0,
    "wheat" : 0,
    "fish" : 0,
    "wood" : 0,
    "diamond" : 0,
    "worker" : 0,
    "explorer" : 0,
    "warrior" : 0,
    "archer" : 0,
    "knight" : 0,
    "cleric" : 0,
  };
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
  citizenCards = [];
  eventCards = [];
  elemNumberOfResourceCards = document.getElementById('numberOfResourceCards');
  elemNumberOfCitizenCards = document.getElementById('numberOfCitizensCards');
  elemNumberOfEventCards = document.getElementById('numberOfEventCards');
  elemGameInfo = document.getElementById('gameInfo');
  createResourceCards();
  createCitizenCards();
  createEventCards();
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

function createCitizenCards() {
  for (var i = 0; i < 25; i++) {
    citizenCards.push('worker');
  }
  for (var j = 0; j < 20; j++) {
    citizenCards.push('explorer');
    citizenCards.push('warrior');
  }
  for (var x = 0; x < 10; x++) {
    citizenCards.push('archer');
    citizenCards.push('knight');
  }
  for (var y = 0; y < 5; y++) {
    citizenCards.push('cleric');
  }
  elemNumberOfCitizenCards.innerHTML = citizenCards.length;
}

function createEventCards() {
  eventCards.push('barbarian attack');
  eventCards.push('drought');
  eventCards.push('hire mercenary');
  elemNumberOfEventCards.innerHTML = eventCards.length;
}

function drawResourceCard() {
  if (resourceCards.length > 0) {
    randomCardIndex = Math.floor(Math.random() * resourceCards.length);
    elemGameInfo.innerHTML = "Card drawn: " + resourceCards[randomCardIndex] + "<br />";
    playerHand[resourceCards[randomCardIndex]]++;
    resourceCards.splice(randomCardIndex, 1);
    elemNumberOfResourceCards.innerHTML = resourceCards.length;
    displayPlayerHand(playerHand);
  }
}

function drawCitizenCard() {
  if (citizenCards.length > 0) {
    randomCardIndex = Math.floor(Math.random() * citizenCards.length);
    elemGameInfo.innerHTML = "Card drawn: " + citizenCards[randomCardIndex] + "<br />";
    playerHand[citizenCards[randomCardIndex]]++;
    citizenCards.splice(randomCardIndex, 1);
    elemNumberOfCitizenCards.innerHTML = citizenCards.length;
    displayPlayerHand(playerHand);
  }
}

function drawEventCard() {
  if (eventCards.length > 0) {
    randomCardIndex = Math.floor(Math.random() * eventCards.length);
    elemGameInfo.innerHTML = "Card drawn: " + eventCards[randomCardIndex] + "<br />";
    eventCardAction(eventCards[randomCardIndex]);
    eventCards.splice(randomCardIndex, 1);
    elemNumberOfEventCards.innerHTML = eventCards.length;
    displayPlayerHand(playerHand);
  }
}
