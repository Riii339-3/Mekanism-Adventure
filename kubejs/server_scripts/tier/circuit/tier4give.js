PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism:ultimate_control_circuit"];
     if (list.includes(ev.item.id) ){
    AStages.addStageForPlayer("ultimate",ev.player)
}})