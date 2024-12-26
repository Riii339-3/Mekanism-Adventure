PlayerEvents.inventoryChanged( ev=>{
    let nmachines_id = ["metallurgic_infuser", "enrichment_chamber", "robit", "digital_miner", "crusher", "purification_chamber", "energized_smelter", "electric_pump", "logistical_sorter", "rotary_condensentrator"]
    let test = ev.item.id.substr(30)
     if (nmachines_id.includes(test) ,  !ev.hasGameStage(test)){
    AStages.addStageForPlayer(test,ev.player)
}})