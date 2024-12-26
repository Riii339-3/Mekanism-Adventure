StartupEvents.registry('item', event => {
    let nmachines = ["熱発電機"]
    let nmachines_id = ["heat_generator"]
    for (let i = 0; i < nmachines.length; i++) {
        event.create(`machine_paper/mekanismgenerators/${nmachines_id[i]}`)
        .texture('minecraft/item/paper') // This texture would be located at kubejs/assets/mekitem/textures/item/lava.png
        .displayName(`${nmachines[i]}の設計図`)
    }
  })