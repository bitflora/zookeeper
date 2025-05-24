

JEIEvents.hideItems( e => {
    global.removals.forEach( item => {
        console.log("hiding " + item);
        e.hide(item);
    });

    // only allow ancient hide maille, which is made from dinosaurs
    [
        'copper',
        'leather',
        'iron',
        'seared_stone',
        'scorched_stone',
        'gold',
        'slimesteel',
        'amethyst_bronze',
        'obsidian',
        'pig_iron',
        'cobalt',
        'steel',
        'cinderslime',
        'queens_slime',
        'hepatizon',
        'manyullyn',
        'rose_gold',
    ].forEach( material => {
        e.hide(Item.of('tconstruct:maille', '{Material:"tconstruct:' + material + '"}').strongNBT());
    });
});