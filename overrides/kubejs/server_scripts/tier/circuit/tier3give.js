PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism:elite_control_circuit"];
     if (list.includes(ev.item.id),  !ev.hasGameStage("elite") ){
    AStages.addStageForPlayer("elite",ev.player)
}})