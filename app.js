$(document).ready(function() {
  stats = colony.stats;
  skills = colony.skills;

  elemLevel = document.getElementById("level");
  elemTotalXp = document.getElementById('totalXp');
  elemPopulation = document.getElementById('population');
  elemIdle = document.getElementById('idle');
  elemGold = document.getElementById('gold');
  elemStone = document.getElementById('stone');
  elemWheat = document.getElementById('wheat');
  elemFish = document.getElementById('fish');
  elemWood = document.getElementById('wood');
  elemGoldWorkers = document.getElementById('goldWorkers');
  elemStoneWorkers = document.getElementById('stoneWorkers');
  elemWheatWorkers = document.getElementById('wheatWorkers');
  elemFishWorkers = document.getElementById('fishWorkers');
  elemWoodWorkers = document.getElementById('woodWorkers');
  elemMiningLevel = document.getElementById('miningLevel');
  elemFishingLevel = document.getElementById('fishingLevel');
  elemFarmingLevel = document.getElementById('farmingLevel');
  elemLumberLevel = document.getElementById('lumberLevel');

  showStats();
  updateWorkerDistribution();
  updateColonyLevels();
});

let colony = {
  stats : {
    "level" : 1,
    "population" : 3,
    "idle" : 3,
    "totalXp" : 0,
    gold : {
      "amount" : 0,
      "workers" : 0,
    },
    stone : {
      "amount" : 0,
      "workers" : 0,
    },
    wheat : {
      "amount" : 25,
      "workers" : 0,
    },
    fish : {
      "amount" : 0,
      "workers" : 0,
    },
    wood : {
      "amount" : 25,
      "workers" : 2,
    },
  },
  skills : {
    mining : {
      "level" : 1,
      "xp" : 0,
    },
    fishing : {
      "level" : 1,
      "xp" : 0,
    },
    farming : {
      "level" : 1,
      "xp" : 0,
    },
    lumber : {
      "level" : 1,
      "xp" : 0,
    },
    influence : {
      "level" : 1,
      "xp" : 0,
    },
    negotiating : {
      "level" : 1,
      "xp" : 0,
    },
    fighting : {
      "level" : 1,
      "xp" : 0,
    },
  }
};

function showStats() {
  elemLevel.textContent = stats.level;
  elemTotalXp.textContent = stats.totalXp;
  elemPopulation.textContent = stats.population;
  elemGold.textContent = stats.gold.amount;
  elemStone.textContent = stats.stone.amount;
  elemWheat.textContent = stats.wheat.amount;
  elemFish.textContent = stats.fish.amount;
  elemWood.textContent = stats.wood.amount;
}

function updateWorkerDistribution() {
  elemIdle.textContent = stats.idle;
  elemGoldWorkers.textContent = stats.gold.workers;
  elemStoneWorkers.textContent = stats.stone.workers;
  elemWheatWorkers.textContent = stats.wheat.workers;
  elemFishWorkers.textContent = stats.fish.workers;
  elemWoodWorkers.textContent = stats.wood.workers;
}

function updateColonyLevels() {
  elemMiningLevel.textContent = skills.mining.level;
  elemFishingLevel.textContent = skills.fishing.level;
  elemFarmingLevel.textContent = skills.farming.level;
  elemLumberLevel.textContent = skills.lumber.level;
}

function makeWorkerWork(x) {
  if (stats.idle === 0) {
    console.log("There are no idle workers to put to work!");
  }
  else {
    console.log("Worker sent to collect " + x + ".");
    stats.idle--;
    stats[x].workers++;
    updateWorkerDistribution();
  }
}

function makeWorkerIdle(x) {
  var workersOnThisResource = stats[x].workers;

  if (workersOnThisResource === 0){
    console.log("There are no workers collecting " + x + "!");
  }
  else {
    stats[x].workers--;
    stats.idle++;
    updateWorkerDistribution();
    console.log("Reduce " + x + " workers by 1!");
  }
}
