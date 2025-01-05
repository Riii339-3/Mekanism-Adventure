ServerEvents.recipes(ev => {
    ev.shapeless(
        Item.of('kubejs:steel_plate', 1), // arg 1: output
        [
          '#forge:tools/hammers',
          '#forge:ingots/steel'
        ]
      )
    ev.remove({ type: 'energizedpower:alloy_furnace' })
})