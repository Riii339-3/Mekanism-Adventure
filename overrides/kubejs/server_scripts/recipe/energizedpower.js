ServerEvents.recipes(ev => {
    ev.shapeless(
        Item.of('kubejs:steel_plate', 1), // arg 1: output
        [
          '#forge:tools/hammers',
          '#forge:ingots/steel'
        ]
      )
    ev.remove({ type: 'energizedpower:alloy_furnace' })
    ev.remove({ output: "energizedpower:basic_machine_frame"})
    ev.shaped(
        Item.of("energizedpower:basic_machine_frame", 1),
        [
          "ABA",
          "BCB",
          "ABA"
        ],
        {
          A: "#forge:ingots/iron",
          B: "#forge:glass",
          C: '#forge:storage_blocks/copper'
        }
      )
})