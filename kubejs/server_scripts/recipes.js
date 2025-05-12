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
    e.remove({ mod: "inventorypets"});

    // misc recipe adjustments
    e.remove({ output: 'cagebox:cage_box' });
    e.shaped('1x cagebox:cage_box', [
        'III',
        'IBI',
        'CCC'
      ], {
        C: 'compressedblocks:c1_cobblestone',
        I: 'minecraft:iron_bars',
        B: 'kubejs:brain'
      }
    );

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

    e.shaped('cyclic:waxed_redstone', [
        'BBB',
        'BR ',
        'BBB'
    ], {
        R: 'minecraft:redstone_block',
        B: 'kubejs:fur_ball'
    });

    // Add back inventory pets
    e.remove({ output: "cookingforblockheads:cow_jar"});
    e.shaped('cookingforblockheads:cow_jar', [
        'GBG',
        'MFM',
        'GMG'
    ], {
        B: 'minecraft:beef',
        G: 'minecraft:glass',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_cow', [
        'DXD',
        'FMF',
        'FMF'
    ], {
        X: 'minecraft:beef',
        G: 'minecraft:diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_chicken', [
        'DXD',
        'FMF',
        'FMF'
    ], {
        X: 'minecraft:feather',
        G: 'minecraft:diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_sheep', [
        'DXD',
        'FMF',
        'FMF'
    ], {
        X: 'minecraft:white_wool',
        G: 'minecraft:diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_pig', [
        'DXD',
        'FMF',
        'FMF'
    ], {
        X: 'minecraft:porkchop',
        G: 'minecraft:diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_ocelot', [
        'WXW',
        'FMF',
        'FMF'
    ], {
        W: 'minecraft:string',
        G: 'minecraft:diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_squid', [
        'WXW',
        'FMF',
        'FMF'
    ], {
        W: 'minecraft:ink_sac',
        G: 'minecraft:diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_pufferfish', [
        'WXW',
        'FMF',
        'FMF'
    ], {
        W: 'minecraft:pufferfish',
        G: 'minecraft:diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });



    // Rat recipe adjustments
    e.remove({ output: 'rats:rat_cage' });
    e.shaped('rats:rat_cage', [
        'BBB',
        'B B',
        'CFC'
    ], {
        B: 'minecraft:iron_bars',
        F: 'kubejs:fur_ball',
        C: 'compressedblocks:c1_cobblestone',
    });

    e.remove({ output: 'rats:rat_breeding_lantern' });
    e.shaped('rats:rat_breeding_lantern', [
        ' F ',
        'RLR',
        ' R '
    ], {
        L: 'minecraft:redstone_lamp',
        F: 'kubejs:fur_ball',
        R: 'minecraft:red_dye',
    });

    e.remove({ output: 'rats:cheese_stick' });
    e.shaped('rats:rat_breeding_lantern', [
        '  C',
        ' F ',
        'S  '
    ], {
        S: 'minecraft:stick',
        F: 'kubejs:fur_ball',
        C: 'rats:cheese',
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
    e.shapeless('kubejs:fur_mess', [
        '2x #minecraft:wool',
        '2x #kubejs:furs',
        '2x #forge:feathers'
    ]);

    e.shapeless('kubejs:fur_ball', [
        '9x kubejs:fur_mess',
    ]);

    // meatwad
    e.shapeless('kubejs:meat_mess', [
        '2x #kubejs:mammal_meat',
        '2x #kubejs:bird_meat',
        '#forge:raw_fishes'
    ]);

    e.shaped('kubejs:brain', [
        'MMM',
        'MRM',
        'MMM'
    ], {
        M: 'kubejs:meatwad',
        R: 'minecraft:redstone',
    });

    e.shapeless('kubejs:stem_cell', [
        'kubejs:meatwad',
        'kubejs:fur_ball',
        '#forge:eggs'
    ]);



    // Tinker's Construct items
    e.remove({ output: 'tconstruct:smeltery_controller'});
    e.shaped('tconstruct:smeltery_controller', [
        'BCB',
        'CXC',
        'BCB'
    ], {
        B: 'tconstruct:seared_brick',
        C: 'minecraft:copper_ingot',
        X: 'kubejs:brain',
    });


    e.remove({ output: 'tconstruct:foundry_controller'});
    e.shaped('tconstruct:foundry_controller', [
        'BCB',
        'CXC',
        'BCB'
    ], {
        B: 'tconstruct:scorched_brick',
        C: 'minecraft:obsidian',
        X: 'kubejs:brain',
    });

    e.remove({ output: 'tconstruct:grout'});
    e.shaped('8x tconstruct:grout', [
        'CSS',
        'SSA',
        'AAA'
    ], {
        M: 'minecraft:clay',
        S: '#forge:sand',
        A: 'supplementaries:ash',
    });

    e.shaped('2x tconstruct:grout', [
        'CS ',
        'A  ',
        '   '
    ], {
        M: 'minecraft:clay',
        S: '#forge:sand',
        A: 'supplementaries:ash',
    });

    e.remove({ output: 'tconstruct:nether_grout'});
    e.shaped('8x tconstruct:nether_grout', [
        'MSS',
        'SSA',
        'AAA'
    ], {
        M: 'minecraft:magma_block',
        S: '#minecraft:soul_fire_base_blocks',
        A: 'supplementaries:ash',
    });


    e.shaped('2x tconstruct:nether_grout', [
        'MS ',
        'A  ',
        '   '
    ], {
        M: 'minecraft:magma_cream',
        S: '#minecraft:soul_fire_base_blocks',
        A: 'supplementaries:ash',
    });

    // tconstruct rec

    //castingTable(e, "minecraft:acacia_button", "minecraft:cobblestone", "kubejs:liquid_science", 20, 40, true);
    e.custom({
      type: "tconstruct:casting_table",
      cast: {
        item: 'exoticbirds:peafowl_egg'
      },
      cast_consumed: true,
      fluid: {
        fluid: 'tconstruct:molten_gold',
        amount: 810
      },
      result: {
        item: 'exoticbirds:peafowl_spawn_egg',
        nbt: {
          EntityTag:{"Variant":2},
          display:{Name:'{"text":"Albino peafowl spawn egg"}' }
        }
      },
      cooling_time: 40
    });

    castingBasin(e, "kubejs:embryo", "kubejs:stem_cell", "kubejs:liquid_science", 810, 60, true);

  });

  function castingBasin(event, result, castItem, inputFluid, amount, coolingTime, consumption) {
    event.custom({
      type: "tconstruct:casting_basin",
      cast: {
        item: castItem
      },
      cast_consumed: consumption,
      fluid: {
        fluid: inputFluid,
        amount: amount
      },
      result: result,
      cooling_time: coolingTime
    });
  }

  function castingTable(event, result, castItem, inputFluid, amount, coolingTime, consumption) {
    event.custom({
      type: "tconstruct:casting_table",
      cast: {
        item: castItem
      },
      cast_consumed: consumption,
      fluid: {
        fluid: inputFluid,
        amount: amount
      },
      result: result,
      cooling_time: coolingTime
    });
  }