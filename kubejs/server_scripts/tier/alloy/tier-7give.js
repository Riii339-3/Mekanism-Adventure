PlayerEvents.inventoryChanged( ev=>{
    //検知するアイテムのリスト
    let list = ["mekanism_extras:alloy_spectrum"];
     if (list.includes(ev.item.id) ){
    AStages.addStageForPlayer("spectrum",ev.player)
}})