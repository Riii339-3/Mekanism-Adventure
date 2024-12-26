PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism_extras:absolute_control_circuit"];
     if (list.includes(ev.item.id),  !ev.hasGameStage("sbsolute") ){
    AStages.addStageForPlayer("absolute",ev.player)
}})