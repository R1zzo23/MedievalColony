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
  consumeFoodForPopulation();
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

function consumeFoodForPopulation () {
  consumedFish = stats.population.warriors * 3;

  if (consumedFish > stats.fish.amount) {
    stats.fish.daysWithout++;
    var warriorWheat = Math.floor((consumedFish - stats.fish.amount) * 1.5);
    consumedFish = stats.fish.amount;
    stats.fish.amount = 0;
    if (stats.fish.daysWithout == 1)
      alert("Your colony has no more fish! Warriors need protein to stay strong.");
    else if (stats.fish.daysWithout == 2)
      alert(colony.name + " is still without fish. To keep the warriors happy it needs to be replenished.");
    else if (stats.fish.daysWithout >= 3)
      alert(colony.name + "'s fish collection has been depleted for days! The warriors of " + colony.name + " are angry.");
    stats.wheat.amount -= warriorWheat;
  }
  else {
    stats.fish.amount -= consumedFish;
    stats.fish.daysWithout = 0;
  }

  consumedWheat = stats.population.workers * 2;
  stats.wheat.amount -= consumedWheat;

  totalWheat = consumedWheat + warriorWheat;

  info.innerHTML += "Colony consumed " + consumedFish + " units of fish.<br />";
  info.innerHTML += "Colony consumed " + totalWheat + " units of wheat.<br />";
}
