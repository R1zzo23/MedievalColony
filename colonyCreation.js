function colonyCreation() {
  chooseColonyName();
  chooseColonySpecialty();
}

function chooseColonyName() {
    var txt;
    var colonyName = prompt("Please enter your colony name:", colony.name);
    if (colonyName == null || colonyName == "") {
        chooseColonyName();
    } else {
        colony.name = colonyName;
    }
    var nameArray = document.getElementsByClassName("colonyName");

    for(var i = (nameArray.length - 1); i >= 0; i--)
    {
        nameArray[i].innerHTML = colony.name;
    }
}

function chooseColonySpecialty() {
   $('#myPopup').show();
}
