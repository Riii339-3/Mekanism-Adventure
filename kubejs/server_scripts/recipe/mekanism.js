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
          A: 'minecraft:iron_ingot',
          B: 'minecraft:furnace',  //arg 3: the mapping object
          C: 'minecraft:granite'
        }
      )
})