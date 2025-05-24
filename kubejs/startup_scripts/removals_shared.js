global.removals = [
];

function removeArmor(material) {
    global.removals.push(material + "_chestplate");
    global.removals.push(material + "_boots");
    global.removals.push(material + "_helmet");
    global.removals.push(material + "_leggings");
}

removeArmor("minecraft:iron");
removeArmor("minecraft:golden");
removeArmor("minecraft:diamond");
removeArmor("minecraft:netherite");
