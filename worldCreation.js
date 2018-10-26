world = {
  "name" : "Europe",
  locations : {
    north : {
      resources : {
        "gold" : 250,
        "stone" : 500,
        "diamond" : 75,
        "wheat" : 2500,
        "wood" : 2500,
      },
    },
    south : {
      resources : {
        "gold" : 250,
        "stone" : 500,
        "diamond" : 75,
        "wheat" : 2500,
        "wood" : 2500,
      },
    },
    east : {
      resources : {
        "gold" : 250,
        "stone" : 500,
        "diamond" : 75,
        "wheat" : 2500,
        "wood" : 2500,
      },
    },
    west : {
      resources : {
        "gold" : 250,
        "stone" : 500,
        "diamond" : 75,
        "wheat" : 2500,
        "wood" : 2500,
      },
    },
  },
};

function updateWorldResourceTable() {
  elemNorthGold.innerHTML = world.locations.north.resources.gold;
  elemSouthGold.innerHTML = world.locations.south.resources.gold;
  elemEastGold.innerHTML = world.locations.east.resources.gold;
  elemWestGold.innerHTML = world.locations.west.resources.gold;
  elemNorthStone.innerHTML = world.locations.north.resources.stone;
  elemSouthStone.innerHTML = world.locations.south.resources.stone;
  elemEastStone.innerHTML = world.locations.east.resources.stone;
  elemWestStone.innerHTML = world.locations.west.resources.stone;
  elemNorthDiamond.innerHTML = world.locations.north.resources.diamond;
  elemSouthDiamond.innerHTML = world.locations.south.resources.diamond;
  elemEastDiamond.innerHTML = world.locations.east.resources.diamond;
  elemWestDiamond.innerHTML = world.locations.west.resources.diamond;
  elemNorthWheat.innerHTML = world.locations.north.resources.wheat;
  elemSouthWheat.innerHTML = world.locations.south.resources.wheat;
  elemEastWheat.innerHTML = world.locations.east.resources.wheat;
  elemWestWheat.innerHTML = world.locations.west.resources.wheat;
  elemNorthWood.innerHTML = world.locations.north.resources.wood;
  elemSouthWood.innerHTML = world.locations.south.resources.wood;
  elemEastWood.innerHTML = world.locations.east.resources.wood;
  elemWestWood.innerHTML = world.locations.west.resources.wood;
}
