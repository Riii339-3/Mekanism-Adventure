ServerEvents.recipes(event => {
    event.custom({
        type: 'tconstruct:alloy',
        inputs: [
          { tag: 'forge:molten_iron', amount: 90 },
          { tag: 'forge:molten_carbon', amount: 90 }
        ],
        result: { fluid: 'tconstruct:molten_steel', amount: 180 },
        temperature: 1000
      })
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": [
              {
                "item": "kubejs:carbon"
              }
            ],
            "result": {
              "amount": 90,
              "fluid": "kubejs:molten_carbon"
            },
            "temperature": 800,
            "time": 60
          }
    )
    event.custom({
        type: 'tconstruct:alloy',
        inputs: [
          { tag: 'forge:molten_iron', amount: 90 },
          { tag: 'forge:molten_redstone', amount: 90 }
        ],
        result: { fluid: 'kubejs:molten_alloy_infused', amount: 180 },
        temperature: 1000
      })
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": [
              {
                "item": "minecraft:redstone"
              }
            ],
            "result": {
              "amount": 90,
              "fluid": "kubejs:molten_redstone"
            },
            "temperature": 800,
            "time": 60
          }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cooling_time": 35,
            "fluid": {
              "amount": 90,
              "tag": "forge:molten_redstone"
            },
            "result": "minecraft:redstone"
          }
    )
    event.custom(
        {
            "type": "tconstruct:casting_basin",
            "cooling_time": 180,
            "fluid": {
              "amount": 810,
              "tag": "forge:molten_redstone"
            },
            "result": "minecraft:redstone_block"
          }
    )
    event.custom(
        {
            "type": "tconstruct:melting",
            "ingredient": [
              {
                "item": "mekanism:alloy_infused"
              }
            ],
            "result": {
              "amount": 90,
              "fluid": "kubejs:molten_alloy_infused"
            },
            "temperature": 800,
            "time": 60
          }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cooling_time": 35,
            "fluid": {
              "amount": 90,
              "tag": "forge:molten_alloy_infused"
            },
            "result": "mekanism:alloy_infused"
          }
    )
    event.custom({
        type: 'tconstruct:alloy',
        inputs: [
          { tag: 'forge:molten_iron', amount: 90 },
          { tag: 'forge:molten_redstone', amount: 90 },
          {tag: "tconstruct:molten_diamond", amount:90}
        ],
        result: { fluid: 'kubejs:molten_alloy_reinforced', amount: 270 },
        temperature: 1200
      })
    event.custom({
        type: 'tconstruct:alloy',
        inputs: [
          { tag: 'forge:molten_alloy_infused', amount: 90 },
          {tag: "tconstruct:molten_diamond", amount:90}
        ],
        result: { fluid: 'kubejs:molten_alloy_reinforced', amount: 180 },
        temperature: 1200
    })
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cooling_time": 35,
            "fluid": {
              "amount": 90,
              "tag": "forge:molten_alloy_reinforced"
            },
            "result": "mekanism:alloy_reinforced"
          }
    )
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "item": "mekanism:alloy_infused"
            },
            "cast_consumed": true,
            "cooling_time": 114,
            "fluid": {
              "amount": 100,
              "tag": "tconstruct:molten_diamond"
            },
            "result": "mekanism:alloy_reinforced"
          }
    )
})