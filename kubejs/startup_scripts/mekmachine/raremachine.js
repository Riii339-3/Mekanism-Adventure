StartupEvents.registry('item', event => {
    let nmachines = ["ロビット", "回転式流体濃縮機"]
    let nmachines_id = ["robit", 'rotary_condensentrator']
    for (let i = 0; i < nmachines.length; i++) {
        event.create(`machine_paper/mekanism/${nmachines_id[i]}`)
        .texture('minecraft:item/paper') // This texture would be located at kubejs/assets/mekitem/textures/item/lava.png
        .displayName(`${nmachines[i]}の設計図`)
        .rarity("rare")
    }
  })