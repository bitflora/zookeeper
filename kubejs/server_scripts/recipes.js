// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')


ServerEvents.recipes(e => { //listen for the "recipes" server event.
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    console.log('Hello! The recipe event has fired!');

    // Raise the cobblestone requirements
    e.remove({ output: 'minecraft:dropper' });
    e.shaped('1x minecraft:dropper', [
        'CCC',
        'C C',
        'CRC'
      ], {
        C: 'compressedblocks:c1_cobblestone',
        R: 'minecraft:redstone',
      }
    );

    e.remove({ output: 'minecraft:dispenser' });
    e.shaped('1x minecraft:dispenser', [
        'CCC',
        'CBC',
        'CRC'
      ], {
        C: 'compressedblocks:c1_cobblestone',
        B: 'minecraft:bow',
        R: 'minecraft:redstone',
      }
    );

    e.remove({ output: 'minecraft:observer' });
    e.shaped('1x minecraft:observer', [
        'CCC',
        'RRQ',
        'CCC'
      ], {
        C: 'compressedblocks:c1_cobblestone',
        R: 'minecraft:redstone',
        Q: 'minecraft:quartz'
      }
    );

    e.remove({ output: 'minecraft:repeater' });
    e.shaped('1x minecraft:repeater', [
        '   ',
        'TRT',
        'CCC'
      ], {
        C: 'compressedblocks:c1_cobblestone',
        R: 'minecraft:redstone',
        T: 'minecraft:redstone_torch'
      }
    );

    // Remove some recipes
    e.remove({ mod: 'cyclic' })
    e.remove({ output: 'theoneprobe:probe' });

    // add back in select Cyclic items
    e.shaped('1x cyclic:clock', [
        'CCC',
        'FLT',
        'CCC'
      ], {
        C: 'compressedblocks:c1_cobblestone',
        F: 'kubejs:fur_ball',
        L: 'minecraft:clock',
        T: 'minecraft:redstone_torch'
      }
    );

    e.shaped('cyclic:sleeping_mat', [
        '   ',
        'FFB',
        'FFF'
    ], {
        F: '#kubejs:furs',
        B: 'kubejs:fur_ball'
    });

    // Custom items
    e.smelting('2x supplementaries:ash', 'compressedblocks:c1_cobblestone');

    // Marine Food
    e.shapeless('kubejs:marine_food', [
        'minecraft:sugar',
        '2x aquaculture:worm',
        '3x supplementaries:ash'
    ]);
    e.shapeless('kubejs:marine_food', [
        'minecraft:sugar',
        '3x alexs_herps_:mealworm',
        '3x supplementaries:ash'
    ]);
    e.shapeless('kubejs:marine_food', [
        'minecraft:sugar',
        '3x alexsmobs:maggot',
        '3x supplementaries:ash'
    ]);

    e.shapeless('2x alexs_herps_:burrowed_soil', [
        'alexs_herps_:burrowed_soil',
        'minecraft:dirt',
        '#minecraft:leaves'
    ]);
    e.shapeless('2x alexs_herps_:burrowed_soil', [
        'alexs_herps_:burrowed_soil',
        'minecraft:dirt',
        'farmersdelight:straw'
    ]);

    // Fur ball
    e.shapeless('kubejs:fur_ball', [
        '#minecraft:wool',
        '#kubejs:furs',
        '#forge:feathers'
    ]);

  });