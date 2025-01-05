PlayerEvents.inventoryChanged( ev=>{
    let nmachines_id = ["energized_smelter","metallurgic_infuser", "enrichment_chamber", "robit", "digital_miner", "crusher", "purification_chamber", "osmium_compressor", "electric_pump", "logistical_sorter", "rotary_condensentrator"]
    let test = ev.item.id.substr(30)
     if (nmachines_id.includes(test) ,  !ev.hasGameStage(test)){
    AStages.addStageForPlayer(test,ev.player)
}})