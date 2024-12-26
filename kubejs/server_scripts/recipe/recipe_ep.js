ServerEvents.recipes(event => {
    event.remove({ output: 'energizedpower:iron_gear' })
    event.remove({ output: 'energizedpower:basic_machine_frame' })
    event.remove({ output: 'energizedpower:coal_engine' })
    event.remove({ output: 'energizedpower:powered_furnace' })
    event.remove({ output: 'energizedpower:advanced_powered_furnace' })
    event.custom({
        "type": "energizedpower:metal_press",
        "ingredient": [
          {
            "tag": "forge:plates/iron"
          }
        ],
        "pressMold": {
          "item": "energizedpower:gear_press_mold"
        },
        "output": {
          "item": "industrialforegoing:iron_gear",
          "count": 1
        }
    })
      
    event.custom({
        "type": "energizedpower:metal_press",
        "ingredient": [
          {
            "tag": "forge:plates/gold"
          }
        ],
        "pressMold": {
          "item": "energizedpower:gear_press_mold"
        },
        "output": {
          "item": "industrialforegoing:gold_gear",
          "count": 1
        }
    })
    event.custom({
        "type": "energizedpower:metal_press",
        "ingredient": [
            {
              "tag": "forge:plates/diamond"
            }
        ],
        "pressMold": {
            "item": "energizedpower:gear_press_mold"
        },
        "output": {
            "item": "industrialforegoing:diamond_gear",
            "count": 1
        }
        })
    event.shapeless(
        Item.of('kubejs:diamond_plate', 1), // arg 1: output
        [
            '#forge:tools/hammers',
            'minecraft:diamond'
        ]
    )
    event.shapeless(
      Item.of('kubejs:steel_plate', 1), // arg 1: output
      [
          '#forge:tools/hammers',
          '#forge:ingots/steel'
      ]
    )
    event.custom({
      "type": "energizedpower:metal_press",
      "ingredient": [
          {
            "tag": "forge:plates/steel"
          }
      ],
      "pressMold": {
          "item": "energizedpower:gear_press_mold"
      },
      "output": {
          "item": "kubejs:steel_gear",
          "count": 1
      }
      })
    event.custom(
      {
        "type": "energizedpower:compressor",
        "ingredient": {
          "item": "minecraft:diamond"
        },
        "output": {
          "item": "kubejs:diamond_plate"
        }
      }
    )
    event.custom(
      {
        "type": "energizedpower:compressor",
        "ingredient": {
          "tag": "forge:ingots/steel"
        },
        "output": {
          "item": "kubejs:steel_plate"
        }
      }
    )
    event.custom(
      {
        "type": "energizedpower:compressor",
        "ingredient": {
          "item": "minecraft:diamond_block"
        },
        "output": {
          "item": "kubejs:diamond_plate",
          "count": 9
        }
      }
    )
    event.custom(
      {
        "type": "energizedpower:compressor",
        "ingredient": {
          "tag": "forge:storage_blocks/steel"
        },
        "output": {
          "item": "kubejs:steel_plate",
          "count": 9
        }
      }
    )
    event.shaped(
        Item.of("energizedpower:basic_machine_frame", 1),
        [
            "ABA",
            "BCB",
            "ABA"
        ],
        {
            A: "#forge:ingots/steel",
            B: "#forge:plates/iron",
            C: "#forge:storage_blocks/copper"
        }
    )
    event.shaped(
      Item.of("energizedpower:coal_engine", 1),
      [
          "ADA",
          "BCB",
          "ADA"
      ],
      {
          A: "#forge:plates/iron",
          B: "#forge:ingots/copper",
          C: "#minecraft:planks",
          D: "minecraft:furnace"
      }
  )
  
  })
  