ServerEvents.recipes(event => {
    event.remove({output: "twilightforest:uncrafting_table"})
    event.remove({type: "twilightforest:uncrafting"})
})