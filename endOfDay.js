function endDay() {
  if (stats.gold.workers > 0) {
    addSkillXp(calculateResourcesCollected("gold", "mining"), "mining");
  }
  if (stats.stone.workers > 0) {
    addSkillXp(calculateResourcesCollected("stone", "mining"), "mining");
  }
  if (stats.fish.workers > 0) {
    addSkillXp(calculateResourcesCollected("fish", "fishing"), "fishing");
  }
  if (stats.wheat.workers > 0) {
    addSkillXp(calculateResourcesCollected("wheat", "farming"), "farming");
  }
  if (stats.wood.workers > 0) {
    addSkillXp(calculateResourcesCollected("wood", "lumber"), "lumber");
  }
  showStats();
}

function calculateResourcesCollected(resource, skill) {
  let amountCollected = Math.round((stats[resource].workers * 20) * (skills[skill].level * 0.5));
  stats[resource].amount += amountCollected;
  return amountCollected;
}

function addSkillXp(collected, skill) {
  let xpAdded = Math.floor(Math.random() * ((collected * 0.75) - (collected * 0.3) + 1)) + (collected * 0.3);
  console.log('xpAdded: ' + xpAdded);
  skills[skill].xp += xpAdded;
  console.log(skill + ' total XP now: ' + skills[skill].xp);
  stats.totalXp += xpAdded;
  console.log('Total Colony XP Now: ' + stats.totalXp);
}
