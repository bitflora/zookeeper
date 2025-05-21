

JEIEvents.hideItems( e => {
    global.removals.forEach( item => {
        console.log("hiding " + item);
        e.hide(item);
    });
});