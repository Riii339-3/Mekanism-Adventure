let nmachines_id = ["metallurgic_infuser", "robit", "digital_miner", "electric_pump", "rotary_condensentrator"]
let nmachines_recipeid = ["minecraft:kjs/mekanism_", "minecraft:kjs/mekanism_", "minecraft:kjs/mekanism_"]
for (let i = 0; i < nmachines_id.length; i++){
    AStages.addRestrictionForRecipe(`machines/mek/kjs/${nmachines_id[i]}`,nmachines_id[i],"minecraft:crafting",`minecraft:kjs/mekanism_${nmachines_id[i]}`)
}