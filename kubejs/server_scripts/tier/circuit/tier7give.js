PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism_extras:cosmic_control_circuit"];
     if (list.includes(ev.item.id) ){
    AStages.addStageForPlayer("cosmic",ev.player)
}})