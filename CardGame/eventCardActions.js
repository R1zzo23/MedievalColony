function eventCardAction(card){
  if (card === "hire mercenary") {
    elemGameInfo.innerHTML += "You hired a mercenary to join your forces!<br />";
    playerHand.warrior++
  }
  if (card === "drought") {
    elemGameInfo.innerHTML += "A terrible drought has hit and decimated your wheat collection.<br />";
    playerHand.wheat = Math.floor(playerHand.wheat / 2);
  }
  if (card === "barbarian attack"){
    elemGameInfo.innerHTML += "A random barbarian attack has ended in bloodshed.<br />";
    if (playerHand.warrior > 0)
      playerHand.warrior--;
    if (playerHand.worker > 0) {
      if (playerHand.worker > 1)
        playerHand.worker -= 2;
      else
        playerHand.worker = 0;
    }
  }
}
