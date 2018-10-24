function warriorTurnedMercenary(x) {
  var probability;
  if (x == 1)
    probability = 0.10;
  else if (x == 2)
    probability = 0.25;
  else if (x == 3)
    probability = 0.50;
  else {
    probability = 0.85;
  }

  if (Math.random() <= probability){
    mercs = Math.round(stats.population.warriors * probability);
    if (mercs > stats.population.warriors){
      mercs = stats.population.warriors;
    }
    alert("Due to fish shortage " + mercs + " of " + colony.name + "\'s warriors have left to become mercenaries.");
    stats.population.warriors -= mercs;
  }
}
