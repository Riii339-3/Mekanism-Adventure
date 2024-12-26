PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism_extras:infinite_control_circuit"];
     if (list.includes(ev.item.id) ){
    AStages.addStageForPlayer("infinite",ev.player)
}})