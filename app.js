document.addEventListener("DOMContentLoaded", function(){
  showStats();
});

let colony = {
  stats : {
    "level" : 1,
    "population" : 3,
    "totalXp" : 0,
    "gold" : 0,
    "stone" : 0,
    "wheat" : 0,
    "fish" : 0,
    "wood" : 0,
  },
  skills : {
    mining : {
      "lvl" : 1,
      "xp" : 0,
    },
    fishing : {
      "lvl" : 1,
      "xp" : 0,
    },
    farming : {
      "lvl" : 1,
      "xp" : 0,
    },
    lumber : {
      "lvl" : 1,
      "xp" : 0,
    },
    influence : {
      "lvl" : 1,
      "xp" : 0,
    },
    negotiating : {
      "lvl" : 1,
      "xp" : 0,
    },
    fighting : {
      "lvl" : 1,
      "xp" : 0,
    },
  }
};

let stats = colony.stats;
let skills = colony.skills;

let elemLevel = document.getElementById("level");
/*let elemTotalXp = document.getElementById('totalXp');
let elemPopulation = document.getElementById('population');
let elemGold = document.getElementById('gold');
let elemStone = document.getElementById('stone');
let elemWheat = document.getElementById('wheat');
let elemFish = document.getElementById('fish');
let elemWood = document.getElementById('wood');*/

function showStats() {
  elemLevel.textContent = stats.level;
  /*elemTotalXp.textContent = stats.totalXp;
  elemPopulation.textContent = stats.population;
  elemGold.textContent = stats.gold;
  elemStone.textContent = stats.stone;
  elemWheat.textContent = stats.wheat;
  elemFish.textContent = stats.fish;
  elemWood.textContent = stats.wood;*/
}
