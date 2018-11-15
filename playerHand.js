function displayPlayerHand(hand) {
  elemGameInfo.innerHTML += "Wood: " + hand.wood + "<br />";
  elemGameInfo.innerHTML += "Wheat: " + hand.wheat + "<br />";
  elemGameInfo.innerHTML += "Stone: " + hand.stone + "<br />";
  elemGameInfo.innerHTML += "Fish: " + hand.fish + "<br />";
  elemGameInfo.innerHTML += "Gold: " + hand.gold + "<br />";
  elemGameInfo.innerHTML += "Worker: " + hand.diamond + "<br />";
  elemGameInfo.innerHTML += "Explorer: " + hand.explorer + "<br />";
  elemGameInfo.innerHTML += "Warrior: " + hand.warrior + "<br />";
  elemGameInfo.innerHTML += "Archer: " + hand.archer + "<br />";
  elemGameInfo.innerHTML += "Knight: " + hand.knight + "<br />";
  elemGameInfo.innerHTML += "Cleric: " + hand.cleric + "<br />";
}
