StartupEvents.registry('item', event => {
    event.create('steel_gear')
    .texture('ifitem:item/steel_gear') // This texture would be located at kubejs/assets/mekitem/textures/item/lava.png
    .displayName("Steel Gear")

    event.create('plastic_sword', 'sword')
    .tier('plastic')
    .attackDamageBaseline(3.5)
    .displayName("Plastic Sword")
    .speedBaseline(2)
    .texture("ifitem:item/tool/plastic/sword")
    .maxDamage(256)
  })
  