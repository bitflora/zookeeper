
StartupEvents.registry('fluid', e => {

  e.create('anecdotes')
    .thickTexture(0x00ff99)
    .bucketColor(0x00ff99)
    .displayName('Anecdotes');

  e.create('experimental_results')
    .thinTexture(0x99ccff)
    .bucketColor(0x99ccff)
    .displayName('Experimental Results');

  e.create('citations')
    .thickTexture(0xcccccc)
    .bucketColor(0xcccccc)
    .displayName('Citations');

  e.create('liquid_science')
    .thickTexture(0xa832a8)
    .bucketColor(0xa832a8)
    .displayName('Liquid Science');

  // e.create('strawberry_cream')
  //   .displayName('Strawberry Cream')
  //   .stillTexture('kubejs:block/strawberry_still')
  //   .flowingTexture('kubejs:block/strawberry_flow')
  //   .bucketColor(0xFF33FF)


});
