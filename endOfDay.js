function endDay() {
  if (stats.gold.workers > 0) {
    calculateResourcesCollected("gold", "mining");
  }
  if (stats.stone.workers > 0) {
    calculateResourcesCollected("stone", "mining");
  }
  if (stats.fish.workers > 0) {
    calculateResourcesCollected("fish", "fishing");
  }
  if (stats.wheat.workers > 0) {
    calculateResourcesCollected("wheat", "farming");
  }
  if (stats.wood.workers > 0) {
    calculateResourcesCollected("wood", "lumber");
  }
  showStats();
}

function calculateResourcesCollected(resource, skill) {
  let amountCollected = (stats[resource].workers * 20) * (skills[skill].level * 0.5);
  stats[resource].amount += Math.round(amountCollected);
}
