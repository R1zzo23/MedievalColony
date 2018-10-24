function updateWorkerDistribution() {
  elemWarriors.textContent = stats.population.warriors;
  elemIdle.textContent = stats.population.idle;
  elemGoldWorkers.textContent = stats.gold.workers;
  elemStoneWorkers.textContent = stats.stone.workers;
  elemWheatWorkers.textContent = stats.wheat.workers;
  elemFishWorkers.textContent = stats.fish.workers;
  elemWoodWorkers.textContent = stats.wood.workers;
}

function makeWorkerWork(x) {
  if (stats.population.idle === 0) {
    console.log("There are no idle workers to put to work!");
  }
  else {
    console.log("Worker sent to collect " + x + ".");
    stats.population.idle--;
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
    stats.population.idle++;
    updateWorkerDistribution();
    console.log("Reduce " + x + " workers by 1!");
  }
}
