
StartupEvents.registry('fluid', e => {


  // Basic "thick" (looks like lava) fluid with red tint
  e.create('anecdata')
    .thickTexture(0x00ff99)
    .bucketColor(0x00ff99)
    .displayName('Anecdata');

  // Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
  e.create('liquid_science')
    .thinTexture(0x99ccff)
    .bucketColor(0x99ccff)
    .displayName('Liquid Science');



  // e.create('strawberry_cream')
  //   .displayName('Strawberry Cream')
  //   .stillTexture('kubejs:block/strawberry_still')
  //   .flowingTexture('kubejs:block/strawberry_flow')
  //   .bucketColor(0xFF33FF)


});
