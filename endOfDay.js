function endDay() {
  info.innerHTML = "";
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
  info.innerHTML += "Collected " + amountCollected + " units of " + resource + ".<br />";
  return amountCollected;
}

function addSkillXp(collected, skill) {
  let xpAdded = Math.floor(Math.random() * ((collected * 0.75) - (collected * 0.3) + 1)) + (collected * 0.3);
  console.log('xpAdded: ' + xpAdded);
  skills[skill].xp += xpAdded;
  console.log(skill + ' total XP now: ' + skills[skill].xp);
  stats.totalXp += xpAdded;
  console.log('Total Colony XP Now: ' + stats.totalXp);
  checkForSkillLevelUp(skill);
}

function checkForSkillLevelUp (skill) {
  console.log("XP Needed to Level Up: " + ((skills[skill].level * 250) + (250 * (3 + (skills[skill].level / 10)))));
  if (skills[skill].xp >= ((skills[skill].level * 250) + (250 * (3 + (skills[skill].level / 10))))) {
    skills[skill].level++;
    info.innerHTML += "The colony has grown stronger in " + skill +"!<br />";
    updateColonyLevels();
  }
}
