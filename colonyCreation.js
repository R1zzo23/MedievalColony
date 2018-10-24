function colonyCreation() {
  chooseColonyName();
}

function chooseColonyName() {
    var txt;
    var colonyName = prompt("Please enter your colony name:", colony.name);
    if (colonyName == null || colonyName == "") {
        chooseColonyName();
    } else {
        colony.name = colonyName;
    }
    colonyQuadrantLocation();
    var nameArray = document.getElementsByClassName("colonyName");

    for(var i = (nameArray.length - 1); i >= 0; i--)
    {
        nameArray[i].innerHTML = colony.name + " of the " + colony.location.description;
    }
}

function colonyQuadrantLocation() {
  colony.location.quadrant = Math.floor(Math.random() * 4) + 1;
  if (colony.location.quadrant == 1)
    colony.location.description = "North";
  else if (colony.location.quadrant == 2)
    colony.location.description = "South";
  else if (colony.location.quadrant == 3)
    colony.location.description = "East";
  else if (colony.location.quadrant == 4)
    colony.location.description = "West";
}
