// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')


ServerEvents.recipes(e => { //listen for the "recipes" server event.
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.
      
    console.log('Hello! The recipe event has fired!');

    e.smelting('2x supplementaries:ash', 'compressedblocks:c1_cobblestone');

    e.shapeless('kubejs:marine_food', [
        'minecraft:sugar',
        'aquaculture:worm',
        '3x supplementaries:ash'
    ]);
    e.shapeless('kubejs:marine_food', [
        'minecraft:sugar',
        'alexs_herps_:mealworm',
        '3x supplementaries:ash'
    ]);
  })