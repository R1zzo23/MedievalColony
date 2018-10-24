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
  warriorFish = 0;
  warriorWheat = 0;
  workerWheat = 0;
  if (stats.population.warriors > 0)
    warriorFood = warriorsEatFirst();
    warriorFish = warriorFood[0];
    warriorWheat = warriorFood[1];
  if (stats.population.workers > 0)
    workerWheat = workersEatLast();
  wheatConsumed = warriorWheat + workerWheat;

  if (warriorFish > 0) {
    info.innerHTML += "Colony consumed " + warriorFish + " units of fish and " + wheatConsumed + " units of wheat.<br />";
  }
  else {
    info.innerHTML += "Colony consumed " + wheatConsumed + " units of wheat.<br />";
  }
}

function warriorsEatFirst() {
  consumedFish = stats.population.warriors * 3;
  warriorWheat = 0;
  colonyFish = stats.fish.amount;

  if (consumedFish > colonyFish) {
    stats.fish.daysWithout++;
    warriorWheat = Math.floor((consumedFish - colonyFish) * 1.5);
    consumedFish = colonyFish;
    stats.fish.amount = 0;
    warriorHappiness();
    stats.wheat.amount -= warriorWheat;
  }
  else {
    stats.fish.amount -= consumedFish;
    stats.fish.daysWithout = 0;
  }
  return [consumedFish, warriorWheat];
}

function warriorHappiness() {
  if (stats.fish.daysWithout > 0){
    if (stats.fish.daysWithout == 1)
      alert("Your colony has no more fish! Warriors need protein to stay strong.");
    else if (stats.fish.daysWithout == 2)
      alert(colony.name + " is still without fish. To keep the warriors happy it needs to be replenished.");
    else if (stats.fish.daysWithout >= 3)
      alert(colony.name + "'s fish collection has been depleted for days! The warriors of " + colony.name + " are angry.");

    warriorTurnedMercenary(stats.fish.daysWithout);
  }
}

function workersEatLast() {
  consumedWheat = stats.population.workers * 2;
  colonyWheat = stats.wheat.amount;

  if (consumedWheat > colonyWheat) {
    stats.wheat.daysWithout++;
    consumedWheat = colonyWheat;
    stats.wheat.amount = 0;
    workerHappiness();
  }
  else {
    stats.wheat.amount -= consumedWheat;
    stats.wheat.daysWithout = 0;
  }

  return consumedWheat;
}

function workerHappiness() {
  if (stats.wheat.daysWithout == 1)
    alert("Your colony has no more wheat! The people of " + colony.name + " are famished.");
  else if (stats.wheat.daysWithout == 2)
    alert("The people of " + colony.name + " are going hungry and their health is failing.");
  else if (stats.wheat.daysWithout >= 3)
    alert(colony.name + " is in unrest and upheaval due to the lack of food!");
}
