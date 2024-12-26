ServerEvents.recipes(event => {
    event.remove({ output: 'mekanismgenerators:heat_generator' })
    event.remove({ output: 'mekanism:metallurgic_infuser' })
    event.remove({ output: 'mekanism:teleportation_core' })
    event.remove({ output: 'mekanism:robit' })
    event.remove({ output: 'mekanism:steel_casing' })
    event.remove({ output: 'mekanism:energized_smelter' })
    event.remove({ output: 'mekanism:digital_miner' })
    event.remove({output: "mekanism:rotary_condensentrator"})
    event.shaped(
        Item.of('mekanismgenerators:heat_generator', 1), // arg 1: output
        [
          'AAA',
          'CDC', // arg 2: the shape (array of strings)
          'BEB'
        ],
        {
          A: 'minecraft:iron_ingot',
          B: '#minecraft:planks',  //arg 3: the mapping object
          C: 'mekanism:basic_control_circuit',
          D: "mekanism:steel_casing",
          E: "minecraft:furnace"
        }
      )
    event.shaped(
        Item.of('mekanism:metallurgic_infuser', 1), // arg 1: output
        [
          'ADA',
          'BCB', // arg 2: the shape (array of strings)
          'ADA'
        ],
        {
          A: 'minecraft:iron_ingot',
          B: 'minecraft:redstone',  //arg 3: the mapping object
          C: 'mekanism:steel_casing',
          D: "minecraft:furnace"
        }
      )
    event.shaped(
        Item.of('mekanism:teleportation_core', 1), // arg 1: output
        [
          'ABA',
          'BCB', // arg 2: the shape (array of strings)
          'ABA'
        ],
        {
          A: 'mekanism:ultimate_control_circuit',
          B: 'kubejs:piece_of_teleportation_core',  //arg 3: the mapping object
          C: 'mekanism:pellet_plutonium'
        }
      )
    event.shaped(
        Item.of('kubejs:piece_of_teleportation_core', 1), // arg 1: output
        [
          'ABA',
          'BCB', // arg 2: the shape (array of strings)
          'ABA'
        ],
        {
          A: 'mekanism:alloy_atomic',
          B: 'minecraft:diamond',  //arg 3: the mapping object
          C: 'minecraft:ender_eye'
        }
      )
    event.shaped(
        Item.of('mekanism:robit', 1), // arg 1: output
        [
          ' A ',
          'BCB', // arg 2: the shape (array of strings)
          'DED'
        ],
        {
          A: '#forge:ingots/steel',
          B: 'mekanism:energy_tablet',  //arg 3: the mapping object
          C: 'mekanism_extras:absolute_control_circuit',
          D: "#forge:ingots/refined_obsidian",
          E: "#mekanism:personal_storage"
        }
      )
    event.shaped(
        Item.of('mekanism:steel_casing', 1), // arg 1: output
        [
          'ABA',
          'BCB', // arg 2: the shape (array of strings)
          'ABA'
        ],
        {
          A: '#forge:plates/steel',
          B: '#forge:glass/silica',  //arg 3: the mapping object
          C: 'energizedpower:basic_machine_frame'
        }
      )
    event.shaped(
        Item.of('mekanism:energized_smelter', 1), // arg 1: output
        [
          'ACA',
          'BDB', // arg 2: the shape (array of strings)
          'ECE'
        ],
        {
          A: 'minecraft:redstone',
          B: '#forge:glass/silica',  //arg 3: the mapping object
          C: 'minecraft:furnace',
          D: "energizedpower:basic_machine_frame",
          E: "#forge:plates/iron"
        }
      )
    event.shaped(
        Item.of('mekanism:digital_miner', 1), // arg 1: output
        [
          'ACA',
          'BDB', // arg 2: the shape (array of strings)
          'EFE'
        ],
        {
          A: 'mekanism_extras:alloy_thermonuclear',
          B: 'mekanism:logistical_sorter',  //arg 3: the mapping object
          C: '#forge:circuits/ultimate',
          D: "mekanism:robit",
          E: "mekanism:teleportation_core",
          F: '#industrialforegoing:machine_frame/supreme'
        }
      )
    event.shaped(
      Item.of("mekanism:rotary_condensentrator"),
      [
        "ABA",
        "CDE",
        "ABA"
      ],
      {
        A: "#forge:glass/silica",
        B: "#forge:circuits/elite",
        C: "mekanism:basic_chemical_tank",
        D: "mekanism:energy_tablet",
        E: 'mekanism:basic_fluid_tank'
      }
    )
  })
  