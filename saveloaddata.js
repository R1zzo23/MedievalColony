function saveData() {
  console.log("Saving data to local storage...");
  localStorage.setItem('colony', JSON.stringify(colony));
}

function loadData() {
  console.log("Loading data from local storage...");
  var retrievedColony = localStorage.getItem('colony');

  console.log('retrievedColony: ', JSON.parse(retrievedColony));
}
