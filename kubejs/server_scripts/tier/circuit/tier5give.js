PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism_extras:absolute_control_circuit"];
     if (list.includes(ev.item.id) ){
    AStages.addStageForPlayer("absolute",ev.player)
}})