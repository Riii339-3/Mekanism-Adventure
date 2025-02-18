StartupEvents.registry('item', event => {
    event.create('piece_of_teleportation_core')
    .texture('mekitem:item/potc') // This texture would be located at kubejs/assets/mekitem/textures/item/lava.png
    .displayName("テレポーテーションコアの欠片")
    .rarity("rare")
    event.create('carbon')
    .texture('tcitem:item/carbon') // This texture would be located at kubejs/assets/mekitem/textures/item/lava.png
    .displayName("コークス")
    .burnTime(180)
    event.create('highend_circuit_base')
    .texture('mekitem:item/highend_circuit_base') // This texture would be located at kubejs/assets/mekitem/textures/item/lava.png
    .displayName("高級回路基盤")
  })
  