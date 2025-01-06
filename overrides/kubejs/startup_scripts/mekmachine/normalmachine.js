StartupEvents.registry('item', event => {
    let nmachines = ["電動ポンプ","電動精錬機","冶金吹込器", "濃縮室", "オスミウム圧縮機", "粉砕機", "浄化室"]
    let nmachines_id = ["electric_pump",'energized_smelter',"metallurgic_infuser", "enrichment_chamber", "osmium_compressor", "crusher", "purification_chamber", "energized_smelter", "electric_pump", 'logistical_sorter']
    for (let i = 0; i < nmachines.length; i++) {
        event.create(`machine_paper/mekanism/${nmachines_id[i]}`)
        .texture('minecraft:item/paper') // This texture would be located at kubejs/assets/mekitem/textures/item/lava.png
        .displayName(`${nmachines[i]}の設計図`)
    }
  })