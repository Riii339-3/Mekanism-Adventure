PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism_extras:supreme_control_circuit"];
     if (list.includes(ev.item.id),  !ev.hasGameStage("supreme") ){
    AStages.addStageForPlayer("supreme",ev.player)
}})