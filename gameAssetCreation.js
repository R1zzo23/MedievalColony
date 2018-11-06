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
