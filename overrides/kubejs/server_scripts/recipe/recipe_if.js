ServerEvents.recipes(event => {

    event.remove({ output: 'ifeu:netherite_gear' })

    event.remove({ output: 'industrialforegoing:latex_processing_unit' })
    event.remove({ output: 'industrialforegoing:fluid_extractor' })
    event.remove({ output: 'industrialforegoing:dissolution_chamber' })
    event.remove({ output: 'industrialforegoing:machine_frame_pity' })
    event.shaped(
        Item.of('industrialforegoing:latex_processing_unit', 1), // arg 1: output
        [
          'ADA',
          'BCB', // arg 2: the shape (array of strings)
          'AEA'
        ],
        {
          A: 'minecraft:iron_ingot',
          B: 'minecraft:bucket',  //arg 3: the mapping object
          C: 'energizedpower:basic_machine_frame',
          D: "mekanism:alloy_infused",
          E: "minecraft:furnace"
        }
      )
    event.shaped(
        Item.of('industrialforegoing:fluid_extractor', 1), // arg 1: output
        [
          'ADA',
          'BCB', // arg 2: the shape (array of strings)
          'AEA'
        ],
        {
          A: 'minecraft:iron_ingot',
          B: '#forge:cobblestone',  //arg 3: the mapping object
          C: 'energizedpower:basic_machine_frame',
          D: "minecraft:iron_block",
          E: "minecraft:piston"
        }
      )
    event.shaped(
        Item.of('industrialforegoing:dissolution_chamber', 1), // arg 1: output
        [
          'ADA',
          'BCB', // arg 2: the shape (array of strings)
          'AEA'
        ],
        {
          A: 'industrialforegoing:plastic',
          B: 'minecraft:bucket',  //arg 3: the mapping object
          C: 'industrialforegoing:machine_frame_pity',
          D: "#forge:chests",
          E: "industrialforegoing:gold_gear"
        }
      )
    event.shaped(
        Item.of('kubejs:steel_gear', 1), // arg 1: output
        [
          ' A ',
          'A A', // arg 2: the shape (array of strings)
          ' A '
        ],
        {
          A: '#forge:ingots/steel'
        }
      )

    event.shaped(
        Item.of("kubejs:plastic_sword", 1),
        [
            "A",
            "A",
            "B"
        ],
        {
            A: "#forge:plastic",
            B: "#forge:rods/wooden"
        }
    )
    event.shaped(
      Item.of("industrialforegoing:machine_frame_pity", 1),
      [
          "ABA",
          "BCB",
          "ABA"
      ],
      {
          A: "#forge:plastic",
          B: "industrialforegoing:dryrubber",
          C: "energizedpower:basic_machine_frame"
      }
  )
    
  })
  