StartupEvents.registry('item', event => {
    let nmachines = ["デジタルマイナー"]
    let nmachines_id = ["digital_miner"]
    for (let i = 0; i < nmachines.length; i++) {
        event.create(`machine_paper/mekanism/${nmachines_id[i]}`)
        .texture('minecraft:item/paper') // This texture would be located at kubejs/assets/mekitem/textures/item/lava.png
        .displayName(`${nmachines[i]}の設計図`)
        .rarity("epic")
    }
  })