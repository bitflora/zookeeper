import mods.jmapstages.JMapStages;

// Restricts the player from having the minimap open on their screen.
mods.jmapstages.JMapStages.setMinimapStage("owl_minimap");

// // Restricts players from making death waypoints on the map.
// mods.jmapstages.JMapStages.setDeathpointStage("owl_death_waypoint");

// Restricts players from making waypoints or seeing them in world.
mods.jmapstages.JMapStages.setWaypointStage("owl_waypoint");

// Restricts players from accessing the fullscreen and options screen.
mods.jmapstages.JMapStages.setFullscreenStage("owl_fullmap");

import mods.appleskinstage.AppleskinStage;

AppleskinStage.setStage("owl_appleskin");

import mods.jadestage.JadeStage;

JadeStage.setStage("owl_jade");

import mods.itemstages.ItemStages;

ItemStages.restrict(<item:scannable:scanner>, "owl_scanner");

ItemStages.restrict(<item:minecraft:lead>, "spider_lead");
ItemStages.restrict(<item:cagebox:cage_box>, "spider_cagebox");


import crafttweaker.api.mod.Mod;

for item in loadedMods.nomadictents.itemStacks {
    // println(item);
    ItemStages.restrict(item, "turtle_tent");
}
