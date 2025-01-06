ServerEvents.recipes(ev => {
    ev.remove({output: "mekanism:metallurgic_infuser"})
    ev.shaped(
        Item.of('mekanism:metallurgic_infuser', 1), // arg 1: output
        [
          'ABA',
          'CDC', // arg 2: the shape (array of strings)
          'ABA'
        ],
        {
          A: 'mekanism:ultimate_control_circuit',
          B: 'energizedpower:advanced_powered_furnace',  //arg 3: the mapping object
          C: '#mekanism:alloys/atomic',
          D: "energizedpower:advanced_machine_frame"
        }
      )
    ev.remove({output:"mekanism:electric_pump"})
    ev.shaped(
      Item.of("mekanism:electric_pump",1),
      [
        " B ",
        "CDC",
        "AAA"
      ],
      {
        A:"#forge:ingots/osmium",
        B:"minecraft:bucket",
        C:"#mekanism:alloys/infused",
        D:"mekanism:steel_casing"
      }
    )
  ev.remove({output:"mekanism:rotary_condensentrator"})
  ev.shaped(
    Item.of("mekanism:rotary_condensentrator"),
    [
      "ABA",
      "CDE",
      "ABA"
    ],
    {
      A:"mekanism:energy_tablet",
      B:"mekanism:basic_control_circuit",
      C:"mekanism:basic_chemical_tank",
      D:"mekanism:steel_casing",
      E:"mekanism:basic_fluid_tank"
    }
  )
  ev.remove({output:'mekanism:teleportation_core'})
  ev.shaped(
    Item.of('mekanism:teleportation_core', 1),
    [
      "ABA",
      "CDC",
      "ABA"
    ],
    {
      A:"minecraft:lapis_lazuli",
      B:'mekanism_extras:alloy_radiance',
      C:"#forge:ingots/gold",
      D:"minecraft:diamond"
    }
  )
})