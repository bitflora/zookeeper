ServerEvents.tags('item', e => {
    e.add('kubejs:furs', 'alexsmobs:bear_fur');
    e.add('kubejs:furs', 'alexsmobs:bison_fur');
    e.add('kubejs:furs', 'biomesoplenty:hair');
    e.add('kubejs:furs', 'naturalist:fur');
    //e.add('kubejs:furs', 'unusualprehistory:smilo_fur');

    e.add('kubejs:mammal_meat', '#forge:raw_pork');
    e.add('kubejs:mammal_meat', 'minecraft:beef');
    e.add('kubejs:mammal_meat', 'minecraft:porkchop');
    e.add('kubejs:mammal_meat', 'minecraft:mutton');
    e.add('kubejs:mammal_meat', 'minecraft:rabbit');
    e.add('kubejs:mammal_meat', 'naturalist:bushmeat');
    e.add('kubejs:mammal_meat', 'naturalist:venison');
    e.add('kubejs:mammal_meat', 'farmersdelight:minced_beef');
    e.add('kubejs:mammal_meat', 'alexsmobs:kangaroo_meat');
    e.add('kubejs:mammal_meat', 'alexsdelight:raw_bison');
    // e.add('kubejs:mammal_meat', 'unusualprehistory:raw_mammoth');
    e.add('kubejs:mammal_meat', 'rats:raw_rat');
    e.add('kubejs:mammal_meat', 'eanimod:rawrabbit_small');

    e.add('kubejs:bird_meat', '#forge:raw_chicken');
    e.add('kubejs:bird_meat', 'minecraft:chicken');
    e.add('kubejs:bird_meat', 'exoticbirds:raw_birdmeat');
    e.add('kubejs:bird_meat', 'eanimod:rawchicken_darksmall');
    e.add('kubejs:bird_meat', 'eanimod:rawchicken_dark');
    e.add('kubejs:bird_meat', 'eanimod:rawchicken_darkbig');
    e.add('kubejs:bird_meat', 'eanimod:rawchicken_palesmall');
    e.add('kubejs:bird_meat', 'eanimod:rawchicken_pale');
    e.add('kubejs:bird_meat', 'farmersdelight:chicken_cuts');
    e.add('kubejs:bird_meat', 'naturalist:duck');

    // mmm... tender
    e.add('kubejs:worms', 'zawa:earthworm');
    e.add('kubejs:worms', 'aquaculture:worm');

    // already have forge:raw_fishes
    e.add('kubejs:ancient_raw_fishes', 'unusualprehistory:raw_stetha');
    e.add('kubejs:ancient_raw_fishes', 'unusualprehistory:raw_scau');

    e.add('forge:feathers', 'alexsmobs:roadrunner_feather');
    e.add('forge:feathers', 'alexsmobs:emu_feather');

    e.add('kubejs:ancient_feathers', 'unusualprehistory:raptor_feathers')
    e.add('kubejs:ancient_feathers', 'unusualprehistory:austro_feather');

    // make banana slugs super-useful
    e.add('forge:slimeballs', 'alexsmobs:banana_slug_slime');

    // for storage upgrades
    e.add('kubejs:storage_upgrade_fur', "rats:rat_pelt");
    e.add('kubejs:storage_upgrade_fur', "kubejs:fur_ball");

    // both kinds of turtle eggs can be acquired, even though they all hatch enhanced turtles
    e.add('kubejs:turtle_eggs', "eanimod:turtle_egg");
    e.add('kubejs:turtle_eggs', "minecraft:turtle_egg");
    e.add('kubejs:turtle_eggs', "lilcritters:box_turtle_egg");
    e.add('kubejs:turtle_eggs', "alexsmobs:terrapin_egg");
    e.add('kubejs:turtle_eggs', "naturalist:tortoise_egg");

    // make breeding chow useful
    [
        'alexsmobs:alligator_snapping_turtle_breedables',
        'alexsmobs:anaconda_breedables',
        'alexsmobs:bald_eagle_breedables',
        'alexsmobs:caiman_breedables',
        'alexsmobs:crocodile_breedables',
        'alexsmobs:froststalker_breedables',
        'alexsmobs:grizzly_bear_breedables',
        'alexsmobs:komodo_dragon_breedables',
        'alexsmobs:maned_wolf_breedables',
        'alexsmobs:mantis_shrimp_breedables',
        'alexsmobs:orca_breedables',
        'alexsmobs:snow_leopard_breedables',
        'alexsmobs:tiger_breedables',
        'alexsmobs:warped_toad_breedables'
    ].forEach((tag) => {
        e.add(tag, 'kubejs:breeding_chow');
    });

    // mob cages for hostile mobs
    e.add('kubejs:diamond_sampler_point', 'alexsmobs:bone_serpent_tooth');
    e.add('kubejs:diamond_sampler_point', 'alexsmobs:shark_tooth');
    e.add('kubejs:diamond_sampler_point', 'alexsmobs:cachalot_whale_tooth');
    e.add('kubejs:diamond_sampler_point', 'alexsmobs:froststalker_horn');
    e.add('kubejs:diamond_sampler_point', 'alexsmobs:trike_horn');
    e.add('kubejs:diamond_sampler_point', 'alexsmobs:dropbear_claw');
    e.add('kubejs:diamond_sampler_point', 'alexs_herps_:sqorpion_tail');

    // needed for a single quest
    e.add('kubejs:zawa_butterflies', 'zawa:black_swallowtail_butterfly');
    e.add('kubejs:zawa_butterflies', 'zawa:blue_morpho_butterfly');
    e.add('kubejs:zawa_butterflies', 'zawa:cabbage_white_butterfly');
    e.add('kubejs:zawa_butterflies', 'zawa:checkered_white_butterfly');
    e.add('kubejs:zawa_butterflies', 'zawa:cloudless_sulfur_butterfly');
    e.add('kubejs:zawa_butterflies', 'zawa:eastern_tiger_swallowtail_butterfly');
    e.add('kubejs:zawa_butterflies', 'zawa:green_hairstreak_butterfly');
    e.add('kubejs:zawa_butterflies', 'zawa:red_admiral_butterfly');
    e.add('kubejs:zawa_butterflies', 'zawa:tawny_emperor_butterfly');
    e.add('kubejs:zawa_butterflies', 'zawa:zebra_swallowtail_butterfly');

    e.add('kubejs:tarantulas', 'zawa:antilles_pinktoe_tarantula');
    e.add('kubejs:tarantulas', 'zawa:brazilian_black_tarantula');
    e.add('kubejs:tarantulas', 'zawa:chilean_rosehair_tarantula');
    e.add('kubejs:tarantulas', 'zawa:cobalt_blue_tarantula');
    e.add('kubejs:tarantulas', 'zawa:goliath_birdeater_tarantula');
    e.add('kubejs:tarantulas', 'zawa:greenbottle_blue_tarantula');
    e.add('kubejs:tarantulas', 'zawa:king_baboon_tarantula');
    e.add('kubejs:tarantulas', 'zawa:mexican_red_knee_tarantula');
    e.add('kubejs:tarantulas', 'zawa:western_desert_tarantula');

    e.add('kubejs:bone_weapons', 'unusualprehistory:handmade_spear');
    e.add('kubejs:bone_weapons', 'unusualprehistory:handmade_battleaxe');
    e.add('kubejs:bone_weapons', 'unusualprehistory:handmade_club');
});