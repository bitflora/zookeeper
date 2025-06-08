// priority: 0

// Visit the wiki for more info - https://kubejs.com/



ServerEvents.recipes(e => { //listen for the "recipes" server event.
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    // Raise the cobblestone requirements
    e.remove({ output: 'minecraft:dropper' });
    e.shaped('1x minecraft:dropper', [
        'CCC',
        'C C',
        'CRC'
      ], {
        C: 'compressedblocks:c0_cobblestone',
        R: 'minecraft:redstone',
      }
    );

    e.remove({ output: 'minecraft:dispenser' });
    e.shaped('1x minecraft:dispenser', [
        'CCC',
        'CBC',
        'CRC'
      ], {
        C: 'compressedblocks:c0_cobblestone',
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
        C: 'compressedblocks:c0_cobblestone',
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
        C: 'compressedblocks:c0_cobblestone',
        R: 'minecraft:redstone',
        T: 'minecraft:redstone_torch'
      }
    );

    // Remove some recipes
    //e.remove({ mod: 'cyclic' }) // TODO: remove these, after investigating the recipes
    e.remove({ output: 'theoneprobe:probe' });

    modify_inventory_pets(e);

    e.remove({ output: 'zawa:capture_cage' });
    e.shaped('1x zawa:capture_cage', [
        'III',
        'IBI',
        'CCC'
      ], {
        C: 'compressedblocks:c0_cobblestone',
        I: 'minecraft:iron_bars',
        B: 'kubejs:brain'
      }
    );

    e.remove({ output: 'minecraft:saddle'});
    e.shaped('minecraft:saddle', [
        'LLL',
        'LFL',
        'F F'
    ], {
        L: 'minecraft:leather',
        F: 'kubejs:fur_ball'
    });

    e.remove({ output: 'sophisticatedbackpacks:backpack', input: 'minecraft:leather'});
    e.shaped('sophisticatedbackpacks:backpack', [
        'SLS',
        'FCF',
        'LLL'
    ], {
        S: 'minecraft:string',
        L: 'minecraft:leather',
        F: 'kubejs:fur_ball',
        C: '#forge:chests'
    });

    e.replaceInput({ output: 'sophisticatedbackpacks:upgrade_base'},
      'minecraft:leather',
      'kubejs:fur_ball',
    );

    e.remove({ output: 'sophisticatedstorage:upgrade_base'});
    e.shaped('sophisticatedstorage:upgrade_base', [
        'PIP',
        'ISI',
        'PIP'
    ], {
        I: 'minecraft:iron_ingot',
        P: '#minecraft:planks',
        S: 'kubejs:hard_science'
    });
    // Don't let them get away with upgrading backpack stuff to storage stuff; it would open progression too soon
    // Downgrading is cool, though
    [
      'storage_advanced_alchemy_upgrade_from_backpack_advanced_alchemy_upgrade',
      'storage_advanced_compacting_upgrade_from_backpack_advanced_compacting_upgrade',
      'storage_advanced_feeding_upgrade_from_backpack_advanced_feeding_upgrade',
      'storage_advanced_filter_upgrade_from_backpack_advanced_filter_upgrade',
      'storage_advanced_jukebox_upgrade_from_backpack_advanced_jukebox_upgrade',
      'storage_advanced_magnet_upgrade_from_backpack_advanced_magnet_upgrade',
      'storage_advanced_pickup_upgrade_from_backpack_advanced_pickup_upgrade',
      'storage_advanced_void_upgrade_from_backpack_advanced_void_upgrade',
      'storage_alchemy_upgrade_from_backpack_alchemy_upgrade',
      'storage_auto_blasting_upgrade_from_backpack_auto_blasting_upgrade',
      'storage_auto_smelting_upgrade_from_backpack_auto_smelting_upgrade',
      'storage_auto_smoking_upgrade_from_backpack_auto_smoking_upgrade',
      'storage_blasting_upgrade_from_backpack_blasting_upgrade',
      'storage_chipped_alchemy_bench_upgrade_from_backpack_chipped_alchemy_bench_upgrade',
      'storage_chipped_botanist_workbench_upgrade_from_backpack_chipped_botanist_workbench_upgrade',
      'storage_chipped_carpenters_table_upgrade_from_backpack_chipped_carpenters_table_upgrade',
      'storage_chipped_glassblower_upgrade_from_backpack_chipped_glassblower_upgrade',
      'storage_chipped_loom_table_upgrade_from_backpack_chipped_loom_table_upgrade',
      'storage_chipped_mason_table_upgrade_from_backpack_chipped_mason_table_upgrade',
      'storage_chipped_tinkering_table_upgrade_from_backpack_chipped_tinkering_table_upgrade',
      'storage_compacting_upgrade_from_backpack_compacting_upgrade',
      'storage_crafting_upgrade_from_backpack_crafting_upgrade',
      'storage_feeding_upgrade_from_backpack_feeding_upgrade',
      'storage_filter_upgrade_from_backpack_filter_upgrade',
      'storage_jukebox_upgrade_from_backpack_jukebox_upgrade',
      'storage_magnet_upgrade_from_backpack_magnet_upgrade',
      'storage_pickup_upgrade_from_backpack_pickup_upgrade',
      'storage_sawmill_sawmill_upgrade_from_backpack_sawmill_sawmill_upgrade',
      'storage_smelting_upgrade_from_backpack_smelting_upgrade',
      'storage_smoking_upgrade_from_backpack_smoking_upgrade',
      'storage_stack_downgrade_tier_1_from_backpack_stack_downgrade_tier_1',
      'storage_stack_downgrade_tier_2_from_backpack_stack_downgrade_tier_2',
      'storage_stack_downgrade_tier_3_from_backpack_stack_downgrade_tier_3',
      'storage_stack_upgrade_omega_tier_from_backpack_stack_upgrade_omega_tier',
      'storage_stack_upgrade_tier_1_plus_from_backpack_stack_upgrade_starter_tier',
      'storage_stack_upgrade_tier_2_from_backpack_stack_upgrade_tier_1',
      'storage_stack_upgrade_tier_3_from_backpack_stack_upgrade_tier_2',
      'storage_stack_upgrade_tier_4_from_backpack_stack_upgrade_tier_3',
      'storage_stack_upgrade_tier_5_from_backpack_stack_upgrade_tier_4',
      'storage_stonecutter_upgrade_from_backpack_stonecutter_upgrade',
      'storage_void_upgrade_from_backpack_void_upgrade',

    ].forEach( recipe_id => {
      e.remove({ id: "sophisticatedstorage:" + recipe_id });
    })

    // add back in select Cyclic items
    e.shaped('1x cyclic:clock', [
        'CCC',
        'FLT',
        'CCC'
      ], {
        C: 'compressedblocks:c0_cobblestone',
        F: 'kubejs:fur_ball',
        L: 'minecraft:clock',
        T: 'minecraft:redstone_torch'
      }
    );

    e.shaped('inventorypets:pet_bed', [
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

    e.shaped('cyclic:fan', [
        ' IF',
        'BRF',
        ' IF'
    ], {
        R: 'minecraft:redstone',
        F: 'kubejs:fur_ball',
        I: 'minecraft:iron_ingot',
        B: 'minecraft:iron_block'
    });

    e.shaped('cyclic:fan', [
        ' IF',
        'PRF',
        ' IF'
    ], {
        R: 'minecraft:redstone',
        F: 'kubejs:fur_ball',
        I: 'minecraft:iron_ingot',
        P: 'rats:rat_paw'
    });

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




    // Rat recipe adjustments
    e.remove({ output: 'rats:rat_cage' });
    e.shaped('rats:rat_cage', [
        'BBB',
        'B B',
        'CFC'
    ], {
        B: 'minecraft:iron_bars',
        F: 'kubejs:fur_ball',
        C: 'compressedblocks:c0_cobblestone',
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

    e.remove({ output: 'rats:rat_upgrade_basic' });
    e.shaped('rats:rat_upgrade_basic', [
        'CCC',
        'CFC',
        'CCC'
    ], {
        F: 'kubejs:fur_ball',
        C: 'rats:cheese',
    });

    e.remove({ output: 'rats:rat_crafting_table' });
    e.shaped('rats:rat_crafting_table', [
        'BCB',
        'CTC',
        'BCB'
    ], {
        T: 'minecraft:crafting_table',
        B: 'kubejs:brain',
        C: 'rats:cheese'
    });

    // Custom items
    e.smelting('2x supplementaries:ash', 'compressedblocks:c0_cobblestone');

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

    e.remove({output: 'goldenhopper:golden_hopper'});
    e.shaped('goldenhopper:golden_hopper', [
        ' F ',
        ' H ',
        '   '
    ], {
        H: 'minecraft:hopper',
        F: 'kubejs:fur_ball'
    });

    e.shaped('minecraft:name_tag', [
        '  F',
        ' I ',
        '   '
    ], {
        I: 'minecraft:iron_ingot',
        F: 'kubejs:fur_ball'
    });

    // prehistoric stuff is more efficient, to give incentives to upgrade farms
    e.shapeless('3x kubejs:fur_mess', [
        '2x #minecraft:wool',
        '1x unusualprehistory:smilo_fur',
        '2x #forge:feathers'
    ]);

    e.shapeless('3x kubejs:fur_mess', [
        '2x #minecraft:wool',
        '2x #kubejs:furs',
        '1x #kubejs:ancient_feathers'
    ]);

    e.shapeless('9x kubejs:fur_mess', [
        '2x #minecraft:wool',
        '1x unusualprehistory:smilo_fur',
        '1x #kubejs:ancient_feathers'
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

    e.shapeless('3x kubejs:meat_mess', [
        'unusualprehistory:raw_mammoth',
        '2x #kubejs:bird_meat',
        '#forge:raw_fishes'
    ]);

    e.shapeless('3x kubejs:meat_mess', [
        '2x #kubejs:mammal_meat',
        '2x #kubejs:bird_meat',
        '#kubejs:ancient_raw_fishes'
    ]);


    e.shapeless('3x kubejs:meat_mess', [
        '2x #kubejs:mammal_meat',
        'unusualprehistory:raw_austro',
        '#forge:raw_fishes'
    ]);

    e.shapeless('9x kubejs:meat_mess', [
        '1x unusualprehistory:raw_mammoth',
        '2x #kubejs:bird_meat',
        '#kubejs:ancient_raw_fishes'
    ]);

    e.shapeless('9x kubejs:meat_mess', [
        'unusualprehistory:raw_mammoth',
        'unusualprehistory:raw_austro',
        '#forge:raw_fishes'
    ]);

    e.shapeless('9x kubejs:meat_mess', [
        '2x #kubejs:mammal_meat',
        'unusualprehistory:raw_austro',
        '#kubejs:ancient_raw_fishes'
    ]);

    e.shapeless('18x kubejs:meat_mess', [
        'unusualprehistory:raw_mammoth',
        'unusualprehistory:raw_austro',
        '#kubejs:ancient_raw_fishes'
    ]);

    // meatwad is made by rats, see data pack

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

    e.shaped('kubejs:breeding_chow', [
      'M M',
      'MMM',
      ' M '
    ], {
      M: 'kubejs:meatwad'
    });

    // skin
    e.shapeless('kubejs:skin_mess', [
      '2x unusualprehistory:shell_shard',
      '2x unusualprehistory:palaeo_skin',
      '2x unusualprehistory:rex_scale',
      '2x unusualprehistory:antarcto_plate',
    ]);

    // bone
    e.shapeless('kubejs:bone_mess', [
      '2x unusualprehistory:trike_horn',
      '2x unusualprehistory:rex_tooth',
      '1x unusualprehistory:handmade_spear',
      '2x minecraft:bone',
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
    e.shaped('2x tconstruct:grout', [
        'CS ',
        'AF ',
        '   '
    ], {
        C: 'minecraft:clay',
        S: '#forge:sand',
        A: 'supplementaries:ash',
        F: 'kubejs:fur_ball'
    });

    e.remove({ output: 'tconstruct:nether_grout'});
    e.shaped('2x tconstruct:nether_grout', [
        'MS ',
        'AF ',
        '   '
    ], {
        M: 'minecraft:magma_cream',
        S: '#minecraft:soul_fire_base_blocks',
        A: 'supplementaries:ash',
        F: 'kubejs:fur_ball'
    });

    // tconstruct recipes

    castingBasin(e, "kubejs:embryo", "kubejs:stem_cell", "kubejs:experimental_results", 810, 60, true);

    castingTable(e, 'kubejs:scientific_paper_draft', 'minecraft:paper', 'kubejs:experimental_results', 810, 120, true);
    castingTable(e, 'kubejs:scientific_paper', 'kubejs:scientific_paper_draft', 'kubejs:anecdotes', 810, 120, true);
    castingTable(e, 'kubejs:scientific_paper', 'minecraft:paper', 'kubejs:citations', 5, 80, true);

    e.custom({
      type: "tconstruct:casting_basin",
      fluid: {
        fluid: 'kubejs:liquid_science',
        amount: 810
      },
      result: 'kubejs:hard_science',
      cooling_time: 90
    });

    e.custom({
      type: "tconstruct:casting_basin",
      fluid: {
        fluid: 'kubejs:anecdotes',
        amount: 810
      },
      result: 'kubejs:data',
      cooling_time: 90
    });


    // spawn eggs

    // TODO: remove or change; there is no gold dropped anymore
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
          //item_name:{"color":"yellow","text":"Albino peafowl spawn egg"}
          //display:{Name:'{"text":"Albino peafowl spawn egg"}' } // TODO: Make this not set the entity name
        }
      },
      cooling_time: 40
    });

    e.shaped('alexsmobs:spawn_egg_shoebill', [
      'SIS',
      ' X ',
      ' E '
    ], {
      I: '#forge:armors/boots',
      S: '#forge:feathers',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('alexsmobs:spawn_egg_bald_eagle', [
      'SIS',
      ' X ',
      ' E '
    ], {
      I: 'farmersdelight:hamburger',
      S: '#forge:feathers',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('alexsmobs:spawn_egg_mantis_shrimp', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: '#forge:tools/pickaxes',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('3x alexsmobs:spawn_egg_raccoon', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: 'alexsmobs:raccoon_tail',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('alexsmobs:spawn_egg_banana_slug', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: '#forge:slimeballs',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('alexsmobs:spawn_egg_sugar_glider', [
      'SIS',
      ' X ',
      ' E '
    ], {
      I: 'kubejs:fur_ball',
      S: 'minecraft:sugar',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('alexsmobs:spawn_egg_seal', [
      'SIS',
      ' X ',
      ' E '
    ], {
      I: '#minecraft:fishes',
      S: 'kubejs:fur_ball',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('alexsmobs:spawn_egg_platypus', [
      'sIS',
      ' X ',
      ' E '
    ], {
      I: '#minecraft:fishes',
      S: 'kubejs:fur_ball',
      s: '#forge:feathers',
      X: 'kubejs:embryo',
      E: 'eanimod:turtle_egg',
    });

    e.shaped('alexsmobs:spawn_egg_anaconda', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: 'alexsmobs:shed_snake_skin',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('4x alexsmobs:spawn_egg_lobster', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: 'alexsmobs:lobster_tail',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('alexsmobs:spawn_egg_tarantula_hawk', [
      'SIS',
      ' X ',
      ' E '
    ], {
      I: 'minecraft:spider_eye',
      S: '#forge:feathers',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('lilcritters:guinea_pig_spawn_egg', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: 'kubejs:fur_ball',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('4x minecraft:spider_spawn_egg', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: 'minecraft:spider_eye',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('4x minecraft:zombie_spawn_egg', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: 'minecraft:rotten_flesh',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('4x minecraft:skeleton_spawn_egg', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: 'minecraft:bone',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('minecraft:ocelot_spawn_egg', [
      'SIS',
      ' X ',
      ' E '
    ], {
      I: 'kubejs:fur_ball',
      S: 'minecraft:jungle_sapling',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('minecraft:cat_spawn_egg', [
      'SIS',
      ' X ',
      ' E '
    ], {
      I: 'kubejs:fur_ball',
      S: 'minecraft:string',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    // Caged Mobs
    e.remove({ output: 'cagedmobs:mob_cage'});
    e.remove({ output: 'cagedmobs:dna_sampler'});
    e.remove({ output: 'cagedmobs:diamond_dna_sampler'});
    e.remove({ output: 'cagedmobs:netherite_dna_sampler'});

    e.shaped('cagedmobs:mob_cage', [
      'III',
      'IXI',
      'BBB'
    ], {
      I: 'minecraft:iron_bars',
      X: 'kubejs:data',
      B: 'minecraft:iron_block',
    });

    e.shaped('cagedmobs:dna_sampler', [
      'I  ',
      ' X ',
      '  B'
    ], {
      I: 'minecraft:iron_ingot',
      X: 'kubejs:data',
      B: 'minecraft:iron_block',
    });

    e.shaped('cagedmobs:diamond_dna_sampler', [
      'I  ',
      ' X ',
      '  B'
    ], {
      I: '#kubejs:diamond_sampler_point',
      X: 'kubejs:data',
      B: 'minecraft:iron_block',
    });

    e.shaped('cagedmobs:netherite_dna_sampler', [
      'I  ',
      ' X ',
      '  B'
    ], {
      I: 'unusualprehistory:rex_tooth',
      X: 'kubejs:data',
      B: 'minecraft:iron_block',
    });

    // TODO: make sciencey recipes for the upgrades


    // Unusual Prehistory
    e.remove({ output: 'unusualprehistory:organic_ooze'});
    e.shaped('unusualprehistory:organic_ooze', [
        ' S ',
        'SWS',
        ' S '
    ], {
        S: 'kubejs:stem_cell',
        W: 'kubejs:hard_science',
    });

    e.remove({ output: 'unusualprehistory:flask'});
    e.shaped('3x unusualprehistory:flask', [
        ' G ',
        'G G',
        'FGF'
    ], {
        G: 'minecraft:glass',
        F: 'kubejs:fur_ball',
    });

    e.remove({ output: 'unusualprehistory:analyzer'});
    e.shaped('unusualprehistory:analyzer', [
        'III',
        'IBI',
        'CSC'
    ], {
        I: 'minecraft:iron_ingot',
        B: 'kubejs:brain',
        C: 'minecraft:copper_ingot',
        S: 'minecraft:hard_science',
    });

    e.remove({ output: 'unusualprehistory:cultivator'});
    e.shaped('unusualprehistory:cultivator', [
        'III',
        'GOG',
        'CBC'
    ], {
        I: 'minecraft:iron_ingot',
        G: 'minecraft:glass',
        O: 'unusualprehistory:organic_ooze',
        B: 'kubejs:brain',
        C: 'minecraft:copper_ingot',
    });

    e.remove({output: "tconstruct:maille"});
    e.shaped(Item.of('tconstruct:maille', '{Material:"tconstruct:ancient_hide"}'), [
        'P P',
        'PPP',
        'PPP'
    ], {
        P: 'unusualprehistory:majunga_scute',
    });


  });

  function modify_inventory_pets(e) {
    e.remove({ mod: "inventorypets"});

    // available immediately
    e.shaped('inventorypets:temp_chest', [
        'PPP',
        'PCP',
        'PPP'
    ], {
        P: '#minecraft:planks',
        C: '#forge:chests'
    });

    e.shaped('inventorypets:temp_double_chest', [
        'CC ',
        '   ',
        '   '
    ], {
        C: 'inventorypets:temp_chest'
    });

    // put this back for use downstream
    e.shapeless('9x inventorypets:nugget_diamond', ['minecraft:diamond']);
    e.shapeless('minecraft:diamond', ['9x inventorypets:nugget_diamond']);

    // the rest require meatwads
    e.shaped('inventorypets:pet_cow', [
        ' X ',
        'FMF',
        'FMF'
    ], {
        X: 'minecraft:beef',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_chicken', [
        'DXD',
        'FMF',
        'FMF'
    ], {
        X: 'minecraft:feather',
        D: 'inventorypets:nugget_diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_sheep', [
        'DXD',
        'FMF',
        'FMF'
    ], {
        X: 'minecraft:white_wool',
        D: 'inventorypets:nugget_diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_pig', [
        ' X ',
        'FMF',
        'FMF'
    ], {
        X: 'minecraft:porkchop',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_ocelot', [
        'WXW',
        'FMF',
        'FMF'
    ], {
        W: 'minecraft:string',
        X: 'minecraft:jungle_sapling',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_siamese', [
        'WWW',
        'FMF',
        'FMF'
    ], {
        W: 'minecraft:string',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_cheetah', [
        'WXW',
        'FMF',
        'FMF'
    ], {
        W: 'minecraft:string',
        X: 'minecraft:diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_wolf', [
        'DBD',
        'FMF',
        'FMF'
    ], {
        D: 'inventorypets:nugget_diamond',
        B: 'minecraft:bone',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_squid', [
        'WXW',
        'FMF',
        'FMF'
    ], {
        W: 'minecraft:ink_sac',
        X: 'minecraft:diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_pufferfish', [
        'WXW',
        'FMF',
        'FMF'
    ], {
        W: 'minecraft:pufferfish',
        X: 'minecraft:diamond',
        F: 'kubejs:fur_ball',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_creeper', [
        ' T ',
        'LML',
        'LML'
    ], {
        T: 'minecraft:tnt',
        L: '#minecraft:leaves',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_spider', [
        ' X ',
        'XMX',
        'XMX'
    ], {
        X: 'minecraft:cobweb',
        M: 'kubejs:meatwad'
    });

    e.shaped('inventorypets:pet_magma_cube', [
        'CCC',
        'BMB',
        'BMB'
    ], {
        C: 'minecraft:magma_cream',
        M: 'kubejs:meatwad',
        B: 'minecraft:magma_block',
    });

    e.shaped('inventorypets:pet_wither', [
        'NNN',
        'MMM',
        ' M '
    ], {
        N: 'minecraft:nether_star',
        M: 'kubejs:meatwad',
    });

  }

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