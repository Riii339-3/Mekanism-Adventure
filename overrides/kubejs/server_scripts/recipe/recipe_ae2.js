ServerEvents.recipes(event => {
    event.remove({ output: 'ae2:charger' })
    event.remove({ output: 'ae2:inscriber' })
    event.shaped(
        Item.of('ae2:charger', 1), // arg 1: output
        [
          'AC ',
          'B  ', // arg 2: the shape (array of strings)
          'AC '
        ],
        {
          A: 'minecraft:iron_ingot',
          B: '#forge:ingots/tin',  //arg 3: the mapping object
          C: 'mekanism_extras:supreme_control_circuit'
        }
      )
    event.shaped(
        Item.of('ae2:inscriber', 1), // arg 1: output
        [
          'ADA',
          'C B', // arg 2: the shape (array of strings)
          'ADA'
        ],
        {
          A: '#forge:ingots/tin',
          B: 'ae2:certus_quartz_crystal',  //arg 3: the mapping object
          C: 'mekanism:ultimate_control_circuit',
          D: "minecraft:sticky_piston"
        }
      )
    event.custom({
        "type": "ae2:charger",
        "ingredient": {
          "item": "ae2:certus_quartz_crystal"
        },
        "result": {
          "item": "ae2:charged_certus_quartz_crystal"
        }
      }
    )
  })
  