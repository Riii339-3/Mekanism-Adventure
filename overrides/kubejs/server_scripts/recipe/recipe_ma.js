ServerEvents.recipes(event => {
    event.remove({output: "matc:inferium_crystal"})
    event.shaped(
        Item.of('matc:inferium_crystal', 1), // arg 1: output
        [
          'ABA',
          'BCB', // arg 2: the shape (array of strings)
          'ABA'
        ],
        {
          A: 'mysticalagriculture:prosperity_shard',
          B: 'mysticalagriculture:inferium_essence',  //arg 3: the mapping object
          C: 'mekanism_extras:cosmic_control_circuit'
        }
      )
})