ServerEvents.recipes(event => {
    event.replaceInput(
        { input: "industrialforegoing:machine_frame_pity" }, // Arg 1: the filter
        'industrialforegoing:machine_frame_pity',            // Arg 2: the item to replace
        'mekanism:steel_casing'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )
})