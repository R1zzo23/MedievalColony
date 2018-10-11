function updateWorkerDistribution() {
  elemIdle.textContent = stats.idle;
  elemGoldWorkers.textContent = stats.gold.workers;
  elemStoneWorkers.textContent = stats.stone.workers;
  elemWheatWorkers.textContent = stats.wheat.workers;
  elemFishWorkers.textContent = stats.fish.workers;
  elemWoodWorkers.textContent = stats.wood.workers;
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
