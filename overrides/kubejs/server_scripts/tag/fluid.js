ServerEvents.tags('fluid', event => {
    // Add tall grass to the climbable tag. This does make it climbable!
    event.add('forge:molten_carbon', 'kubejs:molten_carbon')
    event.add('forge:molten_redstone', 'kubejs:molten_redstone')
    event.add("forge:molten_alloy_infused", "kubejs:molten_alloy_infused")
    event.add("forge:molten_alloy_reinforced", "kubejs:molten_alloy_reinforced")
  })
  