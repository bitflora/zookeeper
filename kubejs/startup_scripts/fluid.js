
StartupEvents.registry('fluid', e => {


  // Basic "thick" (looks like lava) fluid with red tint
  e.create('anecdotes')
    .thickTexture(0x00ff99)
    .bucketColor(0x00ff99)
    .displayName('Anecdotes');

  // Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
  e.create('experimental_results')
    .thinTexture(0x99ccff)
    .bucketColor(0x99ccff)
    .displayName('Experimental Results');

    e.create('citations')
    .thickTexture(0xcccccc)
    .bucketColor(0xcccccc)
    .displayName('Citations');


  // e.create('strawberry_cream')
  //   .displayName('Strawberry Cream')
  //   .stillTexture('kubejs:block/strawberry_still')
  //   .flowingTexture('kubejs:block/strawberry_flow')
  //   .bucketColor(0xFF33FF)


});
