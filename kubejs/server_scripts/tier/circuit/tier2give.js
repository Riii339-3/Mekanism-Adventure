PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism:advanced_control_circuit"];
     if (list.includes(ev.item.id) ){
    AStages.addStageForPlayer("advanced",ev.player)
}})