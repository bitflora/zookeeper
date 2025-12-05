// priority: 0

// Visit the wiki for more info - https://kubejs.com/



ServerEvents.recipes(e => { //listen for the "recipes" server event.
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    Utils.getRegistryIds("entity_type").forEach(entity => {
      var entity_id = entity.toString();
      if (entity_id.startsWith("zawa") || entity_id.startsWith("lilcritters:")) {
        console.log("   " + entity_id);
      }
    });

    // Raise the cobblestone requirements
    modify_cobblestone_requirements(e);

    // Remove some recipes
    e.remove({ output: 'theoneprobe:probe' });

    modify_inventory_pets(e);
    modify_cyclic(e);

    modify_exotic_birds_cage_drops(e);

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

    modify_sophisticated_storage(e);

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


    modify_rats(e);

    // Custom items
    e.smelting('2x supplementaries:ash', 'compressedblocks:c0_cobblestone');

    e.shapeless('minecraft:paper', [
        '3x farmersdelight:rice'
    ]);

    modify_zawa(e);

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

    e.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        { item: 'rats:rat_pelt' }
      ],
      tool: { tag: 'forge:tools/knives' },
      result: [
        { item: 'naturalist:fur', count: 1 }
      ]
    });

    e.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        { item: 'alexsmobs:raccoon_tail' }
      ],
      tool: { tag: 'forge:tools/knives' },
      result: [
        { item: 'naturalist:fur', count: 1 }
      ]
    });

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

    e.replaceInput('waystones:warp_stone', 'minecraft:emerald', 'kubejs:hard_science');
    e.replaceInput('domesticationinnovation:pet_bed_white', 'minecraft:bone', 'kubejs:fur_ball');

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
        '3x kubejs:fur_mess',
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
      ' M ',
      '   '
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

    // skin mass is made by chef rats

    // bone
    e.shapeless('kubejs:bone_mess', [
      '2x unusualprehistory:trike_horn',
      '2x unusualprehistory:rex_tooth',
      '1x #kubejs:bone_weapons',
      '4x minecraft:bone',
    ]);

    e.remove({output: 'zoogoer:steve_spawn_egg'});
    e.shaped('zoogoer:steve_spawn_egg', [
      'sHs',
      'oBo',
      'sos'
    ], {
      B: 'kubejs:bone_essence',
      H: 'kubejs:brain',
      s: 'kubejs:skin_mass',
      o: 'unusualprehistory:organic_ooze'
    });

    modify_tconstruct(e);
    modify_spawn_eggs(e);
    modify_caged_mobs(e);

    // TODO: make sciencey recipes for the upgrades

    modify_unusual_prehistory(e);

  });


  function modify_cobblestone_requirements(e) {
    [
      'dropper',
      'dispenser',
      'observer',
      'repeater',
      'cobblestone_wall',
      'stone_sword',
      'stone_axe',
      'stone_sword',
      'stone_pickaxe',
      'stone_shovel',
      'stone_hoe',
      'brewing_stand',
      'furnace',
      'piston',

    ].forEach( item_id => {
      e.replaceInput({ output: "minecraft:" + item_id },
        'minecraft:cobblestone',
        'compressedblocks:c0_cobblestone'
      );
    });
  }


  function modify_caged_mobs(e) {
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
  }


  function modify_cyclic(e) {
    e.remove({ mod: 'cyclic' });

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

    e.shaped('cyclic:magic_net', [
        'DDD',
        'DCD',
        'BBB'
    ], {
        D: 'kubejs:data',
        C: 'zawa:capture_cage',
        B: 'minecraft:blue_ice',
    });

    e.shaped('cyclic:disenchanter', [
        ' F ',
        'fUf',
        ' E '
    ], {
        F: 'rats:filth',
        f: 'kubejs:fur_ball',
        U: 'rats:rat_upgrade_disenchanter',
        E: 'minecraft:enchanting_table',
    });

    e.shaped('cyclic:toxic_carrot', [
        ' r ',
        'pcp',
        ' S '
    ], {
        c: 'minecraft:carrot',
        S: 'kubejs:hard_science',
        p: 'rats:plague_essence',
        r: 'minecraft:rotten_flesh',
    });

    e.shaped('cyclic:carrot_ender', [
        ' x ',
        'pcp',
        ' S '
    ], {
        c: 'minecraft:carrot',
        S: 'kubejs:hard_science',
        p: 'rats:plague_essence',
        x: 'minecraft:ender_pearl',
    });

    e.shaped('cyclic:diamond_carrot_health', [
        ' x ',
        ' c ',
        ' S '
    ], {
        c: 'minecraft:carrot',
        S: 'kubejs:hard_science',
        x: 'minecraft:diamond',
    });

    e.shaped('cyclic:redstone_carrot_speed', [
        ' x ',
        'pcp',
        ' S '
    ], {
        c: 'minecraft:carrot',
        S: 'kubejs:hard_science',
        p: 'minecraft:redstone',
        x: 'minecraft:redstone_block',
    });

    e.shaped('cyclic:emerald_carrot_jump', [
        ' x ',
        'pcp',
        ' S '
    ], {
        c: 'minecraft:carrot',
        S: 'kubejs:hard_science',
        p: 'minecraft:emerald',
        x: 'minecraft:emerald_block',
    });

    e.shaped('cyclic:lapis_carrot_variant', [
        ' x ',
        'pcp',
        ' S '
    ], {
        c: 'minecraft:carrot',
        S: 'kubejs:hard_science',
        p: 'minecraft:lapis',
        x: 'minecraft:lapis_block',
    });
  }


  function modify_inventory_pets(e) {
    e.remove({ mod: "inventorypets"});

    // available immediately; minor utility pets
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

    e.shaped('inventorypets:pet_crafting_table', [
        'PPP',
        'PCP',
        'PPP'
    ], {
        P: '#minecraft:planks',
        C: 'minecraft:crafting_table'
    });

    e.shaped('inventorypets:pet_furnace', [
        'CCC',
        'CFC',
        'CCC'
    ], {
        F: 'minecraft:furnace',
        C: 'minecraft:cobblestone'
    });


    e.shaped('inventorypets:temp_feed_bag', [
        ' F ',
        'F F',
        'FFF'
    ], {
        F: 'kubejs:fur_ball'
    });

    e.shaped('inventorypets:pet_bed', [
        '   ',
        'FFB',
        'FFF'
    ], {
        F: '#kubejs:furs',
        B: 'kubejs:fur_ball'
    });

    // advanced utility pets
    e.shaped('inventorypets:pet_grave', [
        ' C ',
        'GEG',
        'GGG'
    ], {
        C: 'minecraft:cobblestone',
        E: 'kubejs:embryo',
        G: 'minecraft:gravel'
    });

    e.shaped('inventorypets:pet_pixie', [
        ' x ',
        'xEx',
        'fff'
    ], {
        x: 'cagedmobs:crystallized_experience',
        E: 'kubejs:embryo',
        f: '#forge:feathers'
    });

    e.shaped('inventorypets:pet_loot', [
        'fGf',
        'fEf',
        'fff'
    ], {
        G: 'minecraft:gold_ingot',
        E: 'kubejs:embryo',
        f: 'kubejs:fur_ball'
    });

    e.shaped('inventorypets:pet_house', [
        ' s ',
        'sEs',
        'GGG'
    ], {
        x: '#minecraft:wooden_slabs',
        E: 'kubejs:embryo',
        G: 'minecraft:cobblestone'
    });

    e.shaped('inventorypets:pet_nether_portal', [
        'CCC',
        'CEC',
        'CCC'
    ], {
        E: 'kubejs:embryo',
        C: 'minecraft:quartz'
    });


    e.shaped('inventorypets:pet_end_portal', [
        'CCC',
        'CEC',
        'CCC'
    ], {
        E: 'kubejs:embryo',
        C: 'minecraft:end_stone'
    });

    // put this back for use downstream
    e.shapeless('9x inventorypets:nugget_diamond', ['minecraft:diamond']);
    e.shapeless('minecraft:diamond', ['9x inventorypets:nugget_diamond']);

    e.shapeless('9x inventorypets:nugget_ender', ['minecraft:ender_pearl']);
    e.shapeless('minecraft:ender_pearl', ['9x inventorypets:nugget_ender']);

    e.shapeless('9x inventorypets:nugget_coal', ['minecraft:coal']);
    e.shapeless('minecraft:coal', ['9x inventorypets:nugget_coal']);

    e.shapeless('9x inventorypets:nugget_obsidian', ['minecraft:obsidian']);
    e.shapeless('minecraft:obsidian', ['9x inventorypets:nugget_obsidian']);

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

    e.shaped('inventorypets:pet_blaze', [
        'BBB',
        'BEB',
        'BBB'
    ], {
        e: 'kubejs:embryo',
        B: 'minecraft:blaze_rod',
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


  function modify_rats(e) {

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
    e.shaped('rats:cheese_stick', [
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
  }


  function modify_sophisticated_storage(e) {
    e.remove({ output: 'sophisticatedbackpacks:backpack', input: 'minecraft:leather'});
    e.shaped('sophisticatedbackpacks:backpack', [
        'SLS',
        'FCF',
        'LLL'
    ], {
        S: 'minecraft:string',
        L: 'minecraft:leather',
        F: 'kubejs:fur_ball',
        C: 'inventorypets:temp_chest'
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

    // IO, item piping
    e.replaceInput({ mod: 'sophisticatedstorage'},
      'minecraft:repeater',
      'kubejs:hard_science',
    );
    e.replaceInput({ mod: 'sophisticatedstorage'},
      'minecraft:comparator',
      'kubejs:hard_science',
    );

    // storage upgrades
    e.replaceInput({ mod: 'sophisticatedstorage'},
      'minecraft:redstone_torch',
      '#kubejs:storage_upgrade_fur',
    );
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
    });
  }


  function modify_spawn_eggs(e) {
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

    e.shaped('eanimod:enhanced_axolotl_egg_bucket', [
      'aIa',
      'aXa',
      'aEa'
    ], {
      a: 'minecraft:stone_axe',
      I: 'kubejs:stem_cell',
      X: '#forge:eggs',
      E: 'minecraft:water_bucket',
    }).replaceIngredient("minecraft:water_bucket", "minecraft:air");

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

    e.shaped('alexsmobs:spawn_egg_alligator_snapping_turtle', [
      'SIS',
      ' X ',
      ' E '
    ], {
      I: '#kubejs:turtle_eggs',
      S: '#kubejs:diamond_sampler_point',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });


    e.shaped('2x alexsmobs:spawn_egg_alligator_snapping_turtle', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: 'alexsmobs:spiked_scute',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('alexsmobs:spawn_egg_kangaroo', [
      'SIS',
      ' X ',
      ' E '
    ], {
      I: 'minecraft:red_sand',
      S: 'minecraft:hopper',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('2x alexsmobs:spawn_egg_kangaroo', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: 'alexsmobs:kangaroo_meat',
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

    e.shaped('alexsmobs:spawn_egg_roadrunner', [
      'SIS',
      ' X ',
      ' E '
    ], {
      I: 'minecraft:rail',
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
      E: '#kubejs:turtle_eggs',
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
      'tXt',
      'tEt'
    ], {
      I: 'minecraft:spider_eye',
      S: '#forge:feathers',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
      t: '#kubejs:tarantulas'
    });

    e.shaped('2x eanimod:turtle_egg', [
      ' I ',
      ' X ',
      ' E '
    ], {
      I: '#kubejs:turtle_eggs',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('aquaculture:arrau_turtle_spawn_egg', [
      ' I ',
      ' X ',
      ' a '
    ], {
      I: '#kubejs:turtle_eggs',
      X: 'kubejs:stem_cell',
      a: 'aquaculture:arapaima',
    });

    e.shaped('aquaculture:arrau_turtle_spawn_egg', [
      ' T ',
      ' X ',
      ' E '
    ], {
      T: 'aquaculture:arrau_turtle',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('aquaculture:box_turtle_spawn_egg', [
      ' I ',
      ' X ',
      ' a '
    ], {
      I: '#kubejs:turtle_eggs',
      X: 'kubejs:stem_cell',
      a: 'aquaculture:box',
    });

    e.shaped('aquaculture:box_turtle_spawn_egg', [
      ' T ',
      ' X ',
      ' E '
    ], {
      T: 'aquaculture:box_turtle',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    // for the completionists
    e.shaped('aquaculture:starshell_turtle_spawn_egg', [
      ' I ',
      ' X ',
      ' a '
    ], {
      I: '#kubejs:turtle_eggs',
      X: 'kubejs:stem_cell',
      a: 'minecraft:nether_star',
    });

    e.shaped('aquaculture:starshell_turtle_spawn_egg', [
      ' T ',
      ' X ',
      ' E '
    ], {
      T: 'aquaculture:starshell_turtle',
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


    e.shaped('minecraft:frog_spawn_egg', [
      'SIS',
      ' X ',
      ' E '
    ], {
      I: '#forge:slimeballs',
      S: 'minecraft:hopper',
      X: 'kubejs:embryo',
      E: '#forge:eggs',
    });

    e.shaped('minecraft:spawner', [
      'bSb',
      'SeS',
      'bSb'
    ], {
      b: 'minecraft:iron_bars',
      S: 'kubejs:hard_science',
      e: 'kubejs:embryo',
    });
  }


  function modify_tconstruct(e) {

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
    e.shaped('4x tconstruct:grout', [
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
    e.shaped('4x tconstruct:nether_grout', [
        'MS ',
        'AF ',
        '   '
    ], {
        M: 'minecraft:magma_cream',
        S: '#minecraft:soul_fire_base_blocks',
        A: 'supplementaries:ash',
        F: 'kubejs:fur_ball'
    });

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

    e.remove({output: "tconstruct:maille"});
    e.shaped(Item.of('tconstruct:maille', '{Material:"tconstruct:ancient_hide"}'), [
        'P P',
        'PPP',
        'PPP'
    ], {
        P: 'unusualprehistory:majunga_scute',
    });
  }


  function modify_unusual_prehistory(e) {

    // Unusual Prehistory
    e.remove({ output: 'unusualprehistory:organic_ooze'});
    e.shaped('4x unusualprehistory:organic_ooze', [
        'MSM',
        'SWS',
        'MSM'
    ], {
        S: 'kubejs:stem_cell',
        M: 'kubejs:meatwad',
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
        S: 'unusualprehistory:organic_ooze',
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

    e.shaped('2x unusualprehistory:frozen_fossil_item', [
        'III',
        'FOf',
        'III'
    ], {
      F: 'unusualprehistory:frozen_fossil_item',
      O: 'unusualprehistory:organic_ooze',
      f: '#unusualprehistory:fossils',
      I: 'minecraft:ice'
    });

    e.shaped('2x unusualprehistory:frozen_fossil_item', [
        'III',
        'FOf',
        'III'
    ], {
      F: 'unusualprehistory:frozen_fossil_item',
      O: 'unusualprehistory:organic_ooze',
      f: '#unusualprehistory:fossils',
      I: 'unusualprehistory:permafrost'
    });

    e.shaped('2x unusualprehistory:amber_fossil', [
        'III',
        'FOf',
        'III'
    ], {
      F: 'unusualprehistory:amber_fossil',
      O: 'unusualprehistory:organic_ooze',
      f: '#unusualprehistory:fossils',
      I: 'unusualprehistory:amber_shard'
    });

    e.shaped('2x unusualprehistory:opal_fossil', [
        'III',
        'FOf',
        'III'
    ], {
      F: 'unusualprehistory:opal_fossil',
      O: 'unusualprehistory:organic_ooze',
      f: '#unusualprehistory:fossils',
      I: 'unusualprehistory:opal_chunk'
    });
  }

  function modify_zawa(e) {
    // kibble
    e.shapeless('2x zawa:herbivore_kibble', [
        'minecraft:wheat_seeds',
        'minecraft:beetroot',
        'minecraft:wheat',
        '3x supplementaries:ash'
    ]);

    e.remove({ output: "zawa:piscivore_kibble"});
    e.shapeless('zawa:piscivore_kibble', [
        'minecraft:sugar',
        '2x #kubejs:worms',
        '3x supplementaries:ash'
    ]);
    e.shapeless('zawa:piscivore_kibble', [
        'minecraft:sugar',
        '3x alexs_herps_:mealworm',
        '3x supplementaries:ash'
    ]);
    e.shapeless('zawa:piscivore_kibble', [
        'minecraft:sugar',
        '3x alexsmobs:maggot',
        '3x supplementaries:ash'
    ]);
    e.shapeless('zawa:piscivore_kibble', [
        'minecraft:sugar',
        '2x #forge:raw_fishes',
        '3x supplementaries:ash'
    ]);

    e.shapeless('4x zawa:carnivore_kibble', [
        'zawa:large_meat',
        'minecraft:chicken',
        '3x supplementaries:ash'
    ]);

    e.shapeless('3x zawa:carnivore_kibble', [
        'zawa:medium_meat',
        '2x minecraft:chicken',
        '6x supplementaries:ash'
    ]);

    e.shapeless('3x zawa:insectivore_kibble', [
        'zawa:mealworms',
        '3x #kubejs:worms',
        '3x supplementaries:ash'
    ]);

    e.shapeless('3x zawa:omnivore_kibble', [
        '#forge:eggs',
        'minecraft:wheat',
        'zawa:medium_meat',
        '3x supplementaries:ash'
    ]);

    e.shapeless('zawa:shellfish_kibble', [
        'zawa:clam',
        'minecraft:wheat',
        '3x supplementaries:ash'
    ]);

    e.shapeless('zawa:shellfish_kibble', [
        'zawa:mussels',
        'minecraft:wheat',
        '3x supplementaries:ash'
    ]);

    // Animal is removed because we have a whole Rats! mod, but it's needed for breeding a lot of things
    e.shapeless('zawa:brown_rat', [
        'rats:raw_rat',
        'minecraft:brown_dye'
    ]);

    // var critters = {
    //   "capybara": "herbivore",
    //   "guinea_pig": "herbivore",
    //   "tufted_deer": "herbivore",
    //   "raccoon": "omnivore",
    //   "box_turtle": "omnivore",
    //   "opossum": "omnivore",
    //   "pond_slider": "omnivore",
    //   "skunk": "omnivore",
    //   "tree_squirrel": "omnivore",
    //   "bullfrog": "insectivore",
    //   "dart_frog": "insectivore",
    //   "pacman_frog": "insectivore",
    //   "pumpkin_toadlet": "insectivore",
    //   "tomato_frog": "insectivore",
    //   "tree_monitor": "insectivore",
    //   "dwarf_crocodile": "carnivore",
    //   "small_clawed_otter": "shellfish",
    //   "banded_penguin": "piscivore",

    // };
    // Object.keys(critters).forEach(animal => {
    //   var kibbleType = critters[animal];
    //   register_tameable(e, "lilcritters", animal, "zawa:" + kibbleType + "_kibble");
    // });

    // critters = {
    //   "chinchilla": "herbivore",
    // };
    // Object.keys(critters).forEach(animal => {
    //   var kibbleType = critters[animal];
    //   register_tameable(e, "zawaessentials", animal, "zawa:" + kibbleType + "_kibble");
    // });
  }

  function modify_exotic_birds_cage_drops(event) {
    Utils.getRegistryIds("entity_type").forEach(entity => {
      var entity_id = entity.toString();
      if (entity_id.startsWith("exoticbirds:")) {
        console.log("caging bird:" + entity_id);
        if (entity_id.endsWith("phoenix")) {
          bird_cage(event, entity_id, 3, 6);
        } else {
          bird_cage(event, entity_id, 1, 2);
        }
      }
    });
  }

  function bird_cage(event, bird, minFeathers, maxFeathers) {
    event.custom({
      type: "cagedmobs:entity_data",
      entity: bird,
      samplerTier: 1,
      environments: ["farm"],
      growTicks: 1200,
      results: [
        {
          chance: 0.5,
          output: {
            item: "minecraft:feather"
          },
          minAmount: minFeathers,
          maxAmount: maxFeathers
        },
        {
          chance: 0.8,
            output: {
              item: "exoticbirds:raw_birdmeat"
            },
            output_cooked: {
              item: "exoticbirds:cooked_birdmeat"
            },
            minAmount: 1,
            maxAmount: 1
        }
      ]
    });
  }

  function register_tameable(event, mod, animal, item) {
    var mob = {};
    mob[animal] = {
      "inputs": [
        { "item": item }
      ]
    };
    event.custom({
      type: "justenoughbreeding:taming",
      mod: mod,
      mobs: [
        mob
      ]
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