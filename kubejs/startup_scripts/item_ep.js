StartupEvents.registry('item', event => {
    event.create('diamond_plate')
    .texture('epitem:item/plate/diamond') // This texture would be located at kubejs/assets/mekitem/textures/item/lava.png
    .displayName("Diamond Plate")
    .tag("forge:plates/diamond")
    event.create('steel_plate')
    .texture('epitem:item/plate/steel') // This texture would be located at kubejs/assets/mekitem/textures/item/lava.png
    .displayName("Steel Plate")
    .tag("forge:plates/steel")
  })
  