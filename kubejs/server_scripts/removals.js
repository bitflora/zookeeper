
ServerEvents.recipes(e => {
    global.removals.forEach( item => {
        console.log("removing " + item);
        e.remove({ output: item });
    });
});