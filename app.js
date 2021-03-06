$(document).ready(function() {
  stats = colony.stats;
  skills = colony.skills;

  elemLevel = document.getElementById("level");
  elemTotalXp = document.getElementById('totalXp');
  elemPopulation = document.getElementById('population');
  elemWarriors = document.getElementById('warriors');
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
  elemInfo = document.getElementById('info');

  elemNorthGold = document.getElementById('northGold');
  elemSouthGold = document.getElementById('southGold');
  elemEastGold = document.getElementById('eastGold');
  elemWestGold = document.getElementById('westGold');
  elemNorthStone = document.getElementById('northStone');
  elemSouthStone = document.getElementById('southStone');
  elemEastStone = document.getElementById('eastStone');
  elemWestStone = document.getElementById('westStone');
  elemNorthDiamond = document.getElementById('northDiamond');
  elemSouthDiamond = document.getElementById('southDiamond');
  elemEastDiamond = document.getElementById('eastDiamond');
  elemWestDiamond = document.getElementById('westDiamond');
  elemNorthFish = document.getElementById('northFish');
  elemSouthFish = document.getElementById('southFish');
  elemEastFish = document.getElementById('eastFish');
  elemWestFish = document.getElementById('westFish');
  elemNorthWheat = document.getElementById('northWheat');
  elemSouthWheat = document.getElementById('southWheat');
  elemEastWheat = document.getElementById('eastWheat');
  elemWestWheat = document.getElementById('westWheat');
  elemNorthWood = document.getElementById('northWood');
  elemSouthWood = document.getElementById('southWood');
  elemEastWood = document.getElementById('eastWood');
  elemWestWood = document.getElementById('westWood');

  colonyCreation();

  showStats();
  updateWorkerDistribution();
  updateColonyLevels();
  updateWorldResourceTable();

  document.getElementById('worldName').innerHTML = world.name;
});

colony = {
  "name" : "Colony",
  location : {
    "quadrant" : 0,
    "description" : "",
  },
  stats : {
    "level" : 1,
    "totalXp" : 0,
    population : {
      "total" : 6,
      "warriors" : 2,
      "workers" : 4,
      "idle" : 4,
    },
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
      "daysWithout" : 0,
    },
    fish : {
      "amount" : 0,
      "workers" : 0,
      "daysWithout" : 0,
    },
    wood : {
      "amount" : 25,
      "workers" : 0,
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
  elemPopulation.textContent = stats.population.total;
  elemWarriors.textContent = stats.population.warriors;
  elemGold.textContent = stats.gold.amount;
  elemStone.textContent = stats.stone.amount;
  elemWheat.textContent = stats.wheat.amount;
  elemFish.textContent = stats.fish.amount;
  elemWood.textContent = stats.wood.amount;
}

function updateColonyLevels() {
  elemMiningLevel.textContent = skills.mining.level;
  elemFishingLevel.textContent = skills.fishing.level;
  elemFarmingLevel.textContent = skills.farming.level;
  elemLumberLevel.textContent = skills.lumber.level;
}
