let nmachines_id = ["energized_smelter","enrichment_chamber", "crusher", "purification_chamber", "osmium_compressor", "logistical_sorter"]
for (let i = 0; i < nmachines_id.length; i++){
    AStages.addRestrictionForRecipe(`machines/mek/${nmachines_id[i]}`,nmachines_id[i],"minecraft:crafting",`mekanism:${nmachines_id[i]}`)
}