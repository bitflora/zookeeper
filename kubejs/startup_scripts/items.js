// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('marine_food').tooltip('Tasty food to tame most marine animals. Not nutritious enough to breed them.');
    e.create('fur_mess').tooltip('The combined fur of many animals. Put a bunch together for a proper ball.');
    e.create('fur_ball').tooltip('The essence of fur. Surprisingly useful.');

    e.create('meat_mess').tooltip('The combined meat of many animals.');
    e.create('meatwad').tooltip('The essence of meat. Who knows what it could turn into?');
});
